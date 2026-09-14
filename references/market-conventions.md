---
id: ref-market-conventions
title: "Market Conventions and Legal Context"
category: references
summary: Length, photographs, personal details and automated-screening law, resolved by market instead of argued as if one answer fits everyone
read_when:
  - "should my resume be one page or two" / "someone told me three pages is fine and someone else said never"
  - "do I put a photo on my CV" / "German companies want a photo, right"
  - "is it illegal to put your date of birth on a US resume"
  - "do I need the GDPR consent clause on my CV" / "every Italian template has that privacy line"
  - "they asked if I need visa sponsorship and I didn't know what to put"
  - "can a company legally reject me with AI without a human looking"
  - "I'm applying from Italy to a US company and I don't know what they expect"
not_this_file:
  - "guides/02-resume-anatomy.md — what goes in each section once you have settled how many pages you get"
  - "references/parsing-rules.md — what a photo or a sidebar does to extraction, which is a mechanical question rather than a cultural one"
markets: [us, uk, ie, eu, dach, it, fr, es, nordics, au]
ats: [workday, greenhouse]
stale_risk: high
last_verified: 2026-08-18
related:
  - guides/02-resume-anatomy.md
  - references/parsing-rules.md
  - references/evidence-and-myths.md
  - references/ats-catalog.md
  - guides/01-how-screening-actually-works.md
  - patterns/two-document-strategy.md
---

# Market Conventions and Legal Context

> **Last Updated: August 2026** | **Markets: US, CA, UK, IE, EU, DACH, IT, FR, ES, Nordics, AU** | **ATS: vendor-neutral, with two documented knockout mechanics**

**Read when:** one page or two · photo or no photo · date of birth, marital status, nationality · the GDPR clause · the sponsorship question · whether AI is allowed to reject you

**Not this file:** [guides/02-resume-anatomy.md](../guides/02-resume-anatomy.md) — what belongs in each section. This document only decides how long the document is, what personal data goes on it, and what the law says about the machine reading it.

## TL;DR

- **Most resume advice you have seen contradicting other advice is not a disagreement. It is two markets quoted without their labels.** Check the market before you accept a rule.
- **Length is set by market and seniority, not by a universal number.** US early career one page; UK and Ireland two; Australian contract and project work three to seven at mid-career; academic and US federal, unbounded. The constraint is relevance density, and a second page of filler is worse than a tight first page alone.
- **Default to no photograph.** It is the only choice that is never wrong. And in the one paired field experiment on this, women with no picture had a significantly higher callback rate than women with any picture at all.
- **Two legal myths to stop repeating: it is not illegal to put your date of birth on a US resume, and no GDPR provision requires a consent clause on your CV.** Both are false. Leave both off anyway, for strategic reasons, not legal ones.
- **The one personal detail that genuinely triggers automatic rejection is work authorisation** — and not through the resume, through a knockout question in the form. Answer it in one unambiguous sentence.
- **GDPR Article 22, not the EU AI Act, is the live instrument in August 2026.** The AI Act's high-risk duties for recruitment were deferred to December 2027; its transparency duty applies now.

