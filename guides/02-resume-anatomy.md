---
id: gd-02
title: "Resume Anatomy: Sections, Order and Length"
category: guides
summary: What each section is for, what order the sections go in, how far back to go, and what to delete outright
read_when:
  - "what order should the sections be in on my resume"
  - "should education go above or below my work experience"
  - "how far back should my resume go" / "do I still list a job from 2009"
  - "how do I show a promotion at the same company"
  - "should the skills section go at the top or the bottom"
  - "do I still need an objective statement" / "what do I cut to make it fit"
  - "is the one-page rule real"
not_this_file:
  - "guides/03-the-top-third.md — the headline and summary specifically, which is where the reader's attention actually lands"
  - "references/market-conventions.md — the country tables for length, photo, personal details and what the document is called"
markets: [global, us, uk, ie, eu, dach, it, au]
ats: []
stale_risk: low
last_verified: 2026-08-18
related:
  - guides/03-the-top-third.md
  - guides/04-bullets-and-evidence.md
  - references/parsing-rules.md
  - references/market-conventions.md
  - patterns/seniority-ladder.md
  - patterns/career-gaps-and-changes.md
---

# Resume Anatomy: Sections, Order and Length

> **Last Updated: August 2026** | **Markets: global, with market-specific notes** | **ATS: vendor-neutral**

**Read when:** what order the sections go in · education above or below experience · how far back to go · how to show a promotion · whether the one-page rule is real · what to delete

**Not this file:** [guides/03-the-top-third.md](03-the-top-third.md) — the headline and summary block. This document decides where that block sits and what surrounds it; that one decides what it says.

## TL;DR

- **Default order for anyone with three or more years of work: contact, headline and summary, skills, experience, education, certifications, optional closers.** Juniors swap education and projects up above experience, and only juniors.
- **Skills go high where capability match is the first question a reviewer asks** — technical, specialist and contract roles. They go after experience where employer and title carry the signal: finance, law, consulting, senior general management.
- **Certifications get their own heading.** Merging them into `Education & Certifications` makes a parser file a certification as a degree, and half of recruiters filter on certifications.
- **Go back about ten to fifteen years in full. Older roles become one line each**, under the same experience heading — never a second heading called "Earlier Career".
- **Every promotion is its own dated entry**, not a slash in a job title.
- **Delete the objective statement, "References available on request", every rating bar, and every technology you could not survive a technical interview on.**
- **One page under about three years, two pages after, roughly one page per five years as a sanity check.** The one-page rule is a US entry-level convention, not a law.

