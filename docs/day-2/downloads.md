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

<a :href="withBase('/day-2/day-2-practice-files.zip')" download><strong>Download the Day 2 practice files (ZIP)</strong></a>

Extract the ZIP on your computer before uploading a file to OneDrive. Upload only the files named in the exercise you are starting. The ZIP contains practice resources; it is not a Flow package.

## Core resources

| Exercise | Files you will use |
|---|---|
| Repair Relay | <a :href="withBase('/day-2/files/core01-repair-relay.xlsx')" download>core01-repair-relay.xlsx</a> |
| Reliable Document Handoff | <a :href="withBase('/day-2/files/DOC-A.pdf')" download>DOC-A.pdf</a> and <a :href="withBase('/day-2/files/DOC-B.pdf')" download>DOC-B.pdf</a>; no workbook needed |
| Match, Close and Remind | <a :href="withBase('/day-2/files/core03-match-close-remind.xlsx')" download>core03-match-close-remind.xlsx</a> |

The final response values are shown beside the steps in Exercise 3. A <a :href="withBase('/day-2/files/core03-final-response.csv')" download>CSV reference copy</a> is also supplied.

<a :href="withBase('/day-2/files/expected-results.md')" download>Expected results</a> describes what to check. It is an example reference, not the result of your Flow run.

## Rescue resources

Download only the resources for your assigned card, or use them from the extracted ZIP.

| Card | Resources |
|---|---|
| R1 | <a :href="withBase('/day-2/files/rescue01-script-workbook-a.xlsx')" download>Workbook A</a>, <a :href="withBase('/day-2/files/rescue01-script-workbook-b.xlsx')" download>workbook B</a> and the <a :href="withBase('/day-2/files/rescue01-check-table.ts')" download>supplied read-only script</a> |
| R2 | <a :href="withBase('/day-2/files/rescue02-sequence-content.txt')" download>Expected file content</a>; the Flow creates its own test files |
| R3 | [Supplied training image](https://teerasej.github.io/axa-power-automate-operations-2026/images/practices/ex01-p01-768.webp); use its URL on the card |
| R4 | No workbook or document needed; use the two decision inputs on the card |
| R5 | <a :href="withBase('/day-2/files/rescue05-summary-template.html')" download>HTML source reference</a>; the Flow already contains its prepared content |

<a :href="withBase('/day-2/files/rescue-test-cards.md')" download>Rescue test cards</a> summarises the tests.

## Starter Flow packages {#starter-flow-packages}

<a class="day2-download-button" :href="withBase('/day-2/day-2-flow-packages.zip')" download>Download Flow starters + solutions</a>

This single download contains **eight START packages and eight working SOLUTION Flows**, supplied as **nine native unmanaged solution ZIPs**, plus README.md and checksums. Extract **day-2-flow-packages.zip** first. Do not extract the inner ZIPs; do not upload the outer download to Power Automate.

| Assigned exercise | Inner START package |
|---|---|
| Core 01 — Repair Relay | `starters/Core01/B2D2V2Core01RepairRelaySTART_1_0_0_1.zip` |
| Core 02 — Document Handoff | `starters/Core02/B2D2V2Core02DocumentHandoffSTART_1_0_0_1.zip` |
| Core 03 — Match, Close and Remind | `starters/Core03/B2D2V2Core03MatchCloseRemindSTART_1_0_0_1.zip` |
| R1 — Office Script | `starters/R1/B2D2V2R01OfficeScriptSTART_1_0_0_1.zip` |
| R2 — File sequencing | `starters/R2/B2D2V2R02FileSequencingSTART_1_0_0_1.zip` |
| R3 — HTML image | `starters/R3/B2D2V2R03HtmlImageSTART_1_0_0_1.zip` |
| R4 — Approval gate | `starters/R4/B2D2V2R04ApprovalGateSTART_1_0_0_1.zip` |
| R5 — PDF generation | `starters/R5/B2D2V2R05PdfGenerationSTART_1_0_0_1.zip` |

The **solutions** folder contains `B2D2V2InstructorSolutions_1_0_0_1.zip`, with all eight working answers. Use it when the instructor asks; it is not required to start an exercise. The practice files above are a separate download.

**Shared class environment:** the instructor imports each START once, then each pair makes its own copy. Importing the same solution repeatedly can update existing components; changing the ZIP filename does not create a personal copy. Follow [Start your assigned Flow](./preparation.md#start-your-assigned-flow).

**Package type:** use the [solution import guide](./preparation.md#solution-route-for-this-edition) for these inner ZIPs. The Legacy guide remains available for genuine Legacy packages supplied separately; none are included here. Select your own connections and resources as directed in each exercise. Source resource identifiers remain in the native packages and do not make those resources portable.

**Verification:** all eight fault/repair test pairs passed in instructor-account copies, and all nine native exports passed content inspection. Fresh imports of these delivery packages, representative learner permissions and a full classroom rehearsal remain **Unperformed**. Package availability does not establish those checks.

<a :href="withBase('/day-2/flow-package-manifest.json')" download>Flow download contents and SHA-256 checksums</a>

## Reset safely

If an exercise needs to restart, use a clean copy from the **reset** folder. Do not overwrite another pair's workbook.

| Reset copy | Use |
|---|---|
| <a :href="withBase('/day-2/files/reset/core01-repair-relay.xlsx')" download>Core 01 reset</a> | Restore the original Requests and two Pending Results at the same canonical Core01 filename/path; follow its Reset steps |
| <a :href="withBase('/day-2/files/reset/core03-match-close-remind.xlsx')" download>Core 03 reset</a> | Restore three Pending requests, two October responses and RESET at the same canonical Core03 folder/filename; follow its Reset steps |
| <a :href="withBase('/day-2/files/reset/rescue01-script-workbook-a.xlsx')" download>R1 workbook A reset</a> | Clean first workbook |
| <a :href="withBase('/day-2/files/reset/rescue01-script-workbook-b.xlsx')" download>R1 workbook B reset</a> | Clean second workbook |

Wait for active runs to finish and close Excel before changing a workbook. Follow the exercise's reset steps for where to upload the clean copy and which settings to check. Old emails and Run history remain, so identify a retest by its time.

<details><summary>Download checksums</summary>

The <a :href="withBase('/day-2/download-manifest.json')" download>download manifest</a> lists the ZIP contents and SHA-256 checksums. You do not need to read it before the exercise.

</details>
