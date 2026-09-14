---
id: pat-two-document-strategy
title: "The Two-Document Strategy"
category: patterns
summary: Keep a parser-safe file for portals and a designed file for humans, and keep them from disagreeing about the facts
read_when:
  - "should my resume be plain or can it look good"
  - "a designer made me a beautiful CV — is it safe to send"
  - "the recruiter asked me to email my CV, do I send the nice version or the boring one"
  - "can I use colour, charts or a sidebar on a resume"
  - "I have two versions of my resume and I can't remember which one they have"
  - "my executive resume is three pages and everyone tells me to cut it to two"
not_this_file:
  - "references/parsing-rules.md — the rules that define what plain means, code by code; this file only says when to obey them"
  - "references/market-conventions.md — how long the designed version may be and whether it carries a photo, country by country"
markets: [global]
ats: []
stale_risk: low
last_verified: 2026-08-18
related:
  - references/parsing-rules.md
  - references/market-conventions.md
  - patterns/brag-document.md
  - references/verification-toolkit.md
  - guides/03-the-top-third.md
---

# The Two-Document Strategy

> **Last Updated: August 2026** | **Markets: global** | **ATS: vendor-neutral**

**Read when:** plain or designed · a designer built your CV · the recruiter asked for it by email · colour, charts, sidebars · you cannot remember which version they have · three pages at executive level

**Not this file:** [references/parsing-rules.md](../references/parsing-rules.md) — the rules that *define* the plain document. This one tells you when each document is the right one to send, and how to stop the pair from disagreeing.

## TL;DR

- **Keep two files, not one compromise.** A plain single-column document for anything whose next stop is a parser, and a designed document for a human who has already replied to you.
- **The plain one is defined entirely by [references/parsing-rules.md](../references/parsing-rules.md).** Do not negotiate with it, do not decorate it, do not make an exception for one beautiful sidebar.
- **The designed one earns its freedom by buying navigability** — white space, a highlights block, a deliberate skim path, endorsement quotations — not by being prettier.
- **When you convert down, move summary and profile content into the dated role entries.** Content attached to a dated job is attributed to that job; content floating in an opening block is attributed to nothing.
- **The failure mode of this pattern is drift.** Keep every number in one place outside both documents, regenerate rather than edit in parallel, and diff the pair before every campaign.
- **If the file's next destination is a form field, send the plain one.** That single rule settles every ambiguous case in this document.