## Table of Contents
<!-- kb:toc -->
- [1. The default order, and the one thing that changes it](#1-the-default-order-and-the-one-thing-that-changes-it)
  - [1.1 The default](#11-the-default)
  - [1.2 Where the source material disagrees, and how to resolve it](#12-where-the-source-material-disagrees-and-how-to-resolve-it)
  - [1.3 The junior inversion](#13-the-junior-inversion)
  - [1.4 What never moves](#14-what-never-moves)
- [2. The contact block: what goes in it](#2-the-contact-block-what-goes-in-it)
- [3. The block below the contact details](#3-the-block-below-the-contact-details)
- [4. Skills](#4-skills)
  - [4.1 What the section is for](#41-what-the-section-is-for)
  - [4.2 What goes in it](#42-what-goes-in-it)
  - [4.3 What does not go in it](#43-what-does-not-go-in-it)
  - [4.4 The rule that ties the block to the rest of the document](#44-the-rule-that-ties-the-block-to-the-rest-of-the-document)
- [5. Experience](#5-experience)
  - [5.1 The shape of one entry](#51-the-shape-of-one-entry)
  - [5.2 How many roles, and how much space each gets](#52-how-many-roles-and-how-much-space-each-gets)
  - [5.3 How far back to go](#53-how-far-back-to-go)
  - [5.4 Promotions inside one employer](#54-promotions-inside-one-employer)
  - [5.5 Concurrent and secondary work](#55-concurrent-and-secondary-work)
- [6. Education](#6-education)
  - [6.1 The placement question, and the honest answer](#61-the-placement-question-and-the-honest-answer)
  - [6.2 What goes in an entry](#62-what-goes-in-an-entry)
  - [6.3 What to leave out](#63-what-to-leave-out)
- [7. Certifications](#7-certifications)
  - [7.1 Its own heading, and why that matters more than it sounds](#71-its-own-heading-and-why-that-matters-more-than-it-sounds)
  - [7.2 What goes in it](#72-what-goes-in-it)
- [8. Projects and open source](#8-projects-and-open-source)
  - [8.1 When the section earns its place](#81-when-the-section-earns-its-place)
  - [8.2 The honest warning about public profiles](#82-the-honest-warning-about-public-profiles)
  - [8.3 The shape of an entry](#83-the-shape-of-an-entry)
- [9. The closing sections](#9-the-closing-sections)
  - [9.1 Languages](#91-languages)
  - [9.2 Publications, patents and talks](#92-publications-patents-and-talks)
  - [9.3 Volunteering, leadership and awards](#93-volunteering-leadership-and-awards)
- [10. What to delete entirely](#10-what-to-delete-entirely)
  - [10.1 The objective statement](#101-the-objective-statement)
  - [10.2 "References available on request"](#102-references-available-on-request)
  - [10.3 Rating bars, star ratings and percentage skill meters](#103-rating-bars-star-ratings-and-percentage-skill-meters)
  - [10.4 Every technology you could not defend in an interview](#104-every-technology-you-could-not-defend-in-an-interview)
  - [10.5 The rest](#105-the-rest)
- [11. Length](#11-length)
  - [11.1 The evidence, stated honestly](#111-the-evidence-stated-honestly)
  - [11.2 The working rule](#112-the-working-rule)
  - [11.3 The real constraint is relevance density](#113-the-real-constraint-is-relevance-density)
- [12. The one-page dogma](#12-the-one-page-dogma)
- [Common Mistakes](#common-mistakes)
- [See Also](#see-also)
<!-- kb:toc:end -->

---

## 1. The default order, and the one thing that changes it

A resume is read in one pass, top to bottom, fast. Order is not decoration: it decides what the reader has already learned by the time they stop reading, and most of them stop early.

> **Study (n=114 experienced recruiters, covert timing via Microsoft Clarity, 2023):** Jan Tegze timed recruiters who did not know they were being timed. A short one-page resume got 17 seconds, a mid-length one 27, a long one 46. The fastest observed review was 12 seconds and the slowest two and a half minutes. The same author's survey work — sample not disclosed, so treat it as softer — reports that over 70% of recruiters almost always or often skim rather than read, and 78% rate skimmability as highly important.

Twenty-seven seconds is far more than the six-second figure this field repeats, and it is still not enough time to hunt. Everything below is downstream of that: the order exists so a skimmer finds the decisive thing without searching for it.

### 1.1 The default

| # | Section | Present when |
|---|---|---|
| 1 | **Contact block** | Always. First text in the document body. |
| 2 | **Headline and summary** | Almost always — see [guides/03-the-top-third.md](03-the-top-third.md). |
| 3 | **Skills** | Always for technical and specialist roles. See 1.2 for the exception. |
| 4 | **Experience** | Always, unless you have literally none. |
| 5 | **Education** | Always. One entry per qualification. |
| 6 | **Certifications** | When you hold any that the target market recognises. Own heading. |
| 7 | **Closers** | Projects, languages, publications — only when they earn their space. See section 9. |

That is the order in [templates/resume-ats-safe.html](../templates/resume-ats-safe.html), and it is the order to use unless you have a specific reason from 1.2 or 1.3.

### 1.2 Where the source material disagrees, and how to resolve it

Most practitioner sources put a skills block immediately after the summary. The reasoning is two-part and sound: a technical reviewer's first question is *can this person do the work*, and the block doubles as the surface where your keywords live in a form a parser can lift into a structured field.

One influential source places skills fifth, after education and leadership — while, in the same document, insisting that the skills section is how you carry keywords into the system. That is an internal contradiction, and it is worth naming rather than averaging away. If the block is your keyword surface, burying it below education means the surface is the last thing anyone sees, including the human who stops reading at the fold.

**Resolve it by field, not by fiat.**

| Field | Skills placement | Why |
|---|---|---|
| Software, data, infrastructure, security, hardware | **Above experience** | Capability match is the first question asked, and the reviewer is often an engineer scanning for a stack. |
| Contract, freelance, interim, consulting delivery | **Above experience** | The engagement is bought as a capability, not as a career. |
| Specialist clinical, legal-technical, regulatory, laboratory | **Above experience** | The licence and the method list are the qualification. |
| Finance, corporate law, strategy consulting, senior general management | **After experience** | Employer names and titles are the signal. A skills block at the top of a banker's resume reads as junior. |
| Marketing, sales, operations, HR at mid-level | **Above experience, kept short** | Tools matter, but the outcomes matter more. Six to ten terms, not twenty. |
| Academic and research | **After experience**, with publications weighted | A different document — see [references/market-conventions.md](../references/market-conventions.md). |

There is no third option where you list skills twice under two headings. One heading per section type, always, for reasons in [references/parsing-rules.md](../references/parsing-rules.md).

### 1.3 The junior inversion

Under about two years of relevant employment — students, new graduates, career changers, anyone whose employment record does not yet argue for them — the order changes:

| # | Section | Note |
|---|---|---|
| 1 | Contact block | Unchanged. |
| 2 | Headline and summary | Names the target role explicitly. This matters more, not less, when your history does not imply it. |
| 3 | Skills | Unchanged, and short. |
| 4 | **Education** | Rises. It is your strongest dated credential. |
| 5 | **Projects** | Rises. This is where evidence of ability lives when employment cannot supply it. |
| 6 | Experience | Internships, part-time and unrelated work, still reverse-chronological, still with dates. |
| 7 | Certifications | Unchanged. |

The inversion is not a style preference. It is that sections are read as an argument, and a junior's argument is *I was trained for this and here is something I built*, while an experienced candidate's is *I have done this job before*. Leading with three months of unrelated retail work when you hold a relevant degree buries the case.

**One honest cost, stated because this KB does not paper over its own internal tensions.** Parser-level advice says never to place education above work history: education dates leak into the employment timeline and corrupt the computed years-of-experience figure, which is a field recruiters filter on. That risk is real and it is smaller for a junior, because there is very little employment timeline to corrupt. Take the inversion, and pay for it with the mitigation: **graduation year alone, never a date range, in the education entry** — the mechanism is in [references/parsing-rules.md](../references/parsing-rules.md). Once you have two or three years of relevant employment, invert back.

### 1.4 What never moves

- **Contact block first.** No exceptions, in any market, at any level.
- **Experience before education** for everyone past the junior window.
- **Reverse chronological within every section.** A functional resume that hides dates fails the parser and reads as concealment to the human — [patterns/career-gaps-and-changes.md](../patterns/career-gaps-and-changes.md).
- **No section appears twice.** Not "Relevant Experience" plus "Other Experience", not two skills blocks, not a second education heading for a bootcamp.

---

## 2. The contact block: what goes in it

The mechanics — where the block physically sits, header and footer traps, icons, the international dialling prefix, the LinkedIn URL as literal text — are in [references/parsing-rules.md](../references/parsing-rules.md) and are not repeated here. What belongs to anatomy is the *content* decision: which fields exist at all.

| Field | Include | Form |
|---|---|---|
| Name | Always | The name you will sign the contract with. Not a nickname the reference check cannot match. |
| Target job title | Usually | One line under the name. It is the cheapest tailoring in the document — see [guides/03-the-top-third.md](03-the-top-third.md). |
| Email | Always, exactly one | A plain address at a domain you control or a major provider. Not a work address. |
| Phone | Always, exactly one | With the international prefix, always, even domestically. |
| Location | Always | `City, Country`. Never a street address. |
| LinkedIn | Almost always | As readable text. An empty profile is worse than no link — [guides/07-linkedin.md](07-linkedin.md). |
| GitHub, portfolio, personal site | When it is genuinely good | See section 8 on stale profiles. |
| Work authorisation or relocation line | When it pre-empts a knockout question | One short line: `Locations: Milan, Italy \| Remote \| EU work authorisation`. |
| Photograph, date of birth, marital status, nationality | **Market-dependent** | [references/market-conventions.md](../references/market-conventions.md). Never in the anglophone markets. |
| Full postal address | **No** | A city is a filter field; a street is a liability and a parser finding. |
| Second phone, second email, Twitter, Instagram | **No** | Duplicates make a parser choose, and it may choose the one you no longer read. |

The work-authorisation line is the single most underused item in this table. Location and eligibility are among the most common disqualifying form questions, and a candidate who answers them before being asked stops being ambiguous — the gate mechanics are in [guides/01-how-screening-actually-works.md](01-how-screening-actually-works.md).

---

## 3. The block below the contact details

Headline, summary, branded statement, value proposition, professional profile — five names, one object, and it is the most valuable real estate you own. It is owned entirely by [guides/03-the-top-third.md](03-the-top-third.md), including the question of whether to have one at all.

Two anatomy-level rules only:

1. **If it exists, it sits immediately below the contact block and above skills.** A summary placed after experience is not a summary.
2. **It is prose or bullets, never both, and never longer than four lines.** Anything longer stops being read and starts being scrolled past — which, at 27 seconds for the whole document, is expensive.

---

## 4. Skills

### 4.1 What the section is for

It has exactly two jobs, and knowing them settles most arguments about it.

**Job one: be found.** Recruiters retrieve candidates by filtering structured fields inside the ATS, and skills is the field they filter on most.

> **Study (n=384 HR professionals directly involved in hiring, random sampling via Zoho Surveys, February to March 2025):** skills are the most-used filter at 76.4%, ahead of educational background at 59.7%, job titles at 55.3%, certifications or licences at 50.6%, years of experience at 44.0% and location at 43.4%. More than 99.7% of respondents use filters at all.

**Job two: answer the reviewer's first question in two seconds.** A human scanning a technical resume is looking for a stack match. Give it to them in one block rather than making them infer it from eight bullet points.

Neither job is "list everything you have touched".

### 4.2 What goes in it

- **Hard skills, named technologies, methods, tools, standards, languages, licences.** Nouns.
- **Twelve to twenty items for a technical role**, six to ten for a non-technical one. Beyond that, the block stops being a signal and becomes a word list.
- **Grouped by category, with the label on the same line as its items.** `Languages: Kotlin, Java, Python`. A category label alone on its own line risks being read as a section heading, which is how a skills block silently becomes five empty sections.
- **The terms the job description uses**, plus the acronym-and-expansion pairing that lets you match both spellings. That is a keyword problem, and it is [guides/05-keywords-and-tailoring.md](05-keywords-and-tailoring.md), not this document.

### 4.3 What does not go in it

| Do not list | Why |
|---|---|
| Soft skills — "team player", "excellent communicator", "detail-oriented" | Unfalsifiable, universal, and discounted by human reviewers and LLM ranking layers alike. Demonstrate them in a bullet or drop them — [references/action-verbs.md](../references/action-verbs.md). |
| Proficiency bars, stars, percentages, donut charts | They extract as nothing at all, and they are semantically empty to a human too. Four fifths of what, assessed by whom? |
| Baseline tools nobody scores you on | Email, web browsers, Windows. For most office roles Microsoft Word and PowerPoint are now in this category. |
| A skill that appears nowhere in your history | Section 10.4. This is the line that gets people caught. |
| The same skill under three category headings | It does not increase your match; it decreases your credibility. |

### 4.4 The rule that ties the block to the rest of the document

**Every skill in the block must also appear inside a dated bullet somewhere below it.**

This is mechanical, not stylistic. A skill named inside a dated job entry acquires a duration, a recency and a source role in the extracted record. The same skill floating in a keyword block is a bare string. One is evidence; the other is an assertion — the full mechanism is in [references/parsing-rules.md](../references/parsing-rules.md), and the way to choose the terms is in [guides/05-keywords-and-tailoring.md](05-keywords-and-tailoring.md).

One layout note that belongs here rather than there: the skills block is the section that actually breaks in a two-column layout. If you insist on a sidebar, this is the last thing you should put in it.

---

## 5. Experience

The longest section, the one that decides the outcome, and the one most often built by accretion — each role appended when it ended, nothing ever removed. It needs editing as a whole, not extending.

### 5.1 The shape of one entry

```text
Senior Backend Engineer
Acme S.p.A. — Milan, Italy
Mar 2021 – Present
• bullet
• bullet
```

Title first and alone on its line, company and city second, one unbroken date range third. Why that exact order and no other is in [references/parsing-rules.md](../references/parsing-rules.md). How to write the bullets themselves — the formula, the metrics, tense and voice — is [guides/04-bullets-and-evidence.md](04-bullets-and-evidence.md).

Two content rules that are anatomy rather than phrasing:

- **Use the market-standard title, and put an unconventional internal one in parentheses.** `Senior Backend Engineer (internally: Code Wrangler III)`. Recruiters search for titles; nobody searches for your company's taxonomy.
- **Add a one-line company descriptor when the employer is not recognisable.** `Acme S.p.A. — Milan, Italy | B2B logistics SaaS, 200 staff`. A reviewer who has never heard of your employer cannot calibrate anything you did there, and this is the cheapest fix in the document. Skip it for names everybody knows.

### 5.2 How many roles, and how much space each gets

Space is allocated by relevance to the target job, not by recency and not equally.

| Role | Bullets | Rationale |
|---|---|---|
| Current or most recent, if relevant | 4 to 6 | This is what the reviewer is buying. |
| Previous role, if relevant | 3 to 4 | Establishes trajectory. |
| The one before that | 2 to 3 | Depth of track record. |
| Relevant but old, or recent but irrelevant | 1 to 2 | Presence without cost. |
| Anything older than the window in 5.3 | 0 — one line total | See below. |

A role that contributes nothing to the target job still needs to exist if omitting it would open a gap in the dates. Give it its one line and move on; a visible unexplained gap costs more than an irrelevant job — [patterns/career-gaps-and-changes.md](../patterns/career-gaps-and-changes.md).

### 5.3 How far back to go

**Ten to fifteen years in full detail. Everything before that condenses to one line each.**

The window is not about hiding your age, which the dates give away anyway. It is that work done fifteen years ago in a different technology stack, a different market and a different organisational era does not predict performance next quarter, and it competes for the same 27 seconds as the work that does.

The condensed form is a plain dated line, no bullets:

```text
Earlier: Software Engineer, Beta Ltd (2008–2011) · Junior Developer, Gamma S.r.l. (2006–2008)
```

**Keep those lines under the same experience heading.** The tempting move — a second heading called "Earlier Career" or "Additional Experience" — creates a second section of the same type, which is an explicit parser finding and which splits your employment history into two records that may not be reassembled in order. One heading, one continuous reverse-chronological list, with the tail compressed.

Two exceptions to the window, both narrow:

- **A marquee employer or a directly relevant early role** survives as a normal one-line entry with a short bullet, even at twenty years old.
- **Executive and board-level candidates** carry a longer arc because the whole point is the arc. Two to three pages, and the early roles still condense.

Where you have accumulated more than about thirty positions — agency, contract or seasonal work — consolidate them under the agency or the umbrella entity with a representative client list rather than listing every placement. Beyond thirty positions the record itself becomes a parser finding, and long before that it becomes unreadable.

### 5.4 Promotions inside one employer

**Give every promotion its own dated entry.** Not `Senior Engineer / Engineer, 2018–2024`. Not a stack of undated titles beneath one company name.

```text
Engineering Manager
Acme S.p.A. — Milan, Italy
Jan 2023 – Present
• bullets about the management role

Senior Backend Engineer
Acme S.p.A. — Milan, Italy
Mar 2021 – Dec 2022
• bullets about the individual-contributor role
```

Three reasons, in ascending order of importance. First, stacked undated titles under one employer are the shape that triggers the multiple-current-positions finding described in [references/parsing-rules.md](../references/parsing-rules.md). Second, each entry gets its own attributed skills, durations and recencies. Third and mainly: **promotion is the single strongest signal on a resume that someone who worked with you closely decided you were better than they thought.** Collapsing two promotions into one line throws that away to save four lines of space. Repeat the company name in full on each entry; do not rely on visual nesting, which does not survive extraction.

The same applies to a lateral move into a different function at the same employer, and to a re-hire after leaving — separate dated entries, in order.

### 5.5 Concurrent and secondary work

Contract stacking, a side business, freelance work running alongside employment, an open-source maintainership. These are legitimate and they confuse both parsers and readers, because they break the assumption that employment is a partition of time. The strategy — which to include, how to label overlaps, and when a second block genuinely is warranted — is in [patterns/career-gaps-and-changes.md](../patterns/career-gaps-and-changes.md).

---

## 6. Education

### 6.1 The placement question, and the honest answer

Four sources, four positions, and it is worth seeing them laid out because the disagreement is instructive:

| Source position | The claim | Verdict |
|---|---|---|
| Above experience for a prestigious institution or a high grade | The credential is the strongest asset, so lead with it | **No.** This is what a candidate with nothing else does. If the institution is the best thing about you at mid-career, the problem is not the ordering. |
| Above experience only for students and career changers | Lead with what makes the argument | **Yes, with the window in 1.3** — roughly the first two years, then invert back. |
| Third, always, regardless | Simplicity and consistency | **Yes as a default**, and it is the right default for almost everyone. |
| Agnostic: "just make sure it is easy to find" | Placement is not the variable that matters | **The wisest of the four**, and the one to internalise. |

The fourth position deserves the last word. Nobody has ever been rejected because education was section five instead of section three. People are absolutely rejected because a degree required by a knockout question was not extractable — buried in a paragraph, merged into another heading, or written in a form the filter did not recognise. **Findability is the whole of the requirement; placement is a proxy for it.**

Default: education third, after experience. Juniors: fourth, above experience, as in 1.3. Regulated fields where the qualification is the licence to practise — medicine, law in most jurisdictions, teaching, accountancy, engineering in the DACH markets — education above experience at every level, because that is what the reader is checking first.

### 6.2 What goes in an entry

```text
MSc Computer Science
Politecnico di Milano — Milan, Italy
2018
```

| Element | Rule |
|---|---|
| Degree name | Written out, and paired with its common abbreviation where both are searched: `Master of Science (MSc), Computer Science`. |
| Institution and location | Full official name, city, country. Not the department, not the campus address. |
| Date | **Graduation year only. Never a range.** A range in the education section leaks into the employment timeline and distorts the years-of-experience figure — [references/parsing-rules.md](../references/parsing-rules.md). |
| Grade or honours | Only where the market reads it: UK classifications, Italian `110/110 e lode`, German grade points, US GPA above roughly 3.5 and only within a few years of graduating. Conventions per market in [references/market-conventions.md](../references/market-conventions.md). |
| Thesis or dissertation title | Juniors and research roles only, one line, and only when it maps to the target job. |
| Relevant coursework | Juniors only, one line, maximum six courses, chosen from the job description rather than from the transcript. |

### 6.3 What to leave out

- **Secondary school, once you hold any degree.** Listing both is an explicit parser finding and reads as padding.
- **Start dates and attendance ranges.** Year of award only.
- **Every module you took.** A transcript is not a section.
- **Societies and student positions**, unless they carry an actual outcome and you are still a junior.
- **An unfinished degree written as though it finished.** Write it honestly: `BSc Economics — completed 2 of 3 years, 2016–2018`. Nobody minds an incomplete degree; everybody minds discovering it at the reference check.

Online courses are not degrees and do not belong here. A substantial certified programme goes under certifications; a weekend course goes nowhere.

---

## 7. Certifications

### 7.1 Its own heading, and why that matters more than it sounds

**Never merge this into `Education & Certifications`.** It is the most common heading error in the whole document and it has a mechanical cost, not just a stylistic one: a merged heading tells the parser this is an education block, and everything inside it is filed as a degree. A cloud certification recorded as a degree is absent from the certifications filter, which is used by 50.6% of recruiters, and simultaneously nonsense inside the education record.

> **Field-verified (August 2026):** three versions of one real resume were run through extraction while this KB was being written. The version using canonical headings produced canonical section markers. The two versions that did not — `Career History` instead of `Professional Experience`, `Technical Expertise` instead of `Technical Skills` — produced non-canonical markers, and one carried no skills section at all. **Both non-canonical versions had merged education and certifications into a single heading.** The three versions were written by the same person, for the same market, months apart. Heading drift is not a beginner error; it happens when a document is iterated for appearance and nobody re-reads the extracted text.

Use `Certifications` or `Licenses & Certifications`. Nothing creative. The full heading table is in [references/parsing-rules.md](../references/parsing-rules.md).

### 7.2 What goes in it

```text
AWS Certified Solutions Architect – Associate, Amazon Web Services, 2024
Certified Information Systems Security Professional (CISSP), ISC2, 2023 – valid to 2026
```

- **The credential name verbatim, as the issuing body writes it.** Certifications are exact-match islands: a recruiter searching `CISSP` or `PMP` is doing a literal string search, and your paraphrase does not match. Include the acronym and the expansion.
- **The issuing body**, because a certification without an issuer cannot be verified and reads as invented.
- **The year awarded**, and the expiry where the credential expires. An expired security or clinical certification listed without its expiry is a discovered problem, not a discovered asset.
- **In-progress credentials, honestly labelled**: `PMP — exam scheduled November 2026`. This is legitimate and often valuable. `PMP (in progress)` for the third year running is not.
- **Licences to practise**, with their jurisdiction. A licence valid in one country is a knockout question in another.

Leave out course-completion badges, platform participation badges, and anything the issuer no longer runs. If you have twelve small ones, list the three the job description names and drop the rest — an inflated certifications block reads as compensating.

---

## 8. Projects and open source

### 8.1 When the section earns its place

Include it when at least one of these is true:

- You are a junior, a student or a career changer, and projects carry evidence your employment record cannot.
- The project is the only place a target skill appears in your history.
- The project has an outcome a stranger can verify: users, downloads, adoption by a named organisation, a paper, a talk.

Otherwise, delete it. A projects section that exists because a template had one is space taken from the experience section.

### 8.2 The honest warning about public profiles

**A poorly maintained public profile is worse than no profile at all.** This is the part of the advice literature that is usually stated too gently.

A recruiter or engineer who follows your GitHub link is running a check, and a landing page consisting of forks, abandoned scaffolds, a tutorial to-do app and nothing committed in three years answers that check badly. It does not read as neutral. It reads as *this is what happened when this person had free time*, which is a stronger and more damaging inference than the one you get from having linked nothing.

**Link one good repository, not a profile.** A single project with a README that states what it does, why it exists and how to run it, with a commit history that shows sustained work, beats a profile page every time. If your profile page is strong — pinned repositories, real projects, recent activity — link the profile. If you have to think about whether it is strong, it is not.

The same rule applies to a personal site with a placeholder blog, a portfolio whose newest piece is four years old, and a Stack Overflow profile with three questions and no answers. **Every link in your contact block is a claim you are inviting someone to check.**

### 8.3 The shape of an entry

```text
Ledgerly — open-source double-entry accounting library
Kotlin Multiplatform, SQLDelight, GitHub Actions · github.com/handle/ledgerly
• Used by three fintech teams; 40k downloads since 2024; sole maintainer, 200+ merged pull requests
```

Name, one line saying what it is and why it exists, the stack, a working link as literal text, and one line of outcome. Work code you cannot publish still belongs here — describe it and omit the link rather than omitting the project.

Check every link before each campaign. A dead link in a projects section is the one failure a reviewer definitely notices, because they clicked it.

---

## 9. The closing sections

Everything below certifications is optional and each item must earn its lines. The test is the same for all of them: **does a reviewer's decision change if this is present?**

### 9.1 Languages

Worth a heading of its own whenever you have more than one working language, and disproportionately valuable in the European markets, where it is a genuine filter.

- **Use the level convention your market reads.** CEFR labels (`Italian — native · English — C1 · German — B1`) across continental Europe; plain words (`native, fluent, professional working, conversational`) for the US and UK.
- **No bars, no stars, no percentages.** They extract as nothing and mean nothing.
- **Do not list a language you cannot conduct an interview in.** `Basic Spanish` on a resume is an invitation for the interviewer who is a native speaker to switch languages, and that has ended interviews.

### 9.2 Publications, patents and talks

For industry roles: at most three, one line each, or a single link to a publication list. A publications block with substantial content is an explicit major parser finding, and a resume that looks like an academic CV can cause the parser to stop after the first employment block entirely.

Patents get a line each with the number. Conference talks are worth more than most people think for senior technical roles — one line, name the conference and the year.

For academic and research positions the document itself changes: that is a CV, not a resume, it is unbounded, and it is publication-led. See [references/market-conventions.md](../references/market-conventions.md).

### 9.3 Volunteering, leadership and awards

- **Volunteering** earns space when it carries a transferable skill with an outcome, when it fills an employment gap, or when the employer is visibly mission-driven. Not as a personality garnish.
- **Awards** stay for about a decade, then go. A 2011 employee-of-the-quarter is not evidence; it is furniture.
- **Professional memberships** matter where the profession treats them as standing, and nowhere else.

---

## 10. What to delete entirely

Be firm about this. Every line below is one you can remove today without loss, and most of them cost you something while they stay.

### 10.1 The objective statement

**Dead.** Four separate practitioner sources reach this independently, and the mechanism is not subtle: an objective statement describes what you want from the employer, in a document the employer reads to find out what they get from you. `Seeking a challenging position with a forward-thinking company where I can grow` occupies the most valuable four lines on the page and transmits nothing.

Replace it with a summary that states what you are and what you have done — [guides/03-the-top-third.md](03-the-top-third.md) — or with nothing.

### 10.2 "References available on request"

Delete it. Every employer knows they may ask for references, it is a listed parser finding, and it spends a line to say that you will comply with a standard process. Do not list referees on the document either, except in markets where that is the convention — see [references/market-conventions.md](../references/market-conventions.md).

### 10.3 Rating bars, star ratings and percentage skill meters

Delete all of them. They are vector graphics that extract as literally nothing, so the skill they were labelling disappears from the record. And they say nothing to a human either: a bar filled four fifths of the way is four fifths of what, judged by whom, against which population? Self-assessed proficiency is the least credible information on a resume, and the format makes it look quantified.

Proficiency is inferred from dated context — how long, how recently, in what role. Give the reader that instead.

### 10.4 Every technology you could not defend in an interview

This is the most important deletion in the document, and the source literature converges on it in three memorable formulations, all of which mean the same thing:

- **Do not list what you could not survive a whiteboard on.**
- **Do not list what you could not sustain a technical interview on.**
- **If it is on your CV, you should be able to speak to it.**

The failure is specific and common. A keyword block is padded to improve match rate; the padding works; the resume is retrieved; the interviewer picks the fourth item in the list because it is the one they know best; the candidate has used it once, four years ago, following a tutorial. Everything else on the resume is now suspect, because the interviewer has no way to tell which other claims are decorative. **You traded a slightly better chance of an interview for a materially worse chance of an offer.**

The test is one sentence: *for every item in the skills block, can I name a specific thing I built or fixed with it, and answer two follow-up questions?* If no, cut it. If it is genuinely a target skill you are still learning, it goes in a project, or in a cover letter, or nowhere.

### 10.5 The rest

| Delete | Why |
|---|---|
| Baseline tools — email, web browsing, Windows, and for most roles Word and PowerPoint | Listing them signals the absence of anything better to list. |
| Interests that signal nothing — "reading, travelling, music, socialising with friends" | Universal, unfalsifiable, and they consume the space a project entry would have used. A specific one that carries a skill or an unusual commitment can stay. One line, maximum. |
| Awards older than about a decade | Furniture, and they date the document. |
| The heading "Curriculum Vitae" or "Resume" at the top | The reader knows what they opened. Your name goes there. |
| Full postal address | A parser finding, an unnecessary disclosure, and a city is what the filter uses. |
| Date of birth, marital status, nationality, driving licence number, photograph | Anglophone markets: delete. Continental Europe: [references/market-conventions.md](../references/market-conventions.md). |
| Page numbers, headers, footers, "Page 1 of 2", "Confidential" | In a DOCX these live outside the document body and are frequently invisible to extraction; they add nothing when they are visible. |
| Salary history and salary expectations | Never on the resume. In the EU, asking for pay history is on its way to being unlawful — [references/market-conventions.md](../references/market-conventions.md). |
| Reasons for leaving each role | A conversation topic that reads as defensive in writing. |
| Empty headings kept "for structure" | A heading with no content under it is an explicit parser finding. |

---

## 11. Length

### 11.1 The evidence, stated honestly

The strongest study on resume length is also a weak one, and this KB says both.

> **Study (n=482 recruiters, hiring managers, HR professionals and C-suite; 7,712 paired resume selections; hiring simulation, 15 October to 2 November 2018):** ResumeGo built matched pairs — every one-page resume had a two-page counterpart for an equivalent candidate — and found reviewers 2.3 times more likely to select the two-page version overall, with quality rated 8.6 against 7.1. The effect grew with seniority: 1.4x at entry level, 2.6x mid-level, 2.9x managerial.

Now the caveats, all of which are real. It was run by a resume-writing vendor with an interest in the result. It is a simulation, not a field experiment: nobody was actually hired. It is eight years old and predates LLM ranking layers entirely. And a two-page resume carries more information by construction, so part of what it measured may be content volume rather than page count.

**The durable finding is not the headline multiple. It is the seniority gradient.** The more senior the candidate, the more the extra page helped, and the less the one-page rule survived contact with a real reviewer. That gradient is the part that would be surprising if it were false, and it is the part to act on.

### 11.2 The working rule

| Experience | Default | Where a third page is defensible |
|---|---|---|
| Student, or under about 3 years | 1 page | Never. |
| 3 to 10 years | 2 pages | Rarely — a long contract history in a market that expects per-project detail. |
| 10 to 20 years | 2 pages | When the market convention allows it and the third page is dense. |
| 20 years, executive, board | 2 to 3 pages | Yes. Compressing twenty-five years into two produces unreadable blocks. |
| Academic or research CV | Unbounded | Not the same document. |
| US federal applications | Longer by design | Rated against stated criteria by a human with a checklist. |

**Sanity check: roughly one page per five years of experience.** It is not a rule, it is a smell test — if you are at four years and reaching for a third page, the problem is the writing, not the length.

Market conventions modify all of this substantially, and they are not restated here: Australian contract work runs far longer, DACH and Nordic conventions differ, US federal is a different document. The country-by-country tables are in [references/market-conventions.md](../references/market-conventions.md).

### 11.3 The real constraint is relevance density

Page count is a proxy the industry adopted because it is easy to check. What a reader reacts to is the proportion of what they read that is relevant to the role in front of them.

- **A second page of filler is worse than a tight single page.** Not equal — worse. It advertises that you could not tell what mattered.
- **A second page that ends three lines down is worse than either.** Either it earns the space or it moves onto page one.
- **A large share of recruiters say length does not matter if the content is relevant and organised** — which is the same statement from the other side. Nobody counts pages; they notice when they stop finding anything useful.
- **Never split a single role across a page break**, and never repeat section headings on page two.

Length is usually a symptom. A resume that will not fit is normally a resume with no point of view, listing responsibilities instead of outcomes. Fix the bullets and the length fixes itself — [guides/04-bullets-and-evidence.md](04-bullets-and-evidence.md).

---

## 12. The one-page dogma

You have certainly met this stated as universal law: *a resume is one page, full stop, and a second page means it goes in the bin.* It is worth addressing directly, because it is the single most confidently repeated rule in this field and it is a local convention wearing a costume.

**Where it comes from.** It is a US entry-level convention, strongest in tech and consulting, and inside that context it is good advice: a candidate with two years of experience who needs two pages is padding. It is also enforced socially rather than mechanically — by peers, university career offices and interview coaches, all of whom are describing the market they work in.

**How it became a law.** By losing its label. A practitioner states a rule that is true in their market; it is copied into an aggregator post, then a template, then a chatbot answer, and the words "in US early-career tech" fall off at the first hop. What arrives at the reader is a bare imperative with no geography and no seniority attached. This is exactly the pattern documented across every contested claim in [references/market-conventions.md](../references/market-conventions.md).

**The justification usually offered for it is folklore.**

> **Folklore — no traceable source:** that a second page is never read, and that a page-count limit is enforced by the ATS. No parser or ATS vendor documents any page-count rule, scoring or rejection. The related claim used to justify the dogma — that recruiters look at a resume for six seconds, so only one page is ever seen — comes from a 2012 vendor eye-tracking exercise with roughly thirty participants who were instructed toward speed, never replicated and never peer-reviewed. Covert timing of 114 recruiters in 2023 measured 17 to 46 seconds, with the longest documents getting the most time — the opposite of the inference the dogma draws. See [references/evidence-and-myths.md](../references/evidence-and-myths.md).

**What to do with it.** Under three years of experience, follow it: it costs nothing and it is a real convention in a market you may be applying into. Above that, drop it, and let relevance density decide. If you are applying into US early-career tech specifically, the convention is real and social, and defying it makes a small unnecessary point about you.

What never justifies a second page: larger margins, a bigger font, a hobbies section, or a 2009 internship. If the second page exists, it exists because there is a second page of evidence.

---

## Common Mistakes

| Mistake | What actually happens |
|---|---|
| "I put my skills at the bottom because a resume guide said skills go fifth" | The same guide says skills are how you carry keywords. Below education, your keyword surface is the last thing anyone reads. Technical and specialist roles: skills above experience. |
| "I led with my degree because it is a good university" | At mid-career that reads as having nothing better to lead with. Education third, unless you are within about two years of graduating or the licence is the qualification. |
| "I merged Education & Certifications to save a heading" | The parser files your certifications as degrees. They vanish from the certifications filter, which 50.6% of recruiters use, and they are nonsense inside the education record. |
| "I created an 'Earlier Career' heading for my old jobs" | Two sections of the same type. Your employment history is now two records that may not be reassembled in order. Same heading, one line each. |
| "I listed my promotion as 'Senior Engineer / Engineer, 2018–2024'" | You deleted the strongest signal on the page — that people who worked with you closely decided to promote you — and produced the entry shape that triggers the multiple-current-positions finding. |
| "I still have an objective statement at the top" | It describes what you want in a document read to find out what the employer gets. It is occupying the four most valuable lines on the page. |
| "I used skill bars so the layout looked modern" | They are vector graphics. They extract as nothing, so the skill disappears from the record — and a bar filled four fifths of the way tells a human nothing either. |
| "I added a few technologies I have only touched to improve the match" | The interviewer picks the one they know best. Everything else on your resume is now suspect. You bought an interview and sold the offer. |
| "My GitHub link goes to my profile, which is mostly forks and a tutorial app" | A stale profile is worse than no link. It reads as what you did with free time. Link one good repository instead. |
| "I forced twelve years onto one page because that is the rule" | The rule is US early-career. The paired simulation ran the other way, and the effect grew with seniority. You deleted evidence to satisfy a convention that was never yours. |
| "My second page has four lines on it" | Worse than one page and worse than two full ones. Either it earns the space or its content moves up. |
| "I kept 'References available on request' because it looks professional" | Everyone knows they can ask. It is a listed parser finding and a wasted line. |

---

## See Also

- [guides/03-the-top-third.md](03-the-top-third.md) — what the headline and summary say, once this document has decided where they sit
- [guides/04-bullets-and-evidence.md](04-bullets-and-evidence.md) — how to write the bullets inside the experience section, which is where length problems are actually solved
- [references/parsing-rules.md](../references/parsing-rules.md) — the mechanical rules behind the heading, date and entry-shape decisions made here
- [references/market-conventions.md](../references/market-conventions.md) — the country tables for length, photograph, personal details and referees
- [patterns/seniority-ladder.md](../patterns/seniority-ladder.md) — what each section must demonstrate at junior, mid, senior, staff and manager level
- [patterns/career-gaps-and-changes.md](../patterns/career-gaps-and-changes.md) — gaps, contract stacking and career changes, which change what the experience section can look like
