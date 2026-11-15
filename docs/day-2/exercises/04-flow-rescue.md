---
title: Day 2 Exercise 4. Flow Rescue Challenge
pageClass: day2-exercise
prev:
  text: Exercise 3. Match, Close and Remind
  link: /day-2/exercises/03-match-close-remind
next:
  text: Day 2 downloads
  link: /day-2/downloads
---

# Exercise 4: Flow Rescue Challenge

Each table repairs one prepared Flow while the other tables work in parallel. Exchange a test card with another team and verify their evidence. Everyone uses the same diagnostic method, even though the fault differs.

## Roles and timing

Choose a driver, an evidence checker and a reporter. In a pair, the checker also reports. The class has **15 minutes for briefing, 35 minutes for diagnosis, repair and peer verification, 15 minutes for five reports and transitions, and 10 minutes for transfer and close**.

The instructor assigns one of these challenge cards after confirming its starter package and account access. Check [starter availability](../downloads.md#starter-flow-status); a card's presence does not establish that its live route is ready. Open only your assigned card first.

| Card | Prepared Flow | Extra dependency |
|---|---|---|
| [R1. Office Script result](../challenges/01-office-script.md) | B2D2-R01-OfficeScript-START | Office Scripts and a supplied read-only script |
| [R2. File dependency order](../challenges/02-file-sequencing.md) | B2D2-R02-FileSequencing-START | OneDrive for Business root |
| [R3. Email image resource](../challenges/03-html-image.md) | B2D2-R03-HtmlImage-START | Controlled mailbox and the rehearsed image/client route |
| [R4. Decision gate simulation](../challenges/04-approval-gate.md) | B2D2-R04-ApprovalGate-START | Built-in Conditions with synthetic decisions |
| [R5. PDF output](../challenges/05-pdf-generation.md) | B2D2-R05-PdfGeneration-START | Rehearsed OneDrive HTML-to-PDF conversion |

## Practice 1: Repair one assigned Flow

<PracticeIllustration src="/day-2/images/rescue-p01.webp" :width="1536" :height="864" alt="Several teams investigate different controlled Flow exceptions in parallel." />

Repair the single deliberate fault using the assigned card’s evidence and acceptance tests.

1. Open your assigned challenge page and the matching START Flow. Use its independent resources. Confirm the stated access before beginning.
2. Run the first supplied test to reproduce the symptom. If its live route is unavailable, use the labelled static evidence and identify your result as a review rather than an executed repair.
3. Follow Expected result, Actual result, First divergence, Repair and Retest. Change one relevant setting at a time. The card offers progressive hints if needed.
4. After a repair or resource rebinding, select **Publish** and confirm **Published** before testing. Run both acceptance tests on the card. Record this evidence:

   ```text
   Challenge:
   Expected result:
   Original actual result:
   First divergence and evidence:
   Setting changed:
   Test 1 input and observed output:
   Test 2 input and observed output:
   Remaining limitation:
   ```

5. Prepare a short report that explains the evidence and why the repair affects the result. Keep account addresses, tenant URLs and private details out of the shared report.

### Checkpoint

Your card has two recorded test results and a repair justified by a specific input/output or dependency mismatch. Static work is clearly labelled as evidence review.

## Practice 2: Verify another team’s test {#practice-2-verify-another-teams-test}

<PracticeIllustration src="/day-2/images/rescue-p02.webp" :width="1536" :height="786" alt="Two teams exchange test cards and compare the result evidence." />

Reproduce or inspect a peer’s acceptance test using the card’s observable criteria.

1. Exchange the completed test card with the adjacent table. Open that team’s challenge page so you use its acceptance criteria.
2. Read the expected output before looking at the proposed repair. Ask the team to rerun one case in its own authorised resources, or inspect the labelled captured evidence when a live rerun is unavailable.
3. Match the actual artifact to the input: workbook count, file content, received image, recorded decision or readable PDF. Record whether the evidence supports the claimed result.
4. Give the card back with one brief verification statement:

   ```text
   Case checked:
   Artifact or action evidence checked:
   Observed result:
   Acceptance criterion met or still unproven:
   ```

5. During the table reports, state the original symptom, the first divergence, the repair and the test evidence. Keep reports within the instructor’s announced limit.
6. Finish with one personal transfer note naming a step in your own project where this diagnostic method would help. Record an owner decision separately if a workplace policy or permission is still required.

### Checkpoint

Another team has checked a specific acceptance case. Your report distinguishes an observed output from an assumption or an unperformed check, and you have recorded one useful transfer step.

## Close

Wait for active runs to finish and turn off training Flows. Keep your own files and evidence notes for reference. These synthetic tests demonstrate learning; workplace use still requires the appropriate process, access and operational review.
