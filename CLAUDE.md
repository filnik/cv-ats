# CV and ATS Knowledge Base — agent instructions

A knowledge base for writing resumes that convert and getting through automated screening. Covers the
resume, the ATS, cover letters and LinkedIn. All content in English, regardless of the market a
document describes.

Structure: `guides/` `patterns/` `references/` `examples/` `templates/`, with the writing contract and
the two locks in `.kb/`.

## How to use it

1. **Route by symptom** — `skills/cv-ats/SKILL.md`, section *Key files by question type*. Invocable
   anywhere as `/cv-expert`.
2. **Route by table** — `resource-index.md`: every document with its literal triggers, markets,
   vendors and staleness. Generated; do not hand-edit.
3. **Read the file.** Do not answer from memory. This subject in particular is one where your priors
   are contaminated — see the next section.

## What makes this knowledge base unusual

Most knowledge bases guard against documenting something that has changed. This one guards against
repeating something that was never true.

The field it describes has propagated, for over a decade, a statistic invented by a company that no
longer exists. "75% of resumes are rejected by an ATS before a human sees them" traces to a
resume-optimisation vendor that promoted it around 2012 and shut down in August 2013 without ever
publishing a study. It now appears on university career pages. It is not alone: the six-second
recruiter scan, the forty-percent auto-rejection rate, the callback lift from quantified achievements,
and half a dozen confident LinkedIn statistics are all either fabricated, untraceable, or real
findings whose meaning was lost in retelling.

So the central mechanism here is `.kb/facts.lock.json`. **Every statistic in every document resolves
to an entry there**, carrying its claim, value, sample, method, source, year and verdict. The linter
fails any document containing a percentage, multiplier or large count that is not in the lock, and
fails any document that states a debunked figure without marking it as folklore. Adding an unsourced
number to the lock to silence the linter defeats the entire point and is explicitly forbidden.

Four evidence markers appear throughout, and the distinction between them is the KB's reason to
exist:

- `> **Field-verified (August 2026):**` — reproduced here: a file was rendered, extracted or submitted
  and this is what came out. The strongest tier and the rarest. Trust it over anything you remember,
  but read it for what it is — one real toolchain on one day, not a proof of the general case.
- `> **Vendor-documented (August 2026):**` — published by the company that builds the parser or the
  ATS. Highest confidence about mechanism. Marketing claims inside vendor documentation are still
  marketing.
- `> **Study (n=…, method, year):**` — named study with disclosed sample and method, carried in the
  marker itself so a reader can weigh it without leaving the line.
- `> **Folklore — no traceable source:**` — widely repeated, no primary source located.

## The honest limitation, stated up front

**The debunkings in this knowledge base are far better sourced than the recommendations.** The
strongest work in this field is on parsing, prompt injection and referrals. The two best experiments
on resume *content* — one on length, one on cover letters — are vendor-run, unreplicated, six to eight
years old, and predate LLM screening entirely. Quantifying achievements, which every source in the
field recommends, has never been isolated in a controlled experiment.

The KB recommends quantifying anyway, on mechanistic grounds. But it says which kind of ground it is
standing on, and any agent using it should do the same.

## Conventions

- Hard cap 950 lines per document. A longer file is not opened in practice, which makes it useless.
- Complete resumes, full bullet rewrites and full cover letters live in `examples/` and nowhere else.
  Short before/after pairs belong inline, because the pair is the explanation.
- Locked terminology: **ATS**, never spelled out; **knockout question** for the disqualifying kind of
  form question; **parser** for the extraction engine and **ATS** for the system around it — the
  source literature conflates these two constantly and the conflation is the origin of the field's
  central myth.
- Never write "studies show" without naming the study, its sample and its year.

## Maintenance

```bash
node .kb/tools/build-index.mjs   # regenerate TOCs and resource-index.md from front-matter
node .kb/tools/lint.mjs          # the gate
```

`stale_risk: high` documents are those tied to current vendor behaviour or to a regulatory date.
Re-verify when a vendor ships a screening feature, when a compliance deadline moves, or at 90 days.

## Siblings

Built under the same structural contract as the Kotlin Multiplatform and React Native knowledge bases
at `../kmp/` and `../react-native/`. Sections 1 and 7 of `.kb/STYLE.md` are specific to this domain.