## Table of Contents
<!-- kb:toc -->
- [1. The organising insight: two markets, one argument](#1-the-organising-insight-two-markets-one-argument)
- [2. Length](#2-length)
  - [2.1 What the sources actually say](#21-what-the-sources-actually-say)
  - [2.2 The table](#22-the-table)
  - [2.3 The principle underneath](#23-the-principle-underneath)
- [3. Photographs](#3-photographs)
  - [3.1 Does a photo break parsing?](#31-does-a-photo-break-parsing)
  - [3.2 Does a photo change your callback rate?](#32-does-a-photo-change-your-callback-rate)
  - [3.3 Is a photo expected where you are applying?](#33-is-a-photo-expected-where-you-are-applying)
  - [3.4 The rule](#34-the-rule)
- [4. Personal details](#4-personal-details)
  - [4.1 The field table](#41-the-field-table)
  - [4.2 Myth one: "it is illegal to put your date of birth on a US resume"](#42-myth-one-it-is-illegal-to-put-your-date-of-birth-on-a-us-resume)
  - [4.3 Myth two: "a GDPR consent clause is mandatory on every CV sent in the EU"](#43-myth-two-a-gdpr-consent-clause-is-mandatory-on-every-cv-sent-in-the-eu)
  - [4.4 The one detail that really does cause automatic rejection](#44-the-one-detail-that-really-does-cause-automatic-rejection)
- [5. What the document is called, and how many you keep](#5-what-the-document-is-called-and-how-many-you-keep)
- [6. Language, qualifications and referees](#6-language-qualifications-and-referees)
  - [6.1 Which language to apply in](#61-which-language-to-apply-in)
  - [6.2 Language proficiency: two incompatible notations](#62-language-proficiency-two-incompatible-notations)
  - [6.3 Grades, degrees and what a foreign reader cannot decode](#63-grades-degrees-and-what-a-foreign-reader-cannot-decode)
  - [6.4 Referees: the biggest quiet anglophone split](#64-referees-the-biggest-quiet-anglophone-split)
- [7. The regulation that governs automated screening](#7-the-regulation-that-governs-automated-screening)
  - [7.1 The EU AI Act: high-risk, but mostly deferred](#71-the-eu-ai-act-high-risk-but-mostly-deferred)
  - [7.2 GDPR Article 22: the sharper instrument today](#72-gdpr-article-22-the-sharper-instrument-today)
  - [7.3 Italy went first, and further](#73-italy-went-first-and-further)
  - [7.4 Pay transparency, and what is disappearing from EU application forms](#74-pay-transparency-and-what-is-disappearing-from-eu-application-forms)
  - [7.5 The US patchwork](#75-the-us-patchwork)
  - [7.6 The case that changed vendor behaviour](#76-the-case-that-changed-vendor-behaviour)
  - [7.7 The practical read](#77-the-practical-read)
- [Common Mistakes](#common-mistakes)
- [See Also](#see-also)
<!-- kb:toc:end -->

---

## 1. The organising insight: two markets, one argument

A large share of the apparent disagreement in resume advice is not disagreement at all. It is two markets with different conventions, each quoted accurately and each stripped of its context by the time it reaches you.

The pattern is always the same. A practitioner with real expertise states a rule that is genuinely true in the market they hire into. The rule gets copied into an aggregator post, then into a template, then into a chatbot answer, and the market label falls off at the first hop. What arrives at the reader is a bare imperative — *one page*, *no photo*, *never put your age* — presented as though geography were not a variable.

Three of the field's loudest fights dissolve entirely once the label is restored:

| The fight | What is actually being said |
|---|---|
| "One page." / "Three to seven pages is normal." | US tech versus Australian contract and project work. Both accurate. |
| "Never include a photo." / "German employers expect one." | Anglophone anti-discrimination practice versus DACH tradition. Both accurate. |
| "Your date of birth is illegal on a resume." / "It is standard on mine." | A misstated US belief versus continental practice. One is wrong about the law; the other is right about the norm. |

This document restores the labels. It covers what actually varies by market — length, photographs, personal details, what the document is called, and the smaller conventions around language, grades and referees — and then the regulation that governs the machine screening you, written for a candidate rather than a compliance officer, because it tells you what you are entitled to.

Two things do **not** vary by market and are handled elsewhere: what a parser does with your file ([references/parsing-rules.md](parsing-rules.md)) and the order in which the real gates fire ([guides/01-how-screening-actually-works.md](../guides/01-how-screening-actually-works.md)).

---

## 2. Length

### 2.1 What the sources actually say

One well-known technical recruiter insists on one page with no exceptions. Another states that three to seven pages is standard at mid-career. A third argues that three pages is often *preferable* for an executive, because compressing twenty-five years into two produces dense unreadable blocks that nobody finishes.

All three are reporting their own market accurately. The first is US tech, where the one-page convention is strongest and most enforced by peers. The second is Australian contract and project work, where the CV traditionally carries a per-project breakdown — client, duration, technologies, role, outcome — and a short document reads as a thin history rather than a disciplined one. The third is executive search, where the reader is a board member or a search consultant reading closely, not a recruiter skimming a queue.

None of them is wrong. All of them are incomplete.

> **Study (482 recruiters, hiring managers and C-suite; 7,712 paired resume selections; hiring simulation, 2018):** ResumeGo found reviewers 2.3 times more likely to select a two-page resume over a one-page resume for an equivalent candidate, with the effect rising by seniority — 1.4x at entry level, 2.6x mid-level, 2.9x managerial.

Treat that carefully. It is vendor-run, it is a simulation rather than a field experiment, it is eight years old, and a two-page document carries more information by construction, so part of what it measures may be content volume rather than page count. The durable finding is not the headline multiple. It is **the gradient**: the more senior the role, the more the extra page helps, and the less the one-page rule survives contact with reality.

### 2.2 The table

| Market | Graduate or first role | 3 to 10 years | 10+ years | Executive |
|---|---|---|---|---|
| **US, Canada — tech and startups** | 1 page | 1 page, 2 if dense | 2 pages | 2 to 3 pages |
| **US, Canada — corporate, finance, consulting** | 1 page | 1 to 2 pages | 2 pages | 2 to 3 pages |
| **US federal (USAJOBS)** | 2 to 4 pages | 4 to 6 pages | 4 to 6+ pages | 4 to 6+ pages |
| **UK, Ireland** | 1 to 2 pages | 2 pages | 2 pages, 3 tolerated | 2 to 3 pages |
| **DACH (DE, AT, CH)** | 1 to 2 pages | 2 pages | 2 to 3 pages | 2 to 3 pages |
| **Italy, France, Spain** | 1 page | 1 to 2 pages | 2 pages | 2 to 3 pages |
| **Netherlands, Nordics** | 1 to 2 pages | 2 pages | 2 pages | 2 to 3 pages |
| **Australia, New Zealand — permanent** | 2 pages | 2 to 3 pages | 3 to 4 pages | 3 to 4 pages |
| **Australia — contract and project work** | 2 pages | 3 to 7 pages | 3 to 7 pages | 3 to 7 pages |
| **Academic and research, anywhere** | Unbounded | Unbounded | Unbounded | Unbounded |

Four notes that matter more than any single cell:

1. **The US federal resume is not a resume in the ordinary sense.** It is rated against explicitly stated criteria by a human assessor working from a checklist, so omitting a duty because it seemed obvious costs you points. Length is a function of the rating method, not of taste.
2. **DACH keeps the CV short by moving evidence out of it.** A German application is a bundle: `Lebenslauf`, cover letter, and scanned `Arbeitszeugnisse` — the employer reference certificates — attached behind it. The document is brief because the proof travels separately.
3. **The Australian contract convention is a per-project format**, not padding. If you drop it and send a two-page summary, you have removed the exact information the reader is looking for.
4. **An academic CV is a different document, and sending one to an industry role is a parsing failure as well as a cultural one.** The published quality codes flag it explicitly — see [references/parsing-rules.md](parsing-rules.md).

### 2.3 The principle underneath

**The constraint is relevance density, not page count.**

Page count is a proxy the industry adopted because it is easy to check. What a reader actually reacts to is the proportion of the document that is relevant to the role in front of them. Two pages at high density beats one page at high density. One page at high density beats two pages where the second is a 2011 internship, a hobbies line, and "References available on request".

The operational form of the rule:

- **Never let a page exist to be filled.** If your second page ends a third of the way down, either it earns its remaining space or its content moves onto page one.
- **A page break inside a job entry is worse than an extra page.** Keep a role and its bullets together.
- **The cut is chronological before it is qualitative.** Roles older than roughly fifteen years compress into a single dated line each; detail belongs to the last decade. What to delete is [guides/02-resume-anatomy.md](../guides/02-resume-anatomy.md).
- **Length is a symptom.** A resume that cannot fit is usually a resume with no point of view, listing responsibilities instead of outcomes. Fix the bullets and the length fixes itself — [guides/04-bullets-and-evidence.md](../guides/04-bullets-and-evidence.md).

---

## 3. Photographs

Three separate questions get argued as one, which is why the argument never resolves. Keep them apart.

### 3.1 Does a photo break parsing?

No. An embedded image does not break a parser, provided the rest of the document is real text.

The risk is indirect and it is real: **photo-driven templates.** A template that reserves space for a headshot almost always does it with a sidebar or a header block, and those are what break extraction — the photo is merely the reason the layout exists. Column layouts and header-resident content are the two most damaging things you can do to a resume mechanically, and both arrive as free passengers with the picture.

A second-order cost: images inflate file size and parse time, and a heavy document risks a timeout finding. Both mechanisms are documented in [references/parsing-rules.md](parsing-rules.md).

So the parsing answer is: the photo is not the problem, the template around it is. That is not permission to include one.

### 3.2 Does a photo change your callback rate?

This is where genuine evidence exists, and it is gendered.

> **Study (5,312 CVs sent in pairs to 2,656 real job openings in Israel; paired field experiment; 2015):** Ruffle and Shtudiner, *Are Good-Looking People More Employable?*, Management Science. Each opening received one CV with no picture and one with either an attractive or a plain-looking photo. Attractive men received nearly double the callbacks of plain-looking men, and significantly more than the no-photo control. For women the ranking inverted: **women with no picture had a significantly higher callback rate than women with either an attractive or a plain-looking photo.**

The authors propose same-sex screener effects as the mechanism, and they went looking: in their follow-up, 24 of the 25 people screening CVs were women. The finding is not that attractiveness fails to help women in the labour market generally; it is that a photograph on a CV, in a screening process staffed overwhelmingly by women, does not help a woman and measurably hurts her.

This is one of the very few places in the resume literature where the evidence supports genuinely gender-specific guidance, and it belongs stated plainly rather than buried under a general "photos are risky":

- **If you are a woman: no photo.** The evidence points one way and it points hard.
- **If you are a man: no photo anyway.** The upside was concentrated in the attractive condition — a bet on a stranger's judgement of your face — while the anglophone markets treat the photo as a liability regardless.

Corroborating field experiments exist in Italy (*Economia Politica*, 2020) and Spain (IZA discussion paper 16119), both finding beauty premia in callbacks with gendered structure. Caveats worth keeping: the Israeli experiment is from 2015, in a market where photos on CVs were then common, and the effect size does not travel even where the mechanism does. Nothing here is a claim about how a specific German mid-size employer will read your file.

### 3.3 Is a photo expected where you are applying?

| Market | Convention | Detail |
|---|---|---|
| **US, Canada** | **No — strong professional norm** | Many employers instruct screeners to discard photo-bearing resumes, or strip them, to reduce discrimination exposure. A photo reads as unfamiliarity with the market. |
| **UK, Ireland** | **No — strong professional norm** | Same reasoning. Recruitment agencies routinely remove them before forwarding. |
| **Australia, New Zealand** | No | Follows the anglophone norm. |
| **Netherlands, Nordics** | No, or declining fast | Once more common, now unusual outside customer-facing and creative roles. |
| **Germany, Austria, Switzerland** | Traditionally yes, and still widely expected in traditional sectors | **But legally optional since the 2006 equal-treatment act (AGG).** An employer may not require one, and omitting it is lawful. International firms and tech employers increasingly do not expect it. |
| **Spain** | Still close to expected | The most photo-attached of the large Western European markets. |
| **France** | Common, increasingly optional | Large international employers are actively moving away from it. |
| **Italy** | Optional and flexible | A photo-less application will not be discarded. Common on the traditional `curriculum vitae`, absent from most tech applications. |
| **Poland, CEE** | Common | Frequently built into local templates. |
| **Anywhere running anonymised screening** | **Never** | Public-sector blind-recruitment schemes and employers using de-identification tooling. A photo can invalidate your application against their own process. |

### 3.4 The rule

**Default to no photograph. It is the only choice that is never wrong.**

In the anglophone markets it is expected. In the Nordics and the Netherlands it is unremarkable. In DACH it is lawful, explicitly protected by the equal-treatment act, and will not get you screened out — the belief that a German employer will bin a photo-less `Lebenslauf` is a legacy expectation, not a rule, and it is weakest at exactly the employers most likely to be running an ATS.

The one exception worth the effort: **if you are applying into small and mid-size traditional DACH employers — family firms, `Mittelstand` manufacturers, regional professional practices — keep a market-specific variant rather than one global file.** A studio headshot, neutral background, business dress, top right of the `Lebenslauf`, in a single-column layout that would parse identically without it. Never a cropped holiday photo. And never carry that variant into an application anywhere else.

---

## 4. Personal details

### 4.1 The field table

| Field | US, CA | UK, IE | DACH | IT, FR, ES | PL, CEE | Nordics, NL, AU |
|---|---|---|---|---|---|---|
| Name | Yes | Yes | Yes | Yes | Yes | Yes |
| Email (one) | Yes | Yes | Yes | Yes | Yes | Yes |
| Phone with international prefix | Yes | Yes | Yes | Yes | Yes | Yes |
| City and country | Yes | Yes | Yes | Yes | Yes | Yes |
| Full street address | **No** | **No** | Still common | Optional | Optional | No |
| LinkedIn or portfolio URL as literal text | Yes | Yes | Yes | Yes | Yes | Yes |
| Date of birth | **No** | **No** | Common | Optional, declining | Common | No |
| Place of birth | No | No | Traditional, declining | No | Sometimes | No |
| Photograph | **No** | **No** | Traditional, optional | ES close to expected; IT, FR optional | Common | No |
| Marital status | **No** | **No** | Legacy, declining | No | Sometimes | No |
| Children or dependants | **No** | **No** | Legacy, declining | No | No | No |
| Nationality or citizenship | No — state authorisation instead | No — state authorisation instead | Common | Common | Common | No |
| **Work authorisation** | **State it when it is live** | **State it when it is live** | **State it when it is live** | **State it when it is live** | **State it when it is live** | **State it when it is live** |
| Gender | No | No | No | No | No | No |
| Health, disability, medical | **Never** | **Never** | **Never** | **Never** | **Never** | **Never** |
| National ID or passport number | **Never** | **Never** | **Never** | **Never** | **Never** | **Never** |
| Driving licence | Only if the job requires it | Only if the job requires it | Common | Common | Common | Only if required |
| GDPR consent clause | Not required | Not required | Not required | Not required, conventional in IT | Not required, conventional in PL | Not required |
| Handwritten signature, place and date | No | No | Conventional, declining | No | Sometimes | No |

Three cross-cutting rules:

- **A driving licence is a capability, never a number.** Write `Full driving licence, category B` when the role requires driving, and nothing otherwise.
- **Special-category data never appears.** Health, disability, religion, trade union membership, political opinion, ethnicity, sexual orientation. Under GDPR these carry a separate and stricter legal basis, and putting them on your own CV drags the employer into processing they did not ask for.
- **US voluntary EEO self-identification is not the resume.** The race, gender, veteran and disability questions in a US application form are separate, statutorily driven, firewalled from the hiring team, and answering or declining them does not reach the reviewer. Candidates confuse this with the resume constantly. It is not the same object.

> **Vendor-documented (August 2026):** Textkernel's published parser quality codes flag driving licence number, passport number, marital status and date of birth as suggested-improvement findings — the parser explicitly notices these fields and marks their presence as something to remove. Mechanics in [references/parsing-rules.md](parsing-rules.md).

### 4.2 Myth one: "it is illegal to put your date of birth on a US resume"

**False.**

> **Folklore — no traceable source:** the claim that US law prohibits a candidate from stating their age, date of birth or marital status on a resume. No statute does. The claim circulates because it sounds like a plausible summary of a real law, and no source that repeats it cites a provision.

What the law actually does is constrain the **employer**, not you. The Age Discrimination in Employment Act prohibits discrimination on the basis of age; it does not govern what a candidate volunteers. The regulator's own guidance says that the statute does not explicitly prohibit an employer from asking an applicant's age or date of birth, but that such requests will be closely scrutinised to ensure the inquiry was made for a lawful purpose.

So there is no legal barrier in either direction. **The correct framing is strategic:**

Volunteering a protected characteristic hands a screener data they did not ask for and should not use. It cannot help you — no US reviewer has ever advanced a candidate because they knew their birth year — and it can only hurt you, through a bias channel you opened yourself. Zero upside, non-zero downside, and the decision costs nothing.

The same logic covers marital status, number of children, and a photograph in an anglophone market. Leave them off because there is nothing to gain, not because a law says so. Getting the reason right matters: a reader who believes it is a legal rule will assume the rule vanishes at the EU border and will then include everything.

### 4.3 Myth two: "a GDPR consent clause is mandatory on every CV sent in the EU"

**False**, and this one is more specifically traceable: it is a Polish convention, over-generalised by CV-builder content into a pan-European legal requirement, with an Italian habit reinforcing it.

> **Folklore — no traceable source:** the claim that GDPR requires a data subject to attach a consent clause to their own CV. No provision of the Regulation imposes any obligation on a data subject to authorise processing of their own data in a document they send voluntarily. Every page repeating it cites the Regulation as a whole and no article.

The legal reality is the reverse of the folklore. An employer processing a job application generally relies on **Article 6(1)(b)** — steps taken at the request of the data subject prior to entering into a contract — or on **Article 6(1)(c)** for a legal obligation, or on **Article 6(1)(f)** legitimate interest. Consent is a poor legal basis in an employment context precisely because it must be freely given, and a candidate is not in a position to freely refuse. Polish legal commentary itself confirms that a missing clause is not a problem for the application.

Where the clause has a residual real purpose is **retention beyond the current vacancy**: an employer that wants to keep your CV on file for future openings does need a basis for that, and consent is the usual one. That is the employer's problem to solve, in their own form, and most application flows have a checkbox for it.

**The rule:**

- **Nowhere in the EU is the clause required.** Its absence will not get your application discarded.
- **In Italy and Poland it is a strong convention and costs you one line.** If it makes you comfortable, include it — Italian CVs have carried `Autorizzo il trattamento dei miei dati personali` for two decades and every Italian recruiter has read thousands. It is a habit, not a gate.
- **Everywhere else, leave it off.** On a US or UK resume it reads as a template artefact from another market.
- **The genuinely useful implication is the opposite one:** because special-category data such as health requires an explicit and separate legal basis under Article 9, the sound response is to keep that data off the CV entirely rather than to attach a clause purporting to authorise it.

### 4.4 The one detail that really does cause automatic rejection

Work authorisation. And it is not rejected through the resume at all — it is rejected through a **knockout question** in the application form.

This is the single most under-taught mechanic in the field. Everything else in this document is about a human's reaction to your document. This one is about a boolean.

> **Vendor-documented (August 2026):** Workday Recruiting exposes twelve mapped eligibility questions available for disqualification, among them legal work authorisation and sponsorship requirement. Answers generate calculated fields usable in Automatic Stage Routing condition rules and can carry positive or negative scores. Greenhouse's auto-reject rules act only on custom questions of type Yes/No, single-select or multi-select — never on the resume, never on free text, never on a match score.

Read those two together and the mechanism is exact: **the auto-reject surface is the structured answer, not the document.** Which is also why an ambiguous answer is expensive. A field that cannot be evaluated cleanly is resolved against you, either by the rule or by the recruiter clearing a queue of three hundred applications.

The common failure modes, all of them self-inflicted:

| What candidates do | What happens |
|---|---|
| Leave the sponsorship question blank | Treated as the disqualifying answer, or the application is incomplete and never routed |
| Answer "it depends" or "happy to discuss" in a free-text box | Not a value the rule can read; falls to a human with no time to investigate |
| Answer "yes, I will need sponsorship" when they hold a work permit | Voluntary disqualification against a rule that would have passed them |
| Say nothing anywhere and hope it comes up later | It comes up at offer stage, which is the most expensive possible moment for both sides |

**State it affirmatively and unambiguously, in the form and once on the resume**, in the contact block or the last line of the summary:

```text
EU citizen — no sponsorship required
Authorised to work in the US — no sponsorship required
UK right to work — settled status, no sponsorship required
Authorised to work in the EU and the UK — no sponsorship required
```

Three refinements:

1. **State the authorisation, not the passport.** `Authorised to work in the EU` answers the employer's actual question without volunteering a nationality, which in most markets is a protected characteristic.
2. **If you do need sponsorship, say so plainly and early.** The alternative is a rejection later, after you have spent four interview rounds on it. Employers that sponsor say so; employers that do not will not be persuaded by ambiguity.
3. **Cross-border applications are where this bites hardest.** An Italian applying to a US-headquartered company through a global portal will meet the US authorisation question even when the role is in Milan. Answer for the role's location, and if the form does not let you, write one line in the free-text field saying which.

---

## 5. What the document is called, and how many you keep

Naming is a market convention too, and getting it wrong is a small but free signal of unfamiliarity.

| Market | Term | Notes |
|---|---|---|
| US, Canada | **Resume** | *CV* means an academic document, typically long and complete. Using it for a two-page industry document reads as foreign. |
| UK, Ireland | **CV** | Means the ordinary two-page industry document. *Resume* is understood but unusual. |
| Australia, NZ | **Resume** or **CV**, interchangeably | Nobody minds. |
| Germany, Austria, Switzerland | **Lebenslauf** | Tabular by tradition; part of a bundle with cover letter and certificates. |
| Italy | **Curriculum vitae** | Often abbreviated CV; `curriculum` alone is idiomatic. |
| France | **CV** | *Curriculum vitae* in full is dated. |
| Spain | **Currículum** or **CV** | — |
| Academia, anywhere | **CV** | Unbounded, complete, publication-led. A different document, not a longer resume. |

Three operational points:

**Do not send a Europass CV to a private employer.** The European Commission's Europass format is table-driven, icon-heavy, and sprawls across pages — three properties that are separately damaging to extraction and jointly fatal to readability. Use it only where a public administration or an EU institution explicitly requires that format, which some do, and then treat it as a compliance artefact rather than as your application document.

**Keep one file per market, not one global file.** The variants are small — photo or no photo, address granularity, date of birth, the Italian privacy line, the length target — but they are exactly the details a local reader notices. Two or three named variants in a folder cost nothing to maintain and remove the temptation to compromise: a file that tries to satisfy DACH and US convention simultaneously satisfies neither. The mechanics of keeping variants in sync without letting them diverge on facts are in [patterns/two-document-strategy.md](../patterns/two-document-strategy.md); the file-naming rules that matter to the human downloading forty of them are in [references/parsing-rules.md](parsing-rules.md).

**Whether a cover letter is expected is a market variable too.** It is effectively obligatory in DACH, where the `Anschreiben` is the piece the reader opens first; it is conventional in France, Italy and the Netherlands; it is optional and frequently unread in US and UK tech. The evidence on when one is actually read, and what to put in it, is [guides/06-cover-letters.md](../guides/06-cover-letters.md) — this document only tells you that the answer differs by country.

---

## 6. Language, qualifications and referees

Three smaller conventions that travel badly, grouped because they share a failure mode: each one is invisible to the person who grew up with it and illegible to everyone else.

### 6.1 Which language to apply in

**Apply in the language of the posting.** That single rule resolves almost every case.

A German-language posting gets a German `Lebenslauf`, even at a company whose engineering language is English — the posting language tells you who reads the first screen, and it is usually a local HR generalist rather than the hiring team. A posting written in English at the same company gets an English CV, and translating it into German anyway reads as a mismatch rather than as effort.

- **Multinational tech in Italy, Spain and France** posts in English and expects English. Sending a `curriculum` in Italian to an English-language posting signals you did not read it.
- **Public sector and regulated industries** almost always want the local language, whatever the company's internal working language is.
- **Never combine two languages in one file.** Parallel-text layouts are both a reading problem and an extraction problem; keep separate files, as in the market-variant rule above.
- **Do not machine-translate a CV you cannot proofread.** A fluent-looking document from someone whose interview reveals A2 German is a worse outcome than an honest English application.

### 6.2 Language proficiency: two incompatible notations

| Convention | Used in | Form |
|---|---|---|
| **CEFR** | Continental Europe, and increasingly everywhere in the EU | `A1` to `C2`, plus `native` |
| **Anglophone descriptive** | US, Canada, UK, Ireland, Australia | `Native`, `Fluent`, `Professional working proficiency`, `Conversational` |

The failure runs in both directions. A US recruiter reading `English — C1` frequently does not know whether that is good, and a German recruiter reading `German — fluent` treats it as an unverifiable self-assessment, because in that market the scale exists precisely so that people stop saying "fluent".

**Write both.** It costs six words and it is unambiguous to either reader:

```text
Italian — native · English — C1, full professional proficiency · German — B1, conversational
```

Two supporting rules. **Name a certificate only where language is an actual job requirement** — IELTS, TOEFL, Goethe-Zertifikat, DELE — and only if it is recent enough to mean something. And **never render a language level as a bar, a set of stars or a percentage**: those graphics extract as nothing at all, and they tell a human nothing either, since a bar at four fifths is four fifths of a scale no one defined ([references/parsing-rules.md](parsing-rules.md)).

### 6.3 Grades, degrees and what a foreign reader cannot decode

Assume the reader cannot decode your grading scale, because they cannot. The German `Note` runs from 1.0 as the best to 4.0 as a pass, which is the exact inverse of the US intuition that a higher number is better; an Italian `110/110 e lode` is meaningless outside Italy; a UK `2:1` is meaningless outside the UK and Ireland, where it is simultaneously a hard filter on many graduate schemes.

| Market | Convention | Include it when |
|---|---|---|
| US, Canada | GPA on a 4.0 scale | Early career and strong. Drop it after roughly three years of work |
| UK, Ireland | Degree classification: First, 2:1, 2:2 | Always at graduate level — many schemes filter on a 2:1 |
| Germany, Austria, Switzerland | `Note`, 1.0 best to 4.0 pass | Common. Gloss it for a foreign reader: `1.3 (top of a scale where 1.0 is best)` |
| Italy | `110/110`, with `e lode` | Common domestically. Gloss or omit abroad |
| France | Grade plus institution type | The `grande école` distinction carries more weight than the mark |
| Elsewhere | Omit unless it is a filter | A grade nobody can interpret is a line of noise |

**Give the local degree name and the recognised equivalent**, in that order, and never invent a credential:

```text
Laurea Magistrale in Ingegneria Informatica (MSc equivalent) — Politecnico di Milano, Italy
```

Name the institution with its city and country. Where a strong institution is genuinely unknown abroad, one short checkable clause is acceptable; a self-awarded ranking is not.

### 6.4 Referees: the biggest quiet anglophone split

| Market | Convention |
|---|---|
| US, Canada, UK, Ireland | **No referee names or contact details on the document.** They are requested later, at offer stage |
| Australia, New Zealand | **Two referees with name, title, relationship and phone number are conventional on the CV itself** |
| Netherlands | `Referenties op aanvraag` still common and harmless |
| DACH | No referee list. `Arbeitszeugnisse` — the written employer certificates — are attached instead, and they carry a codified language of their own |
| Italy, France, Spain | No |

Two rules regardless of market. **Delete "References available on request"** — it is a suggested-improvement finding in the published parser quality codes and it conveys nothing, since every employer knows they may ask ([references/parsing-rules.md](parsing-rules.md)). And **never publish a referee's mobile number to a public job board** without asking them first; in Australia, where listing them is the norm, ask before every campaign rather than once.

---

## 7. The regulation that governs automated screening

Written for a candidate, not a compliance officer. The question this section answers is not "what must an employer do" but **"what am I entitled to, and which instrument actually has teeth in August 2026"**.

### 7.1 The EU AI Act: high-risk, but mostly deferred

The AI Act classifies recruitment, CV screening, candidate ranking, promotion and termination as **high-risk** systems under Annex III. That classification carries the heavy obligations: risk management, data governance, logging, technical documentation, human oversight, accuracy and robustness requirements.

Those obligations are not in force for you today.

Regulation (EU) 2026/1744 — the Digital Omnibus on AI, published in the Official Journal on 24 July 2026 and in force from 27 July 2026 — deferred the Annex III standalone high-risk obligations from 2 August 2026 to **2 December 2027**, and the Annex I embedded-system obligations to 2 August 2028.

What was **not** deferred, and applies from 2 August 2026:

- **Article 50, transparency.** You should be told when an AI system is assessing you. This is the provision a candidate can actually point at today.
- **Article 4, AI literacy.** Organisations deploying these systems must ensure the staff operating them understand them well enough to use them properly.

Penalties run to 15,000,000 euro or 3% of global annual turnover, whichever is higher.

The deferral is a postponement, not a repeal. Anything you read published before July 2026 that states the high-risk duties began on 2 August 2026 is now wrong.

### 7.2 GDPR Article 22: the sharper instrument today

Article 22 has been binding since May 2018, which makes it the live instrument while the AI Act's high-risk duties wait for December 2027.

It gives you a **right not to be subject to a decision based solely on automated processing** — including profiling — which produces legal effects concerning you or similarly significantly affects you. A rejection that ends your candidacy qualifies on any sensible reading.

The important part is how strictly "solely" is read:

**The CJEU's SCHUFA ruling (C-634/21, December 2023) held that a rubber-stamp human review does not break the chain.** If the human involved has no real ability or authority to depart from the automated output — if they are clicking through a ranked list rather than genuinely deciding — the decision remains solely automated, and the Article 22 protections apply. Nominal human involvement is not human involvement.

Enforcement is warming. In September 2025 the Hamburg data protection authority fined a financial services provider approximately 500,000 euro under Article 22 and Articles 13 to 15 for automated assessment without adequately explaining the logic of its rejections.

What this gives you in practice, and its honest limits:

- **You may make a subject access request** under Article 15, which covers the existence of automated decision-making and meaningful information about the logic involved.
- **It is a complaint route, not a callback route.** It is slow, it is adversarial, and no employer has ever hired someone who opened with it. Use it when you have a substantive reason to believe you were filtered unlawfully, not as a job-search tactic.
- **Its real value to you is indirect.** Article 22 is why serious employers keep a human in the loop who can actually overturn a score — which is the outcome you want, whether or not you ever invoke it.

### 7.3 Italy went first, and further

Italy enacted **Law No. 132 of 23 September 2025**, in force from 10 October 2025 — the first national AI law in an EU member state. Its implementing decrees **prohibit fully automated decision-making for recruitment, dismissal and disciplinary action.**

That is a flat prohibition in the employment context, and it is independent of the European deferral. An employer processing an Italian applicant and auto-rejecting on an AI score in 2026 is exposed under Italian law and under GDPR Article 22 simultaneously — a double layer that exists regardless of what the AI Act's Annex III timetable does. For anyone applying in Italy, this is the strongest protection in the document.

### 7.4 Pay transparency, and what is disappearing from EU application forms

The EU Pay Transparency Directive had a transposition deadline of 7 June 2026. Two provisions change what an application form may contain:

- **The employer must disclose the initial pay level or range** in the posting or before the interview.
- **The employer may not ask about your current or past pay.**

The practical consequence: **"what is your current salary" is being removed from EU application forms.** "What are your salary expectations" remains legal, remains present, and remains a live knockout field — Workday exposes salary expectations among its mapped eligibility questions, which means a number typed into that box can route your application automatically.

So the field that survives is the one that can disqualify you. Treat it as such: answer with a range anchored on the employer's own published range rather than on your current pay, and never leave it blank in the hope of negotiating later — a blank in a mapped field behaves like a bad answer.

### 7.5 The US patchwork

| Jurisdiction | What it requires | Status in August 2026 |
|---|---|---|
| **New York City (Local Law 144)** | Annual independent bias audit of automated employment decision tools, with adverse-impact results published, plus candidate notice at least 10 business days before use | In force. Penalties 500 to 1,500 dollars per violation. A December 2025 State Comptroller audit found enforcement had been minimal and complaint-driven, and recommended a proactive posture |
| **Illinois** | Prohibits use of AI that has a discriminatory effect in employment decisions, and requires notice when AI is used | In force from 1 January 2026, as an amendment to the state Human Rights Act |
| **Colorado** | Broad duties of care for developers and deployers of high-risk AI systems | Start date pushed back and scope narrowed before taking effect |
| **Federal** | No AI-specific hiring statute | Enforcement posture has become deregulatory. **The underlying anti-discrimination statutes are unchanged** — Title VII, the ADEA and the ADA apply to an algorithm exactly as they apply to a person |

The last row is the one to hold on to. A deregulatory posture toward AI-specific rules does not create an exemption from discrimination law; it changes who is likely to bring the case.

### 7.6 The case that changed vendor behaviour

**Mobley v. Workday** (N.D. Cal.) held that an ATS vendor can be liable **as an agent of employers**, on the theory that it performs screening functions the employers would otherwise perform themselves. A nationwide ADEA collective action was conditionally certified on 16 May 2025, and California FEHA claims survived dismissal in June 2026.

This is the best available explanation for something a candidate can observe directly: **every major ATS vendor's 2026 documentation aggressively disclaims auto-rejection and emphasises human review.** Greenhouse documents auto-reject as acting only on structured custom questions. Workday documents its eligibility questions as feeding routing rules configured by the customer. Nobody markets "the system rejects unsuitable resumes for you" any more.

That is legal risk management rather than altruism, and it does not matter: the effect on you is the same. **The auto-reject surface has been shrinking, and it has been shrinking in the candidate's favour.**

Consistent with that, the one interview-based study of what recruiters say their systems do found 92% — 23 of 25 recruiters across more than ten platforms — reporting that their ATS does not auto-reject on formatting, content or design. Cite it as what it is: twenty-five qualitative interviews from 2025, not a survey of thousands, with the authors' own confidence interval spanning most of the plausible range. The claim-by-claim treatment is in [references/evidence-and-myths.md](evidence-and-myths.md).

### 7.7 The practical read

The regulatory direction of travel is **mandatory transparency plus genuine human oversight**. Both the EU instruments and the US municipal ones push the same way: tell the candidate a machine is involved, and make sure a person who can actually overrule it is.

Which means the mental model most candidates carry — an invisible robot silently rejecting them before any human sees the file — is becoming **less** true over time, not more. It was always a weaker claim than it sounded ([references/evidence-and-myths.md](evidence-and-myths.md)), and the law is now actively working against it.

Your leverage, in order:

1. **The knockout question**, which is the one place a rule really can end your application, and the one place you control the input exactly.
2. **The structured field**, because a recruiter's search only returns records the parser populated.
3. **The document**, read by a human under time pressure.
4. **The legal instrument**, which is real, which is worth knowing about, and which is fourth for a reason.

---

## Common Mistakes

| Mistake | What actually happens |
|---|---|
| "I forced it onto one page because that's the rule" | The rule is US early-career. At mid-level and above the paired simulation ran the other way, and the effect grew with seniority. You deleted evidence to satisfy a convention that was never yours. |
| "I sent my two-page resume to an Australian contract role" | You removed the per-project breakdown that market reads for. Three to seven pages is normal there and yours looks thin. |
| "My second page has three lines on it" | Worse than one page. Relevance density is the constraint; a mostly-empty page advertises that you had nothing more to say. |
| "I added a headshot because my template had a slot for it" | The slot came with a sidebar, and the sidebar is what damages extraction. The photo was never the mechanical problem; the layout built around it is. |
| "I'm a woman and I added a professional photo to look polished" | The one paired field experiment on this found women with no picture had a significantly higher callback rate than women with any picture, attractive or not. This is the clearest gender-specific finding in the field. |
| "German employers require a photo, so I need one" | Legally optional since the 2006 equal-treatment act. An employer may not require it, and omitting it is lawful and will not get you screened out — least of all at the employers running an ATS. |
| "I put my date of birth because it's illegal for them to ask about age" | Neither half is right. Nothing prohibits you from volunteering it, and the statute constrains the employer, not you. You opened a bias channel with no upside. |
| "I added the GDPR clause because every EU template has one" | No provision requires it. It is a Polish convention with an Italian echo. Harmless in Italy and Poland, a template artefact anywhere else. |
| "I left the sponsorship question blank to avoid ruling myself out" | That is the field that genuinely auto-rejects. An unreadable answer resolves against you, either by rule or by a recruiter clearing a queue. |
| "I use one CV for every country" | Every market-specific detail is then wrong somewhere. Keep two or three named variants; the differences are small and free. |
| "I wrote 'English — fluent' on a German application" | In a market built on CEFR, an undefined adjective reads as an unverifiable self-assessment. Write the level and the gloss together. |
| "I left my referees' phone numbers off my Australian CV" | Two named referees with contact details are conventional there and their absence is noticed — the one anglophone market where the anglophone rule inverts. |
| "I put 110/110 e lode on a resume for a US company" | Nobody can decode it. Gloss a foreign grading scale or drop it; an uninterpretable grade is a line of noise. |
| "I sent my Europass CV to a startup" | Table-driven, icon-heavy, multi-page. Bad for the parser and worse for the reader. Use it only where a public body demands that exact format. |
| "The AI Act means they can't auto-reject me" | The high-risk obligations were deferred to December 2027. GDPR Article 22 is the instrument with teeth today, and in Italy the national law goes further. |

---

## See Also

- [guides/02-resume-anatomy.md](../guides/02-resume-anatomy.md) — what goes in each section, and what to cut, once you know how many pages your market gives you
- [references/parsing-rules.md](parsing-rules.md) — why the sidebar that carries your photo is the actual mechanical risk, and the quality codes that flag personal-data fields
- [references/evidence-and-myths.md](evidence-and-myths.md) — the claim-by-claim audit behind the auto-rejection model this document says is weakening
- [guides/01-how-screening-actually-works.md](../guides/01-how-screening-actually-works.md) — where the knockout question sits in the order of gates, and why it outranks the document
- [references/ats-catalog.md](ats-catalog.md) — how each vendor configures eligibility questions, routing rules and auto-reject
- [patterns/two-document-strategy.md](../patterns/two-document-strategy.md) — keeping market variants in sync without letting them diverge on facts
