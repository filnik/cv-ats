---
id: ref-ats-catalog
title: "ATS Catalogue: What Each System Actually Does"
category: references
summary: Vendor by vendor from primary documentation — what happens to your file, what must be retyped, what can auto-reject, what the AI does
read_when:
  - "why does Workday make me retype my whole resume"
  - "the Workday form filled in nothing"
  - "what ATS does this company use"
  - "how do I tell from the application URL"
  - "did a robot reject me"
  - "can Greenhouse auto-reject my application"
  - "what does the AI in the ATS actually do with my resume"
  - "is Taleo different from the newer Oracle system"
  - "which parser does SuccessFactors use"
  - "who makes the resume parser behind this thing"
not_this_file:
  - "references/parsing-rules.md — the formatting rules that follow from how these parsers behave; that is the file you want if the question is about your document"
  - "guides/01-how-screening-actually-works.md — the four-gate mental model, if you want the model rather than the vendor detail"
markets: [global, us, eu, dach, nordics]
ats: [workday, greenhouse, lever, ashby, oracle, taleo, icims, smartrecruiters, successfactors, workable, recruitee, teamtailor, personio, bamboohr, jazzhr, jobvite, bullhorn]
stale_risk: high
last_verified: 2026-08-18
related:
  - references/parsing-rules.md
  - references/evidence-and-myths.md
  - guides/01-how-screening-actually-works.md
  - guides/05-keywords-and-tailoring.md
  - references/market-conventions.md
---

# ATS Catalogue: What Each System Actually Does

> **Last Updated: August 2026** | **Markets: global, us, eu, dach, nordics** | **ATS: Workday, Greenhouse, Lever, Ashby, Oracle, iCIMS, SmartRecruiters, SuccessFactors, Workable, Recruitee, Teamtailor, Personio, BambooHR, JazzHR**

**Read when:** why Workday makes you retype everything · which system this company runs · whether the thing can auto-reject you · what the AI layer does · Taleo versus Oracle Recruiting · who builds the parser underneath

**Not this file:** [references/parsing-rules.md](parsing-rules.md) — if your question is about your *document*, that is the file. This one is about the *systems* that receive it.

## TL;DR

- **Fill in the structured fields even when they duplicate the CV you just uploaded.** Workday's own administrator documentation states that Skills and Languages are not populated by parsing — and skills are the field recruiters filter on first. Nothing in your uploaded file puts them there.
- **Knockout questions are the only documented instant-rejection surface in any major ATS.** Greenhouse can auto-reject on Yes/No and select questions only; Oracle scores negative on disqualification answers; Workday routes on questionnaire-derived fields. None of them auto-reject on the resume itself.
- **The "ATS score" people fear is a questionnaire score, not a resume score.** Where a real resume ranking layer exists — HiredScore, Talent Matching, Talent Fit, Ashby criteria — the vendor documents it as sorting, not gating.
- **Write evidence, not adjectives.** Ashby's screening model returns Meets / Does not meet / Undecided per criterion *with citations to the source text in your resume*. An unevidenced claim scores "does not meet" and a citation-free document loses on the modern AI layer.
- **A resume the parser cannot read is not rejected in Greenhouse; it is bucketed for a human.** The catastrophic outcome of a broken file is being unsearchable, not being refused.
- **Which system you face is a function of sector and company size, not a global ranking.** Tech and startups mean Greenhouse, Ashby, Lever. Global enterprise means Workday, iCIMS, SuccessFactors, Oracle. European SMB means Personio, Teamtailor, Recruitee, Workable.

