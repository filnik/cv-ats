---
id: pat-quantifying-without-numbers
title: "Quantifying When You Have No Numbers"
category: patterns
summary: Triage the missing number as recoverable, confidential or never measured, then use scale, duration, constraint and the counterfactual
read_when:
  - "every guide says add metrics and I don't have any"
  - "my work was internal tooling, there was nothing to measure"
  - "I can't remember the numbers from my last job"
  - "our figures are confidential, what am I allowed to put on my resume"
  - "is it OK to estimate the numbers on my CV"
  - "how do I write an achievement bullet without a percentage"
  - "my results were a team result, how much can I claim"
not_this_file:
  - "guides/04-bullets-and-evidence.md — the bullet formula itself, and what to write when you do have the number"
  - "patterns/brag-document.md — the habit that means you never need this file again"
markets: [global]
ats: []
stale_risk: low
last_verified: 2026-08-18
related:
  - guides/04-bullets-and-evidence.md
  - patterns/brag-document.md
  - references/action-verbs.md
  - patterns/seniority-ladder.md
  - references/evidence-and-myths.md
---

# Quantifying When You Have No Numbers

> **Last Updated: August 2026** | **Markets: global** | **ATS: vendor-neutral**

**Read when:** you have no metrics · your work was never measured · you cannot remember the figures · the numbers are confidential · you are wondering whether estimating is cheating · the result belonged to a team

**Not this file:** [guides/04-bullets-and-evidence.md](../guides/04-bullets-and-evidence.md) — the bullet formula and what to write when the number is in your hand. This file is only for the case where it is not.

## TL;DR

- **Triage before you write.** A number you never recorded, a number you may not publish, and a number that never existed are three different problems with three different fixes.
- **Most missing numbers are recoverable.** Version control, ticket exports, release notes, invoices, app-store listings and your own calendar hold more than you think, and they hold it after you leave.
- **An estimate you can explain out loud is legitimate; a precise-looking number you invented is not.** The test is whether you could narrate the derivation in an interview without flinching.
- **When no number exists, reach for the counterfactual first** — name the state before, the state after and the stakes. It carries no percentage and beats a weak one.
- **Never quantify something trivial to satisfy the rule.** A bullet reporting a meaningless metric is worse than one reporting a real qualitative outcome.
- **Never take a team's number as your own.** That is the single most common way this advice produces a bullet that collapses under one interview question.