## Table of Contents
<!-- kb:toc -->
- [1. The conflict, and why both camps are right](#1-the-conflict-and-why-both-camps-are-right)
  - [1.1 The plain camp](#11-the-plain-camp)
  - [1.2 The designed camp](#12-the-designed-camp)
  - [1.3 The reader is the variable](#13-the-reader-is-the-variable)
- [2. The resolution: two documents, one set of facts](#2-the-resolution-two-documents-one-set-of-facts)
- [3. The plain document](#3-the-plain-document)
  - [3.1 What defines it](#31-what-defines-it)
  - [3.2 Where it goes](#32-where-it-goes)
  - [3.3 What "plain" does not mean](#33-what-plain-does-not-mean)
- [4. The formatted document](#4-the-formatted-document)
  - [4.1 What the extra freedom is actually for](#41-what-the-extra-freedom-is-actually-for)
  - [4.2 The length argument, and where it is actually supported](#42-the-length-argument-and-where-it-is-actually-supported)
  - [4.3 Endorsement quotations](#43-endorsement-quotations)
  - [4.4 The forwarding problem](#44-the-forwarding-problem)
- [5. Converting down: making the plain version](#5-converting-down-making-the-plain-version)
  - [5.1 Move the summary and profile content down into the roles](#51-move-the-summary-and-profile-content-down-into-the-roles)
  - [5.2 The same mechanism governs where skills go](#52-the-same-mechanism-governs-where-skills-go)
  - [5.3 The rest of the conversion, in order](#53-the-rest-of-the-conversion-in-order)
- [6. Drift: how this pattern fails in practice](#6-drift-how-this-pattern-fails-in-practice)
  - [6.1 The symptoms](#61-the-symptoms)
  - [6.2 Why it surfaces at the worst possible moment](#62-why-it-surfaces-at-the-worst-possible-moment)
  - [6.3 The discipline](#63-the-discipline)
  - [6.4 The pre-campaign check](#64-the-pre-campaign-check)
- [7. Which document goes where](#7-which-document-goes-where)
- [Common Mistakes](#common-mistakes)
- [See Also](#see-also)
<!-- kb:toc:end -->

---

## 1. The conflict, and why both camps are right

This is the sharpest disagreement in the resume literature, and almost every source states its side as though the other did not exist.

### 1.1 The plain camp

The overwhelming majority position — eight of every ten practitioner sources, and effectively all of the parser-vendor material — is that a resume should be a single column of standard-weight text in a system font, with standard section headings, no graphics, no sidebars, no tables, no icons, and the contact block in the body of the document. Nothing decorative, ever.

They are right about mechanism, and the mechanism is documented rather than asserted. Column layouts are a fatal-band finding in the only published parser quality specification even when the parser recovers from them; a date range split across two lines is fatal outright; icon fonts inject undefined characters directly beside your phone number. The full catalogue is [references/parsing-rules.md](../references/parsing-rules.md) and this document does not restate it.

### 1.2 The designed camp

The minority position comes from a position of real authority: award-winning executive resume writers, whose competition-winning documents carry brand colours, charts plotting results over time, custom layouts, and short endorsement quotations set beside the achievements they corroborate. The same camp argues for three pages at executive level, on the grounds that compressing twenty-five years into two produces dense, unreadable blocks — and that expanding the document buys back white space and navigability rather than adding filler.

They are right about the reader. A hiring manager with your file open in a mail client is not a parser, and the thing that loses you a senior role at that moment is not a misparsed date. It is four hundred words of undifferentiated grey text that they skim, fail to find a reason to care about, and close.

### 1.3 The reader is the variable

Both camps are optimising honestly for different readers and each treats its own reader as universal.

> **Study (n=114 experienced recruiters, covertly timed via session analytics, 2023):** a short resume received 17 seconds of attention, a mid-length one 27, a long one 46 — with the fastest observed at 12 seconds. From the same author's survey work, more than 70% of recruiters say they almost always or often skim, and 78% rate skimmability as highly important.

Nothing in that finding is about parsing, and everything in it is about layout. A document optimised only for extraction and a document optimised only for a skimming human are different artefacts, and the attempt to build one file that is both is what produces the two characteristic failures in this field: the beautiful resume that arrives in the database as fragments, and the safe resume that arrives intact and bores everyone who opens it.

**The resolution already exists in the source material, though neither camp states it as the general answer: stop trying. Keep two documents.**

---

## 2. The resolution: two documents, one set of facts

| | **The plain document** | **The formatted document** |
|---|---|---|
| Built for | A parser | A person who has already replied |
| Layout | Single column, full width | Whatever helps the eye |
| Length | Market convention, no more | Market convention, plus a page at executive level if it buys white space |
| Colour and type | Restrained but not forbidden | Free |
| Graphics | None | Where they carry meaning |
| Sent to | Portals, uploads, one-click applications, agencies | Email replies, direct messages, interviews, in person |
| Fails by | Being dull | Being unreadable to a machine |
| Facts | Identical | Identical |

The last row is the one that makes the pattern work, and section 6 is about what happens when it stops being true.

Two documents means two layouts of one career, not two careers. Same roles, same dates, same titles, same numbers, same claims. If the pair differs in anything except presentation, you have not implemented this pattern — you have created a liability.

---

## 3. The plain document

### 3.1 What defines it

It is defined by [references/parsing-rules.md](../references/parsing-rules.md), completely and without exception. That document is the specification; this one only tells you that this file is where the specification is binding. The short form, purely so you can recognise the file:

- Single column, full width. No sidebar, no table used for layout, no text box.
- Standard section headings on their own lines: `Experience`, `Education`, `Skills`.
- Contact block as the first lines of the document body — never in a Word header, never behind an icon.
- One date range per line, `Mon YYYY – Mon YYYY`.
- System fonts, ligatures disabled, no icon fonts, no images.
- Exported to PDF from Word, Google Docs or LibreOffice, with a DOCX kept in reserve.

### 3.2 Where it goes

Everywhere the file's next reader is software: company career portals, one-click and Easy Apply flows, job-board uploads, and agency recruiters — who re-key and rebrand your document into their own template and will thank you for a clean one.

The reason is not that a portal will reject a designed file. Most will accept it happily. The reason is that in a portal your document's entire destiny is to become a database record, and every field the parser fails to populate is a recruiter filter you never appear in. That is a silent, invisible cost: not a rejection, an absence. Skills are the field recruiters filter on most, at 76.4%, and skills are precisely the block that column layouts destroy.

### 3.3 What "plain" does not mean

This is where the plain camp over-corrects and loses people who then abandon the whole rule set.

> **Folklore — no traceable source:** the claim that colour itself breaks extraction. No parser vendor documents a colour rule, a colour threshold, or colour-based scoring. Extraction runs on the character stream, which never sees a presentation attribute. The circulating claim that a fixed share of design-tool templates "fail ATS" is likewise a circular citation across content sites with mutually inconsistent methods; the one test with a disclosed method found that tool averaging roughly 80% field extraction with a spread from 52% to 92%.

So the plain document is not a plain-text file. It may have a dark-navy heading colour, a considered type scale, generous leading, a rule under each section heading drawn as a paragraph border, and bold used with discipline. All of that is free. What is not free is the *pipeline* colour usually arrives through: a file that is colourful because it came out of a design tool inherits that tool's outlined text and absolutely positioned frames, and those are severe. The correlation between colourful resumes and broken extraction is real; the causal story everybody tells about it is wrong.

Set the plain document in a word processor, and let it be handsome within the constraint. A well-typeset single column is not a punishment.

---

## 4. The formatted document

### 4.1 What the extra freedom is actually for

"Make it prettier" is not a reason, and a designed resume that is merely decorated is worse than the plain one — it has spent the reader's attention on nothing. The freedom is for four specific jobs.

**One: white space that makes a long history navigable.** This is the strongest argument the designed camp has, and it is not an aesthetic one. Beyond about fifteen years of history, the information does not compress; only the space between it does. Squeezing a long career onto two pages does not remove content, it removes air, and the result is the dense block that a 17-second skim bounces off.

**Two: a career-highlights block.** Three to five outcomes lifted out of the chronology and placed at the top, where the eye lands first. In the plain document this competes with the parser's need for a compact, canonical opening; in the formatted one it is the single highest-value element on the page. What to put in it is [guides/03-the-top-third.md](../guides/03-the-top-third.md).

**Three: visual hierarchy that guides the skim.** A designed document decides, deliberately, what the reader sees in the first four seconds and what they see if they keep going. Weight, size, indentation and space are the instruments. The plain document has only weight and order.

**Four: endorsement quotations.** Covered separately below, because it is the least familiar of the four.

### 4.2 The length argument, and where it is actually supported

The evidence on length is weaker than the confidence with which everyone states it, and it points in the designed camp's direction at senior levels rather than junior ones.

> **Study (n=482 recruiters and hiring professionals, 7,712 paired resume selections, vendor-run simulation, 2018):** reviewers were 2.3 times more likely to select a two-page resume over a one-page resume for an equivalent candidate. The effect scaled with seniority: 1.4x at entry level, 2.6x mid-level, 2.9x managerial.

Treat the magnitude sceptically — it is vendor-run, unreplicated, eight years old, and a longer document also carries more content by construction, so some of what it measures is volume rather than page count. **The seniority gradient is the durable part**, and it is the part that matters here: length tolerance rises with the seniority of the role, and it rises fastest exactly where the designed camp operates.

The practical rule: the formatted document may run one page longer than the plain one at executive level, and only if the extra page is spent on white space and navigability. A third page that exists because you could not bring yourself to cut a 2009 role is not this pattern. Per-market length tables are in [references/market-conventions.md](../references/market-conventions.md).

### 4.3 Endorsement quotations

Short verbatim quotations — one or two lines — set beside the achievement they corroborate. From a performance review, a written reference, a LinkedIn recommendation, a customer email. Attributed with a name and a role: *"— Head of Engineering, [Company]"*.

This is unusual in technical hiring and normal in executive search, and it is worth importing, because it is the only element on a resume that is not you asserting things about yourself. Every other line is self-reported. A named third party saying the same thing is social proof of a kind the document otherwise cannot generate.

Four rules, all of which are about not turning an asset into a hazard:

1. **Never invent one, and never paraphrase one into something stronger than the original.** It is attributed to a real person who can be asked.
2. **Ask permission** where the source is not already public. A LinkedIn recommendation is public; a performance review is not.
3. **Place it beside the achievement it supports**, not in a testimonial block at the end. A floating wall of praise reads as marketing.
4. **Two or three at most, in a document of any length.**

They go in the formatted document only. In the plain one, a pull-quote is either a text box — which is outside the document flow and may extract in any position or not at all — or an italic line interleaved with your bullets, where the parser will file somebody else's words as one of your accomplishments. Drop them on conversion.

### 4.4 The forwarding problem

Here is the constraint that most treatments of the designed document miss, and it is the reason this section is not a licence to build anything you like.

**A recruiter who likes your formatted document will upload it into their system.** That is what a recruiter does with a candidate they want to advance: attach the file to a record. Your beautifully laid-out three-page PDF, sent to a human, ends up in front of a parser anyway — one step later than you planned and with no warning.

So the formatted document is designed for a human but must survive a machine. One rule covers it:

> **Every load-bearing fact must exist in the linear text layer.** A number that appears only inside a chart, a title that appears only inside an image, a date that appears only in a graphic timeline, is a fact that does not exist as far as any downstream system is concerned.

Concretely, in the formatted document: charts are permitted, but every figure a chart plots is also written in the adjacent text. A timeline graphic is permitted, but every date on it is also written in the role entry. Your name is live text, never a logo. Contact details are live text, never icons. And the file is still exported from a tool that produces a real text layer — you may design it, but design it in a word processor or a properly configured layout tool, not in something that outlines its text on export.

> **Field-verified (August 2026):** a real resume carrying a six-column grid of headline metrics was rendered to PDF and extracted. The three right-hand cells lost their number-to-label pairing entirely: the numbers came out as three consecutive orphaned lines, and the three labels were spliced into a single interleaved line whose remainder broke across three more. Neither a parser nor a human reading the extracted text can recover which number belonged to which metric. On screen, the document is flawless.

That is what a decorative metrics band does when it reaches a parser, which is a thing your formatted document should assume will happen to it. Run the copy-paste test in [references/verification-toolkit.md](../references/verification-toolkit.md) on the formatted document too. It is allowed to score worse than the plain one. It is not allowed to lose facts.

---

## 5. Converting down: making the plain version

The formatted document is usually written first, because that is where the thinking happens. The conversion to the plain one is not "remove the graphics". It is a small, ordered set of operations, and one of them is non-obvious enough to deserve its own subsection.

### 5.1 Move the summary and profile content down into the roles

This is the tactical refinement, and it is the opposite of what most people do when they strip a document down.

When you flatten the design, the temptation is to keep the opening summary intact — it is text, it survives, it needs no changes. Do not. **Take the substantive content out of the summary and profile block and place it inside the specific, dated employment entries it belongs to.** Leave a short opening block behind: a headline and two or three lines, no more.

The mechanism is attribution. A parser builds a record out of dated entries, and content it can attach to a dated entry inherits that entry's dates, employer and role. Content in a floating opening block is attached to nothing.

> **Vendor-documented (August 2026):** Textkernel's candidate data model attributes each extracted skill to the specific job or education entry it appeared in, and derives from that attribution both the years of experience for that skill and the date it was last used. The same specification's suggested-improvement code 112 asks that a separate skills section be integrated into context, and its major-band code 303 fires when non-standard sections are larger than work and education combined.

Be precise about what is documented and what is inference: the attribution mechanism is documented for **skills**. Extending it to summary prose in general is an inference from the same architecture, not a vendor claim, and no vendor publishes an "attribute the summary" rule. What *is* documented is the pressure in the same direction — codes 112 and 303 both push content out of standalone blocks and into the dated body of the document. The inference is a reasonable one and it costs nothing to follow, which is the honest basis for the recommendation.

The rewrite is mechanical:

```text
Summary (formatted document)
  Payments specialist who cut settlement latency by a third and
  scaled a platform to nine markets.

Employment entry (plain document)
  Senior Backend Engineer
  Acme S.p.A. — Milan, Italy
  Mar 2021 – Present
  • Cut settlement latency by a third across the payments platform
  • Scaled the platform from two markets to nine
```

Same claim. In the first form it is an assertion with no date, no employer and no scope. In the second it carries all three, and it is retrievable.

### 5.2 The same mechanism governs where skills go

This is not a separate rule. It is the same one.

A skill named inside a dated job entry yields a structured record of *skill plus duration plus recency plus source role*. The same skill in a floating keyword block yields a bare string. That is why the answer to "skills block or skills in context" is *both, deliberately* — the block exists so the recruiter's filter finds you, and the in-context mention exists so the skill acquires duration and provenance. The full treatment is in [references/parsing-rules.md](../references/parsing-rules.md).

Once you see that summary content and skills obey one mechanism, the conversion rule generalises: **in the plain document, every claim lives as close as possible to the dated entry that justifies it.** Whatever cannot be attached to a role gets one short opening block and no more.

### 5.3 The rest of the conversion, in order

1. Collapse to a single column, full width. The sidebar's content goes into the body, in reading order.
2. Move the contact block to the first lines of the body, as live text, with an international dialling prefix.
3. Migrate the summary content into roles, as above.
4. Delete every chart, rating bar, icon and image. Every number they carried is already in the text — check that it is.
5. Rewrite every heading to a canonical one: `Experience`, `Education`, `Skills`, `Certifications`.
6. Unstack every date range onto one line.
7. Drop the endorsement quotations.
8. Re-export, then extract and read the output. Not skim it — read it.

The last step is the only one that catches the mistakes the first seven produce.

---

## 6. Drift: how this pattern fails in practice

Everything above is easy. This is the part that goes wrong, and it goes wrong quietly, over months.

Two documents describing one career will diverge. Not because you are careless, but because you edit whichever file is open when you think of an improvement, and the other one is not open.

### 6.1 The symptoms

| Symptom | What it looks like |
|---|---|
| **Divergent counts of the same artefact** | "Led a team of six" in one document, "led a team of eight" in the other. Both were true, at different times, and neither says which. |
| **Two figures for the same result** | Latency "cut by a third" in the formatted version, "reduced 23%" in the plain one. One of them is the number you actually measured. |
| **A metric that grew between versions** | The figure improved with each retelling while the underlying work did not change. This is the most dangerous one, because it is indistinguishable from exaggeration and it is usually not deliberate. |
| **A title that differs** | The market-standard title in one, the internal title in the other. Now the interviewer has two job titles for one job. |
| **Dates that differ by a month** | You corrected a start date in one file and not the other. Employment dates are the thing background checks verify. |
| **A skill present in one and absent in the other** | You will be asked about it from the version you are not holding. |
| **Headings that no longer match** | Sections renamed for visual effect in one file and left canonical in the other. |

The last one is not hypothetical, and it is the clearest evidence that this drift is a normal outcome rather than a beginner's mistake.

> **Field-verified (August 2026):** three versions of one real person's resume were extracted and compared. One, using `Professional Experience` and `Technical Skills`, produced canonical section markers. Its siblings, using `Career History` and `Technical Expertise`, produced non-canonical ones, and one of them carried no skills section at all. The versions were written by the same person, for the same market, months apart. Both non-canonical versions had also merged education and certifications under one heading.

Nobody decided to do that. It is what happens when a document is iterated for visual effect and nobody re-reads the extracted text.

### 6.2 Why it surfaces at the worst possible moment

Drift is invisible while you are applying and expensive once you are in the room.

You are in an interview. The interviewer says "you mentioned you cut latency by a third — how did you measure that?" and you do not know which file is on their screen. You cannot ask. You answer with the number you remember, and if it is the other version's number you have just contradicted your own document in front of the person deciding whether to trust you. Nothing about the situation is recoverable in the moment, and it started as a typo you fixed in one file eleven months ago.

And the two documents are more likely to meet than you think. Section 4.4 is why: the recruiter who liked your formatted version uploaded it. The portal already had your plain one. **Both are now attached to the same candidate record, listed one above the other in the same viewer, one click apart.** Any reviewer who opens both sees the diff before you do.

### 6.3 The discipline

Three rules. They are cheap, and each one removes a whole class of the failures above.

**One: one source of truth for every fact, kept outside both documents.**

Neither document is where a number lives. Numbers live in a record you maintain separately, and each entry carries more than the figure: what was measured, over what period, how it was measured, and whether you can defend it under questioning. Both documents quote that record; neither one is its origin. When a figure changes, it changes in one place and propagates.

The natural home for this is the habit in [patterns/brag-document.md](brag-document.md), which exists for a different primary reason — making future resumes cheap to write — and does this job as a side effect. If you already keep one, you already have the fix for drift. If you do not, this is the second-best argument for starting.

**Two: regenerate, never edit in parallel.**

Pick a direction and keep it. The formatted document is the drafting surface, the plain one is derived from it by the conversion in section 5, and the derivation is re-run rather than patched. A change to a fact goes into the record first, then into the drafting document, then through the conversion. It never goes straight into the file you happen to have open.

**The conversion is a layout operation, not a rewriting operation.** The moment you find yourself improving a bullet while flattening the layout, you have created the next drift.

**Three: check the pair before every campaign.**

Not continuously. Once, before you start sending, when you have just re-exported both files anyway because `Present` resolves against the file's own date.

### 6.4 The pre-campaign check

Mechanical, sixty seconds, no judgement required. Extract both files and compare the two things that drift: numbers and employment lines.

```bash
# Every number in each document, deduplicated.
for f in plain.pdf formatted.pdf; do
  pdftotext -layout "$f" - \
    | grep -oE '[0-9]+([.,][0-9]+)?%?' \
    | sort -u > "${f%.pdf}.nums"
done
diff plain.nums formatted.nums

# Every line that looks like a date range, in document order.
for f in plain.pdf formatted.pdf; do
  pdftotext -layout "$f" - \
    | grep -nE '(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]* [0-9]{4}' \
    > "${f%.pdf}.dates"
done
diff plain.dates formatted.dates
```

The number diff will show legitimate differences — the formatted document has a highlights block, the plain one has more bullets — so read it rather than expecting it to be empty. **What you are looking for is the same quantity appearing with two values.** The date diff should differ only in line numbers.

If you have no terminal, the low-tech equivalent is as good: paste both extractions into a document, side by side, and read the numbers aloud. The point is that the check is mechanical and scheduled, not that it is automated. Extraction mechanics are in [references/verification-toolkit.md](../references/verification-toolkit.md).

---

## 7. Which document goes where

| Destination | Send | Why |
|---|---|---|
| Company career portal, any upload form | **Plain** | Its destiny is a parser and a database record. |
| One-click and Easy Apply flows | **Plain** | Same, with less feedback about what went wrong. |
| Job-board profile or stored resume | **Plain** | It will be indexed and searched, not read. |
| Agency or staffing recruiter, first contact | **Plain**, DOCX if offered | They re-key and rebrand it into their own template. |
| A recruiter who replied and will submit you internally | **Plain** | The next stop is their system, not their eyes. |
| A recruiter or hiring manager who replied and wants to read it | **Formatted** | A human is opening this one. |
| Attached to a direct message or a referral introduction | **Formatted** | Read once, by one person, in a mail client. |
| Sent ahead of a scheduled interview | **Formatted** | It is briefing material. |
| Printed and handed over in the room | **Formatted** | Nothing will ever parse it. |
| Download link on your own site | **Formatted**, built to survive forwarding | You do not control its next hop. See section 4.4. |
| Internal promotion or performance packet | **Formatted** | Known human audience. |
| Anywhere you cannot tell | **Plain** | The plain document is never catastrophic. The other one can be. |

**The rule that covers every ambiguous case: if the file's next destination is a form field, send the plain one.**

Apply it to the *next* hop, not the eventual one. "Send me your CV and I'll put you forward" means the next destination is that recruiter's system: plain. "Send it over before we talk on Thursday" means the next destination is a pair of eyes: formatted. And when a designed file must go somewhere machine-shaped anyway, the forwarding rule in section 4.4 is what keeps it from costing you anything.

---

## Common Mistakes

| Mistake | What actually happens |
|---|---|
| "I made one resume that's a good compromise between pretty and safe" | It is neither. The compromise keeps enough layout to damage extraction and loses enough design to bore the human. The whole point of two files is that neither has to compromise. |
| "The plain one is my real resume, the pretty one is a vanity project" | Backwards. The plain one is a database record; the formatted one is what a decision-maker actually reads. Both are real and they do different jobs. |
| "Plain means black text, one font, no colour at all" | Colour is free — no vendor documents a colour rule. What breaks extraction is the design tool colour usually arrives through. A well-typeset single column is allowed to look good. |
| "I sent the designed version to the recruiter, so it never touched a parser" | The recruiter who likes you uploads your file. It reached a parser one step later than you planned. Design for the human, build to survive the machine. |
| "The chart shows the growth, so I don't need to repeat the number in the text" | A figure that exists only inside a graphic does not exist downstream. Every load-bearing fact goes in the text layer too. |
| "When I stripped the design out, I kept the summary block intact" | You kept your strongest claims in the one place a parser cannot attribute them to a dated role. Push them down into the employment entries. |
| "I updated the number in the version I had open" | That is exactly how drift starts. The number lives outside both documents; both files are regenerated from it. |
| "Both versions are honest, they just phrase things differently" | Two figures for one result read as one figure being inflated, and you will be asked about it while holding the wrong version. |
| "My executive resume is three pages, so the rules don't apply to me" | The extra page is defensible in the formatted document, at senior level, spent on white space. It is not a licence for a two-column layout in the file you upload to a portal. |
| "I keep them straight by naming them resume-DESIGNED-v3.pdf" | One of them will be sent with that name. Distinguish the two by folder, never by file name — both files carry the same clean, human-readable name. |

---

## See Also

- [references/parsing-rules.md](../references/parsing-rules.md) — the specification the plain document obeys, code by code, with the mechanisms
- [references/verification-toolkit.md](../references/verification-toolkit.md) — how to extract both files and prove what a parser sees before you send either
- [patterns/brag-document.md](brag-document.md) — the record that holds the numbers, and the thing that stops the two documents drifting
- [references/market-conventions.md](../references/market-conventions.md) — length, photographs and naming for the formatted version, country by country
- [guides/03-the-top-third.md](../guides/03-the-top-third.md) — what belongs in the highlights block and the opening lines of each document
- [references/evidence-and-myths.md](../references/evidence-and-myths.md) — the verdicts on colour, columns, file format and design-tool templates