## Table of Contents
<!-- kb:toc -->
- [1. How to tell which system you are in](#1-how-to-tell-which-system-you-are-in)
- [2. The four things that vary, at a glance](#2-the-four-things-that-vary-at-a-glance)
- [3. Workday Recruiting](#3-workday-recruiting)
- [4. Greenhouse](#4-greenhouse)
- [5. Lever](#5-lever)
- [6. Ashby](#6-ashby)
- [7. Oracle: Taleo and Oracle Recruiting Cloud](#7-oracle-taleo-and-oracle-recruiting-cloud)
  - [7.1 Taleo](#71-taleo)
  - [7.2 Oracle Recruiting Cloud](#72-oracle-recruiting-cloud)
- [8. iCIMS](#8-icims)
- [9. SmartRecruiters](#9-smartrecruiters)
- [10. SAP SuccessFactors](#10-sap-successfactors)
- [11. The European stack](#11-the-european-stack)
  - [11.1 Workable](#111-workable)
  - [11.2 Recruitee](#112-recruitee)
  - [11.3 Teamtailor](#113-teamtailor)
  - [11.4 Personio](#114-personio)
  - [11.5 BambooHR and JazzHR](#115-bamboohr-and-jazzhr)
- [12. The parsing engines underneath](#12-the-parsing-engines-underneath)
  - [12.1 Textkernel](#121-textkernel)
  - [12.2 Daxtra](#122-daxtra)
  - [12.3 Affinda](#123-affinda)
  - [12.4 HireAbility ALEX](#124-hireability-alex)
- [13. Market share: three datasets that disagree, and why](#13-market-share-three-datasets-that-disagree-and-why)
- [14. Why every vendor now disclaims auto-rejection](#14-why-every-vendor-now-disclaims-auto-rejection)
- [15. What all of this means for your application](#15-what-all-of-this-means-for-your-application)
- [Common Mistakes](#common-mistakes)
- [See Also](#see-also)
<!-- kb:toc:end -->

---

## 1. How to tell which system you are in

Before the application URL redirects, look at the host. This is the cheapest piece of intelligence in the whole process, and it tells you in advance whether you are about to spend twenty minutes retyping your career or ninety seconds uploading a file.

| Host pattern in the application URL | System |
|---|---|
| `*.myworkdayjobs.com`, `wd1/wd3/wd5.myworkdayjobs.com` | Workday Recruiting |
| `boards.greenhouse.io`, `job-boards.greenhouse.io`, embedded `greenhouse.io` iframe | Greenhouse |
| `jobs.lever.co` | Lever |
| `jobs.ashbyhq.com` | Ashby |
| `*.taleo.net` | Oracle Taleo (legacy) |
| `*.oraclecloud.com/hcmUI/CandidateExperience` | Oracle Recruiting Cloud |
| `careers-*.icims.com`, `jobs.icims.com` | iCIMS |
| `jobs.smartrecruiters.com` | SmartRecruiters |
| `career*.successfactors.com`, `jobs.sap.com`, `*/careers/?rcm*` | SAP SuccessFactors |
| `apply.workable.com` | Workable |
| `*.recruitee.com` | Recruitee |
| `*.teamtailor.com` | Teamtailor |
| `*.jobs.personio.de`, `*.jobs.personio.com` | Personio |
| `*.bamboohr.com/careers` | BambooHR |
| `*.applytojob.com` | JazzHR |
| `jobs.jobvite.com` | Jobvite |

These are observable facts about how the products are deployed, not vendor claims, and they are stable because they are baked into thousands of customers' career-page links. A company that wraps its ATS behind its own domain usually still leaks the vendor in a query string, a form action, or the cookie banner's vendor list.

**What the fingerprint buys you.** The rest of this document is organised so that once you know the vendor you know four things: whether you must retype your history by hand, whether a documented auto-rejection path exists, what the AI layer does with the file, and whether anything you can see resembles a score.

---

## 2. The four things that vary, at a glance

| System | Re-enter fields by hand | Documented auto-reject surface | AI layer | Any score you can see |
|---|---|---|---|---|
| Workday | Heavy — parse then verify; **skills and languages never auto-filled** | Automatic Stage Routing on questionnaire and profile conditions | HiredScore grading, rediscovery, masked screening | No |
| Greenhouse | Light — name, email, resume | Custom Yes/No and select questions only, up to five | Talent Matching, five bands, explicitly no auto-decision | No |
| Lever | Moderate | Not documented as a resume-triggered path | Talent Fit shortlist with binary fit plus reasoning | No |
| Ashby | Light to moderate | Not documented as a resume-triggered path | Per-criterion Meets / Does not meet / Undecided with citations | No |
| Oracle Taleo | Heavy, and the oldest forms in the market | Disqualification questions with negative scoring | None native worth naming | No |
| Oracle Recruiting Cloud | Heavy | Disqualification questions, single or multiple choice only | Oracle HCM matching | No |
| iCIMS | Heavy, multi-step wizard | Knockout questions on the form | Copilot: Talent Discovery, Talent Match, Candidate Ranking | No |
| SmartRecruiters | Moderate | Screening automated by Winston Screen | Winston Match, Screen, Interview, Chat | No |
| SuccessFactors | Heavy, plus a tenant account per employer | Knockout questions on the form | Skills computed from the CV when AI is enabled | No |
| Workable | Light | Yes/No application-form questions only | Semantic skill matching, anonymised mode | No |
| Recruitee | Light | Knockout questions in the application form | Limited | No |
| Teamtailor | Light | Not documented | Co-pilot plus weighted scorecards | No |
| Personio | Light | Not documented | None shipped as of 2026 | No |
| BambooHR, JazzHR | Light | Minimal | Basic parsing plus manual review | No |

Two patterns fall out of that table and both are worth internalising.

**The re-entry burden runs inversely to the modernity of the product.** The enterprise systems built around a global HR record — Workday, Oracle, SuccessFactors, iCIMS — treat your resume as raw material for a candidate record you are then required to certify. The systems built for recruiting teams rather than HR departments — Greenhouse, Ashby, Workable — treat the file as the artefact and ask for as little else as possible.

**Every documented auto-rejection path in this table runs through a question, never through the resume.** That is not a coincidence and it is not vendor modesty. See section 13.

---

## 3. Workday Recruiting

**Who uses it.** Large enterprise, overwhelmingly US multinationals and their European subsidiaries. If you are applying to a company with more than ten thousand employees and a global HR function, this is the most likely single answer.

> **Study (n=489 of the Fortune 500, career-page URL detection, 2025):** Workday serves 39% of detected Fortune 500 career pages, the largest single share. In a broader 12,820-company sample the same crawl put Workday at 15.9%, behind Greenhouse at 19.3% and Lever at 16.6% — the gap between those two rankings is the sector effect described in section 12.

**What happens to your file.** Workday parses the upload and pre-populates the application form. Its administrator documentation is unusually candid about the limits.

> **Vendor-documented (August 2026):** Workday's Recruiting for Administrators material states, in substance, that resume parsing populates fields from a resume; that **languages and skills are not auto-populated by parsing**; that for best results resumes should avoid images and image-based styles; and that parsing results vary with resume format and word order.

That skills line is the single most actionable vendor fact in this knowledge base. The field recruiters filter on before any other is not filled in from your CV. If you upload a resume listing Kotlin fourteen times and then skip the Skills widget on the form, your Workday candidate record contains zero skills.

> **Study (n=384 HR professionals, random sampling via Zoho Surveys, 2025):** skills are the most-used filter at 76.4%, ahead of educational background at 59.7%, job titles at 55.3%, certifications at 50.6%, years of experience at 44.0% and location at 43.4%. More than 99.7% of respondents use filters at all.

**Re-entry.** Yes, and Workday is the archetype of the pattern: parse, then verify. The My Experience page shows what the parser extracted and asks you to correct it. Treat that page as the actual application — the uploaded file is a convenience, the confirmed fields are the record. Add skills and languages by hand there, every time, in the vocabulary the posting uses.

Workday is also tenant-per-employer. Your account at one company is not an account at another, and the profile does not travel. There is no "Workday profile" in the sense candidates imagine.

**Auto-rejection.** Real, documented, and narrower than folklore suggests. Workday calls it **Automatic Stage Routing**: condition rules built from job application data, candidate profile data, requisition attributes and questionnaire responses, enabled on eight business processes. Rules are evaluated sequentially and **the first match wins** — all other rules are then ignored. A candidate who trips an early rule never reaches the later ones, which is why the ordering of an employer's rule set matters more than any individual rule.

The questionnaire is where the conditions come from.

> **Vendor-documented (August 2026):** a Workday questionnaire holds a maximum of 50 questions excluding branching, supports up to 6 levels of branching, and offers 12 mapped eligibility questions available for disqualification — covering age eligibility, legal work authorisation, sponsorship requirement, willingness to relocate, previous employment with the company, salary expectations, availability and notice period. Answers generate calculated fields usable in Automatic Stage Routing condition rules, and those fields can carry positive or negative scores.

**This is the real "ATS score".** It is a questionnaire score, computed from answers you typed into radio buttons, not a grade assigned to your resume. Nobody scores your prose. People score your answer to "do you now or will you in the future require sponsorship".

**AI layer.** Workday acquired HiredScore in 2024 and sells it as HiredScore AI for Recruiting: candidate grading, candidate rediscovery, and masked screening that hides identifying details from the reviewer.

> **Folklore — no traceable source:** the A/B/C/D grade scale attributed to HiredScore is repeated across the resume-advice corpus. It could not be verified in current 2026 documentation. Treat the existence of grading as documented and the specific letter scale as unconfirmed — and note that no version of it is shown to you.

The structurally interesting part of HiredScore is not grading at all. Its own datasheet pitches that most requisitions are already covered by candidates in the employer's existing talent ecosystem — meaning **rediscovery of past applicants**, not the new inbound pile. The practical consequence for you: an application to a large Workday employer is an asset with a shelf life. Keeping that tenant profile current is a channel, not clerical work.

> **Folklore — no traceable source:** "Workday's parser fails on approximately 30% of resumes" appears only in resume-tool blogs with no methodology attached. What Workday actually documents — that results vary with format and word order, and that skills and languages are not populated at all — is both true and more useful than the invented rate.

**What to do in Workday.** Upload a single-column file per [references/parsing-rules.md](parsing-rules.md), then work the form: correct every parsed field, type the skills, type the languages, and answer the eligibility questions deliberately, because those are the only inputs with a documented path to automatic routing.

---

## 4. Greenhouse

**Who uses it.** US tech, scale-ups and VC-backed companies, plus a growing European footprint through the same customer profile.

> **Study (n=3,223 employers, career-page crawl, 2026):** among top-rated employers, company-weighted, Greenhouse leads at 49.0%, ahead of Workday at 21.8%, Lever at 8.0% and Ashby at 7.0%.

**What happens to your file.** Parsed into a candidate record; the file itself is retained and shown to the recruiter. When parsing fails, the file is attached and a human types the details in — the mechanism is covered in [references/parsing-rules.md](parsing-rules.md) section 1.

**Re-entry.** Minimal, and the API contract shows exactly how minimal.

> **Vendor-documented (August 2026):** the Greenhouse Job Board API requires only `first_name`, `last_name` and `email`, each under 255 characters, and the name fields may not contain URLs. A resume may be submitted as a multipart file upload, base64, a remote URL, or plain text. Accepted resume types are PDF, DOC, DOCX, TXT and RTF, with a 100 MB upload ceiling for candidate documents.

That ceiling is far above the size at which parsing stays reliable — keep the file well under a megabyte. The name-field rule is a spam control, not a style guide, but it does mean a name field containing your portfolio URL is rejected outright at submission.

**Auto-rejection.** Documented, and precisely scoped — this is the clearest statement any vendor makes about the boundary of automatic rejection.

> **Vendor-documented (August 2026):** Greenhouse auto-reject rules act **only** on custom job-post questions of type Yes/No, single-select or multi-select. Conditions combine with AND across up to five questions and OR within a single question's options. Auto-reject overrides auto-advance. The candidate receives a rejection reason and, optionally, a templated email. Recruiters subscribed to new-application notifications are **not** notified of an auto-rejected application.

Read that last clause twice. When a Greenhouse auto-reject fires, **no human sees it by default**. That is the closest thing to the feared black hole that exists in a documented mainstream product — and its trigger surface is a set of multiple-choice knockout questions you answered yourself. It cannot trigger on the resume, on free text, or on a score.

**AI layer.** Talent Matching compares related terms found on each resume against skills the recruiter has calibrated for the role — synonym expansion rather than literal string equality — and returns one of five bands: Strong, Good, Partial, Limited, or Needs manual review.

> **Vendor-documented (August 2026):** Greenhouse states explicitly that Talent Matching does not auto-reject and does not auto-advance. "Needs manual review" is assigned when a resume cannot be scored, **including unreadable resumes**.

The consequence is worth stating plainly, because it inverts the usual fear: **a catastrophically unparseable CV in Greenhouse is not rejected, it is bucketed into a pile a human must open.** Whether that is good or bad for you depends entirely on how big the pile is, which is a volume question — see [guides/01-how-screening-actually-works.md](../guides/01-how-screening-actually-works.md).

Talent Matching is bias-audited monthly by Warden AI across ten protected classes, with results on a public dashboard. Resume anonymisation is available to employers, which strips identifying details before review.

**Fraud controls.** Greenhouse Real Talent bundles fraud and spam detection on phone, email, IP and location signals with selfie identity verification. This exists because of the application flood, and it is the reason to keep your contact details real, consistent and matching across resume, form and profile.

> **Study (approximately 200,000 real resumes, de-identified corpus with high-precision detectors, 2026):** roughly 1% of resumes contain hidden prompt injections, a sevenfold increase between July 2024 and November 2025, and more than 90% of injected prompts do not use explicit instructions. Greenhouse platform telemetry independently measured hidden text at approximately 1% of resumes in the first half of 2025.

The full treatment of why hidden text is a losing move belongs in [references/evidence-and-myths.md](evidence-and-myths.md).

---

## 5. Lever

**Who uses it.** Mid-market and scale-up, with a large installed base in US tech. Lever is part of Employ Inc., which also owns JazzHR and Jobvite — three products at three price points under one roof, which matters when a company "switches ATS" and lands on a sibling.

**What happens to your file.** Parsed into a profile. Lever's defining trait is that the profile is a **CRM record, not an application record**: it persists as part of a talent pool and is re-searched for future roles. An application to a Lever employer is a durable entry in their database, not an event that ends when the requisition closes.

**Re-entry.** Moderate. Expect the parsed fields plus a handful of custom questions.

**Search behaviour.** Lever's search supports word stemming, so `engineering` retrieves `engineer`. Do not over-read this: stemming is morphological, not semantic. It resolves plurals and verb forms; it does not know that `Kotlin Multiplatform` and `KMP` are the same thing. Acronym handling is still your job — see [guides/05-keywords-and-tailoring.md](../guides/05-keywords-and-tailoring.md).

**Auto-rejection.** Lever does not document a resume-triggered automatic rejection path. Application-form questions remain the live surface, as everywhere else.

**AI layer.** Talent Fit ranks candidates against job requirements and returns a shortlist with a binary fit decision plus an explanation split into three parts: **strengths, key considerations, and areas for clarification**. It is positioned as shortlisting under human oversight.

That three-part output is the actionable detail. "Areas for clarification" is where a gap, an unexplained date range or an ambiguous title lands, and it is handed to a recruiter as a prompt to ask you about it. Pre-empting those items in the document is directly reading the model's output format back to it — a contract gap explained in one line never becomes a clarification item.

**Governance disclosure.** Lever names its stack: AWS Bedrock, IBM watsonx.governance, and third-party large language models, all listed as subprocessors. For an EU applicant that disclosure is the thing you would need for a GDPR subject-access or Article 22 enquiry, and few vendors publish it as plainly.

---

## 6. Ashby

**Who uses it.** Fast-growing among recruiting-operations teams, and the fastest riser in the top-employer crawl at 7.0%. Disproportionately present at engineering-led companies that care about hiring metrics.

**What happens to your file.** Parsed, retained, and evaluated against explicit criteria rather than an implicit model of a good candidate. Ashby's AI screening design is the cleanest documented one in the market and the easiest to write for.

> **Vendor-documented (August 2026):** recruiters define criteria, each consisting of a title plus a prompt written "as if instructing a junior recruiter". The model evaluates each criterion **independently** and returns Meets, Does not meet, or Undecided, with narrative reasoning **and citations to the source text in the resume**. There is no holistic ranking and no numerical rating of the candidate. Evaluation covers resume content, profile information and long-form application responses.

Three things follow directly.

1. **A criterion is a question of fact.** "Has three years of production Kotlin" is the shape. The model looks for evidence and cites where it found it. A resume asserting "extensive Kotlin experience" gives it nothing to cite, so the honest output is "does not meet" or "undecided". Dates, employers and named systems are citable; adjectives are not.
2. **Independence removes compensation.** A strong showing on one criterion does not lift a weak one, because there is no aggregate. Coverage beats brilliance: address every stated requirement somewhere concrete.
3. **Long-form application answers are evaluated.** The free-text box at the bottom of an Ashby application is not a formality. It is a scored surface with the same evidence rules as the resume.

**Privacy and compliance.** Ashby states that it does not train models on customer data and that personal data is redacted before content is sent to models. It runs equal-employment-opportunity scanning over the criteria themselves, flagging a criterion that would be unlawful to screen on, notifies candidates as a matter of legal notice, and offers a candidate opt-out.

**Benchmarks.** Ashby also publishes the most useful open dataset in recruiting, drawn from its own platform.

> **Study (54M+ applications across 93,000 jobs, January 2021 to March 2026):** referred candidates pass the initial screen at 52% versus 35% for all candidates. Same-function referrals interview at 37% versus 26% for cross-function. Offer acceptance runs 89% for business roles and 84% for technical.

---

## 7. Oracle: Taleo and Oracle Recruiting Cloud

Oracle ships two products and you will meet both. They behave differently enough that treating them as one system is a mistake.

### 7.1 Taleo

**Who uses it.** Utilities, government contractors, banks, healthcare systems, and large industrials that have not migrated. Taleo has no formal end-of-life date, but all development moved to Oracle Recruiting Cloud, which means the product you are applying through is frozen.

**What happens to your file.** This is the oldest and least forgiving parsing stack you will encounter. Expect fields to come back empty, expect a plain-text resume box in some deployments, and expect a multi-page wizard with an account and a password policy.

**Re-entry.** Heavy, and unavoidable. Budget real time. Because the parse is unreliable, the typed fields *are* the application in a stronger sense here than anywhere else.

The scale of the surrounding integration tells you what kind of system this is.

> **Vendor-documented (August 2026):** the Taleo Connect Client, the bulk data path employers use to move records in and out, is limited to 500,000 records per day and 100,000 per extraction transaction.

**Auto-rejection.** Disqualification questions with scoring, in the same family as Oracle Recruiting Cloud below.

**AI layer.** Nothing worth naming. If you are in Taleo, you are being read by a human or filtered by a Boolean search, and the structured fields are what the search touches.

### 7.2 Oracle Recruiting Cloud

**Who uses it.** Oracle HCM customers, increasingly the migration target for Taleo estates.

**Auto-rejection.** Documented precisely, and the shape mirrors Greenhouse's constraint.

> **Vendor-documented (August 2026):** disqualification questions are configured in the Question Library. **Only single-choice or multiple-choice question types can be disqualification questions.** Scoring is optional and disqualifying answers may carry **negative scores**. Optional feedback text is visible to recruiters but **not** to candidates. Questions are contextualised by recruiting organisation, location, job family and job function.

The "feedback visible to recruiters but not to candidates" clause explains a recurring candidate experience: a rejection with no reason attached, where a reason exists and simply was not surfaced. That is a configuration choice, not a bug, and it is not evidence of a resume-scoring robot.

**Parser.** Oracle does not build one. RChilli dominates the Oracle Cloud Marketplace for resume parsing.

> **Vendor-documented (August 2026):** RChilli extracts 140+ fields and auto-populates approximately 27 to 30 Oracle HCM standard candidate fields.

Note the asymmetry. Well over a hundred extracted fields have nowhere to land in the target schema. Extraction richness is not the constraint; the destination is. Optimising your document for a parser's field count is optimising a variable the employer's configuration throws away.

---

## 8. iCIMS

**Who uses it.** Enterprise, strongest among large US employers, with heavy representation in retail, healthcare, manufacturing and logistics.

> **Study (ATS market by revenue, 2024):** the global ATS software market is approximately $2.5B growing 12.3% year over year, with iCIMS the revenue leader at 10.7% and the top ten vendors together at 51.1%. The same vendor appears at 0.7% in the top-rated-employer crawl — see section 12 for why both are true.

**What happens to your file.** iCIMS describes its own parsing in its published material: extraction of contact details, language proficiency and years of experience from Word and PDF documents, with the stated principle that CV content matters more than its design. That principle is worth quoting back at anyone selling you a template.

**Re-entry.** Heavy. The iCIMS candidate flow is a multi-step wizard with an account, and the parse pre-fills a portion of it.

**Auto-rejection.** iCIMS does not publish a rule builder in the detail Greenhouse and Workday do. Assume knockout questions on the application form are live and configured, because that is the universal surface, and answer them with the same care.

**AI layer.** Copilot, comprising Talent Discovery, Talent Match and Candidate Ranking. Ranking here means ordering a recruiter's list, not gating.

> **Folklore — no traceable source:** the widely repeated claim that iCIMS runs on Textkernel or Sovren could not be verified in either vendor's current documentation. It may be true; it is not documented. Where a parser is not publicly attributed, write for the general rules in [references/parsing-rules.md](parsing-rules.md) rather than for a guessed engine.

---

## 9. SmartRecruiters

**Who uses it.** Global mid-enterprise with a strong European base. An SAP company since September 2025, which places two of the largest European-relevant ATS products under one owner.

**Re-entry.** Moderate. The application flow is modern and file-first.

**AI layer.** Winston, announced April 2026, and the most aggressive automation posture of any major vendor.

- **Winston Match** scores candidates across education, skills and experience.
- **Winston Screen** automates screening.
- **Winston Interview** is an on-demand agentic interviewer for first rounds.
- **Winston Chat** embeds assessments into a conversation and, in the vendor's own framing, enables screening **without a traditional resume**.

That last capability is the one to plan for. In a SmartRecruiters process you may be evaluated on a conversation and an embedded assessment rather than on your document, which means the preparation that matters is being able to say your evidence out loud, in the same specific terms you wrote it.

**The regulatory collision.** An automated first-round interview that produces a screening decision is exactly the fact pattern European law is built around.

> **Vendor-documented (August 2026):** Regulation (EU) 2026/1744, the Digital Omnibus on AI, deferred Annex III standalone high-risk obligations from 2 August 2026 to 2 December 2027, and Annex I embedded systems to 2 August 2028. Article 50 transparency and Article 4 AI literacy duties are unchanged and in force from 2 August 2026. Recruitment, CV screening and candidate ranking are Annex III high-risk. The obligations are postponed, not removed.

GDPR Article 22 is unaffected by that deferral and is the sharper instrument today. The CJEU's SCHUFA ruling (C-634/21, December 2023) held that a rubber-stamp human review does not break the chain: if the human has no real ability or authority to override the output, the decision remains solely automated. Italy went further with Law No. 132 of 23 September 2025, in force 10 October 2025, whose implementing decrees prohibit fully automated decision-making for recruitment, dismissal and disciplinary action. The candidate-facing consequences of all of this are in [references/market-conventions.md](market-conventions.md).

---

## 10. SAP SuccessFactors

**Who uses it.** Very strong in DACH and among EU industrials, and the second-largest presence on Fortune 500 career pages at 13.2%.

**What happens to your file.** The native parser is Textkernel-based. Daxtra is available as a bolt-on through the SAP Store, so two different engines may be behind two different employers' portals on the same product.

**The one behavioural difference worth knowing.** With AI features activated, SuccessFactors computes candidate skills from the uploaded CV. That is the direct opposite of Workday, which documents that skills are not populated by parsing at all. Same enterprise tier, same kind of employer, opposite default — which is the single best argument for the habit this document keeps repeating: fill the skills field by hand regardless, because you cannot tell from the outside which behaviour you are facing.

**Re-entry.** Heavy, plus a tenant account per employer and, in DACH deployments, a consent screen governing how long your data is retained. Read that screen: it usually offers a talent-pool retention option, and opting in is how you become findable for the next requisition.

**Auto-rejection.** Knockout questions on the application form. No documented resume-triggered path.

---

## 11. The European stack

These are the systems a European applicant meets most often outside the multinationals, and collectively they are simpler, lighter and less automated than their US enterprise counterparts.

### 11.1 Workable

Mid-market, strong across Europe. Auto-disqualification is documented and narrowly scoped in the same family as Greenhouse's.

> **Vendor-documented (August 2026):** Workable's auto-disqualify works **only** on Yes/No application-form questions. A "No" on any single active knockout question disqualifies the application.

Its matching is semantic on skills rather than exact keyword equality, and it offers an anonymised screening mode that hides identifying details from the reviewer. Light application flow, minimal re-entry.

### 11.2 Recruitee

Mid-market, Dutch origin, strong in the Benelux and Germany. Knockout questions in the application form automatically disqualify. Otherwise a straightforward parse-and-store product with a light candidate flow.

### 11.3 Teamtailor

Nordics-dominant and increasingly present across northern Europe. Employer-branding-led product: expect a career site that looks like a marketing page. Ships an AI co-pilot and weighted scorecards, and offers regional data residency with no cross-region transfer, which is why it wins procurement in privacy-sensitive Nordic organisations. No documented auto-rejection path.

### 11.4 Personio

HRIS-first and dominant in Germany and the wider DACH region. The crucial structural point: **recruiting is a module, not the core product.** Personio is a human-resources information system that also posts jobs. Reviews as of 2026 indicate it ships no AI screening, no candidate scoring and no intelligent ranking.

If you are applying to a German SME through Personio, there is no ranking layer to optimise for. A human reads it, in German, and the market conventions in [references/market-conventions.md](market-conventions.md) matter far more than anything in this file.

### 11.5 BambooHR and JazzHR

Small and mid-sized business, low automation sophistication. Expect basic parsing plus manual review. JazzHR sits under Employ Inc. alongside Lever and Jobvite.

---

## 12. The parsing engines underneath

Most ATS vendors do not build a parser. Knowing which engine sits under a product tells you more about how your file will be read than the ATS brand does.

| Engine | Sits under | Distinctive fact |
|---|---|---|
| **Textkernel** | SuccessFactors natively, Bullhorn, and much of the HR tech industry | Acquired Sovren; the Sovren brand was retired in December 2023 |
| **Daxtra** | Bullhorn and the staffing-agency world | Explicit locale handling, including an IT locale |
| **RChilli** | The Oracle ecosystem | 140+ fields into approximately 27 to 30 Oracle HCM fields |
| **Affinda** | Independent, self-serve and self-hosted | Offers a free public parser you can test against |
| **HireAbility ALEX** | Independent, agency-heavy | Handles multiple languages inside one document |

### 12.1 Textkernel

> **Vendor-documented (August 2026):** Textkernel states it is used by more than 60% of the HR technology industry, processes 2 billion documents annually, parses in approximately 0.5 seconds per document, and supports 29 languages for CV parsing including Italian. The coverage figure is marketing; the throughput and language figures are product specification.

The data model is the part that should change how you write. Skills come back in four buckets — IT, language, soft and professional — and **each skill carries years of experience, a last-used date, and a reference to the job or education entry it was found in**. Employment entries carry computed tenure. The full consequence for where you put your skills is worked through in [references/parsing-rules.md](parsing-rules.md) section 9, and it is the single most useful thing in that document.

**The paid add-on nobody mentions.** Normalisation to occupation taxonomies is a licensed extra. Whether your job title normalises to a standard occupation — and therefore whether "Mobile Software Engineer" is retrieved by a search for "Android Developer" — depends on the *employer's* contract, not on your CV. You cannot control it and you should not assume it. Write the market-standard title and let normalisation be a bonus if it happens.

Textkernel's own advice to its recruiter customers is to build semantic searches rather than Boolean ones, because Search and Match is semantic. That is a vendor recommending its own feature, and it is also the direction the market has moved.

### 12.2 Daxtra

> **Vendor-documented (August 2026):** Daxtra processes more than 1 million documents per day, parses a two-page Word document in approximately 2 seconds, supports approximately 46 languages with full Italian support and an explicit IT locale driving address, telephone and salary parsing, and maintains a taxonomy of 57 industries and 16,000+ skills expanding to approximately 100,000 aliases.

Two things matter here. The **stateless processing** model means nothing you send is retained by the parser itself. The **explicit locale** means an Italian address, an Italian phone format and an Italian salary figure are parsed by rules built for them — one of the few places where a European applicant is genuinely better served than by a US-centric engine.

Daxtra's published formatting guidance says to avoid headers and tables, avoid shortening or anonymising candidate names, and avoid graphics, photos and WordArt. It agrees with every other engine, which is why the rules in [references/parsing-rules.md](parsing-rules.md) are stated once and apply everywhere.

### 12.3 Affinda

> **Vendor-documented (August 2026):** Affinda reports a median parse time of 50 milliseconds, approximately 50 resumes per second per container, 100+ extracted fields and 50+ languages, with EU, US and APAC data residency or self-hosted deployment.

Affinda made a deliberate architectural choice to use a trained machine-learning model rather than a large language model, which is why the latency is what it is. For a candidate, the important thing is the free public parser: it is the single best test you can run on your own document, and it takes under a minute. The full test procedure is in [references/verification-toolkit.md](verification-toolkit.md).

### 12.4 HireAbility ALEX

50+ languages, and notable for handling multiple languages *within one document* — relevant if you write a CV that mixes an English summary with Italian or German employer names and role titles.

---

## 13. Market share: three datasets that disagree, and why

Three credible datasets name three different leaders. They are all correct, because they measure different populations. Anyone presenting one of them as *the* ATS market share is misleading you.

| Measurement | Leader | What it actually measures |
|---|---|---|
| Revenue | iCIMS at 10.7% | Money spent on licences, which favours large enterprise deals |
| Fortune 500 career-page detection | Workday at 39%, SuccessFactors at 13.2% | The very largest US employers |
| Top-rated-employer crawl | Greenhouse at 49.0%, Ashby fastest riser | Employers with strong public ratings, skewing to US tech and VC-backed firms |

The apparent contradiction resolves cleanly. iCIMS appears at 0.7% in the third dataset because that sample under-represents retail, healthcare, manufacturing, logistics, banking and the public sector — which is where iCIMS lives. It is a sampling artefact, not a discrepancy.

**The practical conclusion:** which ATS you face is a function of sector and company size, not of a global ranking.

- Tech, startups and scale-ups → Greenhouse, Ashby, Lever
- Large global enterprise → Workday, iCIMS, SuccessFactors, Oracle
- European SMB → Personio, Teamtailor, Recruitee, Workable
- Staffing and recruitment agencies → Bullhorn, and therefore Daxtra underneath

One more figure that gets misused constantly.

> **Study (n=489 of 500 companies, career-page URL detection, 2 June 2025, no company contacted):** 97.8% of the Fortune 500 run a detectable ATS.

True, and nearly content-free. "Uses an ATS" means "has an applicant database", the way "uses email" means "has a mail server". It says nothing about automated rejection, and its rhetorical power in resume-service marketing comes entirely from the unstated leap to "therefore a robot judges you".

---

## 14. Why every vendor now disclaims auto-rejection

The pattern in section 2 — every documented auto-rejection path running through a question rather than the resume — has a legal explanation, and knowing it tells you which direction the products are moving.

> **Vendor-documented (August 2026):** in *Mobley v. Workday* (N.D. Cal.), the court held that Workday can be liable as an agent of employers because it performs screening functions employers would otherwise perform themselves. A nationwide ADEA collective action was conditionally certified on 16 May 2025, and California FEHA claims survived dismissal in June 2026.

That is the best available explanation for why every ATS vendor's 2026 documentation aggressively disclaims auto-rejection and emphasises a human in the loop. It is legal risk management — and it shrinks the auto-reject surface in the candidate's favour. Add the GDPR and AI Act position from section 9, plus NYC Local Law 144's annual independent bias audit with published adverse-impact results and candidate notice at least ten business days before use, and the commercial incentive to ship a resume-scoring gate is close to zero.

The recruiter-side evidence points the same way, though it is thin and should be cited carefully.

> **Study (n=25 structured interviews with US recruiters across 10+ ATS platforms, companies from 120 to 50,000+ employees, September to October 2025):** 92% — 23 of 25 — reported that their ATS does not auto-reject on formatting, content or design. The authors state a 90% confidence interval of 2 to 21% for auto-rejection. In the same sample, 100% use knockout questions, 44% have AI match scores available, and only 8% use them as a hard rejection criterion.

Twenty-five interviews is not a survey of thousands, and presenting it as a hard statistic would repeat exactly the sin this knowledge base exists to correct. Take the direction, not the magnitude: knockout questions are universal, resume-based auto-rejection is rare, and match scores are mostly decoration.

---

## 15. What all of this means for your application

Six rules, in the order they pay off.

1. **Fill in the structured fields even when they duplicate the CV you just uploaded.** This is a Workday rule first and a general rule second. Skills and languages are the highest-value fields and the ones most likely to be empty. Take the extra four minutes.
2. **Answer knockout questions deliberately, because that is the only documented instant-rejection surface.** Read every Yes/No and every select question twice. Salary expectations, notice period, work authorisation, sponsorship, relocation and previous employment are the ones with a documented path into an automatic rule. An answer given carelessly is the one thing on the form that can end the application before a person is notified.
3. **Write evidence, not adjectives.** Ashby cites source text. Greenhouse expands related terms against calibrated skills. Lever splits its output into strengths and areas for clarification. Every modern AI layer is looking for something quotable, and adjectives are not quotable. A dated role, a named system, a number.
4. **Assume the parse will be imperfect and verify it.** The parse-then-confirm page in Workday, Taleo and SuccessFactors is where you catch a swapped title and employer. It is also free evidence about how your file reads — if that form is empty, so is every other system's version of it.
5. **Do not chase a score.** No mainstream ATS computes a resume score out of a hundred and rejects below a threshold. Real ranking layers exist and they sort rather than gate; their scales are vendor-specific and none of them is shown to you. Optimising past coverage of the stated requirements means claiming skills you do not have, which fails at the interview.
6. **Treat an application to a large enterprise as a durable record.** Workday's HiredScore pitch is built on rediscovery of existing candidates; Lever's product is a talent CRM; SuccessFactors asks for retention consent. Keeping those profiles current is a channel with a much better hit rate than a fresh cold application.

---

## Common Mistakes

| Mistake | What actually happens |
|---|---|
| "I uploaded my resume so Workday has my skills" | It does not. Workday documents that skills and languages are not auto-populated by parsing. Your record has an empty skills field, and skills are the filter 76.4% of recruiters use. |
| "I skipped the boring form fields because the CV says it all" | In a parse-then-verify system the confirmed fields are the record and the file is an attachment. You left the record blank. |
| "A robot rejected my resume" | If you were auto-rejected by a documented mechanism, it fired on a multiple-choice question you answered, not on your document. Greenhouse, Oracle and Workday all scope it that way. |
| "My resume scored 62% so it got filtered out" | No mainstream ATS computes a resume percentage and gates on it. The number came from a third-party tool with no published algorithm and no relationship to the employer's system. |
| "My file was unreadable so I was rejected" | In Greenhouse an unscoreable resume is assigned "Needs manual review" — a pile a human must open. Unreadable makes you invisible in search, not rejected. |
| "I applied through Taleo two years ago, that company must be modern by now" | Taleo has no end-of-life date and plenty of banks, utilities and healthcare systems are still on it. Budget the time and type carefully. |
| "One of these vendors must be the market leader" | Three datasets name three leaders because they sample three populations. Your sector and the company's headcount predict the vendor; nothing else does. |
| "I wrote 'extensive experience with Kotlin' so the AI will count it" | Ashby's model cites source text per criterion. There is nothing to cite in an adjective, so the honest verdict is "does not meet". |
| "The rejection had no reason, so it was automated" | Oracle makes disqualification feedback visible to recruiters and not to candidates by configuration. A missing reason is a settings choice, not proof of a machine. |
| "I put my portfolio URL in the last-name field to make it stand out" | Greenhouse's API rejects name fields containing URLs outright. The submission fails, not the screening. |

---

## See Also

- [references/parsing-rules.md](parsing-rules.md) — the formatting rules that follow from how these parsers behave, and the only published quality-code specification
- [guides/01-how-screening-actually-works.md](../guides/01-how-screening-actually-works.md) — the four gates in order, and why human overload rather than software does most of the filtering
- [references/evidence-and-myths.md](evidence-and-myths.md) — the claim-by-claim audit, including the auto-rejection myths this catalogue contradicts
- [guides/05-keywords-and-tailoring.md](../guides/05-keywords-and-tailoring.md) — how to choose the terms that go into the skills fields these systems filter on
- [references/verification-toolkit.md](verification-toolkit.md) — how to run your file through a real parser before you submit it
- [references/market-conventions.md](market-conventions.md) — what GDPR Article 22, the AI Act and national law actually give you as a candidate
