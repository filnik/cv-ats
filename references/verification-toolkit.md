---
id: ref-verification-toolkit
title: "Verification Toolkit: Testing a Resume Before Sending It"
category: references
summary: How to prove your file parses — the free command-line check, the real-parser tests, and what each paid checker actually measures
read_when:
  - "how do I check my resume is ATS friendly before I send it"
  - "is Jobscan worth paying for" / "what does my match score actually mean"
  - "is there a free ATS resume checker that isn't a scam"
  - "how do I test whether my PDF parses correctly"
  - "the recruiter said my resume came through blank — how do I check my own file"
  - "my resume scored 58 on that website, should I rewrite it"
not_this_file:
  - "references/parsing-rules.md — the rules these tests check for. Read that one if you want to know what to fix; this one tells you how to prove it is broken."
  - "guides/05-keywords-and-tailoring.md — what to do with the missing-keyword list a scanner hands you"
markets: [global]
ats: [workday, greenhouse]
stale_risk: high
last_verified: 2026-08-18
related:
  - references/parsing-rules.md
  - references/ats-catalog.md
  - references/evidence-and-myths.md
  - guides/05-keywords-and-tailoring.md
  - patterns/two-document-strategy.md
---

# Verification Toolkit: Testing a Resume Before Sending It

> **Last Updated: August 2026** | **Markets: global** | **ATS: vendor-neutral, with Workday and Greenhouse specifics**

**Read when:** you want to prove your file parses · a checker gave you a score you do not understand · you are deciding whether to pay for one · the recruiter said your resume came through blank

**Not this file:** [references/parsing-rules.md](parsing-rules.md) — the rules. This document is the test harness that proves your file obeys them.

## TL;DR

- **Run `pdftotext resume.pdf -` and read the output.** That plain text is what a parser receives. Nothing else in this document is a substitute for looking at it.
- **Score numbers are product metrics, not measurements.** Use a commercial scanner for its missing-keyword list and ignore the percentage entirely.
- **The best free test is a real one:** start an application on any Workday portal, click Autofill with Resume, and look at the fields it filled. Then abandon the application.
- **If you will not open a terminal:** select all, copy, paste into a plain text editor. Anything that does not come through is invisible to a parser too.
- **The whole recommended stack costs nothing.** The paid tools are worth money for writing feedback and template safety, never for their scores.
- **Re-run the check after every template edit and before every campaign.** A file that passed in March is not a file that passes today.

