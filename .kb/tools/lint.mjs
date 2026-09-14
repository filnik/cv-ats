#!/usr/bin/env node
// .kb/tools/lint.mjs — the gate.
//
// Checks every content document against .kb/STYLE.md. No dependencies: plain Node ESM.
// Run from the knowledge base root:  node .kb/tools/lint.mjs [--quiet]
//
// Exit code 0 = clean, 1 = errors found. Warnings never fail the build.
//
// Adapted from the gate used by the sibling knowledge bases at ../kmp/ and ../react-native/.
// The structural checks — front-matter, manifest agreement, one H1, generated table of contents,
// fence length, extract provenance, anchors, links, size cap — are theirs and unchanged in spirit.
//
// What is different here is check 7. Those knowledge bases pin library versions against a lock,
// because their failure mode is documenting an API that no longer exists. This one pins
// STATISTICS against .kb/facts.lock.json, because its failure mode is repeating a number that was
// never true. The field this KB describes propagated "75% of resumes are rejected by an ATS" for
// more than a decade from a defunct vendor's marketing sheet. A document about beating automated
// screening is precisely the kind of document that spreads such a figure. This check is why this
// one does not.

import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs'
import { join, dirname, resolve, relative } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '../..')
const QUIET = process.argv.includes('--quiet')
const LINE_CAP = 950   // STYLE.md §4

const CONTENT_DIRS = ['guides', 'patterns', 'references']
const REQUIRED_FIELDS = [
  'id', 'title', 'category', 'summary', 'read_when', 'not_this_file',
  'markets', 'ats', 'stale_risk', 'last_verified', 'related',
]
const VALID_CATEGORIES = new Set(CONTENT_DIRS)
const VALID_STALE = new Set(['high', 'medium', 'low'])
const VALID_MARKETS = new Set(['global', 'us', 'uk', 'ie', 'eu', 'dach', 'it', 'fr', 'es', 'nordics', 'au'])
const VALID_ATS = new Set([
  'workday', 'greenhouse', 'lever', 'ashby', 'oracle', 'taleo', 'icims', 'smartrecruiters',
  'successfactors', 'workable', 'recruitee', 'teamtailor', 'personio', 'bamboohr', 'jazzhr',
  'jobvite', 'bullhorn', 'linkedin',
])

const BANNED_TERMS = [
  [/ -- /g, 'use an em-dash \u2014 instead of " -- "'],
  [/\bLast updated\b/g, 'use "Last Updated" with a capital U'],
  [/\bapplicant tracking system\b/gi, 'use "ATS" \u2014 STYLE.md section 6 locks the term'],
  [/\bscreening question\b/gi, 'use "knockout question" for the disqualifying kind \u2014 the source literature conflates them'],
  [/\bstudies show\b/gi, 'name the study, its sample and its year \u2014 STYLE.md section 6'],
  [/\bresearch shows\b/gi, 'name the study, its sample and its year \u2014 STYLE.md section 6'],
  [/\bexperts agree\b/gi, 'name them, or state the recommendation as your own'],
]

const errors = []
const warnings = []
const stats = []

const err = (file, msg) => errors.push(`${file}: ${msg}`)
const warn = (file, msg) => warnings.push(`${file}: ${msg}`)

