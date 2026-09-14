---
id: ref-parsing-rules
title: "Parsing Rules: What Breaks a Resume Parser"
category: references
summary: The testable rules that decide whether a resume becomes a searchable record, built on published parser quality codes
read_when:
  - "the ATS filled in the wrong dates" / "the autofill got my job titles backwards"
  - "should my resume be one column or two" / "can ATS read tables"
  - "PDF or Word — which one do I send"
  - "my contact details disappeared" / "the recruiter said my resume came through blank"
  - "does the font matter" / "can I use icons for my email and phone"
  - "how should I write the dates" / "MM/YYYY or Jan 2021"
not_this_file:
  - "references/verification-toolkit.md — how to run the checks that prove your file obeys these rules"
  - "references/ats-catalog.md — which system uses which parser, and what each one does with the output"
markets: [global]
ats: [workday, greenhouse, successfactors, bullhorn, oracle]
stale_risk: medium
last_verified: 2026-08-18
related:
  - references/verification-toolkit.md
  - references/ats-catalog.md
  - guides/01-how-screening-actually-works.md
  - guides/02-resume-anatomy.md
  - patterns/two-document-strategy.md
---

# Parsing Rules: What Breaks a Resume Parser

> **Last Updated: August 2026** | **Markets: global** | **ATS: parser-level, applies to all**

**Read when:** the autofill got your dates or titles wrong · one column or two · PDF or DOCX · your contact details vanished · fonts, icons, tables, columns · how to write dates

**Not this file:** [references/verification-toolkit.md](verification-toolkit.md) — how to *run* the checks. This document is the rules; that one is the test harness.

## TL;DR

- **A parse failure rarely rejects you. It makes you unreachable or unsearchable, which is worse** — you exist in the database as a record nobody can find.
- **Single column, full width.** The market-leading parser vendor invested in machine learning specifically for column detection and still misclassifies roughly one in five true column separators.
- **Contact details go in the first lines of the document body.** Never in a Word header or footer: that is a separate XML part which body-text extraction never reads.
- **One date range, one line, `Mon YYYY – Mon YYYY`.** A range split across two lines is a fatal-severity finding in the only published parser quality specification.
- **The file format matters far less than the file's generator.** Word, Google Docs and LibreOffice exports are safe; design-tool exports and anything without a text layer are not.
- **Every rule here is verifiable in sixty seconds** with `pdftotext`. A rule you have not verified on your own file is a rule you are guessing at.

