# Review Fixes

What was found wrong, and when. This file is the record of corrections — including corrections to this
knowledge base's own claims.

## 2026-08-18 — Founding, and the first field test

The knowledge base was assembled from two kinds of material: a corpus of practitioner advice from ten
resume writers and twenty-one career coaches, and vendor documentation plus methodologically disclosed
research gathered separately. The practitioner corpus contradicted itself on thirteen points and
repeated several statistics with no primary source, which is why `.kb/facts.lock.json` exists.

### Claims removed from the source material rather than carried forward

- **"75% of resumes are rejected by an ATS before a human sees them."** Traced to a vendor that shut
  down in August 2013 having never published a study. Recorded as folklore.
- **"40% of applications are auto-rejected by machines."** No origin locatable. The nearest real
  finding says something materially different: that employers agree their own over-narrow job criteria
  filter out qualified candidates.
- **"Recruiters spend six seconds on a resume."** Thirty-participant vendor exercise; superseded.
- **"Quantified achievements lift callbacks by 40%."** Untraceable; the attributed company is defunct
  and analysed only its own customers. The KB still recommends quantifying, on mechanistic grounds,
  and says which kind of ground that is.

### A conflict between two of the research passes, resolved at source

Two research passes reported that the EU AI Act's Annex III high-risk obligations had been deferred to
December 2027; a third reported them as applying from August 2026. Checked directly: the deferral is
real, enacted by Regulation (EU) 2026/1744, in force 27 July 2026. The third pass had drawn on sources
written before the deferral. Recorded with the regulation number so it cannot drift again. The
transparency duty was **not** deferred and applies now — a distinction the popular coverage blurs.

### Field test: column layouts are worse than this KB was about to claim

Before publishing the column guidance, the failure was reproduced rather than asserted. A real resume
using a six-column CSS grid of headline metrics was rendered to PDF and extracted.

The usual description of this failure is that sidebar content becomes orphaned from its heading. The
actual output was worse: the three right-hand cells lost their number-to-label pairing completely,
producing three consecutive orphaned numbers followed by a single line composed of fragments of three
different labels, with the remainder broken across three further lines. Neither a parser nor a human
can recover which number belongs to which metric. On screen the document is flawless.

Recorded as `field-test-column-grid`. The guidance was strengthened accordingly.

### Field test: heading drift within one person's own documents

Three versions of the same resume, by the same author for the same market, were compared. One used
canonical section headings. The others used non-canonical substitutes for both the experience and the
skills sections, and one carried no skills section at all — in a field where skills are the first
thing recruiters filter on.

The lesson recorded is not that the author made a beginner's error. It is that heading drift happens
when a document is iterated for visual effect and nobody re-reads the extracted text. Recorded as
`field-test-heading-canonicality`.

### Two defects inherited from the sibling knowledge bases, deliberately not reproduced

The `../kmp/` knowledge base ships a `resource-index.md` titled for a different knowledge base
entirely, and a hand-written routing-cluster section pointing at files that do not exist. Both are
copy-and-paste artefacts that were never re-read. Here the index generator writes its own title, and
routing clusters are derived from reciprocal `related` links, so a cluster cannot name a document that
is not there.

### Defects found by the verification pass, and fixed

- **`build-index.mjs` crashed on the first non-empty run.** The row template still referenced the
  field names inherited from the sibling knowledge base (`pkgs`, `platforms`) after the extraction had
  been changed to this KB's `markets` and `ats`. The bug was invisible while the document set was
  empty, because the template is only evaluated per row. This is the same class of defect as the
  sibling's mis-titled index: a copy that was never exercised.
- **Three documents were unreachable from the router.** `guides/02-resume-anatomy.md`,
  `patterns/company-tailoring.md` and `patterns/brag-document.md` had no entry under *Key files by
  question type*, so an agent routing by symptom could not find them and would have answered their
  questions out of a neighbouring file. Found by checking router coverage mechanically rather than by
  reading. Routing entries added; every document is now reachable.
- **Fidelity spot-check passed at the primary source.** The KB's most load-bearing claim — that
  Workday does not populate Skills from a parsed resume — was checked against Workday's own admin
  guide, which states verbatim: "Workday doesn't auto-fill fields you configure as hidden or these
  fields: Languages, Skills", together with "Resume parsing results can vary based on resume format
  and order of words. For best results, use resumes that don't have images or image-based styles."