// ---------------------------------------------------------------------------
// Minimal front-matter parser. Handles exactly the schema in STYLE.md §2:
// scalars, string lists, and lists of { name, version } inline maps.
// ---------------------------------------------------------------------------
function parseFrontMatter(text) {
  if (!text.startsWith('---\n')) return null
  const end = text.indexOf('\n---\n', 4)
  if (end === -1) return null
  const body = text.slice(4, end)
  const out = {}
  let key = null

  for (const rawLine of body.split('\n')) {
    if (!rawLine.trim() || rawLine.trim().startsWith('#')) continue

    const listItem = rawLine.match(/^\s+-\s+(.*)$/)
    if (listItem && key) {
      let v = listItem[1].trim()
      const inline = v.match(/^\{\s*name:\s*([^,]+),\s*version:\s*"?([^"}\s]+)"?\s*\}$/)
      if (inline) {
        out[key].push({ name: inline[1].trim().replace(/^["']|["']$/g, ''), version: inline[2] })
      } else {
        out[key].push(v.replace(/^["']|["']$/g, ''))
      }
      continue
    }

    const kv = rawLine.match(/^([a-z_]+):\s*(.*)$/)
    if (!kv) continue
    key = kv[1]
    const value = kv[2].trim()

    if (value === '' ) { out[key] = [] }
    else if (value === '[]') { out[key] = [] }
    else if (value.startsWith('[')) {
      out[key] = value.slice(1, -1).split(',').map(s => s.trim().replace(/^["']|["']$/g, '')).filter(Boolean)
    } else {
      out[key] = value.replace(/^["']|["']$/g, '')
    }
  }
  return { data: out, endIndex: end + 5 }
}

// ---------------------------------------------------------------------------
// Load the two contracts.
// ---------------------------------------------------------------------------
const lock = JSON.parse(readFileSync(join(ROOT, '.kb/facts.lock.json'), 'utf8'))
const manifest = JSON.parse(readFileSync(join(ROOT, '.kb/manifest.json'), 'utf8'))

// Numbers the lock can vouch for, harvested WITH THEIR UNIT.
//
// The first version pooled every digit sequence in the lock into one flat set, and that made the
// check read stricter than it was: a figure could pass by coinciding with an unrelated number
// somewhere in a note. It really happened — "4.7x" was authorised by "3.6 to 4.7%", a conversion
// rate borrowed to license a multiplier nobody had measured. Coincidence is precisely what this gate
// exists to stop, so percentages, multipliers and counts are kept apart: a figure must match both
// its value and its shape.
const knownPct = new Set()
const knownMult = new Set()
const knownCount = new Set()
const knownBare = new Set()   // literal_numbers: exempt regardless of shape

const harvestShaped = node => {
  if (node == null) return
  if (typeof node === 'string') {
    for (const m of node.matchAll(/(\d+(?:\.\d+)?)\s?%/g)) knownPct.add(m[1])
    for (const m of node.matchAll(/\b(\d+(?:\.\d+)?)\s?(?:x|times|-fold|fold)\b/gi)) knownMult.add(m[1])
    for (const m of node.matchAll(/\b(\d{1,3}(?:,\d{3})+)\b/g)) {
      knownCount.add(m[1]); knownCount.add(m[1].replace(/,/g, ''))
    }
    // A bare integer of four digits or more is still a real figure ("13,100 real resumes" may be
    // written either way in the lock), so let each form vouch for the other.
    for (const m of node.matchAll(/\b(\d{4,})\b/g)) {
      knownCount.add(m[1])
      knownCount.add(Number(m[1]).toLocaleString('en-US'))
    }
    return
  }
  if (Array.isArray(node)) { node.forEach(harvestShaped); return }
  if (typeof node === 'object') { Object.values(node).forEach(harvestShaped) }
}
harvestShaped(lock.facts)

const harvestBare = node => {
  if (node == null) return
  if (typeof node === 'number') { knownBare.add(String(node)); return }
  if (typeof node === 'string') {
    for (const m of node.matchAll(/\d[\d,.]*/g)) knownBare.add(m[0].replace(/[.,]$/, ''))
    return
  }
  if (Array.isArray(node)) { node.forEach(harvestBare); return }
  if (typeof node === 'object') { Object.values(node).forEach(harvestBare) }
}
for (const list of Object.values(lock.literal_numbers || {})) harvestBare(list)

const knownFor = { percentage: knownPct, multiplier: knownMult, count: knownCount }

// A fact whose verdict is "folklore" may only be cited where it is being debunked.
const folkloreIds = new Set((lock.facts || []).filter(f => f.verdict === 'folklore').map(f => f.id))

// The debunked figures themselves. These are the dangerous ones: "75%" is legitimately present in
// the lock — as the myth — so the ordinary source check passes it. What must not happen is a guide
// stating it as fact. The list is explicit per entry rather than derived, because a rule that fires
// on every round percentage fires on everything and gets switched off.
const folkloreNumbers = new Map()
for (const f of (lock.facts || []).filter(x => x.verdict === 'folklore')) {
  for (const fig of f.policed_figures || []) folkloreNumbers.set(fig, f.id)
}

// Matched: percentages, multipliers written as 2.3x, and counts carrying thousands separators.
// Those three shapes cover essentially every statistic this field circulates, and they very rarely
// occur as incidental prose numbers.
const CLAIM_SHAPES = [
  [/(\d+(?:\.\d+)?)\s?%/g, 'percentage'],
  [/\b(\d+(?:\.\d+)?)x\b/g, 'multiplier'],
  [/\b(\d{1,3}(?:,\d{3})+)\b/g, 'count'],
]

// The statistics rule, shared by documents and examples so that examples/ cannot become the one
// place an unsourced figure survives. `raw` is the whole file, which is where the kb:allow-number
// exceptions live; `scan` is the text the claim shapes are matched against — fence-stripped prose
// for a document, the whole file for an example.
function checkStatistics(relPath, raw, scan) {
  const allowedNums = new Set(
    [...raw.matchAll(/<!--\s*kb:allow-number\s+([\d,.]+)\s+reason="[^"]+"\s*-->/g)].map(m => m[1])
  )
  for (const m of raw.matchAll(/<!--\s*kb:allow-number\s+([\d,.]+)\s*-->/g)) {
    err(relPath, `kb:allow-number for ${m[1]} has no reason="…" — an unexplained exception is how folklore re-enters`)
  }
  const seenNum = new Set()
  for (const [re, kind] of CLAIM_SHAPES) {
    for (const m of scan.matchAll(re)) {
      const rawNum = m[1]
      const bare = rawNum.replace(/,/g, '')
      const pool = knownFor[kind] || knownBare
      if (pool.has(rawNum) || pool.has(bare) || knownBare.has(rawNum) || knownBare.has(bare)
          || allowedNums.has(rawNum) || seenNum.has(rawNum)) continue
      seenNum.add(rawNum)
      err(relPath, `${kind} "${m[0].trim()}" is not in .kb/facts.lock.json — every statistic needs a source, or a kb:allow-number exception`)
    }
  }
}

const manifestByPath = new Map(manifest.documents.map(d => [d.path, d]))
const manifestPaths = new Set([
  ...manifest.documents.map(d => d.path),
  ...(manifest.examples || []).map(e => e.path),
  ...(manifest.generated || []),
])

// ---------------------------------------------------------------------------
// Per-file checks.
// ---------------------------------------------------------------------------
function checkDocument(relPath) {
  const abs = join(ROOT, relPath)
  const text = readFileSync(abs, 'utf8')
  const lines = text.split('\n')

  const fm = parseFrontMatter(text)
  if (!fm) {
    err(relPath, 'missing YAML front-matter')
    return
  }
  const { data } = fm

  // 1. required fields
  for (const field of REQUIRED_FIELDS) {
    if (!(field in data)) err(relPath, `front-matter missing "${field}"`)
    else if (Array.isArray(data[field]) && data[field].length === 0 && field !== 'ats') {
      err(relPath, `front-matter "${field}" is empty`)
    }
  }
  if (data.category && !VALID_CATEGORIES.has(data.category)) {
    err(relPath, `invalid category "${data.category}"`)
  }
  if (data.stale_risk && !VALID_STALE.has(data.stale_risk)) {
    err(relPath, `invalid stale_risk "${data.stale_risk}"`)
  }
  if (data.last_verified && !/^\d{4}-\d{2}-\d{2}$/.test(data.last_verified)) {
    err(relPath, `last_verified must be ISO YYYY-MM-DD, got "${data.last_verified}"`)
  }
  for (const m of (Array.isArray(data.markets) ? data.markets : [])) {
    if (!VALID_MARKETS.has(m)) err(relPath, `unknown market "${m}" in front-matter`)
  }
  for (const a of (Array.isArray(data.ats) ? data.ats : [])) {
    if (!VALID_ATS.has(a)) err(relPath, `unknown ats vendor "${a}" in front-matter`)
  }
  if (Array.isArray(data.read_when) && data.read_when.length < 3) {
    warn(relPath, `read_when has ${data.read_when.length} entries; the contract asks for 3-7`)
  }

  // 2. manifest agreement
  const entry = manifestByPath.get(relPath)
  if (!entry) {
    err(relPath, 'not listed in .kb/manifest.json')
  } else {
    if (data.id !== entry.id) err(relPath, `id "${data.id}" does not match manifest id "${entry.id}"`)
    if (data.title !== entry.title) {
      warn(relPath, `title differs from manifest ("${data.title}" vs "${entry.title}")`)
    }
  }

  // Strip fenced code once: headings, versions and prose checks must all ignore it.
  // A "# comment" inside a bash block is not an H1, and a version inside a snippet is still real
  // but may legitimately be an example rather than a claim.
  const stripFences = src => {
    const out = []
    let inside = false
    for (const line of src.split('\n')) {
      if (/^\s*```/.test(line)) { inside = !inside; out.push(''); continue }
      out.push(inside ? '' : line)
    }
    return out
  }
  const proseLines = stripFences(text)

  // 3. H1
  const h1s = proseLines.filter(l => /^# /.test(l))
  if (h1s.length === 0) err(relPath, 'no H1')
  else if (h1s.length > 1) err(relPath, `${h1s.length} H1 headings; exactly one is allowed`)
  else if (data.title && h1s[0].slice(2).trim() !== data.title) {
    err(relPath, `H1 "${h1s[0].slice(2).trim()}" does not match title "${data.title}"`)
  }

  // 4. generated table of contents
  if (!text.includes('<!-- kb:toc -->')) {
    err(relPath, 'missing the <!-- kb:toc --> marker')
  }
  // Anything between <!-- kb:toc --> and <!-- kb:toc:end --> was produced by build-index.mjs and is
  // fine. A list outside those markers was typed by hand, and will rot the moment a heading changes.
  const tocSection = text.match(/## Table of Contents\n([\s\S]*?)(?=\n## |\n---)/)
  if (tocSection) {
    const outsideMarkers = tocSection[1]
      .replace(/<!-- kb:toc -->[\s\S]*?<!-- kb:toc:end -->/, '')
      .replace(/<!-- kb:toc -->/, '')
    if (/^\s*[-*\d]/m.test(outsideMarkers)) {
      err(relPath, 'hand-written table of contents; only the <!-- kb:toc --> marker is allowed')
    }
  }

  // 5. required sections
  if (!/^## Common Mistakes/m.test(text)) warn(relPath, 'no "## Common Mistakes" section')
  if (!/^## See Also/m.test(text)) err(relPath, 'no "## See Also" section')
  if (!/^## TL;DR/m.test(text)) warn(relPath, 'no "## TL;DR" section')

  // 6. code fences
  let inFence = false, fenceStart = 0, fenceLang = ''
  lines.forEach((line, i) => {
    const fence = line.match(/^```(\w*)/)
    if (!fence) return
    if (!inFence) {
      inFence = true; fenceStart = i; fenceLang = fence[1]
      if (!fenceLang) warn(relPath, `line ${i + 1}: code fence without a language tag`)
    } else {
      const len = i - fenceStart - 1
      if (len > 40) err(relPath, `line ${fenceStart + 1}: code block is ${len} lines; the limit is 40 — move it to examples/`)
      inFence = false
    }
  })
  if (inFence) err(relPath, `unclosed code fence opened at line ${fenceStart + 1}`)

  // 7. statistics must exist in .kb/facts.lock.json.
  //
  // A document may declare an exception with, on the line above:
  //   <!-- kb:allow-number 40 reason="the 40-line fence cap from STYLE.md section 5" -->
  // That is for numbers which are self-evidently not claims and are not already registered in
  // literal_numbers. It is deliberately noisy to write, because the default must be "use the lock".
  //
  // The rule itself lives in checkStatistics, because examples/ is held to it too.
  const proseJoined = proseLines.join('\n')
  checkStatistics(relPath, text, proseJoined)

  // 7a. a folklore fact may only be cited where it is being debunked.
  //
  // The register of debunked claims is useful precisely because it is quotable. The risk is that a
  // guide quotes one approvingly for rhetorical convenience and re-launders it. Only the audit
  // document, and prose that names the claim as folklore, may carry a folklore fact id.
  const debunking = /folklore|myth|debunk|no traceable source|untraceable|never published|no such|does not exist|fabricat|no primary source|defunct/i
  if (relPath !== 'references/evidence-and-myths.md') {
    for (const id of folkloreIds) {
      if (!proseJoined.includes(id)) continue
      const line = proseJoined.split('\n').find(l => l.includes(id)) || ''
      if (!debunking.test(line)) {
        err(relPath, `cites folklore fact "${id}" without marking it as such — see STYLE.md section 7`)
      }
    }
    // The debunked numbers, checked per line so that surrounding context counts.
    const proseArr = proseJoined.split('\n')
    proseArr.forEach((line, i) => {
      for (const [num, id] of folkloreNumbers) {
        const shape = new RegExp(`(?<![\\d.])${num.replace('.', '\\.').replace('%', '\\s?%').replace(/x$/, 'x\\b')}`)
        if (!shape.test(line)) continue
        const context = [proseArr[i - 1] || '', line, proseArr[i + 1] || ''].join(' ')
        if (debunking.test(context)) continue
        err(relPath, `states the debunked figure "${num}" (fact "${id}") without marking it as folklore — see STYLE.md section 7`)
      }
    })
  }

  // 7b. extract provenance.
  //
  // <!-- extract: examples/data/apiClient.ts --> above a fence claims the block is a verbatim
  // substring of that file. ../kmp/ documented a class one way and shipped it another — two sources
  // of truth for the same symbol, silently divergent. Here the claim is checked.
  for (const m of text.matchAll(/<!--\s*extract:\s*([^\s]+?)\s*-->\s*\n```\w*\n([\s\S]*?)```/g)) {
    const [, target, block] = m
    const srcPath = join(ROOT, target)
    if (!existsSync(srcPath)) {
      if (manifestPaths.has(target)) warn(relPath, `extract points at ${target}, not yet written`)
      else err(relPath, `extract points at a file that does not exist: ${target}`)
      continue
    }
    const source = readFileSync(srcPath, 'utf8')
    const normalise = s => s.split('\n').map(l => l.trimEnd()).filter(l => l.trim()).join('\n')
    if (!normalise(source).includes(normalise(block))) {
      err(relPath, `extract from ${target} is not a verbatim substring — the document and the example have diverged`)
    }
  }

  // 8. banned terminology.
  //
  // Excluded: fenced code, inline code, and the front-matter. `read_when` exists to hold literal
  // error strings exactly as a developer would paste them — "FlashList v2 is only supported on new
  // architecture" is the real message, and correcting its capitalisation there would break the very
  // matching the field is for.
  const prose = proseLines.slice(text.slice(0, fm.endIndex).split('\n').length)
    .join('\n')
    .replace(/`[^`]*`/g, '')
  for (const [re, hint] of BANNED_TERMS) {
    const hits = [...prose.matchAll(re)]
    if (hits.length) err(relPath, `banned: "${hits[0][0]}" ×${hits.length} — ${hint}`)
  }

  // 8b. anchors.
  //
  // GitHub strips punctuation and then maps what remains one character at a time, so "Tier 1 —
  // routes" keeps both spaces around the removed em-dash and renders "#21-tier-1--routes". Anything
  // that collapses whitespace produces a link that looks right and goes nowhere. Checked here for
  // same-file anchors; cross-file anchors are checked in the link pass below.
  const ghSlug = h => h.trim().toLowerCase().replace(/[^\w\s-]/g, '').replace(/ /g, '-')
  const ownHeadings = new Set(
    proseLines.filter(l => /^#{1,6} /.test(l)).map(l => ghSlug(l.replace(/^#{1,6} /, '')))
  )
  for (const m of proseLines.join('\n').matchAll(/\]\(#([a-z0-9-]+)\)/g)) {
    if (!ownHeadings.has(m[1])) err(relPath, `anchor #${m[1]} matches no heading in this file`)
  }

  // 9. relative links — prose only. `handlers[key](payload)` inside a code fence is not a link.
  for (const m of proseLines.join('\n').matchAll(/\]\(((?!https?:|#)[^)]+?\.(?:md|ts|tsx|js|mjs|json|yml|yaml|kt|swift))(#[^)]*)?\)/g)) {
    const target = m[1]
    const resolved = relative(ROOT, resolve(dirname(abs), target))
    if (existsSync(join(ROOT, resolved))) continue
    if (manifestPaths.has(resolved)) warn(relPath, `forward reference to ${resolved} (in manifest, not yet written)`)
    else err(relPath, `broken link: ${target} → ${resolved}`)
  }

  // 10. size cap — see STYLE.md §4 for why this is 950 and not 800.
  if (lines.length > LINE_CAP) {
    err(relPath, `${lines.length} lines exceeds the ${LINE_CAP}-line cap — split it, or justify raising the cap in STYLE.md §4`)
  }

  stats.push({ path: relPath, lines: lines.length, stale: data.stale_risk, verified: data.last_verified })
}

// ---------------------------------------------------------------------------
// examples/ — a narrower check, but not an exempt zone.
//
// Example material is quoted verbatim into documents, so an unsourced figure here propagates into
// prose that the document-level check would have caught. This is the one directory that could
// otherwise launder a statistic past the lock.
//
// Inherited from the sibling knowledge bases, this function checked three-part version numbers
// against `.kb/versions.lock.json` via a `knownVersions` set. Neither exists here: this KB pins
// statistics, not library versions — the difference the header comment above already describes.
// The check could therefore never run; it threw ReferenceError on the first example file added.
// Replaced with the contract this KB actually has.
// ---------------------------------------------------------------------------
function checkExample(relPath) {
  const text = readFileSync(join(ROOT, relPath), 'utf8')
  checkStatistics(relPath, text, text)
  for (const [re, hint] of BANNED_TERMS) {
    const hits = [...text.matchAll(re)]
    if (hits.length) err(relPath, `banned: "${hits[0][0]}" ×${hits.length} — ${hint}`)
  }
}

function walkFiles(dir, out = []) {
  if (!existsSync(dir)) return out
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name)
    if (e.isDirectory()) walkFiles(p, out)
    else out.push(p)
  }
  return out
}

// The extensions examples/ actually holds here — resumes, bullet rewrites and cover letters as
// text, plus the structured formats STYLE.md §5 permits in a fence. The inherited list named
// Kotlin, Swift and Gradle sources, which this knowledge base has no reason to contain, so every
// example it ever gained would have been skipped.
for (const abs of walkFiles(join(ROOT, 'examples'))) {
  if (!/\.(md|txt|json|yml|yaml|html|css|xml)$/.test(abs)) continue
  if (/(^|\/)README\.md$/.test(abs)) continue   // generated symbol table, not example content
  checkExample(relative(ROOT, abs))
}

// ---------------------------------------------------------------------------
// Walk and report.
// ---------------------------------------------------------------------------
for (const dir of CONTENT_DIRS) {
  const abs = join(ROOT, dir)
  if (!existsSync(abs)) { warn(dir, 'directory does not exist'); continue }
  for (const name of readdirSync(abs)) {
    if (!name.endsWith('.md')) continue
    if (statSync(join(abs, name)).isFile()) checkDocument(join(dir, name))
  }
}

// Coverage against the manifest: what has not been written yet.
const written = new Set(stats.map(s => s.path))
const missing = manifest.documents.filter(d => !written.has(d.path))

if (!QUIET) {
  console.log(`\n  ${stats.length}/${manifest.documents.length} documents present, ` +
              `${stats.reduce((n, s) => n + s.lines, 0).toLocaleString()} lines total\n`)

  const near = stats.filter(s => s.lines > LINE_CAP * 0.9 && s.lines <= LINE_CAP).sort((a, b) => b.lines - a.lines)
  if (near.length) {
    console.log(`  Approaching the ${LINE_CAP}-line cap:`)
    for (const s of near) console.log(`    ${s.lines.toString().padStart(5)}  ${s.path}`)
    console.log()
  }
  if (missing.length) {
    console.log(`  Not yet written (${missing.length}):`)
    for (const d of missing) console.log(`    ${d.id.padEnd(22)} ${d.path}`)
    console.log()
  }
}

if (warnings.length) {
  console.log(`  ${warnings.length} warning${warnings.length === 1 ? '' : 's'}:`)
  for (const w of warnings.slice(0, 60)) console.log(`    ! ${w}`)
  if (warnings.length > 60) console.log(`    … and ${warnings.length - 60} more`)
  console.log()
}

if (errors.length) {
  console.log(`  ${errors.length} error${errors.length === 1 ? '' : 's'}:`)
  for (const e of errors) console.log(`    ✗ ${e}`)
  console.log()
  process.exit(1)
}

console.log('  Clean.\n')
