---
title: Day 2 downloads and reset copies
pageClass: day2-exercise
prev:
  text: Flow Rescue Challenge
  link: /day-2/exercises/04-flow-rescue
next: false
---

<script setup>
import { withBase } from 'vitepress'
</script>

# Day 2 downloads and reset copies

<a :href="withBase('/day-2/day-2-practice-files.zip')" download>Download the Day 2 practice files (ZIP)</a>. Extract the archive locally before uploading your pair’s own files. This bundle contains synthetic practice resources and reset copies. It is **not** an importable Power Automate package.

<a :href="withBase('/day-2/download-manifest.json')" download>Download manifest and SHA-256 checksums</a>

## Core resources

| File | Use |
|---|---|
| <a :href="withBase('/day-2/files/core01-repair-relay.xlsx')" download>core01-repair-relay.xlsx</a> | Exercise 1: Requests and Results Tables; two supplied requests and two Pending result rows |
| <a :href="withBase('/day-2/files/reset/core01-repair-relay.xlsx')" download>Core 01 reset</a> | New independent copy for a clean retest |
| <a :href="withBase('/day-2/files/core02-document-handoff.xlsx')" download>core02-document-handoff.xlsx</a> | Exercise 2: Documents Table maps two requests to their PDFs and recipient slots |
| <a :href="withBase('/day-2/files/reset/core02-document-handoff.xlsx')" download>Core 02 reset</a> | Restore the original two document references |
| <a :href="withBase('/day-2/files/DOC-A.pdf')" download>DOC-A.pdf</a> | Request R-101, IT equipment request and amount 1250.00 |
| <a :href="withBase('/day-2/files/DOC-B.pdf')" download>DOC-B.pdf</a> | Request R-102, PMO reporting request and amount 2750.00 |
| <a :href="withBase('/day-2/files/core03-match-close-remind.xlsx')" download>core03-match-close-remind.xlsx</a> | Exercise 3: Requests, Responses and ReminderPreview Tables |
| <a :href="withBase('/day-2/files/reset/core03-match-close-remind.xlsx')" download>Core 03 reset</a> | Three Pending requests, two October responses and one RESET preview marker |
| <a :href="withBase('/day-2/files/core03-final-response.csv')" download>core03-final-response.csv</a> | Read the final matching response; type its fields into Responses when instructed |

<a :href="withBase('/day-2/files/expected-results.md')" download>Illustrative expected results (Markdown)</a>. These are synthetic acceptance references, not captured run evidence.

## Rescue resources

| File | Use |
|---|---|
| <a :href="withBase('/day-2/files/rescue01-script-workbook-a.xlsx')" download>rescue01-script-workbook-a.xlsx</a> | R1 first workbook, RequestsTable with three rows |
| <a :href="withBase('/day-2/files/rescue01-script-workbook-b.xlsx')" download>rescue01-script-workbook-b.xlsx</a> | R1 independent second workbook |
| <a :href="withBase('/day-2/files/reset/rescue01-script-workbook-a.xlsx')" download>R1 workbook A reset</a> | Untouched first workbook copy |
| <a :href="withBase('/day-2/files/reset/rescue01-script-workbook-b.xlsx')" download>R1 workbook B reset</a> | Untouched second workbook copy |
| <a :href="withBase('/day-2/files/rescue01-check-table.ts')" download>rescue01-check-table.ts</a> | Supplied read-only Office Script; learners repair its Flow parameter rather than write TypeScript |
| <a :href="withBase('/day-2/files/rescue02-sequence-content.txt')" download>rescue02-sequence-content.txt</a> | Expected content for the generated R2 files |
| <a :href="withBase('/day-2/files/rescue05-summary-template.html')" download>rescue05-summary-template.html</a> | Small synthetic HTML source reference for R5 |

<a :href="withBase('/day-2/files/rescue-test-cards.md')" download>Rescue test cards (Markdown)</a>. Use the assigned challenge page for the task and progressive hints.

R3 uses the [supplied synthetic image resource](https://teerasej.github.io/axa-power-automate-operations-2026/images/practices/ex01-p01-768.webp) (approximately 11.1 KB), with a copyable URL on the [R3 challenge page](./challenges/03-html-image.md#supplied-image-resource). A local image file alone does not create a public image URL for an email client.

## Starter Flow status

<p class="day2-table-hint">On a narrow screen, scroll the table sideways to see every column.</p>

All eight START Flows have native exports that were inspected privately. These packages remain private; their individual states are listed below. Fresh import, learner permissions and resource rebinding have **not been rehearsed in a separate target environment**. No learner Flow package is released in this website release.

| Exercise | START Flow | Native export | Fresh import and learner-permission rehearsal |
|---|---|---|---|
| Core 01 | B2D2-Core01-RepairRelay-START | Private export inspected | Unperformed |
| Core 02 | B2D2-Core02-DocumentHandoff-START | Private export inspected | Unperformed |
| Core 03 | B2D2-Core03-MatchCloseRemind-START | Private export inspected | Unperformed |
| R1 | B2D2-R01-OfficeScript-START | Private export inspected | Unperformed |
| R2 | B2D2-R02-FileSequencing-START | Private export inspected | Unperformed |
| R3 | B2D2-R03-HtmlImage-START | Private export inspected | Unperformed |
| R4 | B2D2-R04-ApprovalGate-START | Private export inspected | Unperformed |
| R5 | B2D2-R05-PdfGeneration-START | Private export inspected | Unperformed |

Flow download links will be added only after an inspected distribution package is approved. Use only that package for your assigned exercise and follow [Preparation](./preparation.md). The instructor’s SOLUTION copies stay private and separate from learner downloads. If a live route is unavailable, use the explicitly labelled evidence-review route; this does not count as an executed Flow repair.

## Reset safely

Finish active runs and close Excel before changing files. Upload the relevant reset workbook as a new personal file. Reselect **File** and **Table** in every dependent action, then select **Publish** and confirm **Published**. Recheck your recipient settings before any email test. Resetting a workbook does not remove old mailbox messages or Run history.

The three core workbooks are independent. You can restart one exercise without replacing another pair’s resources or changing a previous exercise.