### Two more copy-and-paste artefacts in the tooling, found by running the gate

Both were silent: the gate reported success while doing less than it claimed. They are the same
defect class as the `pkgs`/`platforms` crash above — sibling-KB code that was never exercised here —
but neither announced itself, which is why they outlived the one that did.

- **The README structure tables were never generated.** `README.md` carried the markers
  `<!-- GENERATED:STRUCTURE -->` / `<!-- /GENERATED:STRUCTURE -->`, while `build-index.mjs` looks for
  `<!-- GENERATED:START -->` / `<!-- GENERATED:END -->`. The replacement sat behind an `includes()`
  guard that simply never matched, so the *Structure* section stayed empty through every run — and
  the script still printed "refreshed README.md tables", because that message tested only whether
  `README.md` existed. Markers aligned, and the message now reports what was actually written.
- **`checkExample` in `lint.mjs` could not run.** It checked three-part version numbers against a
  `knownVersions` set built from `.kb/versions.lock.json` — neither of which exists here, since this
  KB pins statistics rather than library versions, exactly as that file's own header comment
  explains. Any example file would have thrown `ReferenceError`. Its extension filter also named
  Kotlin, Swift and Gradle sources, so it would have skipped every file this KB's `examples/` can
  actually hold. Replaced with this KB's real contract: the statistics rule was factored out of
  check 7 into a shared `checkStatistics`, and `examples/` is now held to the lock exactly as prose
  is. Verified with temporary fixtures — an unsourced percentage, multiplier and comma-separated
  count in `examples/` are each reported — then removed.

The second one mattered more than it looks. `examples/` is where complete resumes live, they are
quoted verbatim into documents, and it was the one directory where an unsourced figure could have
entered the knowledge base without the lock ever being consulted.

### The gate was auditing everything except itself

Three defects in the tooling, all found after the documents were already clean — which is the order in
which this kind of defect is always found, because a gate that never fails looks like a gate that works.

- **`checkExample` could not run at all.** It still validated three-part version numbers against a
  `versions.lock.json` inherited from the sibling knowledge base — a file that does not exist here,
  since this KB pins statistics rather than library versions. Any file placed in `examples/` would have
  thrown a `ReferenceError`. **This was the one that mattered:** `examples/` holds complete resumes that
  get quoted verbatim into documents, so it was the single path by which an unsourced figure could have
  entered the knowledge base without the lock ever being consulted. The statistics rule was factored
  into a shared function and both call sites now use it. Verified by probe: a fabricated multiplier
  inside `examples/` is now rejected.
- **`build-index.mjs` reported success it had not achieved.** It printed "refreshed README.md tables"
  whenever the README merely existed, rather than when the replacement actually happened — which is why
  the next defect stayed invisible.
- **The README's generated section had never been generated.** Its markers were named
  `GENERATED:STRUCTURE` while the generator looks for `GENERATED:START`. The write sat behind a guard
  that never matched, and the *Structure* section had been empty since the file was created.

### The statistics check was coarser than it read, and is now not

The first implementation pooled every digit sequence in `facts.lock.json` into one flat set. That let a
figure pass by coinciding with an unrelated number somewhere in a note — and it really happened:
**`4.7x` was authorised by `3.6 to 4.7%`**, a conversion rate borrowed to license a multiplier nobody
had measured. Coincidence is the exact failure this gate exists to prevent, so percentages, multipliers
and counts are now harvested and matched separately: a figure must match both its value and its shape.

Tightening it immediately surfaced a real gap. `17x` appeared in two documents — legitimately, inside
debunkings of the fabricated LinkedIn endorsement claim — but the lock recorded that myth without its
full text, so the figure had no entry. The claim is now recorded verbatim and `17x` joins `22x` and
`3.4x` under `policed_figures`, meaning it may only appear where it is being demolished. Verified by
probe in both directions: fabricated figures are rejected, and a debunked figure quoted approvingly is
rejected too.

**The residual limit, stated honestly.** Same-unit coincidence remains possible: a percentage that
happens to equal a percentage recorded elsewhere in the lock will pass. Closing that would require
every figure to name its own fact id, which would make the documents unwritable. The check is a filter
against fabrication, not a proof of provenance, and `.kb/STYLE.md` section 1 remains the actual
contract — the linter enforces what it can and the author is responsible for the rest.
