#!/usr/bin/env node
// .kb/tools/build-index.mjs — generates every derived surface from front-matter.
//
//   node .kb/tools/build-index.mjs
//
// Writes:
//   - the table of contents inside each document, at its <!-- kb:toc --> marker
//   - resource-index.md   (the machine-readable routing table)
//   - the generated tables inside README.md, between its GENERATED markers
//
// Nothing here is hand-maintained, which is the point: ../kmp/ hand-wrote its anchors and shipped
// links pointing at headings that had been renamed. A generated anchor cannot drift from its heading.

import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs'
import { join, dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '../..')
const DIRS = ['guides', 'patterns', 'references']

const RISK = { high: '🔴', medium: '🟠', low: '🟢' }

function parseFrontMatter(text) {
  if (!text.startsWith('---\n')) return null
  const end = text.indexOf('\n---\n', 4)
  if (end === -1) return null
  const out = {}
  let key = null
  for (const line of text.slice(4, end).split('\n')) {
    if (!line.trim()) continue
    const item = line.match(/^\s+-\s+(.*)$/)
    if (item && key) {
      const v = item[1].trim()
      const inline = v.match(/^\{\s*name:\s*([^,]+),\s*version:\s*"?([^"}\s]+)"?\s*\}$/)
      out[key].push(inline ? { name: inline[1].trim(), version: inline[2] } : v.replace(/^["']|["']$/g, ''))
      continue
    }
    const kv = line.match(/^([a-z_]+):\s*(.*)$/)
    if (!kv) continue
    key = kv[1]
    const value = kv[2].trim()
    if (value === '' || value === '[]') out[key] = []
    else if (value.startsWith('[')) out[key] = value.slice(1, -1).split(',').map(s => s.trim().replace(/^["']|["']$/g, '')).filter(Boolean)
    else out[key] = value.replace(/^["']|["']$/g, '')
  }
  return out
}

// GitHub-flavoured heading slug, so generated anchors match rendered ones.
//
// The substitution is ONE HYPHEN PER SPACE. Collapsing runs of whitespace looks tidier and is
// wrong: GitHub strips the punctuation first and converts what remains character by character, so
// "Tier 1 — routes" loses the em-dash, keeps both surrounding spaces, and renders as
// "#21-tier-1--routes" with a double hyphen. Collapsing produced a single hyphen and a dead link in
// 66 headings before this was caught — the same broken-anchor defect this KB criticises in ../kmp/,
// only generated systematically instead of typed by hand.
const slug = h => h.trim().toLowerCase()
  .replace(/[^\w\s-]/g, '')
  .replace(/ /g, '-')

function buildToc(text) {
  const lines = text.split('\n')
  const out = []
  let inFence = false
  for (const line of lines) {
    if (/^```/.test(line)) { inFence = !inFence; continue }
    if (inFence) continue
    const m = line.match(/^(#{2,3}) (.+)$/)
    if (!m) continue
    const title = m[2].trim()
    if (['Table of Contents', 'TL;DR'].includes(title)) continue
    out.push(`${m[1].length === 2 ? '' : '  '}- [${title}](#${slug(title)})`)
  }
  return out.join('\n')
}

const docs = []

for (const dir of DIRS) {
  const abs = join(ROOT, dir)
  if (!existsSync(abs)) continue
  for (const name of readdirSync(abs).sort()) {
    if (!name.endsWith('.md')) continue
    const relPath = `${dir}/${name}`
    const abspath = join(ROOT, relPath)
    let text = readFileSync(abspath, 'utf8')
    const fm = parseFrontMatter(text)
    if (!fm) { console.log(`  skipped (no front-matter): ${relPath}`); continue }

    // Fill the table of contents in place.
    if (text.includes('<!-- kb:toc -->')) {
      const toc = buildToc(text)
      text = text.replace(
        /<!-- kb:toc -->(?:\n<!-- kb:toc:end -->|[\s\S]*?<!-- kb:toc:end -->)?/,
        `<!-- kb:toc -->\n${toc}\n<!-- kb:toc:end -->`
      )
      writeFileSync(abspath, text)
    }

    docs.push({
      ...fm,
      path: relPath,
      lines: text.split('\n').length,
      markets: fm.markets || [],
      ats: fm.ats || [],
    })
  }
}

// --- resource-index.md ------------------------------------------------------
const section = (dir, heading) => {
  const rows = docs.filter(d => d.path.startsWith(`${dir}/`))
  if (!rows.length) return ''
  const body = rows.map(d => {
    const triggers = (d.read_when || []).slice(0, 4).map(t => `"${t}"`).join(' · ')
    return `| ${d.id} | ${d.title} | ${triggers} | ${(d.markets || []).join(', ') || '—'} | ${(d.ats || []).slice(0, 4).join(', ') || '—'} | ${RISK[d.stale_risk] || '?'} | ${d.last_verified} | ${d.lines} | [\`${d.path}\`](${d.path}) |`
  }).join('\n')
  return `\n## ${heading}\n\n| ID | Topic | Read when (literal triggers) | Markets | ATS | Stale | Verified | Lines | File |\n|---|---|---|---|---|---|---|---|---|\n${body}\n`
}

const total = docs.reduce((n, d) => n + d.lines, 0)
const counts = Object.fromEntries(DIRS.map(d => [d, docs.filter(x => x.path.startsWith(`${d}/`)).length]))

// Routing clusters are derived from the `related` graph, not hand-written. The sibling KB shipped a
// hand-written cluster list naming files that did not exist, under a heading that named the wrong
// knowledge base entirely. A generated cluster cannot point at a document that is not there.
const byPath = new Map(docs.map(d => [d.path, d]))
const clusters = []
const clustered = new Set()
for (const d of docs) {
  if (clustered.has(d.path)) continue
  const mutual = (d.related || []).filter(r => {
    const other = byPath.get(r)
    return other && (other.related || []).includes(d.path)
  })
  if (mutual.length < 2) continue
  const members = [d.path, ...mutual]
  members.forEach(m => clustered.add(m))
  clusters.push(members)
}
const clusterBlock = clusters.length
  ? clusters.map(members => `- ${members.map(m => `\`${m}\``).join(' ↔ ')}`).join('\n')
  : '_No mutual clusters yet — this section fills in as `related` links become reciprocal._'

const index = `# CV and ATS Knowledge Base — Resource Index

<!-- GENERATED by .kb/tools/build-index.mjs — do not edit by hand -->

Every row below is derived from the YAML front-matter of the file it points to. Column order is
stable, so this table is safe to parse with \`rg\` or \`awk\` on \`|\`.

**Evidence:** every statistic in this knowledge base resolves to an entry in
[\`.kb/facts.lock.json\`](.kb/facts.lock.json), which records its source, sample, year and verdict.
**Stale risk:** 🔴 high (vendor behaviour or a regulatory date) · 🟠 medium · 🟢 low (conceptual).
**Routing:** [\`skills/cv-ats/SKILL.md\`](skills/cv-ats/SKILL.md) → this table → the file.

**${docs.length} documents · ${total.toLocaleString()} lines.**
${section('guides', 'Guides')}${section('patterns', 'Patterns')}${section('references', 'References')}
## Routing clusters

Documents that are rarely useful alone, derived from reciprocal \`related\` links:

${clusterBlock}

## Staleness dashboard

| Stale risk | Files | Action |
|---|---|---|
| 🔴 high | ${docs.filter(d => d.stale_risk === 'high').length} | re-verify every 90 days, or when a vendor ships a screening feature or a compliance deadline moves |
| 🟠 medium | ${docs.filter(d => d.stale_risk === 'medium').length} | re-verify every 180 days |
| 🟢 low | ${docs.filter(d => d.stale_risk === 'low').length} | re-verify when the underlying evidence base changes |

Oldest verification in the set: ${docs.map(d => d.last_verified).sort()[0] || '—'}.
`

writeFileSync(join(ROOT, 'resource-index.md'), index)

// --- README tables ----------------------------------------------------------
const readmePath = join(ROOT, 'README.md')
let readmeWritten = false
if (existsSync(readmePath)) {
  const table = (dir, heading) => {
    const rows = docs.filter(d => d.path.startsWith(`${dir}/`))
    if (!rows.length) return ''
    return `### ${heading}\n\n| File | Description | Stale | Lines |\n|---|---|---|---|\n` +
      rows.map(d => `| [${d.title}](${d.path}) | ${d.summary} | ${RISK[d.stale_risk] || '?'} | ${d.lines} |`).join('\n') + '\n\n'
  }
  // The Stale column is three coloured dots and nothing else, so it needs its legend on the same
  // page. resource-index.md carries one; README.md did not, which left a reader on the repo front
  // page looking at a 🔴 beside the very document the README tells them to read first, with nothing
  // to say it means "re-verify in November", not "this is rotten".
  const legend = `**Stale risk:** 🔴 high — tied to vendor behaviour or a regulatory date, ` +
    `re-verify every 90 days · 🟠 medium — every 180 days · 🟢 low — conceptual, re-verify when the ` +
    `evidence base changes. Dates are in [\`resource-index.md\`](resource-index.md).\n\n`

  const generated = legend + DIRS.map(d => table(d, d[0].toUpperCase() + d.slice(1))).join('') +
    `### Totals\n\n| Category | Files | Lines |\n|---|---|---|\n` +
    DIRS.map(d => `| ${d} | ${counts[d]} | ${docs.filter(x => x.path.startsWith(`${d}/`)).reduce((n, x) => n + x.lines, 0).toLocaleString()} |`).join('\n') +
    `\n| **Total** | **${docs.length}** | **${total.toLocaleString()}** |\n`

  let readme = readFileSync(readmePath, 'utf8')
  if (readme.includes('<!-- GENERATED:START -->')) {
    readme = readme.replace(
      /<!-- GENERATED:START -->[\s\S]*?<!-- GENERATED:END -->/,
      `<!-- GENERATED:START -->\n${generated}<!-- GENERATED:END -->`
    )
    writeFileSync(readmePath, readme)
    readmeWritten = true
  } else {
    // Say so. The markers were once spelled GENERATED:STRUCTURE, which matched nothing here, so the
    // Structure section sat empty while this script reported "refreshed README.md tables" on every
    // run. A generator that reports work it did not do is worse than one that does no work.
    console.log('  README.md has no <!-- GENERATED:START --> marker — structure tables not written.')
  }
}

// --- examples/README.md symbol table ---------------------------------------
// Generated so it cannot drift from the files. Duplicate symbol names across files are reported:
// two files exporting the same name is the divergence that made ../kmp/ untrustworthy.
function walk(dir, out = []) {
  if (!existsSync(dir)) return out
  for (const name of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, name.name)
    if (name.isDirectory()) walk(p, out)
    else out.push(p)
  }
  return out
}

const exampleFiles = walk(join(ROOT, 'examples'))
  .filter(f => /\.(ts|tsx|js|mjs|kt|swift)$/.test(f))
  .sort()

const symbols = []
for (const abs of exampleFiles) {
  const rel = abs.slice(ROOT.length + 1)
  const src = readFileSync(abs, 'utf8')
  const found = new Set()
  const patterns = [
    /^export\s+(?:async\s+)?function\s+(\w+)/gm,
    /^export\s+const\s+(\w+)/gm,
    /^export\s+(?:abstract\s+)?class\s+(\w+)/gm,
    /^export\s+(?:type|interface|enum)\s+(\w+)/gm,
    /^export\s+default\s+function\s+(\w+)/gm,
    /^(?:public\s+)?(?:final\s+)?class\s+(\w+)\s*:/gm,   // Swift
    /^class\s+(\w+)\s*:\s*Module/gm,                      // Expo Modules Kotlin
  ]
  for (const re of patterns) for (const m of src.matchAll(re)) found.add(m[1])
  if (found.size) symbols.push({ file: rel, names: [...found].sort() })
}

const owner = new Map()
const clashes = []
for (const { file, names } of symbols) {
  for (const n of names) {
    if (owner.has(n)) clashes.push({ name: n, files: [owner.get(n), file] })
    else owner.set(n, file)
  }
}

const examplesReadme = join(ROOT, 'examples/README.md')
if (existsSync(examplesReadme)) {
  const rows = symbols
    .map(s => `| \`${s.file.replace('examples/', '')}\` | ${s.names.map(n => `\`${n}\``).join(', ')} |`)
    .join('\n')
  const clashNote = clashes.length
    ? `\n\n**${clashes.length} symbol name${clashes.length === 1 ? '' : 's'} declared in more than one file** — intentional only where a document compares two implementations of the same thing:\n\n` +
      clashes.map(c => `- \`${c.name}\` — ${c.files.map(f => `\`${f.replace('examples/', '')}\``).join(' and ')}`).join('\n')
    : ''
  let txt = readFileSync(examplesReadme, 'utf8')
  txt = txt.replace(
    /<!-- GENERATED:SYMBOLS:START -->[\s\S]*?<!-- GENERATED:SYMBOLS:END -->/,
    `<!-- GENERATED:SYMBOLS:START -->\n| File | Exported symbols |\n|---|---|\n${rows}${clashNote}\n<!-- GENERATED:SYMBOLS:END -->`
  )
  writeFileSync(examplesReadme, txt)
  console.log(`  ${owner.size} symbols across ${symbols.length} example files${clashes.length ? `, ${clashes.length} name clash(es)` : ''}.`)
}

console.log(`  ${docs.length} documents indexed, ${total.toLocaleString()} lines.`)
console.log(`  Wrote resource-index.md${readmeWritten ? ' and refreshed README.md tables' : ''}.`)
