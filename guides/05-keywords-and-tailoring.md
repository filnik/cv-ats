---
id: gd-05
title: "Keywords, Search and Tailoring"
category: guides
summary: Keywords buy retrievability, not a score — how recruiters actually search, and how to tailor a resume in ten minutes
read_when:
  - "how many keywords should I put in my resume"
  - "should I copy the keywords straight from the job description"
  - "do I need a separate skills section or should I work them into the bullets"
  - "my resume has all the right words and I still hear nothing"
  - "should I write the acronym or spell it out"
  - "what match rate score do I need to pass the ATS"
  - "how do I tailor my resume for every job without spending an hour each time"
not_this_file:
  - "references/evidence-and-myths.md — the match-rate score and the keyword myths judged claim by claim, with sources"
  - "patterns/company-tailoring.md — tailoring to one named employer's published rubric rather than to a posting"
markets: [global]
ats: [workday, greenhouse, lever, linkedin]
stale_risk: high
last_verified: 2026-08-18
related:
  - references/parsing-rules.md
  - references/evidence-and-myths.md
  - patterns/company-tailoring.md
  - guides/04-bullets-and-evidence.md
  - guides/07-linkedin.md
  - references/action-verbs.md
---

# Keywords, Search and Tailoring

> **Last Updated: August 2026** | **Markets: global** | **ATS: vendor-neutral, with documented behaviour from Greenhouse, LinkedIn Recruiter and Workday**

**Read when:** how many keywords · copy them from the posting or not · skills section or skills in bullets · acronym or spelled out · what match rate you need · tailoring without spending an hour

**Not this file:** [references/evidence-and-myths.md](../references/evidence-and-myths.md) — if what you actually want is the verdict on the match-rate score and the other keyword myths, with their sources, go there. This document is the technique.

## TL;DR

- **Keywords buy retrievability, not points.** There is no threshold. You are inside the recruiter's result set or you are outside it, and outside is silent.
- **Write naturally and specifically, using the industry-canonical term for every tool, credential and title.** Specific natural prose satisfies both the string matcher and the embedding model. Stuffed prose satisfies neither.
- **Three placements, not three repetitions:** skills block, top block, and at least one *dated* experience bullet. That produces two or three occurrences on its own.
- **Certifications, licences and regulatory frameworks are copied verbatim.** They are exact-match islands and no paraphrase reaches them.
- **Keep the skills block *and* put every skill in a dated bullet.** The block populates the filter; the bullet supplies years and recency. Do both, deliberately.
- **Never chase a perfect match.** Cover roughly three of every four hard requirements and stop. A document that matches a posting perfectly reads as machine-generated.

