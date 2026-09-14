# Style Contract

Every agent editing content in this knowledge base reads this file first and follows it literally.
`node .kb/tools/lint.mjs` enforces most of it. A document that fails the linter is not done.

This knowledge base was assembled from two kinds of material, and the contract exists because they
must never be allowed to blur: a corpus of practitioner advice written by resume writers and
recruiters, and a much smaller body of vendor documentation and methodologically disclosed research.
The practitioner corpus contradicts itself on thirteen separate points and repeats several
statistics that have no primary source at all. The rules below are what keep the second kind of
material from being contaminated by the first.

The sibling knowledge bases at `../kmp/` and `../react-native/` are built under the same structural
contract. Sections 1 and 7 here are specific to this domain.

---

## 1. Facts

**`.kb/facts.lock.json` is the only source of a statistic in this KB.**

- Never write a number you did not read from the lock file.
- Never "remember" a statistic. Every entry in the lock carries `claim`, `value`, `source`,
  `source_type`, `year`, `verdict`, and where relevant `sample` and `method`.
- A statistic whose `verdict` is `folklore` may only appear inside `references/evidence-and-myths.md`
  or in an explicit debunking, never as a supporting fact in prose.

**Why this rule exists.** This field's most-repeated statistic — "75% of resumes are rejected by an
ATS before a human sees them" — traces to Preptel, a resume-optimisation vendor that promoted the
figure around 2012 and shut down in August 2013 without ever publishing a study, a dataset, or a
method. It spread by citation, not evidence, and it now appears on university career pages. The
second most-repeated — "recruiters spend six seconds on a resume" — comes from a 2012 vendor
eye-tracking exercise with thirty participants, superseded by a 2023 study of 114 recruiters timed
covertly, which measured 17 to 46 seconds. A knowledge base about beating automated filters is
exactly the kind of document that spreads this material. The lock file is how this one does not.

**What the linter checks.** Every percentage, multiplier (`2.3x`), and figure written as a count with
a unit is checked against the lock, in prose and in tables. Numbers that are self-evidently not
claims — page counts, character limits, font sizes, quality-code numbers, years, section counts,
prices — are exempt via `literal_numbers` in the lock or a
`<!-- kb:allow-number N reason="..." -->` comment above the line. Both require a stated reason.

## 2. Front-matter

Every `.md` file under `guides/ patterns/ references/` starts with YAML front-matter.

```yaml
---
id:            # stable, unique: gd-NN | pat-<slug> | ref-<slug>
title:         # must match the H1 exactly
category:      # guides | patterns | references
summary:       # one sentence, <= 140 chars, no trailing period
read_when:     # 3-7 items. The LITERAL words a user types, not concepts.
               # "my resume never gets past the first screen", not "screening optimisation"
not_this_file: # 1-2 nearest neighbours it is confused with, as "path — why you want that instead"
markets:       # subset of [global, us, uk, ie, eu, dach, it, au] — where the advice applies
ats:           # [] or the vendors this document makes claims about: workday, greenhouse, lever,
               # ashby, oracle, icims, smartrecruiters, successfactors, workable, recruitee, teamtailor
stale_risk:    # high | medium | low
last_verified: # YYYY-MM-DD
related:       # repo-relative paths, 3-6 of them
---
```

`read_when` is the field the router is built from, and it is the one most often written badly.
Write what a person types into a chat window when they have the problem. A user does not type
"parsing fidelity"; they type "the PDF looks fine but the form filled in the wrong dates".

`not_this_file` matters more here than in a technical KB. Nineteen documents on one narrow subject
are inherently confusable, and the failure mode is an agent answering a formatting question out of
the keywords document. Name the neighbour and say why the reader wants it instead.

`markets` exists because a large share of the disagreement in the source material is not
disagreement at all — it is two markets with different conventions. A document that states a
resume should be one page is wrong without `markets: [us]` next to it.

## 3. Document shape

```markdown
# Title

> **Last Updated: August 2026** | **Markets: <list>** | **ATS: <list or "vendor-neutral">**

**Read when:** <literal triggers, one line>

**Not this file:** [path](path) — <why you probably want that one instead>

## TL;DR
<3-6 actionable bullets. Opinionated and singular: "do this", not "there are three schools of thought">

## Table of Contents
<!-- kb:toc -->

---

## 1. ...
```

Ending with `## Common Mistakes` (a table whose first column is the mistake as the reader would
describe it) and `## See Also` (3-6 links, each with a reason).

- One H1, identical to `title`.
- `---` between every H2 section. H4 is the deepest level.
- **Never hand-write a table of contents or an anchor.** `node .kb/tools/build-index.mjs` fills the
  `<!-- kb:toc -->` marker. Generated anchors cannot drift from their headings.
