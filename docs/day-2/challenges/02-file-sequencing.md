---
title: Rescue R2. File dependency order
pageClass: day2-exercise
prev:
  text: Flow Rescue Challenge
  link: /day-2/exercises/04-flow-rescue
next: false
---

# Rescue R2: File dependency order

The Flow creates a file, but the next action does not read it. Repair the one **Run after** setting that controls when reading can start.

> **Draft rehearsal:** The **B2D2-v2-R02-FileSequencing-START** baseline is available for the current instructor-account rehearsal. Use only the baseline assigned to you. A complete learner-account copy and runtime check is still required; this availability does not establish classroom readiness.

> **Access:** This card uses Power Automate and your own OneDrive for Business. The instructor confirms access before assigning R2.

## Your test card

| Test | Input | Required result after repair |
|---|---|---|
| A | Start a manual run; no values needed | File created, retrieval succeeds, result is Sequence verified |
| B | Start another run | A different file produces the same expected result |

Each run creates a unique filename beginning **B2D2-R02-sequence-**. The prepared file actions use your OneDrive root; you do not need to create a folder.

## Setup

<StarterFlowSetup exercise="R2" />

### Check your settings


| Action to check | Service |
|---|---|
| Create training file | OneDrive for Business |
| Retrieve training file | OneDrive for Business |

<PersonalConnectionCheck />

Leave the prepared filename, root folder and file-content values unchanged. No upload is needed; the flow creates its own test files.

### Save and turn on your flow

<FlowReadyCheck />

**Ready checkpoint:** Your assigned personal flow is On. Every listed action uses your authorised account, and the prepared fault is unchanged.

## Practice 1: Restore the file dependency order {#practice-1-restore-the-file-dependency-order}

<PracticeIllustration src="/day-2/images/r02-p01.webp" :width="1536" :height="768" alt="A document must be placed on a shelf before it can be retrieved." />

Investigate why file retrieval is skipped and verify the content in two fresh runs.

1. On your copy's details page, select **Edit** to open the designer. Then select **Test → Manually → Test**. If **Sign in** appears, complete the [first-test connection check](../preparation.md#first-test-connection-check). No input is needed; select **Run flow**. When the confirmation says the run has started, select **Done**.
2. Wait for the run-result view. If it does not appear, follow [Open your test result](../preparation.md#open-your-test-result). Check **Create training file**: it should show **Succeeded**.
3. Check **Retrieve training file** and **Retrieved result**: both should show **Skipped**. A skipped action did not run.
4. Select **File name → Outputs** and copy the complete filename.
5. In OneDrive, open **My files**. Paste the complete filename into the search box at the top and press **Enter**.
6. Open the result whose name matches your copied filename. The result list may hide the `.txt` extension. The preview may open in a new tab. In the preview, confirm the full filename matches and the content is:

   ```text
   Sequence verified
   ```


Use the test card to diagnose the fault, make one repair and run tests A and B. Try the hints below, or open the full solution whenever you need help.

### Progressive hints

<details><summary>Hint 1: Notice Skipped</summary>

The file was created successfully. Reading was skipped before it tried to open the file, so first check the condition that allows the reading action to start.

</details>

<details><summary>Hint 2: Explain Run after in plain language</summary>

Run after means “start this action when the previous action has this result.” Reading should start after creation is successful.

</details>

<details><summary>Hint 3: Repair one setting</summary>

Open Retrieve training file's Run after setting. It should require successful creation, rather than failed creation.

</details>

### Solution available {#solution}

Includes the exact repair and both verification tests. Open whenever you need help.

<details class="rescue-solution">
<summary>View step-by-step solution</summary>
<div class="rescue-solution-content">

1. Return to the Power Automate tab and select **Edit**. Select **Retrieve training file → Settings**. Under **Run after**, select the arrow beside **Create training file** to show its result choices.
2. Select **Is successful** and clear **Has failed**. Keep **Has timed out** and **Is skipped** cleared. This is the only action setting you repair.
3. Save your changes using the [control shown in your editor](../preparation.md#save-your-changes).
4. Select **Test → Manually → Test** to run test A again. No input is needed. Select **Run flow**, then **Done** when the started confirmation appears. Wait for the run-result view. Check **Retrieve training file** is **Succeeded**. Record the filename from **File name → Outputs**, then check **Retrieved result → Outputs** contains **Sequence verified**.
5. From this result view, select **Edit → Test → Manually → Test** for test B. No input is needed. Select **Run flow**, then **Done** when the started confirmation appears. Wait for the new run-result view. Open **File name → Outputs** and compare it with your test A filename: it must be different. Check **Retrieve training file** is **Succeeded** and **Retrieved result → Outputs** again contains **Sequence verified**.

</div>
</details>

### Checkpoint

Two fresh runs create different files, retrieve their content successfully and return **Sequence verified**. Record the one setting you changed.

## Reset

No file reset is needed because every run uses a new filename. During announced cleanup, remove only your own recorded **B2D2-R02-sequence-** files. Leave other files untouched.

This is a controlled sequencing exercise. It does not reproduce a workbook lock or diagnose a real lock incident.

Reference: [Cloud Flow designer and Run after settings](https://learn.microsoft.com/power-automate/flows-designer).
