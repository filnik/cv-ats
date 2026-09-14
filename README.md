# CV and ATS Knowledge Base

A knowledge base for writing a resume that converts and getting through automated screening. Covers
the resume, the ATS, the cover letter and LinkedIn.

It exists because the advice on this subject is unusually bad. The field's most-quoted statistic —
that most resumes are rejected by software before a human sees them — was invented by a company that
went out of business in 2013 and never published a study. The second most-quoted, that recruiters
spend six seconds on a resume, comes from an exercise with thirty participants run by a company
selling resume services; covert timing of 114 recruiters later measured 17 to 46 seconds. Much of what
circulates in 2026 is machine-generated content citing other machine-generated content.

So this knowledge base is built around a lock file. **Every statistic in it resolves to an entry in
[`.kb/facts.lock.json`](.kb/facts.lock.json)** carrying its source, sample, method, year and verdict —
`verified`, `directional` or `folklore` — and the linter fails any document that uses a number without
one, or that repeats a debunked figure without marking it as such.

## Using it

From any project: `/cv-expert`, which routes by symptom through
[`skills/cv-ats/SKILL.md`](skills/cv-ats/SKILL.md).

Directly: [`resource-index.md`](resource-index.md) lists every document with the literal phrases that
should send you to it.

Start with [`guides/01-how-screening-actually-works.md`](guides/01-how-screening-actually-works.md).
It replaces the mental model most of this advice is built on, and the rest of the KB assumes it.

## Structure

<!-- GENERATED:START -->
**Stale risk:** 🔴 high — tied to vendor behaviour or a regulatory date, re-verify every 90 days · 🟠 medium — every 180 days · 🟢 low — conceptual, re-verify when the evidence base changes. Dates are in [`resource-index.md`](resource-index.md).

### Guides

| File | Description | Stale | Lines |
|---|---|---|---|
| [How Resume Screening Actually Works](guides/01-how-screening-actually-works.md) | The working model — passing through an ATS is not being rejected by one, and four gates decide what happens to your application | 🔴 | 485 |
| [Resume Anatomy: Sections, Order and Length](guides/02-resume-anatomy.md) | What each section is for, what order the sections go in, how far back to go, and what to delete outright | 🟢 | 597 |
| [The Top Third: Headline, Summary and Value Proposition](guides/03-the-top-third.md) | The block above the first section heading — one object under four names, what physically goes there, and where attention really lands | 🟢 | 506 |
| [Bullets: Writing Evidence a Machine and a Human Both Accept](guides/04-bullets-and-evidence.md) | Five named bullet formulas are one formula; the metric catalogue that fills it, and an honest account of what the evidence supports | 🟠 | 494 |
| [Keywords, Search and Tailoring](guides/05-keywords-and-tailoring.md) | Keywords buy retrievability, not a score — how recruiters actually search, and how to tailor a resume in ten minutes | 🔴 | 488 |
| [Cover Letters](guides/06-cover-letters.md) | Dead as a screening artefact and alive as a persuasion one — when a letter is read, and the structure that earns the read | 🟠 | 448 |
| [LinkedIn as a Parallel Channel](guides/07-linkedin.md) | Why being sourced beats applying, and the documented filters — Skills, location, spotlights — that decide whether you are findable at all | 🔴 | 484 |

### Patterns

| File | Description | Stale | Lines |
|---|---|---|---|
| [The Brag Document](patterns/brag-document.md) | Record outcomes with their numbers as they happen, so every future resume, review and interview story is already written | 🟢 | 357 |
| [Gaps, Career Changes and Non-Linear Histories](patterns/career-gaps-and-changes.md) | Gaps, career changes, contract stacking and overqualification handled by removing the ambiguity rather than hiding the history | 🟢 | 472 |
| [Tailoring to a Specific Employer](patterns/company-tailoring.md) | Read the employer's published rubric and answer it in its own vocabulary — what that changes, and where it turns into mimicry | 🟠 | 347 |
| [Quantifying When You Have No Numbers](patterns/quantifying-without-numbers.md) | Triage the missing number as recoverable, confidential or never measured, then use scale, duration, constraint and the counterfactual | 🟢 | 483 |
| [What Changes by Seniority](patterns/seniority-ladder.md) | Each rung needs a different document, not a longer one — what to demonstrate at junior, mid, senior, staff and manager | 🟢 | 562 |
| [The Two-Document Strategy](patterns/two-document-strategy.md) | Keep a parser-safe file for portals and a designed file for humans, and keep them from disagreeing about the facts | 🟢 | 396 |

### References

| File | Description | Stale | Lines |
|---|---|---|---|
| [Action Verbs and Banned Phrases](references/action-verbs.md) | The merged verb list organised by what each verb claims, and the phrases a skimmer, a ranking model and a Boolean query all discount | 🟢 | 350 |
| [ATS Catalogue: What Each System Actually Does](references/ats-catalog.md) | Vendor by vendor from primary documentation — what happens to your file, what must be retyped, what can auto-reject, what the AI does | 🔴 | 503 |
| [Evidence and Myths: A Claim-by-Claim Audit](references/evidence-and-myths.md) | Every contested claim in resume advice with a verdict, a traced origin, and an honest statement of what is not known | 🔴 | 582 |
| [Market Conventions and Legal Context](references/market-conventions.md) | Length, photographs, personal details and automated-screening law, resolved by market instead of argued as if one answer fits everyone | 🔴 | 527 |
| [Parsing Rules: What Breaks a Resume Parser](references/parsing-rules.md) | The testable rules that decide whether a resume becomes a searchable record, built on published parser quality codes | 🟠 | 414 |
| [Verification Toolkit: Testing a Resume Before Sending It](references/verification-toolkit.md) | How to prove your file parses — the free command-line check, the real-parser tests, and what each paid checker actually measures | 🔴 | 524 |

### Totals

| Category | Files | Lines |
|---|---|---|
| guides | 7 | 3502 |
| patterns | 6 | 2617 |
| references | 6 | 2900 |
| **Total** | **19** | **9019** |
<!-- GENERATED:END -->

## Verifying your own resume

The most useful thing here needs no account and no subscription:

```bash
pdftotext resume.pdf -     # exactly what a parser sees
pdffonts resume.pdf        # embedded? correct character maps?
pdfinfo resume.pdf         # tagged? and is the modification date recent?
```

Full checklist in
[`references/verification-toolkit.md`](references/verification-toolkit.md). The rules those checks are
testing are in [`references/parsing-rules.md`](references/parsing-rules.md), which is built on the only
published, testable parser quality specification in the field.

## What this knowledge base will not tell you

That there is a trick. Hidden white text, prompt injection aimed at an LLM screener, invented metrics
and inflated titles all fail on the same principle, and it is not a moral one: they trade a small
recoverable disadvantage for a credibility problem that does not recover. The measured prevalence of
hidden prompt injection in real resumes is about one percent, detection is now a shipped product
feature, and the academic work shows the tactic's effectiveness collapsing as adoption rises — it is a
self-defeating arms race with an equilibrium payoff of approximately zero.

It also will not tell you that the resume is usually the bottleneck. Applications per hire have
tripled since 2021 and interview probability has roughly halved. The best-evidenced finding in this
entire literature — peer-reviewed, and holding after controlling for observable skill — is that a
referral changes your odds far more than a resume rewrite does.

## Maintenance

```bash
node .kb/tools/build-index.mjs
node .kb/tools/lint.mjs
```

The writing contract is [`.kb/STYLE.md`](.kb/STYLE.md). Read it before editing anything.
