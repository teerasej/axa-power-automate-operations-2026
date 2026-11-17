---
title: Rescue R5. PDF output
pageClass: day2-exercise
prev:
  text: Flow Rescue Challenge
  link: /day-2/exercises/04-flow-rescue
next: false
---

# Rescue R5: PDF output

The Flow should turn a small HTML request summary into a PDF. It saves the source with the wrong filename format, so conversion fails. Repair the filename value in one action and check two saved PDFs.

> **Draft rehearsal:** The **B2D2-v2-R05-PdfGeneration-START** baseline is available for the current instructor-account rehearsal. Use only the baseline assigned to you. The complete beginner path and learner-account checks are still pending; this availability does not establish classroom readiness.

> **Access:** This card uses your OneDrive for Business connection. The instructor confirms the account's HTML-to-PDF route before assigning R5. The prepared **Conversion wait** stays at 10 seconds; do not change it during this repair.

## Your test card

| Test | RequestID | AmountText | Required result after repair |
|---|---|---|---|
| A | R-PDF-01 | 1250.00 | A readable PDF with R-PDF-01 and 1250.00 |
| B | R-PDF-02 | 2750.00 | A different readable PDF with R-PDF-02 and 2750.00 |

## Setup

<StarterFlowSetup exercise="R5" />

### Check your settings


| Action to check | Service |
|---|---|
| Create html source | OneDrive for Business |
| Convert summary | OneDrive for Business |
| Save pdf | OneDrive for Business |

<PersonalConnectionCheck />

Leave the prepared source content, root folders, unique names, wait and converter settings unchanged. No upload is needed; the flow creates its own source and PDF files.

### Save and turn on your flow

<FlowReadyCheck />

**Ready checkpoint:** Your assigned personal flow is On. Every listed action uses your authorised account, and the prepared fault is unchanged.

## Practice 1: Verify a generated document {#practice-1-verify-a-generated-document}

<PracticeIllustration src="/day-2/images/r05-p01.webp" :width="1536" :height="864" alt="A prepared source document is converted and its finished PDF is inspected." />

Correct the created source filename and verify both PDF outputs.

1. On your copy's details page, select **Edit** to open the designer. Then select **Test → Manually → Test**. If **Sign in** appears, complete the [first-test connection check](../preparation.md#first-test-connection-check). Enter test A:

   - **RequestID**

     ```text
     R-PDF-01
     ```

   - **AmountText**

     ```text
     1250.00
     ```

2. Select **Run flow**. When the confirmation says the run has started, select **Done**. Wait for the run-result view and allow the prepared wait to finish.
3. If the result view does not appear, follow [Open your test result](../preparation.md#open-your-test-result). Select the failed **Convert summary** action and read its error. **Save pdf** should show **Skipped**.

Use the test card to diagnose the fault, make one repair and run tests A and B. Try the hints below, or open the full solution whenever you need help.

### Progressive hints

<details><summary>Hint 1: Look at the created file</summary>

The converter reads the file that Create html source saved. Check that file's name before changing the converter.

</details>

<details><summary>Hint 2: Compare the extensions</summary>

The intended source format is HTML. Compare the end of Source name with the end of the actual created filename.

</details>

<details><summary>Hint 3: Use the prepared name</summary>

Create html source should use Outputs from Source name directly. The other prepared fields do not need repairing.

</details>

### Solution available {#solution}

Includes the exact repair and both verification tests. Open whenever you need help.

<details class="rescue-solution">
<summary>View step-by-step solution</summary>
<div class="rescue-solution-content">

1. Select **Create html source**. Under **Inputs → parameters**, read **name** near the top. If the filename is shortened, select **Show raw inputs**. In the right-hand drawer, find **name** under **parameters**, read its ending, then close the drawer using **X**. The name ends in **.txt**, although this action saves HTML content. Compare it with **Source name → Outputs**, which contains the intended unique **.html** filename.
2. Return to **Edit → Create html source → Parameters**. Delete the complete **File Name** value.
3. In **File Name**, type `/` and select **Insert dynamic content**. Under **Source name**, select **Outputs**.

   <div class="day2-field-stack" role="figure" aria-label="Source filename to repair">
     <div><span class="subject-reference-label">Create html source → File Name</span><div class="subject-reference-field"><span class="subject-reference-token">Outputs · Source name</span></div></div>
   </div>

   The prepared Source name already ends in **.html**. You are connecting it directly to File Name; keep all other fields unchanged.
4. Save your changes. Select **Test → Manually → Test** and enter the test A values again. Select **Run flow**, then **Done** at the started confirmation. Wait for the run-result view and completed action statuses.
5. In the run-result view, confirm **Save pdf** is **Succeeded**. Select **Source name → Outputs** and use its copy button to copy the complete filename ending in `.html`.
6. In OneDrive, open **My files** and paste that filename into the search box at the top. If pasting leaves the box empty, type the complete filename shown in **Source name → Outputs**. **In the search box only**, replace the final `.html` with `.pdf`, then press **Enter**. Open the matching result; the list may hide its extension and the PDF preview may open in a new tab. Confirm the full preview filename ends in `.pdf`. For test A, check **R-PDF-01** and **1250.00** on the PDF page.
7. Return to the Power Automate tab. Select **Edit → Test → Manually → Test**. Enter test B:

   - **RequestID**

     ```text
     R-PDF-02
     ```

   - **AmountText**

     ```text
     2750.00
     ```

8. Select **Run flow**, then **Done** at the started confirmation. Wait for the run-result view and completed action statuses.
9. Repeat steps 5–6 using **this run's** Source name output. Confirm Save pdf succeeded, search its matching `.pdf` filename and open the new PDF. This time, check **R-PDF-02** and **2750.00**. Confirm the filename differs from test A and that the PDF did not reuse the first test's values.

</div>
</details>

### Checkpoint

Two saved PDFs open and contain the correct request and amount for their own tests. Record the one setting you changed.

## Reset

Each run creates new names, so a previous output does not have to be deleted before another test. During announced cleanup, remove only the synthetic files whose names you recorded. Leave other OneDrive files untouched.

Reference: [OneDrive for Business conversion actions](https://learn.microsoft.com/connectors/onedriveforbusiness/).