## Table of Contents
<!-- kb:toc -->
- [1. Why you test the file and not the score](#1-why-you-test-the-file-and-not-the-score)
- [2. Install the tools](#2-install-the-tools)
- [3. The four commands](#3-the-four-commands)
- [4. The acceptance checklist](#4-the-acceptance-checklist)
  - [4.1 The document has a text layer at all](#41-the-document-has-a-text-layer-at-all)
  - [4.2 Your name is the first meaningful line](#42-your-name-is-the-first-meaningful-line)
  - [4.3 The contact block is complete and unbroken](#43-the-contact-block-is-complete-and-unbroken)
  - [4.4 Every section heading is on its own line, spelled correctly, in order](#44-every-section-heading-is-on-its-own-line-spelled-correctly-in-order)
  - [4.5 Each job is title, then company, then dates, contiguously](#45-each-job-is-title-then-company-then-dates-contiguously)
  - [4.6 Every date range is on a single line](#46-every-date-range-is-on-a-single-line)
  - [4.7 The ligature words come back whole](#47-the-ligature-words-come-back-whole)
  - [4.8 No replacement characters and no stray glyphs](#48-no-replacement-characters-and-no-stray-glyphs)
  - [4.9 Bullets extract as bullets](#49-bullets-extract-as-bullets)
  - [4.10 Fonts are embedded with a character map](#410-fonts-are-embedded-with-a-character-map)
  - [4.11 The metadata is sane](#411-the-metadata-is-sane)
  - [4.12 Nothing appears that should not](#412-nothing-appears-that-should-not)
  - [4.13 All of it at once](#413-all-of-it-at-once)
- [5. The same proof for a DOCX](#5-the-same-proof-for-a-docx)
- [6. No terminal? Two equivalents that work](#6-no-terminal-two-equivalents-that-work)
- [7. Free tests against real parsers](#7-free-tests-against-real-parsers)
  - [7.1 Affinda's free parser — the structured record](#71-affindas-free-parser--the-structured-record)
  - [7.2 OpenResume — open source and readable](#72-openresume--open-source-and-readable)
  - [7.3 The open-source ATS simulator — use half of it](#73-the-open-source-ats-simulator--use-half-of-it)
  - [7.4 A real Workday autofill — the definitive free test](#74-a-real-workday-autofill--the-definitive-free-test)
  - [7.5 The parsed preview you get free with every application](#75-the-parsed-preview-you-get-free-with-every-application)
- [8. Commercial checkers: what each actually measures](#8-commercial-checkers-what-each-actually-measures)
  - [8.1 The one thing to understand about every score in that table](#81-the-one-thing-to-understand-about-every-score-in-that-table)
  - [8.2 When paying is actually justified](#82-when-paying-is-actually-justified)
- [9. The free no-signup checkers, and their real price](#9-the-free-no-signup-checkers-and-their-real-price)
- [10. The recommended stack, cost zero](#10-the-recommended-stack-cost-zero)
- [11. When to re-run](#11-when-to-re-run)
- [12. What none of these tests can tell you](#12-what-none-of-these-tests-can-tell-you)
- [Common Mistakes](#common-mistakes)
- [See Also](#see-also)
<!-- kb:toc:end -->

---

## 1. Why you test the file and not the score

Every commercial checker works the same way: it extracts text from your file with a general-purpose library, applies its own heuristics, and prints a number. The extraction step is the only part that resembles what an ATS does. The number is the vendor's opinion, computed by an algorithm none of them publish.

So skip to the extraction. Doing it yourself takes about a minute, costs nothing, requires no upload, and shows you the exact string a parser is handed. Everything else in this field — scores, grades, traffic-light dashboards — is a proxy for that string.

> **Study (47 templates tested against a live ATS, 2026):** Enhancv scored field extraction across templates from Google Docs, Enhancv, Canva and MS Office. The format effect was at most three percentage points and ran in opposite directions by generator. Within a single generator, extraction across templates ranged from 36% to 100%.

That is the argument for testing your actual file rather than reasoning about its category. Two documents from the same builder, in the same format, sit sixty-four points apart. Your file's membership in a safe-sounding class tells you almost nothing; extracting its text tells you everything.

The rules you are testing against are in [references/parsing-rules.md](parsing-rules.md). This document does not restate them.

---

## 2. Install the tools

The four commands come from **poppler**, the PDF rendering library. They are the reference implementation of PDF text extraction, and several commercial checkers are wrappers around the same code.

```bash
brew install poppler                 # macOS
sudo apt install poppler-utils       # Debian, Ubuntu
```

On Windows, use WSL and the Debian line, or install the poppler binaries and add them to `PATH`. There is no signup, no account and no upload.

---

## 3. The four commands

```bash
pdftotext resume.pdf -            # reading-order extraction — the important one
pdftotext -layout resume.pdf -    # visual-layout preservation, for comparison
pdffonts resume.pdf               # embedded? subset? character map present?
pdfinfo resume.pdf                # tagged? creation and modification dates? pages?
```

Four things to understand about what you are looking at:

1. **`pdftotext` without flags is the one that matters.** It reconstructs a linear reading order the way an extraction pipeline does. This is the closest free approximation of the input an ATS parser receives.
2. **`-layout` is a diagnostic, not a target.** It preserves visual columns. If the default output is scrambled and the `-layout` output looks correct, you have a column problem: the geometry is fine and the reading order is not. That is precisely the failure that interleaves your sidebar into a job description.
3. **`pdffonts` answers the ligature question mechanically.** Its `uni` column reports whether the font carries a ToUnicode map. Without one, extraction of a subset font is guesswork.
4. **`pdfinfo` shows the two metadata fields that decide outcomes:** `Creator`, which reveals the generator you used, and `ModDate`, against which the token `Present` may be resolved.

---

## 4. The acceptance checklist

Every item below is a pass or a fail. There is no partial credit, because a parser gives none. Run them in order on the exact file you are about to upload — not on an earlier draft, not on the `.docx` you exported it from.

### 4.1 The document has a text layer at all

```bash
pdftotext resume.pdf - | wc -w
```

**Pass:** a word count within about ten percent of what you wrote.
**Fail:** zero, or a number far below the visible content. Zero means there is no text layer — a scan, a photograph, or a design-tool export that outlined the type. A parser gets literally nothing from it unless the employer bought optical character recognition, which many have not. A low-but-nonzero count means part of the document was outlined or lives in an object the extractor cannot reach.

### 4.2 Your name is the first meaningful line

```bash
pdftotext resume.pdf - | head -12
```

**Pass:** your name on or near the first line, in plain text, followed by the contact details.
**Fail:** the first lines are a heading, a page number, a template artefact, or your name is absent because it is part of a logo or an image.

### 4.3 The contact block is complete and unbroken

```bash
pdftotext resume.pdf - | head -12 | grep -Ein '@|\+[0-9]|linkedin'
```

**Pass:** one email address on one line, a phone number carrying its international dialling prefix, a `City, Country` location, and the LinkedIn URL as literal visible text.
**Fail:** the email split across a line break, a phone number with no `+` prefix, the LinkedIn URL missing entirely — which is what happens when it exists only as a hyperlink attached to an icon rather than as text on the page.

### 4.4 Every section heading is on its own line, spelled correctly, in order

```bash
pdftotext resume.pdf - | grep -nEi '^(summary|experience|work experience|education|skills|certifications|projects|languages)'
```

**Pass:** each heading appears exactly once, alone on its line, in the order you intended.
**Fail:** a heading missing from the output, a heading glued to the first line of its content, a heading appearing twice because it repeats on page two, or a heading with spaces inside it because the template used manual letter-spacing.

### 4.5 Each job is title, then company, then dates, contiguously

Read the employment block in the raw output, top to bottom, and check that each role's three identifying lines sit together with nothing spliced between them.

**Pass:** for every role, the title line, the company-and-city line and the date range appear consecutively, in that order, with no text from elsewhere on the page interleaved.
**Fail:** a skills list, a sidebar, a footer or a second role's content appearing in the middle of an entry. This is the column failure and it is the most expensive one, because the record still gets created and the fields are simply wrong.

Here is what the failure looks like in real output. A two-column template whose sidebar sits beside the employment block extracts like this:

```text
Senior Backend Engineer
Python
Acme S.p.A. — Milan, Italy
PostgreSQL
Mar 2021 – Present
Kubernetes
Rebuilt the ingestion pipeline, cutting
Terraform
end-to-end latency from 900ms to 120ms
```

Every word you wrote is present, which is why a word count and a keyword scan both pass. The record built from it is still wrong: the company field may take `Python`, the title may take a skill, and the one bullet you were proudest of is now four fragments. The healthy version of the same block is three consecutive lines followed by unbroken bullets.

This is also the case where `pdftotext -layout` earns its place. If the layout-preserving output shows two clean columns and the default output shows the interleaving above, the diagnosis is settled: the geometry is intact and the reading order is not.

### 4.6 Every date range is on a single line

```bash
pdftotext resume.pdf - | grep -nE '[0-9]{4} *[-–—] *([A-Z][a-z]{2,8} )?[0-9]{4}|Present'
```

**Pass:** one line per role, containing both ends of the range.
**Fail:** a line ending in a start date with the end date on the next line. Read the numbered output and confirm each range is one unbroken string — the grep finds candidates, your eyes confirm them.

### 4.7 The ligature words come back whole

This is the check nobody runs and the one that silently costs the most.

```bash
pdftotext resume.pdf - | grep -oiE 'profil|workflow|certifi|efficien|signific|classifi|configur|traffic|verifi|offic|staff' | sort | uniq -c
```

**Pass:** every stem you know is in the document appears in the count, with the tally you expect.
**Fail:** a stem missing, or present fewer times than you wrote it. Confirm with the inverse grep, where any hit at all is proof:

```bash
pdftotext resume.pdf - | grep -nE 'pro le|work ow|certi ca|quali ed|e cien|signi cant|con gur|tra c|veri ca|o ce'
```

If `certification` extracts as `certi cation` and `profile` as `pro le`, the file is losing exactly the terms recruiters filter on — and it looks perfect on screen, which is why this survives every visual proofread. The mechanism, and how to disable ligatures in Word and LaTeX, is in [references/parsing-rules.md](parsing-rules.md).

### 4.8 No replacement characters and no stray glyphs

```bash
pdftotext resume.pdf - | LC_ALL=C grep -n '[^ -~]'
```

This prints every line containing a non-ASCII byte.

**Pass:** the only hits are your bullet character, your en dashes, and any genuinely accented letters in names and places.
**Fail:** question marks, boxes, replacement characters, or random Latin letters sitting beside your email address and phone number. Stray letters where an icon should be are the symbol-font failure: Wingdings-class glyphs are legacy-encoded onto Latin letters, and icon fonts live in the Private Use Area, which by definition carries no meaning for an extractor.

### 4.9 Bullets extract as bullets

**Pass:** each bullet line begins with `•`, `-` or nothing at all.
**Fail:** each bullet line begins with a letter that is not part of your text — `q`, `n` and `v` are the classic Wingdings artefacts. Also a fail: bullet characters typed as a row of hyphens forming a horizontal rule, which injects junk lines into the extracted text.

### 4.10 Fonts are embedded with a character map

```bash
pdffonts resume.pdf
```

**Pass:** every font row shows `emb yes` and `uni yes`.
**Fail:** `uni no` on a subset font (`sub yes`), which is the ligature and encoding failure waiting to happen; or a font that is not embedded at all, which leaves rendering and extraction to whatever the receiving machine substitutes.

### 4.11 The metadata is sane

```bash
pdfinfo resume.pdf
```

Four fields to read:

| Field | Pass | Why it matters |
|---|---|---|
| `ModDate` | Within days of today | See below. |
| `Creator` | Word, Google Docs, LibreOffice, LaTeX | If it says Canva, Figma or Sketch, treat sections 4.1 and 4.7 as the real test rather than a formality. |
| `Tagged` | `yes` preferred, `no` survivable | Most resume parsers ignore tags. A file that tags cleanly is a good proxy for a file that extracts cleanly. |
| `Encrypted` | `no` | A permissions-restricted PDF can fail extraction outright in some portals. |

> **Vendor-documented (August 2026):** Textkernel's documentation states that the document's last-modified date must be supplied to the parser because it affects the interpretation of terms such as "current", and warns that without it the latest experience on an old resume will be interpreted as current.

`Present` is resolved against the file's own date rather than today's. A PDF you generated eighteen months ago and have been re-sending can compute your current role as having ended eighteen months ago, which silently shortens your tenure in the one field a recruiter filters on. **Re-export before every campaign and check `ModDate`.**

### 4.12 Nothing appears that should not

```bash
pdftotext resume.pdf - | grep -niE 'lorem|your name|insert |placeholder|\[.*\]|references available'
```

**Pass:** no hits, and nothing in the full output that you did not write.
**Fail:** a template placeholder, a previous employer's name left in a footer, an old address, or text that is invisible on screen because it is white on white or set at a hairline size. Extraction does not care about colour or point size: hidden text is text. Deliberately hiding instructions in a resume is a separate and worse idea, and the evidence on it is in [references/evidence-and-myths.md](evidence-and-myths.md).

### 4.13 All of it at once

Save this as `check-resume.sh` and run `bash check-resume.sh resume.pdf`. It prints the evidence; you still make the judgements, because a machine cannot tell you whether the title in line two is the one you meant.

```bash
#!/usr/bin/env bash
set -euo pipefail
F="$1"

echo "== metadata =="
pdfinfo "$F" | grep -Ei 'creator|producer|moddate|creationdate|tagged|encrypted|pages'

echo; echo "== fonts (want emb yes / uni yes) =="
pdffonts "$F"

echo; echo "== word count =="
pdftotext "$F" - | wc -w

echo; echo "== first twelve lines =="
pdftotext "$F" - | head -12

echo; echo "== headings =="
pdftotext "$F" - | grep -nEi \
  '^(summary|experience|work experience|education|skills|certifications|projects)'

echo; echo "== ligature stems found =="
pdftotext "$F" - | grep -oiE \
  'profil|workflow|certifi|efficien|signific|classifi|configur|traffic|verifi|offic|staff' \
  | sort | uniq -c

echo; echo "== broken ligatures (any hit is a failure) =="
pdftotext "$F" - | grep -nE \
  'pro le|work ow|certi ca|quali ed|e cien|signi cant|con gur|tra c|veri ca|o ce' || echo "none"

echo; echo "== non-ASCII lines =="
pdftotext "$F" - | LC_ALL=C grep -n '[^ -~]' || echo "none"

echo; echo "== leftovers =="
pdftotext "$F" - | grep -niE 'lorem|your name|insert |placeholder|references available' || echo "none"
```

---

## 5. The same proof for a DOCX

If you send Word files, two commands give you the equivalent evidence.

```bash
textutil -convert txt resume.docx -stdout        # macOS, built in
unzip -p resume.docx word/document.xml | sed 's/<[^>]*>//g'
```

The second one is the interesting one. `word/document.xml` is the **body part** of the document, and nothing else. Headers, footers, footnotes and comments live in separate XML parts. An extractor that reads the body part — which is the common implementation — sees exactly what this command prints.

So if your phone number does not appear in that output, it is not in the body of your document, and a body-only extractor will never find it. That is the header-and-footer trap made visible in one line. Text boxes and floating frames disappear the same way.

---

## 6. No terminal? Two equivalents that work

Most readers will not install poppler. These two tests are weaker but they catch the majority of real failures, and they take under a minute.

**In Word or Google Docs: select all, copy, paste into a plain text editor.** TextEdit in plain-text mode, Notepad, or any code editor. What arrives is roughly what a body-text extractor gets. Content that does not come through — text boxes, header and footer fields, some table cells, anything in a floating frame — is invisible to a parser too. Do not paste into another rich-text editor, which will faithfully reproduce the very structures you are testing for.

**In a PDF reader: save or export as text, then open the result.** This is not an improvised trick.

> **Vendor-documented (August 2026):** Sovren's parser guidance, published before Textkernel absorbed the product, recommended exactly this as the first diagnostic: open the file, save it as text, and read the output. If the extracted text is jumbled, the PDF is internally corrupt regardless of how it looks on screen.

That framing is the useful part. A PDF that renders beautifully and extracts as word salad is not a formatting preference; it is a broken file, and the vendor whose parser reads it says so.

Read the output for the same things section 4 checks: name first, contact details intact, sections in order, jobs contiguous, dates on one line, no broken words.

---

## 7. Free tests against real parsers

These are better than any score, because they show you the record rather than a judgement of it.

### 7.1 Affinda's free parser — the structured record

Affinda runs a commercial resume parser and exposes a free demo that accepts an upload without a signup. It returns the structured JSON an ATS would store: the name it extracted, the title it assigned to each role, the dates it computed, the skills it normalised.

> **Vendor-documented (August 2026):** Affinda documents its parser as extracting 100+ fields across 50+ languages, with a median parse time of 50 milliseconds.

Read the JSON, not a summary of it. The questions to answer are: is my most recent title the one I meant? Are the date ranges right, including the current role? Did every employer come through with the searchable company name? Did the skills I care about get extracted at all?

This is ground truth about extraction. It is not ground truth about ranking, and Affinda is not the parser behind most of the portals you will use — see [references/ats-catalog.md](ats-catalog.md) for who runs what.

### 7.2 OpenResume — open source and readable

OpenResume is MIT-licensed, runs entirely client-side so nothing leaves your browser, and shows both its extracted fields and the heuristics that produced them. Its value is double: it is a free parse test, and its source is a readable account of how a conventional resume parser reasons — which lines it treats as a heading, how it decides that a line is a job title rather than a company.

If you want to understand *why* a rule in [references/parsing-rules.md](parsing-rules.md) exists, reading a working implementation is faster than reading twenty blog posts.

### 7.3 The open-source ATS simulator — use half of it

There is a free, open-source screener that simulates how several named enterprise platforms parse and score a resume, and runs entirely in the browser. Be honest about what it is. Its own author states that it is unaffiliated with any of the vendors it names and that all of its scoring is an approximation built from public documentation, community reports and general industry knowledge.

**Use its formatting checklist. Ignore its scores.** A simulated Workday score is a student's model of a system whose weights nobody outside the vendor has seen. The formatting findings are mechanical and checkable; the numbers are not.

### 7.4 A real Workday autofill — the definitive free test

This is the best test available to a candidate at any price.

Start an application on any Workday careers portal. Upload your resume at the "Autofill with Resume" step. **Then look at what it filled in.** Every field you see is the record a real ATS built from your file: your name, your employers, your titles, your date ranges, your education.

If those came through correctly, your file is fine. If your last two employers are swapped, or a title is your company name, or a date range is blank, you have found the failure before it cost you anything. Then close the tab and abandon the application.

> **Vendor-documented (August 2026):** Workday's own documentation states that parsing results vary with file format and word order, and that the Skills and Languages sections are not populated by resume parsing at all.

That last clause is the calibration you need: **empty skills and languages after a Workday autofill is documented behaviour, not your file's fault.** Judge the test on names, employers, titles and dates. Workday is worth using as the reference case because of its reach — it serves 39% of Fortune 500 career pages, more than any other single system in that segment.

### 7.5 The parsed preview you get free with every application

Most modern portals show you the parsed fields before you submit, in an editable form. That preview is not a courtesy. **It is a live parse test of your file against the exact system the employer uses, and it is the last moment at which you can fix the record.**

Three things follow, and the third is the one people miss:

1. **Read every field before you submit.** If the title of your current role is your employer's name, the record you are about to create is wrong in the field recruiters search on most.
2. **Correct it by hand.** The corrected values are what land in the database. A recruiter later filtering on job title queries the field, not your attached PDF.
3. **Then go and fix the file.** A hand-corrected form fixes one application. The same file will parse the same way at every other employer, and most of them will not show you the result.

Portals differ in how much they reveal — some show every extracted field, some only name, email and the employment block, some nothing at all. Which vendor does what is in [references/ats-catalog.md](ats-catalog.md). Treat "no preview" as a reason to have run section 4 beforehand, not as a reason to relax.

One caution about what the preview proves. It shows extraction, and extraction only. A form that filled in perfectly tells you nothing about whether a knockout question further down the flow will disqualify you, and nothing about how you will rank.

---

## 8. Commercial checkers: what each actually measures

Prices below were checked in August 2026 and they change often, including mid-quarter. Verify on the vendor's page before paying. Every one of these tools has a free tier that is enough to answer the only question worth paying to answer.

| Tool | What it is genuinely good at | What its number means | Price, August 2026 |
|---|---|---|---|
| **Jobscan** | Keyword gap analysis, the best in the category | Match Rate: unpublished algorithm, no validation | Free: 5 scans/month. $49.95/month, or $89.95 quarterly |
| **Resume Worded** | Writing quality — bullet strength, verbs, quantification | A heuristic rubric, not a parse test | Free score. Pro from $49/month, $229/year |
| **Teal** | Job tracking, and a strong free tier | Basic keyword match, top few terms only on free | Free. Teal+ around $29/month or $79/quarter |
| **Rezi** | Templates that are parser-safe by construction | Rezi Score is an internal rubric | Free tier. $29/month, or $149 lifetime |
| **Kickresume** | Cheapest credible builder; strong for non-native English | Its checker is a formatting rubric | Free tier. From €8/month billed yearly, €24 monthly |
| **Enhancv** | Design, and unusually honest published testing | Structurally in tension with the design-led product | Free editing, paid export |
| **Huntr** | Pipeline management; best free tracker tier | Resume scoring is secondary to the tracker | Free tier. Pro around $40/month |
| **Careerflow** | Standalone LinkedIn optimisation | Weak as a resume signal | Free tier. Premium around $23.99/month |
| **VMock** | Pedagogical feedback, if your university provides it | A teaching rubric, aimed at students | Free through many universities |

### 8.1 The one thing to understand about every score in that table

> **Folklore — no traceable source:** that a resume needs a match rate of roughly 65 to 80% to "pass the ATS". The threshold is a vendor's product recommendation, published with no algorithm, no weights and no validation study. No mainstream ATS computes a resume score out of a hundred and rejects below a cutoff.

Real ranking layers do exist — Workday HiredScore, Lever Talent Fit, Greenhouse Talent Matching — but they sort a queue rather than gate it, their scales are vendor-specific, and none of them is the number your scanner printed. A commercial checker cannot see them. It is scoring your document against its own idea of a good document.

The threshold survives as a coverage heuristic and nothing more: roughly three of every four hard requirements addressed somewhere in your document. Chasing the last twenty points means claiming skills you do not have, which fails at the interview instead of at the filter.

**So: run the free scan, read the missing-keyword list, close the tab.** What to do with that list is [guides/05-keywords-and-tailoring.md](../guides/05-keywords-and-tailoring.md).

### 8.2 When paying is actually justified

- **Rezi, if you will job-hunt more than once.** You are not buying a score, you are buying templates that cannot produce the failures in section 4. The lifetime option is the best value in the category on that basis alone.
- **Resume Worded, for one month, if your bullets are weak.** It is the only tool in the table that evaluates writing rather than format, and writing is what decides the outcome once your file parses. Cancel after the rewrite.
- **Kickresume, if you are writing in a second language.** Its phrase library is a genuine aid to a non-native writer and it is the cheapest credible option.
- **Nothing else.** Teal and Huntr are worth using and worth nothing to pay for: the free tiers cover the tracking that is their actual value. Enhancv is design-led, which pulls against parseability by construction — if you use it, pick the plainest single-column template and verify it externally with section 4. Careerflow is a LinkedIn tool that happens to have a resume feature. VMock is worth using free through a university and not worth buying alone.
- **Never pay for a score.** No vendor in this table publishes an algorithm or a validation study for its number, and there is no market in which an unvalidated proprietary metric is worth a subscription.

---

## 9. The free no-signup checkers, and their real price

Search for a free ATS checker and you get dozens of upload-a-file-get-a-score pages. Almost all of them are lead generation for a resume builder, and the score is tuned to be low enough to sell you the fix.

The keyword gap list they produce is worth the minute it takes. The score is worth nothing. And the upload has a cost that is easy to miss: you are handing a full name, phone number, email address, home city, employment history and education record to an unvetted site, in a document specifically designed to be a complete profile of you. That is a marketing database entry at best.

**Rules if you use them:** prefer a checker that runs client-side and says so; never upload to a site with no named company behind it; and remember that section 4 answers the parse question better than any of them, without an upload.

---

## 10. The recommended stack, cost zero

1. **The command-line check in section 4.** Non-negotiable, and first. It is the only test that shows you the actual input a parser receives. If you will not open a terminal, section 6 is the substitute.
2. **The Affinda free parser.** Look at the structured record an ATS would store. Confirm titles, employers and dates.
3. **One real Workday autofill.** Ground truth from the system with the largest enterprise footprint. Then abandon the application.
4. **One free keyword scan, for the gap list only.** Read what is missing, ignore the percentage.
5. **A human in your target function.** This is the part no tool replaces. Recruiters spend seventeen to forty-six seconds on a resume depending on its length, and no scanner in this document evaluates those seconds. Ask someone who hires for the role you want whether they would call you, and why not.

Steps one to four take about fifteen minutes in total and settle every mechanical question in this knowledge base. Step five is the one that decides the outcome.

---

## 11. When to re-run

| Trigger | Re-run |
|---|---|
| Before every application campaign | Sections 4.1 to 4.12, on the freshly exported file |
| After any template or layout edit | All of section 4 — a single column change can move everything |
| After changing fonts, or adding an icon or a symbol | Sections 4.7, 4.8, 4.9, 4.10 |
| After adding or renaming a section | Sections 4.4, 4.5 |
| When a portal rejects the upload | `pdfinfo` for `Encrypted`, and check the file size and accepted types |
| When an autofill comes back wrong | Section 4.5, then `pdftotext -layout` to confirm it is a column problem |

One portal-level detail worth keeping in mind before you blame your file:

> **Vendor-documented (August 2026):** Greenhouse's Job Board API accepts PDF, DOC, DOCX, TXT and RTF, and its document upload limit is 100 MB.

The accepted ceiling is enormous and the size at which parsing stays reliable is not. Keep the file well under a megabyte. A rejected upload is almost always a file type the portal does not accept, not a size problem.

---

## 12. What none of these tests can tell you

This document's value depends on being honest about its ceiling. Everything above tests **extraction**: whether the text in your file becomes the fields in a database. That is a real, mechanical, verifiable property, and it is roughly a quarter of what decides an application.

Four things no tool here measures, in the order they cost people outcomes:

| Not tested | Why no tool can test it | Where it is handled |
|---|---|---|
| Knockout questions | They are answered in the form, not in the file. A perfectly parsed resume is discarded the moment you answer no to a work-authorisation question. | [guides/01-how-screening-actually-works.md](../guides/01-how-screening-actually-works.md) |
| Ranking and match models | Vendor-specific, unpublished, and invisible to a candidate. Any tool claiming to reproduce a score is modelling something it has never seen. | [references/ats-catalog.md](ats-catalog.md) |
| Whether your evidence is convincing | A parser reads `Increased efficiency significantly` and `Cut p95 latency from 900ms to 120ms` as equally valid strings. A human does not. | [guides/04-bullets-and-evidence.md](../guides/04-bullets-and-evidence.md) |
| Whether you are a plausible candidate at all | No formatting check compensates for applying to roles you are not positioned for. | [patterns/seniority-ladder.md](../patterns/seniority-ladder.md) |

There is a related asymmetry worth stating plainly, because it governs how much of your time this deserves. **The evidence in this field is much stronger on what breaks than on what wins.** Parser failures are reproducible: you can run a command and watch a word disappear. Nothing comparable exists on the other side — no field experiment isolates the effect of a better bullet or a stronger headline, and the confident percentages circulating about both are traced, one by one, in [references/evidence-and-myths.md](evidence-and-myths.md).

The correct response is not to distrust the checks in this document. It is to spend fifteen minutes on them, once, get a permanent pass, and then spend the remaining hours on the content — which is where the uncertainty is, and therefore where the upside is.

---

## Common Mistakes

| Mistake | What actually happens |
|---|---|
| "I paid for a scanner and got 82, so I'm fine" | You measured a vendor's private rubric. It never opened your file the way an ATS does, and no ATS has a cutoff at any number. |
| "The PDF looks perfect, so it must parse" | Rendering and extraction are different operations. A file with outlined text renders perfectly and extracts as nothing. |
| "I checked the .docx I exported from, not the PDF I sent" | The export is where the failure is introduced. Test the exact bytes you upload. |
| "I ran the checker once, months ago" | `Present` resolves against the file's own modification date. An old export can compute your current role as already ended. |
| "I don't have a terminal so I can't test anything" | Select all, copy, paste into a plain text editor. It catches text boxes, headers and floating frames in ten seconds. |
| "The free checker said my resume was 'not ATS-friendly'" | That is a sales funnel. Read the missing-keyword list, which is real, and discard the verdict, which is not. |
| "Workday autofill left my skills blank, my file is broken" | Documented Workday behaviour: skills and languages are not populated by parsing. Judge it on titles, employers and dates. |
| "I uploaded my resume to six free checkers to compare scores" | You distributed a complete personal profile to six unvetted marketing databases and learned nothing the terminal would not have told you. |
| "My words all look fine in the PDF" | Ligature failures are invisible on screen by definition. Only extraction shows that `certification` became `certi cation`. |
| "The simulator says I'd score 74 on iCIMS" | Its author states the models are approximations from public documentation and unaffiliated with any vendor. Use its formatting checklist only. |

---

## See Also

- [references/parsing-rules.md](parsing-rules.md) — the rules every check here is testing for, and how to fix what you find
- [references/ats-catalog.md](ats-catalog.md) — which system runs which parser, so you know whose behaviour you are actually testing
- [references/evidence-and-myths.md](evidence-and-myths.md) — the match-rate threshold, the hidden-text claims, and every other number a checker will quote at you
- [guides/05-keywords-and-tailoring.md](../guides/05-keywords-and-tailoring.md) — what to do with the missing-keyword list, which is the one useful output of a paid scanner
- [patterns/two-document-strategy.md](../patterns/two-document-strategy.md) — which of your two documents needs to pass section 4, and which does not
- [guides/01-how-screening-actually-works.md](../guides/01-how-screening-actually-works.md) — why a failed parse costs you retrieval rather than a rejection