- Anchors follow GitHub's rule: punctuation stripped, then one hyphen per remaining space. A heading
  containing an em-dash produces a *double* hyphen.

## 4. Size

**Hard cap: 950 lines per document.** The linter fails anything above it.

A 3,000-line file costs an agent tens of thousands of tokens to open, which means in practice it does
not get opened — the document is long enough to be useless. Before splitting, remove the duplication
first: in this KB the duplication is almost always the same advice restated by a different author.

Below roughly 250 lines, a document should probably be merged into a neighbour instead. Nineteen
files that each say one thing well beats thirty that fragment a single subject.

## 5. Examples

**Complete resumes, full bullet rewrites, and full cover letters live in `examples/` and nowhere else.**

- No fenced block in a `.md` may exceed **40 lines**.
- Any extract of 10 lines or more carries `<!-- extract: examples/path -->` immediately above the
  fence and must be a verbatim substring of that file. The linter checks this.
- A document must never restate a full example that exists in `examples/`.
- Short before/after pairs — two to six lines showing a weak bullet and its rewrite — belong inline
  in the document that teaches the technique. That is the one case where duplication is not a defect,
  because the pair *is* the explanation.
- Every fence carries a language tag from: `text markdown bash json yaml html css xml diff`.

## 6. Prose

- **English.** All content, headings and comments, regardless of the market a document describes.
- **Em-dash `—` only.** ` -- ` is banned.
- `Last Updated` with a capital U.
- Locked terminology: **ATS** (never spelled out after first use), **resume** (not "CV") when writing
  about the US/UK convention, **CV** when writing about academic or continental-European documents,
  **knockout question** (not "screening question") for the disqualifying kind, **parser** for the
  extraction engine and **ATS** for the system around it — these are different things and the source
  literature conflates them constantly.
- Recommendations are opinionated and singular. Where the evidence genuinely does not support a
  single answer, say so in one sentence and give the default anyway.
- Never write "studies show" without naming the study, its sample, and its year.

## 7. Evidence

Four markers. The distinction between them is this knowledge base's reason to exist.

- `> **Field-verified (August 2026):**` — reproduced here. A file was actually rendered, extracted or
  submitted, and this is what came out. The strongest tier and the rarest: use it only where the
  observation was made, not where it was read about. Where a field observation and a vendor's
  documentation disagree, the documentation describes the intended mechanism and the observation
  describes one real toolchain on one day — record both rather than choosing.
- `> **Vendor-documented (August 2026):**` — published by the company that builds the parser or the
  ATS. Highest confidence about *mechanism*. Marketing claims inside vendor documentation are still
  marketing: a vendor's description of how its parser reads a file is evidence; its claim that this
  increases recruiter efficiency by 25% is not.
- `> **Study (n=114, covert timing, 2023):**` — named study with disclosed sample and method. Always
  carry the sample size and the year in the marker itself, so a reader can weigh it without leaving
  the line. Confidence about correlation, rarely about causation.
- `> **Folklore — no traceable source:**` — widely repeated, no primary source located. Some of it is
  still cheap to follow, and saying so is useful. Labelling it is mandatory.

**Never promote a claim to a stronger marker without the source in hand.** When a vendor's
documentation and a practitioner's experience disagree, the documentation describes the mechanism
and the practitioner describes the outcome; both can be right, and the document should say which is
which rather than picking.

**Two failure modes specific to this domain, both of which have already occurred in the source
material and must not be reproduced:**

1. *False precision as a fabrication signature.* "Profiles with 15+ endorsed skills get 22x more
   recruiter views, up from 17x in 2024" is not a statistic; it is the shape of one. Claims carrying
   decimal places, year-over-year deltas, and no named dataset are the industry's most reliable
   marker of invention. When a number cannot be traced, that fact is itself worth recording.
2. *The mangled real study.* "88% of applications are auto-rejected" descends from a real Harvard
   Business School / Accenture finding — that 88% of *employers agree* over-narrow job criteria
   filter out qualified candidates. The number survived and the meaning did not. Where a claim is a
   corruption of something real, cite the original and show the distortion.

## 8. Refresh

`stale_risk: high` documents are the ones tied to a vendor's current product behaviour or to a
regulatory date. Re-verify when a vendor ships a screening feature, when a compliance deadline
moves, or when a high-risk document is more than 90 days past `last_verified`.

```bash
node .kb/tools/build-index.mjs   # regenerate TOCs and resource-index.md
node .kb/tools/lint.mjs          # the gate
```

Record what changed, and what turned out to be wrong, in `REVIEW-FIXES.md`.