## Table of Contents
<!-- kb:toc -->
- [1. The framing that makes the rest correct](#1-the-framing-that-makes-the-rest-correct)
- [2. How recruiters actually retrieve](#2-how-recruiters-actually-retrieve)
  - [2.1 Filters first, and they are all structured fields](#21-filters-first-and-they-are-all-structured-fields)
  - [2.2 Boolean search, and the NOT clause that removes you](#22-boolean-search-and-the-not-clause-that-removes-you)
  - [2.3 The same terms have to work on three different surfaces](#23-the-same-terms-have-to-work-on-three-different-surfaces)
- [3. Semantic matching in 2026: the honest state of play](#3-semantic-matching-in-2026-the-honest-state-of-play)
  - [3.1 What is genuinely semantic, and documented](#31-what-is-genuinely-semantic-and-documented)
  - [3.2 What has not changed](#32-what-has-not-changed)
- [4. The rule that simplifies everything: write naturally and specifically](#4-the-rule-that-simplifies-everything-write-naturally-and-specifically)
  - [4.1 The terminal case of stuffing](#41-the-terminal-case-of-stuffing)
  - [4.2 Finding the canonical term when you are not sure](#42-finding-the-canonical-term-when-you-are-not-sure)
- [5. Reading a job description, as a method](#5-reading-a-job-description-as-a-method)
  - [5.1 The four buckets](#51-the-four-buckets)
  - [5.2 A worked pass](#52-a-worked-pass)
  - [5.3 Prioritise by frequency and position](#53-prioritise-by-frequency-and-position)
  - [5.4 Note the exact phrasing](#54-note-the-exact-phrasing)
  - [5.5 The gap analysis, done by hand in three minutes](#55-the-gap-analysis-done-by-hand-in-three-minutes)
- [6. Acronyms](#6-acronyms)
- [7. Density: count placements, not occurrences](#7-density-count-placements-not-occurrences)
  - [The rule of three placements](#the-rule-of-three-placements)
  - [7.1 Where the same term should not appear again](#71-where-the-same-term-should-not-appear-again)
- [8. The skills block, resolved](#8-the-skills-block-resolved)
  - [8.1 How to write the block](#81-how-to-write-the-block)
  - [8.2 What to do when the block and the bullets disagree](#82-what-to-do-when-the-block-and-the-bullets-disagree)
  - [8.3 Skills you are learning, and skills you used once](#83-skills-you-are-learning-and-skills-you-used-once)
- [9. The match-rate number](#9-the-match-rate-number)
  - [What the number is still good for](#what-the-number-is-still-good-for)
- [10. The tailoring workflow](#10-the-tailoring-workflow)
  - [10.1 When tailoring is not worth it](#101-when-tailoring-is-not-worth-it)
- [Common Mistakes](#common-mistakes)
- [See Also](#see-also)
<!-- kb:toc:end -->

---

## 1. The framing that makes the rest correct

Almost all keyword advice is written as though an ATS awards your resume a score and admits it above some line. It does not, and believing it does leads to the two most damaging habits in this field: stuffing, and chasing a match percentage.

What actually happens is retrieval. A recruiter sitting on several hundred applications does not read them in order. They constrain the pile with structured filters, then search it with a query, then read what comes back. Every term on your resume is doing exactly one job: making you a member of the set that comes back.

That reframing has three consequences, and the whole document follows from them.

1. **The outcome is binary and invisible.** There is no partial credit for nearly matching a filter. And nothing tells you it happened — a resume that never surfaces produces exactly the same silence as one that was read and passed over.
2. **A term only counts if it landed in a field.** A skill the parser dropped is a skill you do not have as far as the query is concerned. This is why [references/parsing-rules.md](../references/parsing-rules.md) is a prerequisite for this document and not an alternative to it: a two-column layout that loses your skills block has undone every keyword decision below.
3. **More terms is not better.** Beyond the terms that genuinely describe you, additional keywords do not widen the set you appear in by anything useful, and under the ranking layers now in use they actively cost you. Section 4.

---

## 2. How recruiters actually retrieve

### 2.1 Filters first, and they are all structured fields

> **Study (n=384 HR professionals directly involved in hiring, random sampling February to March 2025):** more than 99.7% use filters at all. What they filter on: skills 76.4%, educational background 59.7%, job titles 55.3%, certifications or licences 50.6%, years of experience 44.0%, location 43.4%. Published by Jobscan, a vendor whose product sells against these findings — the sample and method are disclosed, which is why it is usable, but read it knowing who paid for it.

Read that list again as a list of *database columns*. Skills. Degree. Title. Certification. Years. Location. Every one of them is a structured field that a parser had to populate from your document, and every one of them is a place where a parse failure removes you from a query you would otherwise have matched.

Two of those fields are computed rather than copied, which is where most silent damage happens:

- **Years of experience** is derived from your date ranges. A role whose dates were split across two lines contributes nothing to it, and a resume whose file metadata is two years old can compute "Present" as having ended two years ago. Both mechanics are in [references/parsing-rules.md](../references/parsing-rules.md).
- **Skills with duration** are derived from which job entry each skill appeared inside. A skill floating in a keyword block has no duration attached to it. Section 8.

**Location deserves its own line because it is the filter people forget.** It is a hard predicate, applied before anything else is read, and an empty or unparsed location field is not neutral — it is absent. Write `City, Country` as live text in the contact block.

### 2.2 Boolean search, and the NOT clause that removes you

After the filters, the recruiter types a query. Every serious sourcing tool — LinkedIn Recruiter, the search box inside an ATS, an agency's Bullhorn — takes Boolean strings, and recruiters write them in a fairly stereotyped shape:

```text
("Senior Software Engineer" OR "Sr. Software Engineer" OR "Lead Software Engineer")
AND (Kotlin OR "Kotlin Multiplatform" OR KMP)
AND (iOS OR Android)
AND ("Milan" OR "Milano" OR "remote")
NOT (intern OR internship OR student OR trainee OR "aspiring" OR "seeking" OR recruiter)
```

Three things follow from the shape of that string, and the third is the one nobody tells you.

**Quoted phrases are matched literally.** `"Senior Software Engineer"` matches that sequence of words and nothing else. It does not match `Senior Engineer, Software`, it does not match a title broken across a line by a template, and it does not match `Sr. SW Eng.`. **The canonical title string for the role you want must appear somewhere in your document, unbroken, spelled the way the industry spells it.** If your official title is unconventional, write the market-standard title and park the internal one in parentheses — the mechanics are in [references/parsing-rules.md](../references/parsing-rules.md).

**The OR groups are where synonym coverage pays.** A recruiter builds the OR list from the spellings they can think of. You cannot know which ones they thought of, so cover the two or three genuinely common variants of your own title and stack once — not five times.

**The NOT clause is what eliminates you, and it eliminates you for words you wrote about yourself, not about your work.** Recruiters routinely exclude `intern`, `junior`, `student`, `trainee`, `aspiring`, `seeking` and `recruiter` to keep their result sets clean. A headline reading *"Seeking new opportunities in software engineering"* contains a term on that list. So does *"Aspiring data scientist"*. So does an unlabelled `Junior Developer` role from 2019 sitting in your history — that one is honest and you keep it, but be aware it is why the query behaves as it does.

The full register of NOT-clause words lives in [references/action-verbs.md](../references/action-verbs.md). The rule here is narrower and absolute: **never write a word describing your job-search status anywhere on the document.** It buys nothing and it is one of the few things that can remove you outright.

### 2.3 The same terms have to work on three different surfaces

The query above gets run in more than one place, against more than one copy of you.

> **Study (n=384 HR professionals, random sampling February to March 2025):** LinkedIn is the leading sourcing channel, ahead of employee referrals and agencies at 60% each, social at 55%, job boards at 48%, and the recruiter's own ATS archive at 41%. Separately, 73.3% always or often evaluate a candidate's LinkedIn profile.

| Surface | What is indexed | Consequence for you |
|---|---|---|
| The ATS archive | The parsed record from a resume you submitted, possibly years ago | Old applications keep surfacing. The terms in a resume you sent in 2023 are still working, or still failing |
| A job-board database | Whatever profile you filled in there, which is usually a re-parse of the same file | Same document, different parser, different field mapping |
| LinkedIn Recruiter | Your profile text, plus skills extracted from it | A different set of rules — acronyms are normalised for you, and the skills filter reads the whole profile |

Two things follow. First, **the profile and the resume are the same keyword problem solved twice**, which is why [guides/07-linkedin.md](07-linkedin.md) is a companion to this document rather than an optional extra. Second, an old submission is still representing you: when you materially change your canonical title or your core stack, it is worth re-applying to the employers you care about so the archive holds the current record.

---

## 3. Semantic matching in 2026: the honest state of play

The most common thing said about keywords in 2026 is that they no longer matter because everything is semantic now. That is half true, and the half that is false is the half that determines whether you are found.

### 3.1 What is genuinely semantic, and documented

> **Vendor-documented (August 2026):** LinkedIn Recruiter's Skills filter draws on four sources — skills you listed explicitly, skills extracted from any text on your profile, skills on a resume you shared with an application, and skills mentioned outside the skills section. LinkedIn also normalises acronyms: a recruiter searching one form is returned members who listed the other.

> **Vendor-documented (August 2026):** Daxtra's parser specification lists 57 industries and more than 16,000 skills expanding to approximately 100,000 aliases. Textkernel returns extracted skills in typed buckets rather than as raw strings. Normalising a written term onto a taxonomy node is the standard behaviour of a modern parser, not a differentiator.

> **Vendor-documented (August 2026):** Greenhouse's matching layer compares related terms found on the resume against a calibrated skill, rather than requiring string equality. That is synonym expansion, and it is real.

So yes: `React.js` and `ReactJS` and `React` will usually resolve to one node. `k8s` will usually resolve to Kubernetes. A well-built taxonomy makes a fair amount of your spelling anxiety unnecessary.

### 3.2 What has not changed

Three things, and none of them is softened by semantics:

1. **Structured filters are hard database predicates.** `years_of_experience >= 5` is arithmetic on a parsed date field. `location = Milan` is a comparison. No embedding intervenes.
2. **The retrieval layer in mainstream systems is still exact or stemmed string matching.** The Boolean box in the recruiter's UI is a text query against an index. Semantic re-ranking, where a vendor has it, generally reorders a set that was retrieved lexically. If a term never matched, there is nothing for the re-ranker to promote.
3. **Recruiters still type quoted phrases.** This is a human habit, not a technical constraint, and it has not moved.

**The honest limit of what is known:** no ATS vendor publishes the internals of its retrieval stack, and no one has published a controlled test of how much a semantic layer rescues a term that appears nowhere on the document. Treat semantic matching as insurance against spelling variance, not as a substitute for naming the thing.

**The practical rule: satisfy both layers, because you are being read by both.** That sounds like extra work. It is not — the next section is the whole of it.

---

## 4. The rule that simplifies everything: write naturally and specifically

Use the industry-canonical term for every tool, credential and title, in ordinary sentences, describing work you actually did.

That single instruction satisfies both layers at once:

- The **string matcher** gets the exact token it is looking for, because the canonical term is the term the recruiter typed.
- The **embedding model** gets coherent, domain-dense text, because specific prose about real work is what coherent domain text looks like.

And it is the reason keyword stuffing has stopped being a viable shortcut:

| Layer | Effect of a stuffed keyword list |
|---|---|
| Lexical retrieval | Neutral. The token is present; term-frequency ranking was mildly rewarded by repetition. |
| Embedding or LLM ranking | **Negative.** An incoherent block of terms with no surrounding evidence scores as a poor semantic match for a job description written in prose. |
| Human reviewer | **Fatal on sight.** A wall of comma-separated nouns with nothing attached to it reads as an attempt to game the system. |

**This is a genuine change in the correct strategy, and most published advice has not caught up.** Under term-frequency ranking — the model most keyword advice was written against — repeating a term was neutral to mildly positive, so "work in as many keywords as you can" was tolerable advice. Under an embedding-based ranking layer it inverts: the same block dilutes the document's semantic centre and pulls the whole resume away from the posting.

Say plainly where the evidence sits. No one has published a controlled test of stuffing against a 2026 ranking layer; the mechanism is not in doubt, the magnitude is unmeasured. But note that the mechanism argument and the human argument point the same way, and the human argument was never in doubt at all.

### 4.1 The terminal case of stuffing

White text, one-point fonts and keyword blocks hidden behind images are the logical end of the stuffing strategy, and they are worth naming here because they are always sold as a keyword tactic.

> **Study (n≈200,000 de-identified real resumes, corpus analysis with high-precision detectors, 2026):** approximately 1% of resumes contain hidden prompt injections, a sevenfold increase between July 2024 and November 2025, and more than 90% of injected prompts avoid explicit instructions. The same work finds the tactic is effective only when candidate quality is homogeneous and few candidates inject; its effectiveness diminishes rapidly as more candidates do it, and collapses once it is widespread.

That is a self-defeating strategy with a published mechanism for its own defeat, and detection is now a product feature. Do not do it. The claim-by-claim treatment is in [references/evidence-and-myths.md](../references/evidence-and-myths.md).

### 4.2 Finding the canonical term when you are not sure

"Industry-canonical" is easy to say and occasionally hard to apply. Three tie-breakers, in order:

1. **How the maker spells it in its own documentation.** `PostgreSQL`, `Node.js`, `Kubernetes`, `Microsoft Excel`, `Salesforce Sales Cloud`. Vendors are consistent and recruiters copy them.
2. **How the certifying or regulatory body spells it.** For anything in bucket 2, this overrides everything, including how the posting spelled it. If a posting writes `AWS SA Associate`, you still write the official string.
3. **How postings spell it, in aggregate.** Open five current postings for the role you want and note the spelling that recurs. This also tells you which of your terms are dead: a tool that was canonical four years ago and appears in none of the five is occupying space it no longer earns.

Where a genuine split exists and both forms are current, carry both once — `PostgreSQL (Postgres)`, `Kotlin Multiplatform (KMP)` — and then use one form consistently. Alternating spellings across the document is the worst option: it doubles nothing and it looks careless.

---

## 5. Reading a job description, as a method

This takes about five minutes once you have done it twice. Classify every meaningful term into four buckets, and be clear that **only two of the four matter for retrieval.**

### 5.1 The four buckets

| Bucket | What it holds | Retrieval value | How to write it |
|---|---|---|---|
| **1. Hard skills and named tools** | Languages, frameworks, platforms, instruments, software, methodologies with a proper name | **High — this is the primary bucket** | Use the posting's spelling if it is a legitimate industry spelling |
| **2. Certifications, licences, regulatory frameworks** | `PMP`, `AWS Certified Solutions Architect – Associate`, `CPA`, `SOC 2`, `GDPR`, `IFRS 17`, `Part 145` | **Absolute — exact-match islands** | **Verbatim. Character for character.** No paraphrase reaches these |
| **3. Job titles, seniority, domain** | The role title, its level, the industry and the sub-domain | High, via quoted-phrase search | Canonical market spelling, unbroken on one line |
| **4. Soft skills and filler** | "excellent communicator", "self-starter", "thrives in ambiguity", "team player", "fast-paced environment" | **Near zero** | Never as a keyword list. If they matter, they are demonstrated by a bullet |

Bucket 2 is the one people get wrong, and it is the cheapest to get right. A certification is a proper noun with an official string. `AWS Solutions Architect` is not `AWS Certified Solutions Architect – Associate`, and a recruiter filtering the certifications field for the official string will not find the first. Copy it from your certificate, not from memory.

Bucket 4 is where most people's "keyword list" comes from, because soft skills are the easiest terms to spot in a posting. They are also the terms nobody searches on, because they do not discriminate — every candidate claims them. Writing them costs you space in the most expensive part of the document and returns nothing.

### 5.2 A worked pass

```text
POSTING LINE                                   BUCKET  ACTION
"5+ years building native iOS applications"       3     title/seniority/domain; check dates support it
"Swift, SwiftUI, Combine"                         1     exact spelling; you have all three
"Experience with CI/CD (Fastlane, GitHub          1     CI/CD is an acronym island — pair it once
 Actions)"                                              with "continuous integration"
"AWS Certified Solutions Architect – Associate"   2     verbatim or not at all
"Operating in a SOC 2 Type II environment"        2     verbatim; regulatory framework
"Nice to have: Kotlin Multiplatform"              1     optional — include only if genuinely yours
"Excellent communication skills"                  4     ignore as a keyword; demonstrate in a bullet
"Self-starter who thrives in ambiguity"           4     ignore
```

### 5.3 Prioritise by frequency and position

You do not have room for everything, and you should not want it. Rank what you found:

- **A term in the first paragraph *and* again in the requirements list is a hard requirement.** Treat it as mandatory. It has to appear in the skills block and in a dated bullet.
- **A term appearing once in the requirements list** is real but secondary.
- **A term under "nice to have", "bonus", "a plus"** is optional. Include it only if it is genuinely yours; never manufacture one to fill the list.
- **A term that appears only in the company boilerplate** at the bottom is not a requirement at all.

**Distinguish required from preferred, and cover the required list you legitimately have.** That is the whole prioritisation rule. If a posting has eight required items and you hold six of them, your job is to make those six unmissable — not to bluff the other two.

### 5.4 Note the exact phrasing

A string matcher does not know that two spellings of the same thing are the same thing, and the semantic layer only helps where the taxonomy happens to carry the alias. Where a posting's spelling is a legitimate industry spelling, adopt it:

| Posting says | Do not silently write |
|---|---|
| `Node.js` | `NodeJS`, `node` |
| `CI/CD` | `CICD`, `continuous delivery` alone |
| `PostgreSQL` | `Postgres` only |
| `Machine Learning (ML)` | `AI` |
| `Salesforce Sales Cloud` | `Salesforce` only |
| `Registered Nurse (RN)` | `nurse` |

Where two spellings are both genuinely current and you have room, carrying both once is cheap and safe: `PostgreSQL (Postgres)`. Where the posting's spelling is *wrong* or company-internal, use the industry-canonical one — you are optimising for every recruiter who searches, not only for the person who wrote this one posting.

### 5.5 The gap analysis, done by hand in three minutes

This is the step the paid tools sell, and it is a text-search exercise you can do yourself with the search box you already have.

```text
1. Write the bucket-1 and bucket-2 terms in a column. Fifteen at most.
2. For each one, search your resume's EXTRACTED TEXT for it — not the rendered page.
3. Mark each term:  ✓ present and dated  ·  ~ present but only in the skills block  ·  ✗ absent
4. Every ~ needs a bullet. Every ✗ gets triaged below.
```

Triage the misses into exactly three categories, because they have three different fixes:

| The miss | What it really is | Fix |
|---|---|---|
| **Have it, never wrote it** | The most common case by far, and pure upside | Put it in a dated bullet. It will make the bullet more concrete, not less |
| **Have it under another name** | A synonym mismatch: you wrote `continuous delivery`, they search `CI/CD` | Adopt the posting's spelling, or carry both once |
| **Do not have it** | A real gap | Leave it out. If it is one of two misses on a long required list, address it in the cover letter, not by inventing it on the resume — see [guides/06-cover-letters.md](06-cover-letters.md) |

**What a commercial resume scanner actually measures.** It counts overlap between the terms in your document and the terms in the posting, and renders that overlap as a percentage. That is a useful proofreading aid and it is not a simulation of any ATS: the tool has no access to the employer's parser, no access to the recruiter's Boolean string, and no access to the filters they set. It is measuring your document against the posting, which you can also do by hand in three minutes. Treat its output as a checklist, never as a score. The tooling landscape and what each product genuinely tests is in [references/verification-toolkit.md](../references/verification-toolkit.md).

---

## 6. Acronyms

**Write the expanded form and the acronym together once, then use whichever is natural for the rest of the document.**

```text
continuous integration and delivery (CI/CD)
search engine optimisation (SEO)
Kotlin Multiplatform (KMP)
Certified Public Accountant (CPA)
```

The reason is mechanical: one recruiter searches `CI/CD`, another searches `continuous integration`, and a taxonomy alias may or may not connect them. Pairing them once covers both queries at the cost of three words.

**Place the paired form inside the Experience section, not in the skills list.** This is the part people miss. A skill named inside a dated job entry inherits that job's dates; the same skill in a floating list inherits nothing. Pairing the acronym in a bullet gets you the coverage *and* the duration in one move. Section 8 has the mechanism.

**Two exceptions:**

- **LinkedIn normalises acronyms itself**, per its documented Skills filter. The double-form rule is a resume rule. On your profile it is redundant — see [guides/07-linkedin.md](07-linkedin.md).
- **Do not expand an acronym that is universally the primary form.** `SQL`, `HTML`, `API`, `IT`, `HR`, `PhD`. Writing "structured query language (SQL)" signals that you are optimising rather than communicating, which is exactly the impression the whole strategy is trying to avoid.

---

## 7. Density: count placements, not occurrences

**There is no published density target for any ATS. Any specific percentage you have read for keyword density was invented.** No parser vendor documents one, no ATS vendor documents one, and the systems that rank do not expose a weighting scheme. Advice that gives you a density figure is advice that made one up.

Replace it with the rule that actually corresponds to how the document is read.

### The rule of three placements

Each important term earns **three placements** — not three repetitions:

| Placement | What it buys | What it rests on |
|---|---|---|
| **The skills block** | The filter facet. This is the field 76.4% of recruiters filter on first | Recruiter filter survey, section 2.1 |
| **The top block** — headline or summary | The human's attention, in a scan that runs 17 to 46 seconds for the whole document | Tegze 2023 covert timing, n=114 |
| **At least one dated experience bullet** | Duration, recency and provenance — the term becomes evidence rather than an assertion | Parser data model, section 8 |

Three placements produce two or three occurrences of the term across the document, arrived at honestly, with no stuffing and no counting. That is the point: **you never count occurrences, you check coverage.**

One caveat worth stating rather than hiding: **no parser vendor documents positional weighting of terms**, so the top block does not earn its placement because a machine weights the top of a document more heavily. It earns it because a human reads the top first, and because the top is where a skimming reviewer decides whether to continue. The reasoning for that section belongs to [guides/03-the-top-third.md](03-the-top-third.md).

If a term does not survive all three placements, that is information: it probably is not one of your core terms, and it should come out of the skills block too.

### 7.1 Where the same term should not appear again

Three placements is a floor for your core terms and a ceiling for everything else. Two specific over-corrections to avoid:

- **The same tool named in every bullet of the same role.** Once inside a dated role, the term already carries that role's full duration. Repeating it in five bullets adds no duration, no recency and no provenance — it only crowds out the evidence the bullets were supposed to carry.
- **A term in the top block that appears nowhere else.** The top block is a claim; the experience section is where it is settled. A headline naming a technology that never reappears is the exact shape a reviewer reads as inflation.

Terms outside your core — the honest-but-secondary ones — are fine with a single placement in one bullet. Not everything needs to be findable.

---

## 8. The skills block, resolved

Two authorities appear to contradict each other, and this is the single most confusing point in the whole subject.

- One parser vendor's quality specification actively asks you to **remove** the separate skills section and integrate skills into context.
- The largest survey of recruiter behaviour puts **skills first**, at 76.4%, as the thing they filter on.

Both are right. The mechanism reconciles them.

> **Vendor-documented (August 2026):** Textkernel's candidate data model attributes each extracted skill to the specific job or education entry it appeared in, and derives from that attribution the years of experience for that skill and the date it was last used.

So a skill in a **dated bullet** yields `skill + years + last used + which role`. The same skill in a **floating block** yields a bare string. One is evidence with a timestamp; the other is an assertion. That is what the vendor's specification is asking for.

But the recruiter's filter facet is populated from the skills field, and a skill absent from it is a filter you do not appear in. That is what the survey is describing.

**Do both, deliberately.** Keep a compact skills block so the facet is populated, and make sure every term in it also appears inside a dated bullet so it acquires duration and provenance. The parser-level derivation of this is in [references/parsing-rules.md](../references/parsing-rules.md) section 9 — do not re-derive it, this section is about what to write.

### 8.1 How to write the block

```text
Languages:        Kotlin, Swift, Java, Python, TypeScript
Mobile:           Kotlin Multiplatform, Compose Multiplatform, Jetpack Compose, SwiftUI
Backend & Cloud:  Ktor, PostgreSQL, AWS, Docker, GitHub Actions
Practices:        CI/CD, unit and instrumentation testing, code review, technical mentoring
```

| Rule | Why |
|---|---|
| **Three to five labelled category groups**, one line each | Labels give a human a structure to skim; more than five groups is a taxonomy, not a resume |
| **Comma-separated plain text**, one group per line | Survives every extractor. A table or a multi-column grid does not — see [references/parsing-rules.md](../references/parsing-rules.md) |
| **Twelve to twenty hard skills in total** | Below twelve you are under-covering the filters; above twenty the block stops being a claim and starts being a list |
| **No bars, stars, percentages or ratings** | Vector graphics extract as nothing, and self-assessed proficiency is meaningless to a reader |
| **Ordered by relevance to the target role, never alphabetically** | The first three terms in each line are the ones a skimming human reads |
| **Never a skill that appears nowhere in your history** | Recruiters interview from this list. A skill with no role attached is the first thing an interviewer probes |
| **Hard skills only — no soft skills, no languages of the "team player" kind** | Bucket 4 has no retrieval value and it dilutes the block |

Spoken languages, if relevant to the market, get their own labelled line with a level (`Italian — native; English — C1`). They are a real filter field in European hiring and they do not belong mixed in with tools.

### 8.2 What to do when the block and the bullets disagree

If a term is in your skills block and in none of your bullets, you have one of two problems, and both have the same fix:

- **You have the skill but never wrote about it.** Put it into a bullet. It will improve the bullet, because a bullet naming a tool is more concrete than one that does not — see [guides/04-bullets-and-evidence.md](04-bullets-and-evidence.md).
- **You do not really have the skill.** Remove it from the block. This is not a moral point, it is an interview-survival point: the list is a promise about what you can be asked.

### 8.3 Skills you are learning, and skills you used once

Two awkward cases with clean answers.

**Learning it now.** Do not put it in the skills block, where it is indistinguishable from professional experience and will be interviewed as such. Put it where it carries its own context: a dated project entry, a certification in progress with its expected date, or a line in the summary if it is genuinely the direction you are moving. A term in a dated project entry still populates the extracted skills — with a duration that honestly reflects what it is.

**Used it once, years ago.** Recency is a field. A skill last used six years ago is retrieved by the filter and then discounted by anyone who looks at where it came from, so listing it costs you nothing and buys you little. Keep it only if it is a hard requirement of the roles you are targeting, and if you keep it, make sure the role it came from is visible rather than letting it float.

**Never split the block into "expert / proficient / familiar" tiers.** Self-assessed proficiency is unverifiable, the labels compress differently for every person who writes them, and the tier a term sits in tells a filter nothing. Ordering by relevance already communicates what you want it to communicate.

---

## 9. The match-rate number

> **Folklore — no traceable source:** "A resume needs a 65 to 80% match rate to pass an ATS filter." This is a resume-scanning product's own recommendation for its own score, published with no algorithm, no weights, no validation study and no external replication. It is a product recommendation, not a research finding, and it has been repeated until it reads like one.

The underlying claim is wrong in a more basic way than the number: **no mainstream ATS computes a resume score out of a hundred and rejects below a threshold.** Real ranking layers do exist — Workday HiredScore, Lever Talent Fit, Greenhouse Talent Matching — but they **sort** rather than **gate**, their scales are vendor-specific, and they are invisible to the candidate. What each vendor's layer actually does is catalogued in [references/ats-catalog.md](../references/ats-catalog.md).

> **Study (n=25 structured interviews with US recruiters across 10+ ATS platforms, September to October 2025):** 92% — that is 23 of 25 — reported that their ATS does not auto-reject on formatting, content or design. In the same sample, 44% had AI match scores available and 8% used them as a hard rejection criterion. Twenty-five interviews is a small qualitative sample and the authors state a wide confidence interval; use it for direction, not magnitude.

### What the number is still good for

Keep it as a **coverage checklist, not a target**: *have I addressed roughly three of every four hard requirements?* That is a genuinely useful question, and it is the honest residue of the folklore. Go through the required list, tick what you have covered, and if you are well below that proportion, either the posting is not for you or you have failed to name things you have actually done.

**Optimising past that point requires claiming skills you do not have**, and that fails three separate ways at once:

1. A human reviewer notices a resume that mirrors the posting term for term.
2. Embedding-based ranking penalises the incoherence that mirroring produces.
3. The interview finds out. The skills block is an interview agenda.

**Never chase a perfect match.** A document that matches a posting perfectly reads as machine-generated, and in 2026 reviewers are actively looking for that signal.

---

## 10. The tailoring workflow

Ten minutes per application, once you have a good base document. If it is taking an hour you are rewriting rather than tailoring.

**What never changes between versions:** employer names, dates, titles, degrees, and any number you have quoted. Tailoring changes emphasis, ordering and vocabulary. It never changes facts, and two versions of your document that disagree on a fact is a failure mode of its own — see [patterns/two-document-strategy.md](../patterns/two-document-strategy.md).

1. **Read the posting once, end to end, without touching the document.** You are looking for what the role actually is, which is often not what the title says.
2. **Run the four-bucket pass** (section 5). Three minutes. Buckets 1 and 2 become a working list; bucket 4 is discarded on the spot.
3. **Mark required versus preferred**, and strike anything on the list you could not defend for ten minutes in an interview.
4. **Check the canonical title string.** Does the exact phrase a recruiter would quote appear unbroken somewhere — headline, summary, or a role line? If not, fix that first. It is the single highest-value edit on this list.
5. **Update the skills block.** Reorder so the posting's hard requirements sit first in each line. Swap your spelling for the posting's spelling where both are legitimate. Add nothing you do not have.
6. **Rewrite two or three bullets** so that every term you just promoted sits inside a dated role, with evidence attached. This is the step that converts a keyword into a claim — the formula is in [guides/04-bullets-and-evidence.md](04-bullets-and-evidence.md).
7. **Pair each acronym with its expansion once**, in the Experience section (section 6).
8. **Adjust the top block** so it names the target role and the two or three terms this employer is clearly buying — see [guides/03-the-top-third.md](03-the-top-third.md).
9. **Run the coverage check.** Roughly three of every four hard requirements addressed. Then stop. Do not optimise past it.
10. **Read the whole document once as a human would.** If any sentence exists only to carry a keyword, delete it. Incoherence costs you at the ranking layer and at the reading layer both.
11. **Re-export the file**, so its metadata date is fresh. `Present` is resolved against the document's own date in at least one major parser, and a stale file can silently truncate your current role. Mechanism in [references/parsing-rules.md](../references/parsing-rules.md).
12. **Extract the text and read that, not the rendered page.** Sixty seconds with `pdftotext`, or the equivalents in [references/verification-toolkit.md](../references/verification-toolkit.md). Every keyword decision above is undone if the terms did not survive extraction.

Steps 11 and 12 are the two everyone skips, and they are the two that can invalidate all of the other ten. Do them last, do them every time, and do not trust the preview.

### 10.1 When tailoring is not worth it

Tailoring at this depth is for applications you actually want. Where you are applying in volume, a well-built base document aimed at one job family, with an accurate skills block and canonical titles, outperforms twenty hastily mangled variants — and it does not accumulate the inconsistencies that mangling produces. Tailoring to a *named employer's* published rubric is a different and deeper exercise: [patterns/company-tailoring.md](../patterns/company-tailoring.md).

---

## Common Mistakes

| Mistake | What actually happens |
|---|---|
| "I pasted the job description keywords into a block at the bottom" | Neutral for lexical retrieval, negative for embedding-based ranking, fatal with a human. The one tactic that fails at all three layers. |
| "I put 'seeking new opportunities' in my headline" | `seeking` is a standard term in recruiters' Boolean NOT clauses. You are removed from the result set for a phrase that describes your status, not your work. |
| "Keywords don't matter any more, it's all semantic now" | Structured filters are database predicates and the recruiter's search box is a text query. Semantics reorder a set that was retrieved lexically; a term that never matched is not in the set to reorder. |
| "I wrote 'AWS Solutions Architect' instead of the full certification name" | Certifications are exact-match islands. The official string is what the certifications filter compares against, and no paraphrase reaches it. |
| "I aimed for the 80% match score the tool told me to hit" | That threshold is a resume tool's own product recommendation with no published algorithm. Past roughly three of every four hard requirements, you are adding skills you cannot defend. |
| "I moved everything into the bullets because the parser prefers skills in context" | Then you vanish from the skills facet, which is the first thing 76.4% of recruiters filter on. Keep the block *and* the bullets. |
| "My skills block is alphabetical so it's easy to read" | The first terms on each line are the ones a skimming reviewer sees. Alphabetical order gives that position to whichever tool happens to start with A. |
| "I listed every technology I have ever touched" | The block is an interview agenda. Every entry is a question you have invited, and a floating skill with no role attached is the first one asked. |
| "I repeated my key skill five times so the ATS would rank it higher" | Term-frequency ranking is not what most systems now use, and repetition without evidence reads as gaming to both the ranking layer and the reviewer. |
| "I used the company's internal name for my job title because that was my title" | Nobody searches for it. Write the market-standard title and put the internal one in parentheses. |
| "I tailored the text but re-sent the same exported PDF" | `Present` resolves against the file's own date in at least one major parser, so a stale export can shorten your current role. Re-export every campaign. |

---

## See Also

- [references/parsing-rules.md](../references/parsing-rules.md) — a keyword only counts once it has landed in a structured field; this is what decides whether it does
- [references/evidence-and-myths.md](../references/evidence-and-myths.md) — the match-rate score, the keyword-optimisation percentages and the rest of the folklore, judged claim by claim
- [guides/04-bullets-and-evidence.md](04-bullets-and-evidence.md) — how to write the dated bullet that turns a keyword into evidence with a duration attached
- [patterns/company-tailoring.md](../patterns/company-tailoring.md) — tailoring to one named employer's published rubric, which is a deeper exercise than reading a posting
- [guides/07-linkedin.md](07-linkedin.md) — the same terms on the profile, where acronym normalisation is documented and the rules differ
- [references/verification-toolkit.md](../references/verification-toolkit.md) — how to confirm in sixty seconds that your terms survived extraction
