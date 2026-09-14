# Templates

Skeletons that obey [`../references/parsing-rules.md`](../references/parsing-rules.md) by construction.
They are deliberately plain. That is the point: this is the document whose destiny is a parser, and
[`../patterns/two-document-strategy.md`](../patterns/two-document-strategy.md) explains why you keep a
designed one separately rather than trying to make one file do both jobs.

| File | Use |
|---|---|
| `resume-ats-safe.html` | The parser-safe resume. Every CSS choice carries a comment naming the rule it implements. |
| `cover-letter.md` | Four-paragraph structure with the tailoring slot marked. |

## Producing the PDF

Open the HTML in a browser, then **Export** or **Save as PDF** — never **Print to PDF**, which strips
structure tags and can rasterise. Set margins to none (the stylesheet declares its own), headers and
footers off, background graphics off, A4.

Then verify before sending. The template being correct does not prove your export is:

```bash
pdftotext resume.pdf -
```

Full checklist in [`../references/verification-toolkit.md`](../references/verification-toolkit.md).

## What is deliberately missing, and why

No photograph, no logo, no icons, no tables, no columns, no skill bars, no background colours. Each
absence is a rule rather than a preference, and each one is annotated in the template's stylesheet.
The photograph question specifically is a market convention rather than a parsing question, and it is
covered — with the evidence, which is gendered and surprising — in
[`../references/market-conventions.md`](../references/market-conventions.md).