## Table of Contents
<!-- kb:toc -->
- [1. What a parser is, and what failing it actually costs](#1-what-a-parser-is-and-what-failing-it-actually-costs)
- [2. The quality codes: the only published, testable specification](#2-the-quality-codes-the-only-published-testable-specification)
  - [2.1 Fatal findings](#21-fatal-findings)
  - [2.2 Major findings](#22-major-findings)
  - [2.3 Data issues](#23-data-issues)
  - [2.4 Suggested improvements](#24-suggested-improvements)
- [3. Columns, and why the answer is still "one"](#3-columns-and-why-the-answer-is-still-one)
- [4. Section headings](#4-section-headings)
- [5. Dates](#5-dates)
  - [5.1 The rule nobody mentions: the document's own date](#51-the-rule-nobody-mentions-the-documents-own-date)
  - [5.2 Format](#52-format)
- [6. File format: the honest answer](#6-file-format-the-honest-answer)
- [7. Fonts, glyphs and encoding](#7-fonts-glyphs-and-encoding)
  - [7.1 The ligature failure](#71-the-ligature-failure)
  - [7.2 Rules](#72-rules)
- [8. Contact block, titles and employers](#8-contact-block-titles-and-employers)
  - [8.1 Contact details](#81-contact-details)
  - [8.2 Title and employer](#82-title-and-employer)
- [9. Where skills belong, and why the answer is "both"](#9-where-skills-belong-and-why-the-answer-is-both)
- [10. Tables, text boxes, images and charts](#10-tables-text-boxes-images-and-charts)
- [11. Tagged PDF](#11-tagged-pdf)
- [12. File name](#12-file-name)
- [Common Mistakes](#common-mistakes)
- [See Also](#see-also)
<!-- kb:toc:end -->

---

## 1. What a parser is, and what failing it actually costs

A resume parser is a piece of software that converts a document into structured fields: name, email, phone, a list of employers each with a title and a date range, a list of degrees, a list of skills. It is not the ATS. It is a component the ATS calls, and several major ATS vendors do not build their own — they license one.

This distinction matters because the two systems fail differently. When the **ATS** rejects you, it is because a knockout question you answered disqualified you, and that is a decision. When the **parser** fails, nothing is decided at all: the ATS still creates a candidate record, but the record is wrong or empty.

> **Vendor-documented (August 2026):** Greenhouse's support documentation states that when a resume cannot be parsed, the file is simply attached to the candidate and a recruiter must input the details by hand. Parse failure produces manual work, not rejection.

The real cost is downstream. Recruiters retrieve candidates by filtering and searching structured fields — skills, job titles, certifications, years of experience, location. A field the parser never populated is a filter you never appear in. You are not rejected; you are absent. Absence is indistinguishable from having never applied, and it is silent: nothing tells you it happened.

That reframing governs everything below. These rules are not about placating a gatekeeper. They are about making sure the record that represents you in a database is a faithful one.

---

## 2. The quality codes: the only published, testable specification

Most formatting advice in this field is assertion. One vendor publishes something better: Textkernel's parser emits a `ResumeQuality` object listing what it found wrong with a document, ranked by severity. Because the codes are public and the severities are the vendor's own, this is the closest thing to an objective specification that exists — and it contains several findings that contradict popular advice.

The bands are: **fatal** (400–499), **major** (300–399), **data issues** (200–299), **suggested improvements** (100–199).

### 2.1 Fatal findings

These are the ones to treat as hard rules.

| Code | Finding | Rule |
|---|---|---|
| 408 | Document exceeded the length limit and was truncated before parsing | Keep the document short. A long CV risks losing its tail entirely, silently. |
| 411 | Parsing timeout exceeded | Heavy graphics and embedded objects cost parse time. Strip them. |
| 412 | No sections found | Your headings are not recognisable as headings. See section 4. |
| 413 / 414 | Work history / education section not found | Same cause. |
| 415 / 416 | Work history or education inferred rather than declared | The parser had to guess where the section began. Declare the heading explicitly. |
| 417 | Academic CV detected, prone to errors, only the first work history parsed | Publications, grants, teaching and parallel appointment tracks make the parser give up after the first employment block. For industry roles, send a resume, not an academic CV. |
| **418** | **Date ranges written vertically on multiple lines** | Never put the start date on one line and the end date on the next. One range, one line, one string. This is what kills two-column templates that stack dates beneath the job title. |
| 419 | Employment section missing dates for jobs | Every role carries a start and an end. |
| **433** | **Columnar format detected and rearranged for readability** | Multi-column is a fatal-band finding *even when the parser recovers from it*. |
| 441 | Neither email nor phone found | Catastrophic. You are in the database and unreachable. |

### 2.2 Major findings

| Code | Finding | Rule |
|---|---|---|
| **300** | **Document was PDF format** | The parser flags PDF *as such*. Not fatal, and not a reason to abandon PDF — but it is the strongest published counter-evidence to "PDF is always fine". See section 6. |
| 301 | Apple Pages format | Never submit `.pages`. |
| 302 | First and last name not found | Your name must be live text at the top, not part of a logo or image. |
| 303 | Non-standard sections larger than work and education combined | Do not let a portfolio or personal-statement block dominate the document. |
| **311** | **Contact information located somewhere other than the top** | The contact block goes at the very top of the document body. |
| 312 | Publications section with significant content | Trim publications for industry applications. |
| 323 | Multiple sections of the same type | One employment block. Never "Relevant Experience" plus "Other Experience" plus "Consulting Experience". |
| 324 | Section with a header but no content | Delete empty scaffolding. |
| **325** | **Sections with no header** | Every content block is preceded by a heading. |
| 331 | More than thirty positions | Consolidate contract and agency work. |

### 2.3 Data issues

Missing email (211), phone (212), or location (213). **Jobs missing titles (221) or company names (222).** Multiple current positions at the same employer (223). **Jobs missing start (224) or end (225) dates.** No jobs within the past year (226). Outdated work history (227). Degrees missing names (231) or school names (232).

And one that surprises almost everyone:

| Code | Finding |
|---|---|
| **233** | **Dates placed in the education section** |

This contradicts mainstream advice, and the mechanism explains why: education dates get misattributed into the employment timeline and corrupt the computed years-of-experience figure — which is one of the fields recruiters filter on. The workable compromise is a graduation **year** alone, never a range, and never education placed above work history.

### 2.4 Suggested improvements

| Code | Finding | Note |
|---|---|---|
| 111 | References section included | Delete "References available on request." |
| **112** | **Separate skills section found; integrate into context** | The most interesting finding in the specification, and the subject of section 9. |
| 121–124 | Driving licence number, passport number, marital status, date of birth | Remove for anglophone markets. Convention differs in continental Europe — see [references/market-conventions.md](market-conventions.md). |
| 131–133 | Multiple addresses, emails or phone numbers | Exactly one of each. Two phone numbers means the parser picks one, and it may not be the one you use. |
| **141 / 142** | **Street-level addresses for employers or schools** | Company name and city only. Never the employer's postal address. |
| **151** | **Section headers not on a separate line** | The vendor's own phrasing is the best one-sentence statement of the rule in this entire field: every section should have a clear, unambiguous, commonly-used header on a separate line directly above the content associated with it. |
| 161 | Both high school and higher education listed | Drop secondary school once you hold a degree. |

---

## 3. Columns, and why the answer is still "one"

The column question generates more disagreement than any other, largely because both camps are arguing from anecdote. There are two pieces of real evidence, and they point the same way.

> **Vendor-documented (August 2026):** Textkernel reports that at least 15% of CV documents use a column layout, and describes its approach: detect visual gaps between text elements, then classify each gap as a column separator or not. Replacing a rule-based classifier with a gradient-boosting model improved gap classification from 82% to 91% overall — and, on the gaps that genuinely are column separators, from 60% to 82%. Their subjective well-rendered rate went from 62% to 90% across roughly seven hundred documents.

Read that carefully, because the headline number is not the important one. **After a dedicated machine-learning investment by the market-leading specialist vendor, roughly one in five true column separators is still misclassified.** And Textkernel is the good case. It also still emits fatal code 433 whenever it detects columns at all.

> **Study (13,100 real resumes, production HR platform, 2025):** Alibaba's layout-aware parsing work found that approximately 20% of resumes use non-linear multi-column layouts that break top-to-bottom, left-to-right reading flow. On typical resumes, naive extraction loses only two to four points of F1 against a layout-aware pipeline. On the complex, long-form subgroup, naive extraction collapses to F1 0.548 against 0.854 — losing roughly half the information in the document.

> **Field-verified (August 2026):** this was reproduced rather than assumed. A real resume carrying a six-column grid of headline metrics was rendered to PDF and extracted. The result was worse than the usual description of the failure. The three right-hand cells lost their number-to-label pairing completely: the numbers came out as three consecutive orphaned lines, and their three labels were spliced into a single line whose remainder then broke across three more. Neither a parser nor a human reading the extracted text can recover which number belongs to which metric. On screen, the document is flawless.

The failure mode is therefore not simply that the document is rejected, and not simply that sidebar content is orphaned. It is **interleaving**: content from one cell is spliced into another, so a skills list can appear inside an employer's bullet points and neither field survives intact.

**The rule:** single column, full width. If you have a two-column document you are attached to, it survives only if it passes the copy-paste test in [references/verification-toolkit.md](verification-toolkit.md) — and never put decisive content (skills, dates, employers) in a narrow sidebar. The cost of a single column is aesthetic. The cost of a broken sidebar is invisible data loss.

---

## 4. Section headings

Parsers locate sections by matching heading strings. A heading they do not recognise means a section they do not find, which is codes 412 through 416.

| Purpose | Use | Risky | Avoid |
|---|---|---|---|
| Employment | `Experience`, `Work Experience`, `Professional Experience`, `Employment History` | `Career History`, `Relevant Experience` | `My Journey`, `Where I've Been` |
| Education | `Education` | `Academic Background` | `Learning`, `Credentials` alone |
| Skills | `Skills`, `Technical Skills`, `Core Competencies` | `Toolkit`, `Tech Stack` | `What I'm Good At`, `Superpowers` |
| Summary | `Summary`, `Professional Summary` | `Profile`, `About Me` | `Elevator Pitch` |
| Certifications | `Certifications`, `Licenses & Certifications` | — | `Badges` |

Hard rules that follow from the codes:

1. **One heading per section type** (323). Never split employment across two differently named blocks.
2. **The heading sits on its own line**, not sharing a line with the first job (151).
3. **No decorative characters.** `▸ EXPERIENCE ▸` risks the whole line failing a string match.
4. **Do not merge section types.** `Education & Certifications` forces certifications to be filed as degrees.
5. **Never write a heading you do not fill** (324).
6. **No manual letter-spacing.** Writing `E X P E R I E N C E` inserts real space characters and destroys the match.

---

## 5. Dates

Dates are where the automatic years-of-experience figure is computed, and where a silent failure costs you a filter that reads `experience >= 5`.

### 5.1 The rule nobody mentions: the document's own date

> **Vendor-documented (August 2026):** Textkernel's FAQ states that the document's last-modified date must be supplied because it affects the interpretation of terms such as "current", and warns that without it, the latest experience on an old resume will be interpreted as current. The same documentation describes telling the parser when the resume was written as far more important than any other setting.

`Present` is resolved **relative to the file's date, not today's**. Many integrations feed the file's own metadata as that date. The consequence is concrete and nasty: **a PDF you generated two years ago and have been re-sending can cause "Present" to be computed as ending two years ago, silently shortening your current tenure.**

**Rule: re-export the file before each application campaign**, and check with `pdfinfo` that the modification date is recent.

### 5.2 Format

| Rule | Detail |
|---|---|
| **One range, one unbroken line** | Fatal, code 418. The most common cause is a template that stacks dates beneath the title. |
| **Every role has a start and an end** | Codes 224, 225, 419. No dangling `2019 –`. |
| Use `Mon YYYY` or `MM/YYYY` | `Jan 2021 – Mar 2024` or `01/2021 – 03/2024`. |
| Year-only ranges parse but lose information | The parser must assume a month, typically January, distorting tenure by up to eleven months per role. |
| **Never use a day component** | `03/04/2024` is unresolvable between the US and European conventions. This is a live trap for an Italian applying to a US system. If you use numeric dates, use `MM/YYYY` and nothing finer. |
| Use `Present` | The most reliably accepted token for a current role. Not `Now`, not `Today`, not `Ongoing`, not a dangling dash. |
| Separator: spaced en dash or hyphen | Avoid `to`, avoid arrows, avoid pipes. |
| **Absolute consistency across entries** | Mixed formats push the parser onto different matching branches; one branch fails and one job silently loses its dates. |
| No ranges in education | Code 233. Graduation year only. |

---

## 6. File format: the honest answer

This question is contested and most sources are wrong in both directions.

The strongest single data point cuts against the popular advice: **Textkernel emits "document was PDF format" as a major-band finding, purely for being a PDF.** Sovren's guidance, before Textkernel absorbed it, was blunter — poor parsing from a PDF is almost always caused by a file that looks fine and is internally corrupt.

The mechanism is structural. A PDF has no concept of a paragraph, a heading, or a reading order unless it is *tagged*. It is a list of glyph-drawing operations at coordinates, and the extractor must reconstruct logical order from geometry. A DOCX is XML with an explicit linear document body: the order is given, not inferred.

Against that, modern parsers handle clean PDFs well, DOCX rendering varies across machines, and every major ATS accepts both.

> **Study (47 templates tested against a live ATS, 2026):** the format effect is at most three percentage points of field extraction and runs in *opposite* directions depending on the generator — Google Docs scored 95% as DOC and 96% as PDF, MS Office 88% as DOC and 85% as PDF. Across templates within a single generator, extraction ranged from 36% to 100%.

**That is the finding that settles it. The format effect is three points. The template effect is sixty-four.** Arguing about the extension while using a broken template is optimising the wrong variable.

| Generator | Verdict | Why |
|---|---|---|
| Word → PDF | Safest PDF | Writes a tagged PDF by default; fonts embedded with correct character maps. |
| Google Docs → PDF | Safe | Clean single text stream, sane reading order. |
| LibreOffice → PDF | Safe | Can emit accessible PDF. |
| LaTeX → PDF | Conditional | Real text layer, but severe ligature and encoding traps. See section 7. |
| Canva, Figma, Sketch → PDF | Avoid | Text frequently exported as outlines or fragmented runs; layouts are absolutely positioned. |
| InDesign → PDF | Risky | Can be excellent if deliberately configured; typically frame-fragmented with reading order following frame creation order. |
| Scanned or photographed | Never | No text layer. Optical character recognition is a paid add-on the employer may not have bought, in which case the file yields literally nothing. |
| Apple Pages | Never | Code 301. |

**The rule:** default to a text-layer PDF exported from Word, Google Docs or LibreOffice — and never one you have not extracted yourself. Keep a single-column DOCX in reserve for legacy portals and for agencies, who routinely need to edit and rebrand your document. Where a portal states a preference, that overrides everything here.

---

## 7. Fonts, glyphs and encoding

### 7.1 The ligature failure

High-quality fonts render `fi`, `fl`, `ff` as single glyphs. When a PDF embeds a subset font, the glyph-to-character map is often written incorrectly, and text extraction emits nothing, a placeholder, or the wrong character where the ligature was.

The affected words are precisely the ones you cannot afford to lose:

```text
profile   workflow   certification   qualified   efficiency   significant
classification   office   staff   benefits   firewall   configuration
traffic   verification   identification   notification
```

A resume that loses `certification` and `configuration` to a font bug has lost two of the terms recruiters filter on, and it looks perfect on screen.

### 7.2 Rules

| Item | Rule |
|---|---|
| Font family | System-standard and widely embedded: Calibri, Arial, Helvetica, Times New Roman, Georgia, Garamond, Verdana, Cambria, Lato, Open Sans. |
| Embedding | Fonts must be embedded with a valid character map. `pdffonts` shows this. |
| Ligatures | Disable them. In Word: Advanced, Ligatures, None. In LaTeX: T1 font encoding, or disable the `f` ligature set. Re-verify after. |
| Encoding | UTF-8. Accented characters are fine in modern parsers when the character map is correct — verify rather than assume. |
| Bullet glyph | `•` or a plain hyphen. Both extract predictably. |
| Symbol fonts | Never. Wingdings and Webdings glyphs are legacy-encoded and map onto Latin letters, so a checkmark can extract as a stray letter in the middle of your text. |
| Emoji | Never. |
| **Icon fonts** | **Never.** Font Awesome and its relatives live in the Unicode Private Use Area, which by definition has no standard meaning. Extraction yields an undefined character, a question mark, a box, or a random letter — and it is inserted immediately beside your email address and phone number, which is the most expensive place on the document to corrupt. |
| Image icons | Invisible to extraction. They silently drop whatever they labelled. |
| Name as an image or logo | Code 302. |

---

## 8. Contact block, titles and employers

### 8.1 Contact details

Code 311 makes contact information anywhere but the top a major finding; code 441 makes its total absence fatal.

**The header and footer trap is mechanical, not stylistic.** In a DOCX, header and footer content lives in a separate XML part from the document body. An extractor that reads the body part never sees it. In a PDF, header text is page content, but reading-order heuristics frequently drop or reorder it.

1. The contact block is the **first text of the document body**. Not in a Word header field, not in a text box, not in a table cell, not in a sidebar.
2. **One** email, **one** phone, **one** location (codes 131–133).
3. **Location as `City, Country`.** No street, no postal code (code 213 wants a location; codes 141–142 reject street-level detail).
4. **Always write the international dialling prefix.**

   > **Vendor-documented (August 2026):** Bullhorn's documentation of the Textkernel parser describes the algorithm: it first searches for an international calling code; if absent, it examines the address field to work out the relevant prefix; if the address is invalid, it falls back to unspecified heuristics.

   Writing `+39 340 123 4567` removes the guess entirely. This matters most in exactly the case where guessing is most likely to be wrong — applying across a border, where your address country and the employer's country differ.
5. **Write the LinkedIn URL as visible literal text**, `linkedin.com/in/yourname`, not as an icon carrying a hyperlink. A URL that exists only as a link annotation attached to an icon glyph is not in the text layer, and most resume parsers do not read link annotations.

### 8.2 Title and employer

The failure mode is the parser assigning your employer as your job title, or the reverse — codes 221 and 222.

```text
Senior Backend Engineer
Acme S.p.A. — Milan, Italy
Mar 2021 – Present
```

1. **Title on its own line, first.** The strongest heuristic any parser has is positional.
2. **Company on the second line**, with its city. A company gets a location; a title never does. That asymmetry is itself a signal the parser uses.
3. **Never put title and company on one line separated by a comma.** `Engineer, Acme` is ambiguous with `Acme, Engineer`. A pipe or em dash is safer; separate lines are safest.
4. **Use the real, searchable company name.** Recruiters search employer names constantly.
5. **Disambiguate creative internal titles.** If your official title is unconventional, write the market-standard title and put the internal one in parentheses. The searchable string must be the one people search for.
6. **Give each promotion its own dated entry.** Stacking roles under one employer without dates triggers code 223.

---

## 9. Where skills belong, and why the answer is "both"

Two authorities appear to disagree. Textkernel's code 112 asks you to remove the separate skills section and integrate skills into context. Meanwhile the largest survey of what recruiters actually filter on puts skills first, at 76.4% — ahead of education, job titles and certifications.

They do not actually disagree, and the mechanism reconciles them.

> **Vendor-documented (August 2026):** Textkernel's candidate data model attributes each extracted skill to the specific job or education entry it appeared in, and derives from that attribution the years of experience for that skill and the date it was last used. Skills are returned in four separate buckets — IT, language, soft and professional — each carrying that duration and provenance.

So: **a skill named inside a dated job entry yields `skill + years + last used + source role`. The same skill in a floating keyword block yields a bare string with no duration, no recency and no provenance.** One is evidence; the other is an assertion.

But the recruiter's filter facet is populated from the skills field, and a skill absent from it is a filter you do not appear in.

**The rule is therefore both, deliberately:**
- Keep a compact skills block so the filter finds you.
- Ensure every skill in that block **also** appears inside a dated bullet, so it acquires duration and recency.
- Never list a skill in the block that appears nowhere in your history. Recruiters interview from that list, and a skill with no attached role is the first thing an interviewer probes.

Full treatment of how to write the block and choose the terms is in [guides/05-keywords-and-tailoring.md](../guides/05-keywords-and-tailoring.md).

---

## 10. Tables, text boxes, images and charts

| Element | Rule | Reason |
|---|---|---|
| Tables | Avoid, including invisible-border tables used for layout | Cell content extracts cell by cell in an order that depends on the extractor. A two-column skills table can emerge column-major, gluing unrelated terms together. |
| Text boxes and frames | Never | In DOCX they are anchored drawing objects outside the main text flow; in PDF they are independent blocks whose place in reading order is arbitrary. |
| Word headers and footers | Never place content there | Separate XML part. See section 8.1. |
| Images, logos, photographs | Remove | They contribute nothing to the record, inflate file size and cost parse time (code 411). Photograph conventions are a separate question — see [references/market-conventions.md](market-conventions.md). |
| **Skill rating bars, stars, percentages, donut charts** | **Never** | Pure vector graphics: they extract as nothing. And they are semantically empty to a human as well — a bar showing a language at four fifths is four fifths of what, assessed by whom? They also contradict the mechanism in section 9, which infers proficiency from dated context rather than from self-assessment. |
| Horizontal rules | Use a paragraph border, not a row of dash characters | Character rules inject junk lines into extracted text. |
| Page breaks | Never split a single job entry across one; never repeat headings on the second page | Repeated headings trigger code 323. |
| File size | Keep well under a megabyte | Accepted ceilings are far above the size at which parsing stays reliable. |

---

## 11. Tagged PDF

A tagged PDF carries an explicit structure tree and a defined reading order, independent of glyph coordinates. It is free, almost nobody does it, and it is worth doing — with a caveat.

- **The upside is real but capped.** A parser using a structure-aware extraction library gets reading order for free and the column problem disappears.
- **Most resume parsers do not read tags.** They run raw extraction and re-infer structure with their own models — Textkernel's own engineering account describes geometric gap analysis, not tag reading. So tagging buys nothing there.
- **It costs nothing and it is a good proxy.** A file that tags cleanly with correct reading order almost certainly extracts cleanly too.

**The one rule worth taking from this section:** in Word and Google Docs, always use **Export** or **Save As PDF**, never **Print to PDF**. The print path strips tags and can rasterise. It is the highest-value, lowest-effort item in this document.

---

## 12. File name

Parsers read bytes, not names. No vendor documents file-name-based scoring, and the claim that a badly named file gets discarded has no source — see [references/evidence-and-myths.md](evidence-and-myths.md).

It still matters, for the human who downloads forty files into one folder:

```text
Firstname-Lastname-Resume.pdf
Firstname-Lastname-Senior-Backend-Engineer.pdf
```

Name first, hyphens rather than spaces, ASCII only, no version numbers or dates, never the previous company's name, and never `final`.

---

## Common Mistakes

| Mistake | What actually happens |
|---|---|
| "I used a beautiful two-column template" | Sidebar content interleaves into job descriptions. One in five column separators is misread even by the best parser, and the finding is fatal-band regardless. |
| "My contact details are in the header so they appear on every page" | In DOCX they live in a separate XML part and body extraction never reads them. Code 441 territory: unreachable. |
| "I've been sending the same PDF for two years" | `Present` is resolved against the file's own date. Your current role may be computing as having ended when the file was made. |
| "I put my dates under the job title on a separate line for a cleaner look" | Code 418, fatal. The range must be one unbroken string. |
| "I used icons instead of the words 'email' and 'phone'" | Icon fonts occupy the Private Use Area, which has no defined meaning. The extraction inserts junk directly beside your contact details. |
| "I listed my skills with proficiency bars" | Vector graphics extract as nothing, and the block conveys no information to a human either. |
| "I exported from Canva because it looked best" | Text is frequently outlined or fragmented and the layout is absolutely positioned. The template effect is twenty times the format effect. |
| "PDF is safer than Word, everyone says so" | The one published quality specification flags PDF as a major finding. Both are accepted everywhere; the generator is what decides. |
| "I put my graduation dates in the education section" | Code 233. Education dates leak into the employment timeline and corrupt the computed years of experience. |
| "I moved my skills into the bullets because the parser prefers it" | Then you vanish from the skills filter, which is what 76.4% of recruiters use first. Do both. |

---

## See Also

- [references/verification-toolkit.md](verification-toolkit.md) — how to prove your file obeys every rule here, in about a minute
- [references/ats-catalog.md](ats-catalog.md) — which system runs which parser, and what each does with the extracted record
- [guides/01-how-screening-actually-works.md](../guides/01-how-screening-actually-works.md) — why an unparsed field costs you retrieval rather than a rejection
- [patterns/two-document-strategy.md](../patterns/two-document-strategy.md) — how to keep a parser-safe document without giving up a designed one
- [references/market-conventions.md](market-conventions.md) — photographs, personal details and the conventions that vary by country
- [guides/05-keywords-and-tailoring.md](../guides/05-keywords-and-tailoring.md) — choosing the terms that go into the skills block