## Table of Contents
<!-- kb:toc -->
- [1. The honest position on quantification](#1-the-honest-position-on-quantification)
- [2. Triage: which of the three cases are you in](#2-triage-which-of-the-three-cases-are-you-in)
- [3. Recovering numbers you never recorded](#3-recovering-numbers-you-never-recorded)
  - [3.1 Where numbers hide](#31-where-numbers-hide)
  - [3.2 Anchor and derive](#32-anchor-and-derive)
  - [3.3 The interview test](#33-the-interview-test)
  - [3.4 Precision is itself a claim](#34-precision-is-itself-a-claim)
- [4. Numbers you have but cannot publish](#4-numbers-you-have-but-cannot-publish)
- [5. When the number does not exist: the seven substitutes](#5-when-the-number-does-not-exist-the-seven-substitutes)
  - [5.1 Scale](#51-scale)
  - [5.2 Scope](#52-scope)
  - [5.3 Duration and frequency](#53-duration-and-frequency)
  - [5.4 Breadth](#54-breadth)
  - [5.5 Complexity and constraint](#55-complexity-and-constraint)
  - [5.6 The counterfactual — the strongest one, and the one nobody uses](#56-the-counterfactual--the-strongest-one-and-the-one-nobody-uses)
  - [5.7 Recognition and adoption](#57-recognition-and-adoption)
  - [5.8 Choosing among the seven](#58-choosing-among-the-seven)
- [6. Four things never to do](#6-four-things-never-to-do)
  - [6.1 Never invent a number](#61-never-invent-a-number)
  - [6.2 Never fake precision](#62-never-fake-precision)
  - [6.3 Never quantify the trivial](#63-never-quantify-the-trivial)
  - [6.4 Never claim a team's result as your own](#64-never-claim-a-teams-result-as-your-own)
- [7. A worked pass on one bullet](#7-a-worked-pass-on-one-bullet)
- [8. Stop needing this document](#8-stop-needing-this-document)
- [Common Mistakes](#common-mistakes)
- [See Also](#see-also)
<!-- kb:toc:end -->

---

## 1. The honest position on quantification

Every source in this field tells you to quantify everything. Almost none of them can tell you what to do when you cannot, and the one number they cite to justify the instruction does not survive contact with its source.

> **Folklore — no traceable source:** "quantified achievements increase callbacks by 40%" is attributed to TalentWorks, a company that is defunct and whose blog analysed only its own paying customers — and the specific claim does not appear in any surviving post. Its companions travel with it: "3.2x more likely to get callbacks", "2x fixation time on quantified bullets", "89% of recruiters identify quantified achievements in under ten seconds". None has a locatable primary source.

This is the widest gap in the field between how confident the advice sounds and how thin the evidence is. No field experiment isolates quantification as a variable. Quantify anyway — but quantify for the mechanism, not for a callback multiplier, because the mechanism is what tells you which substitutes work when the number is missing.

The mechanism is two things.

**A number is falsifiable and an adjective is not.** "Significantly improved performance" costs nothing to write and cannot be checked; "cut the nightly batch from four hours to under one" can be probed in an interview, and the writer knew that when they wrote it. A reviewer working through two hundred applications discounts anything that was free to assert. Every substitute in section 5 works for the same reason: it is a checkable fact, not an adjective.

**A number is a landmark for someone who is skimming.**

> **Study (n=114 experienced recruiters, covertly timed via session analytics, 2023):** a short resume received 17 seconds of attention, a mid-length one 27 and a long one 46. From the same author's survey work, more than 70% of recruiters say they almost always or often skim, and 78% rate skimmability as highly important.

Seventeen seconds is not enough to evaluate a claim. It is enough to notice a specific, concrete thing in a field of grey text and slow down. A duration, a headcount, a system name or a named constraint does that job as well as a percentage does.

**The rule this whole document exists to state: never let the absence of a number become the absence of evidence.** A bullet without a number is not exempt from being specific. It is only exempt from being a percentage.

---

## 2. Triage: which of the three cases are you in

Do this before you write anything. Most people skip straight to the third case, and the first case is where most of their missing numbers actually are.

| What is true | Case | Remedy | Section |
|---|---|---|---|
| It was measured. You never wrote it down, or you lost access to the system that holds it. | **Recoverable** | Go and find it. It usually still exists. | [§3](#3-recovering-numbers-you-never-recorded) |
| You know the figure precisely and you are not free to publish it. | **Reframable** | Change its form until it leaks nothing and still lands. | [§4](#4-numbers-you-have-but-cannot-publish) |
| Nobody ever measured it. There was no dashboard, no baseline, no instrument. | **Substitutable** | Answer the reviewer's real question a different way. | [§5](#5-when-the-number-does-not-exist-the-seven-substitutes) |

The three are often mixed inside one role: the traffic numbers are recoverable, the revenue is confidential, and the internal tool nobody instrumented is substitutable. Triage bullet by bullet, not job by job.

---

## 3. Recovering numbers you never recorded

### 3.1 Where numbers hide

The half-life of a recoverable number is roughly the length of your access to the system holding it. Work this inventory before you assume a number is gone — and work it *today* if you are still employed.

| Source | What it yields |
|---|---|
| **Version control history** | When a project started and ended, how many releases you cut, the size of a migration, how many files or services you touched. `git log --author=you --since=` and `git log --diff-filter=A` are two minutes of work. |
| **Ticket system** | Tickets closed, bugs before and after a fix, cycle time, incident counts. Jira, Linear and GitHub Issues keep the history long after you leave; a former colleague can usually run the filter for you. |
| **Release notes and changelogs** | Ship dates, feature counts, who was credited. Frequently public. |
| **Dashboards and monitoring** | Error rates, p95 latency, uptime, crash-free sessions. Check your own screenshots and any incident review you wrote — post-mortems are dense with before-and-after figures. |
| **App store and Play Console listings** | Rating, review count, version history, download bands. Public, permanent, and readable years later. |
| **Public company sources** | Customer counts, headcount, funding, press releases, annual reports. The Wayback Machine holds your former employer's marketing claims about the product you built. |
| **Invoices, budgets, purchase orders** | Contract value, the cost of the licence you replaced, the vendor spend you removed. |
| **Headcount at the time** | Team size, org size, how many people used your internal tool. A company's LinkedIn page carries its own headcount history. |
| **Performance reviews and promotion packets** | Often the densest single source that exists, because someone else had to justify a decision with your numbers in it. |
| **Your own calendar** | Project start and end dates, incident duration, how many sessions a training ran, how many candidates you interviewed, how many customers you visited. |
| **Email and chat search** | Search for "shipped", "launched", "congrats" and the product name. Launch announcements almost always quote a metric. |
| **Slide decks** | Quarterly reviews and all-hands decks are built out of exactly the numbers you are missing. |
| **Analytics you controlled** | Google Analytics, Mixpanel, Firebase, Search Console. Export before you lose the login, not after. |

Two constraints on this exercise. Take numbers you are free to state, not documents you are not free to hold — recovering a figure is not a licence to copy an export of it. And where the source is public, prefer it: a figure from a press release or an app-store listing is one you can cite openly and a reference check will confirm.

### 3.2 Anchor and derive

Most recovery ends not with a measurement but with a reconstruction. That is legitimate, and there is a technique for it: anchor on something you remember with certainty, then derive one step outward.

```text
Anchor  (certain)   The nightly reconciliation batch had to finish before the
                    06:00 support shift, and it regularly ran right up to it.
Derive  (one step)  After the rewrite it was finished before I arrived at 08:00
                    — and it had started at 02:00. Four hours became under one.
Write               "Rewrote the nightly reconciliation batch, cutting a
                     four-hour overnight run to under an hour and removing the
                     06:00 deadline risk that had caused three late openings."
```

Five rules govern the derivation.

1. **Anchor on a fact you would swear to** — a deadline, a headcount, a price, a release date, a contract term. Never anchor on another estimate.
2. **Derive one step, not three.** Every step multiplies the error, and a three-step derivation is indistinguishable from invention by the time it reaches the page.
3. **Round outward and say so.** "About four hours", "roughly a third", "under an hour", "more than a hundred". Coarse language is the signal that this is an estimate, and it is the thing that makes the estimate defensible.
4. **Never convert an estimate into a precise figure.** "A four-hour run to under an hour" is honest. "Reduced runtime by 78%" is the same knowledge dressed as an instrument reading, and it is now a claim you cannot support.
5. **Never derive money you cannot defend.** A currency figure built from an assumed salary times an assumed time saving is the classic collapse: it looks like the strongest bullet on the page and it is the first one an interviewer takes apart.

### 3.3 The interview test

One test governs this entire section. **Asked in an interview how you arrived at the figure, could you explain it without embarrassment?**

Interviewers do ask, and they ask about the biggest number on the page. There are two ways that goes.

```text
Q  You say you cut processing time by 78% — how was that measured?
A  Honestly, it was a rough figure.
   → The number is now worthless, and so is the next one they read.

Q  You say a four-hour run became under an hour — how do you know?
A  It's an estimate. The batch started at 02:00 and used to run right up
   against the 06:00 support handover; afterwards it was done before I got
   in at 08:00. We never instrumented it, so I'd rather say four hours to
   under one than quote a percentage I can't stand behind.
   → The estimate survives and the candidate has demonstrated calibration.
```

The second answer is stronger than a precise number would have been. Knowing the difference between what you measured and what you inferred is a senior trait, and stating it unprompted is a cheap way to show it.

### 3.4 Precision is itself a claim

The *shape* of a figure tells the reader what kind of knowledge sits behind it. Match the shape to the knowledge.

<!-- kb:allow-number 31.4 reason="an illustrative fabricated figure shown as the shape to avoid, not a claim about the world" -->

| What you write | What it asserts | Write it when |
|---|---|---|
| "reduced p95 latency from 900ms to 300ms" | You had instrumentation and can name it | You can name the dashboard |
| "reduced latency by roughly a third" | A defensible estimate | You watched it happen and remember the magnitude |
| "reduced latency by 31.4%" | A measurement to one decimal place | Essentially never on a resume |
| "materially improved latency" | Nothing at all | Never — it is an adjective wearing a lab coat |

False precision is this industry's most reliable fabrication signature: decimal places, year-over-year deltas and no named source. A reviewer who hires for a living has seen enough invented decimals that an oddly exact number invites exactly the wrong kind of question. Round numbers with hedging language read as honest; sharp numbers without provenance read as decorated.

---

## 4. Numbers you have but cannot publish

This is standard and expected in defence, health, finance, legal, government, pre-IPO companies and consultancies bound by client agreements. A reviewer inside the same industry reads a reframed figure correctly and thinks nothing of it. A reviewer outside it does not notice. **Omitting the achievement entirely is the only wrong answer** — an empty space is not read as discretion, it is read as an absence of achievement.

Five reframes, in the order to try them.

**1. Relative instead of absolute.** A percentage change reveals nothing about the base.

```text
Cannot say  Grew the account from €4.1M to €6.3M in eighteen months.
Write       Grew the largest account in the region by half in eighteen months.
```

**2. Order of magnitude.** A band is not a disclosure.

```text
Cannot say  Rebuilt the checkout serving 47,000 transactions a day.
Write       Rebuilt the checkout serving tens of thousands of transactions daily.
```

**3. Relative scale inside the organisation.** Position rather than size.

```text
Cannot say  Owned the €12M compliance portfolio.
Write       Owned the second-largest of the company's four product lines.
```

**4. Scope of responsibility instead of outcome.** Describe the surface you were trusted with; the outcome stays inside.

```text
Cannot say  Cut fraud losses from €900k to €340k annually.
Write       Owned fraud detection for all EU card transactions, cutting annual
            losses by roughly two thirds.
```

**5. Ratio or per-unit.** A rate leaks no volume.

```text
Cannot say  Reduced infrastructure spend from $180k to $95k a month.
Write       Halved infrastructure cost per active user.
```

Four rules for this section:

- **Never annotate the redaction.** "(figures confidential)" or "(NDA)" beside a bullet reads as a warning label. Write the reframed version as if it were the only version.
- **Check the actual obligation before you restrict yourself.** People over-redact constantly. Revenue in a listed company's annual report is public. So is a headcount in a press release, a customer logo on the company's own website, and a funding round. Your employer's published numbers are yours to quote.
- **Under a client NDA, name the sector and the size instead of the client**: "a top-five European retail bank", "a Fortune 500 logistics operator".
- **Do not reframe until the bullet says nothing.** "Delivered significant improvements for a major client" is not discretion; it is a bullet you should have deleted. If the reframe cannot carry a concrete fact, drop the number and use a substitute from section 5 instead.

---

## 5. When the number does not exist: the seven substitutes

This is the case the sources hand-wave, and it is common: internal tooling nobody instrumented, research, platform work, a team with no dashboards, a role whose output is judgement rather than throughput.

Every substitute below answers the same two questions the reviewer is silently asking — **how big was this, and how hard was it?** A percentage is one way to answer them. It is not the only way, and for unmeasured work it is not even the best one.

### 5.1 Scale

*How many people, systems, records, markets, devices, endpoints or transactions?*

```text
Before   Maintained the customer data platform.
After    Maintained the customer data platform of record for 40 million
         profiles across six markets.
```

Scale is almost always recoverable even when performance is not — a row count, a fleet size, a user count, a number of stores. If you know only one thing about the system, know how big it was.

### 5.2 Scope

*How much of it did you own, and end to end or one component?*

```text
Before   Worked on the payments integration.
After    Owned the payments integration end to end — provider selection,
         implementation, reconciliation and the on-call rota for it.
```

Scope is the substitute that separates seniority levels most sharply, and the one most often inflated. "Owned", "led" and "contributed to" are three different claims and a reference call distinguishes them in one sentence. What each rung is expected to demonstrate is [patterns/seniority-ladder.md](seniority-ladder.md).

### 5.3 Duration and frequency

*How long did it run, how often did it happen, how long had it been broken?*

```text
Before   Ran the release process.
After    Ran fortnightly releases for two years without a rollback, after
         eighteen months in which every release had needed a hotfix.
```

"Every night", "for two years", "since 2019" and "within one quarter" are all numbers. They are simply not percentages. Two forms deserve particular attention: **how long the problem had existed before you fixed it**, which converts a task into an achievement at no cost, and **how long your work survived after you left**, which is the closest thing to an external quality rating a resume can carry.

Duration also has a mechanical benefit that most substitutes do not.

> **Vendor-documented (August 2026):** Textkernel's candidate data model attributes each extracted skill to the specific job entry it appeared in, and derives from that attribution the years of experience for that skill and the date it was last used.

> **Study (n=384 HR professionals directly involved in hiring, random sampling, 2025):** years of experience is a field 44.0% of recruiters filter on inside the ATS, behind skills at 76.4% and job titles at 55.3%.

A duration written inside a dated role entry is therefore not decoration: it feeds a structured field a recruiter filters on. The extraction mechanics are [references/parsing-rules.md](../references/parsing-rules.md); the point here is only that duration is the substitute with a machine reading it as well as a human.

### 5.4 Breadth

*How many teams, disciplines, geographies, time zones or external parties?*

```text
Before   Coordinated the migration with other teams.
After    Coordinated the migration across four engineering teams, legal and
         two external vendors, in three time zones.
```

Breadth is the cheapest substitute to verify — anyone who was there can confirm it — which makes it low-risk to state and unattractive to inflate. It is the natural substitute for programme, platform and staff-level work, where the achievement genuinely is that a lot of parties agreed on something.

### 5.5 Complexity and constraint

*What made this hard? What would have made it easy, and was absent?*

```text
Before   Migrated the legacy billing system to the new platform.
After    Migrated a 2004 Delphi billing system with no test coverage and one
         remaining maintainer onto the new platform, with no billing downtime
         and no customer-visible change.
```

The constraint must be a fact, not an adjective. "Complex legacy environment" is worth nothing; "no tests, one maintainer, no downtime window" is worth a great deal, and the reader can picture the work. Useful constraints: a legacy stack, a regulatory or certification requirement, a hard external deadline, a migration with no downtime, a frozen public API, a language or platform nobody left in the company knew, a team of one.

### 5.6 The counterfactual — the strongest one, and the one nobody uses

*What would have happened if this work had not been done?*

```text
Before   Rebuilt the deployment pipeline.
After    Rebuilt the deployment pipeline that had blocked releases for two
         quarters, returning the team to weekly shipping.
```

The second version carries no percentage and is dramatically stronger, because it names three things a percentage does not: the state before, the state after, and the stakes. It is the only substitute that establishes that the work *mattered* rather than merely that it was large. A percentage tells a reader how much changed. A counterfactual tells them what would have happened without you, which is the actual question behind every hiring decision.

Three shapes, all of them fact-based:

| Shape | Example |
|---|---|
| **The blocked state** | "...that had blocked releases for two quarters" |
| **The averted outcome** | "...ahead of the audit that would otherwise have suspended the licence" |
| **The alternative on the table** | "...replacing a vendor migration the team had already budgeted for" |

The discipline is that the counterfactual must be something that was actually true, not a hypothetical you constructed. "Would have cost the company millions" is a fantasy and reads as one. "The audit was scheduled for March and the certification was conditional on closing those findings" is a fact, and it happens to be more persuasive.

Reach for this one first. It is the substitute that survives best in an interview, because the story behind it is real and you were there for it.

### 5.7 Recognition and adoption

*Did anyone else pick it up, ask you to repeat it, or make it the default?*

```text
Before   Wrote documentation for our testing approach.
After    Wrote the testing guide that became the default for all six mobile
         teams and the basis of the onboarding week I now run.
```

Adoption is a measurement someone else generated about your work. That makes it hard to inflate and easy to verify, which is exactly why it reads as credible. Forms that count: adopted by other teams, asked to repeat it in another department or region, became the standard or the reference implementation, still in use after you left, presented externally, taught to others, folded into the company's hiring or onboarding process.

### 5.8 Choosing among the seven

| Substitute | Answers | Strongest for | Weak when |
|---|---|---|---|
| Scale | How big | Data, infrastructure, operations | The system was small and you say so vaguely |
| Scope | How much was yours | Senior and lead roles | You cannot name what you owned alone |
| Duration and frequency | How long, how often | Reliability, process, operations | The work was a one-off |
| Breadth | How many parties | Programme, platform, staff-level work | You were a participant, not a coordinator |
| Complexity | Why it was hard | Legacy, regulated and migration work | The constraint is an adjective |
| **Counterfactual** | **Why it mattered** | **Almost everything** | The prior state was fine |
| Recognition | Who else agreed | Enablement, tooling, documentation, research | Adoption was mandated rather than chosen |

Use one or two per bullet, not seven. A bullet carrying scale, scope, duration, breadth and a counterfactual at once is not evidence-rich; it is unreadable, and in 17 seconds it will not be read.

---

## 6. Four things never to do

### 6.1 Never invent a number

This is not a moral point, it is a survival one. An invented figure is the most interviewable thing on your resume: it is specific, it is memorable, and the interviewer will ask about it because it looks like the strongest claim on the page. There is no recovery from "I'm not sure where that came from".

### 6.2 Never fake precision

A number carrying a decimal place asserts an instrument. If the instrument did not exist, the decimal is a lie about method even when the magnitude happens to be right — and, per section 3.4, it is the pattern reviewers are best trained to spot. Round outward and hedge in words instead.

### 6.3 Never quantify the trivial

The rule "every bullet needs a number" produces bullets like these, and each one is worse than the qualitative sentence it displaced:

```text
Attended 12 team meetings per month.
Responded to 200 emails per week.
Wrote 47 pages of documentation.
Used 5 programming languages.
```

**The test: if the number would be identical for anyone who held the role, delete it.** It measures the job's existence, not your contribution. A real qualitative outcome — "wrote the onboarding guide the team still uses" — beats a real but meaningless metric every time, and reviewers read the meaningless metric as evidence that there was nothing better to report.

### 6.4 Never claim a team's result as your own

This is the most common way the quantification instruction produces a bullet that collapses. The pursuit of a number pushes you to reach for the biggest one nearby — the product's revenue, the platform's user count, the programme's savings — and attach it to yourself.

```text
Fragile   Increased revenue by a third through a new checkout flow.
          (Q: "Talk me through how you drove that." A: it was forty people.)

Solid     Owned the payment-provider integration inside a checkout rebuild
          that lifted revenue by a third across the six-person platform team.
```

The solid version keeps the whole team number — you are allowed to state it — and is exact about which part was yours. It survives the follow-up question, and the follow-up question is where the fragile version dies. The over-correction is just as costly: "contributed to a project that..." claims nothing and reads as an admission. Name the team outcome, then name your surface inside it.

One related rule: never borrow a number from the job description or the company's marketing page. Reviewers recognise their own copy.

---

## 7. A worked pass on one bullet

Take a genuinely unmeasured piece of work — an internal admin tool, no dashboard, no baseline, nobody counted anything — and run the seven questions over it.

```text
Starting point   Built an internal admin tool for the support team.

Scale            25 support agents, ~400 tickets a day.
Scope            Sole developer; specification, build and rollout.
Duration         Six weeks; still in use three years later.
Breadth          Support, billing and two legal reviewers.
Complexity       Had to work against the legacy billing API, which had no
                 write endpoint — refunds went through a batch file.
Counterfactual   Agents were editing records directly in the production
                 database; two data incidents in the previous year.
Recognition      Adopted by the billing team six months later.

Final bullet
   Sole developer of the support console that replaced direct production
   database edits by 25 agents — the practice behind two data incidents the
   previous year — working around a legacy billing API with no write path.
   Adopted by the billing team six months later and still in use.
```

Not one percentage anywhere, and it is a stronger bullet than most quantified ones, because every clause is a checkable fact. Note what the pass actually did: it did not embellish the work, it *interrogated* it. Most people writing the first version were not being modest, they simply never asked themselves the seven questions.

Trim to fit. Two lines carrying the counterfactual and the scale beat four lines carrying all seven answers — the bullet formula and the length discipline are in [guides/04-bullets-and-evidence.md](../guides/04-bullets-and-evidence.md).

---

## 8. Stop needing this document

Everything above is salvage. The reason it is necessary is that the numbers were available at the time, sitting on a dashboard that has since been decommissioned or in a ticket queue you no longer have a login for, and nobody wrote them down.

The fix is not a better memory. It is a ten-minute habit: record the outcome, with the number attached, in the week it happens — while you can still see the before-and-after, while the ticket is still open, while the dashboard still exists and you still have the credentials to read it. That habit is [patterns/brag-document.md](brag-document.md), and it is the single highest-return item in this knowledge base for anyone who expects to look for a job again.

Two immediate actions, whatever you do about the habit:

1. **Before you resign, run the section 3.1 inventory** on the job you are leaving. Access ends on your last day; the numbers do not come back.
2. **Record the counterfactual, not just the metric.** The state before the work is the thing nobody writes down and the thing you cannot reconstruct later — a dashboard keeps the after and forgets the before.

---

## Common Mistakes

| Mistake | What actually happens |
|---|---|
| "None of my work had numbers, so my bullets are all qualitative" | You skipped the triage. Most of those numbers are recoverable from version control, tickets, invoices or your own calendar, and the rest have substitutes. |
| "I estimated, so I rounded it to a clean 78% to look measured" | Precision asserts an instrument. Reviewers are trained on invented decimals, and the sharpest number on your page is the one the interviewer opens with. |
| "The figures are confidential so I left the achievement out" | An empty space reads as no achievement, not as discretion. A percentage change, an order of magnitude or a relative-scale statement leaks nothing. |
| "I put the product's total revenue in my bullet — I did work on it" | It collapses on the first follow-up question. Keep the team number and name the part that was yours. |
| "Every bullet has a number now" | Some of them measure the job's existence, not your contribution. If the figure would be identical for anyone in the seat, it is noise. |
| "I wrote 'improved efficiency significantly' because I had no data" | That is an adjective, not a substitute. Scale, duration, constraint and counterfactual are all available without a single measurement. |
| "I said the work saved the company millions" | A derived currency figure built on assumed inputs is the fastest-collapsing claim on a resume. Never derive money you cannot defend line by line. |
| "My tool had no metrics so there was nothing to say" | You never asked how many people used it, how long it lasted, what it replaced, or what they were doing before it existed. Run the section 7 pass. |

---

## See Also

- [guides/04-bullets-and-evidence.md](../guides/04-bullets-and-evidence.md) — the bullet formula this document plugs into, and what to write when you do have the number
- [patterns/brag-document.md](brag-document.md) — the habit that stops the numbers disappearing in the first place, which is the real fix
- [references/action-verbs.md](../references/action-verbs.md) — the verbs that carry scope and ownership honestly, and the unfalsifiable ones to drop
- [patterns/seniority-ladder.md](seniority-ladder.md) — what scope and breadth are expected to look like at each level, so you know which substitute to lead with
- [references/evidence-and-myths.md](../references/evidence-and-myths.md) — the full audit of the quantification statistics, including the ones that circulate with no source
- [guides/03-the-top-third.md](../guides/03-the-top-third.md) — where the strongest surviving evidence belongs once you have found it
