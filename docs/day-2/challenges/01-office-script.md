---
title: Rescue R1. Office Script result
pageClass: day2-exercise
prev:
  text: Flow Rescue Challenge
  link: /day-2/exercises/04-flow-rescue
next: false
---

# Rescue R1: Office Script result

The prepared Flow should read a small workbook through a supplied Office Script and return its request count. It currently stops before producing the expected count. Find the first failing dependency and repair the configuration.

> **Access:** Office Scripts with Power Automate requires an eligible Microsoft 365 business licence and Office Scripts enabled for the authorised account. Use this live challenge only after **Run script** access has been rehearsed. The script is supplied and read-only; you do not need to write TypeScript. If access is unavailable, inspect the labelled static evidence and report a review result.

## Your test card

| Item | Resource |
|---|---|
| Starter | B2D2-R01-OfficeScript-START |
| Workbooks | rescue01-script-workbook-a.xlsx and rescue01-script-workbook-b.xlsx |
| Supplied script | rescue01-check-table.ts |
| Expected result | Numeric count **3** from each workbook copy |
| Scope | One parameter repair; keep the script and workbook contents unchanged |

Download the resources and check [starter availability](../downloads.md#starter-flow-status) before live practice. The script must exist in the authorised account and be selected in the prepared **Run script** action. A Flow package alone does not distribute an Office Script.

## Setup: Install the supplied script

Complete this external dependency before the timed repair. You will paste the supplied source unchanged.

1. Upload both R1 workbooks into your own training folder. Open **rescue01-script-workbook-a.xlsx** in Excel for the web. Select **Automate → New Script → Create in Code Editor**. If the first-use pane shows **Turn actions into scripts**, select **Write a script**.
2. Open **rescue01-check-table.ts** from the extracted [practice files](../downloads.md). Copy its entire contents. In the script editor, select all existing default code and replace it with the supplied source. Do not run the default script.
3. Select **Rename**, enter the name below and press Enter. Wait until the save control confirms **Script saved**.

   ```text
   B2D2-CheckTable-ReadOnly
   ```

4. Close the workbook's editing tab. In the imported Flow's `Run_table_check`, select your own workbook A and **B2D2-CheckTable-ReadOnly**. Keep the starter's initial **ScriptParameters/tableName** value unchanged for the first diagnostic test.

If **Automate**, the script editor or saving is unavailable, record the access boundary and use the labelled evidence-review route. Do not change tenant settings.

## Practice 1: Check a script dependency

<PracticeIllustration src="/day-2/images/r01-p01.webp" :width="1536" :height="864" alt="A workbook reference is checked against the dependency required by a supplied script." />

Repair a configuration dependency so the supplied script returns the expected count from both workbook copies.

1. Import your assigned START Flow. Select workbook A and the supplied read-only script in `Run_table_check`. Recheck the connection account, select **Publish** and confirm **Published**.
2. Run the first test. Read the failed action’s actual inputs and error. Open workbook A in Excel and compare the workbook’s actual Tables with what the action requests. Close Excel again before retesting.
3. Record the expected count, actual result and first mismatch. Change only the justified parameter in the Flow. Keep the supplied TypeScript unchanged.
4. Select **Publish** and confirm **Published**, then run test A. Confirm `Script_result` returns numeric **3**.
5. Select workbook B using the File picker in `Run_table_check`, keep the same script and repaired parameter, then select **Publish** and confirm **Published** before running test B. Confirm numeric **3** again. The trigger needs no test input; the File picker selects the workbook for this test.
6. Return your two-test evidence to the [shared peer-verification activity](../exercises/04-flow-rescue.md#practice-2-verify-another-teams-test).

### Progressive hints

<details><summary>Hint 1: Separate access from a script error</summary>

A connection or entitlement error happens before the supplied script can inspect a workbook. If the script itself reports a missing dependency, compare its requested input with the workbook schema.

</details>

<details><summary>Hint 2: Inspect the action’s inputs</summary>

The script accepts a workbook and a tableName parameter, displayed in the action as **ScriptParameters/tableName**. Check both selected resources rather than replacing the workbook with unrelated data.

</details>

<details><summary>Hint 3: Compare exact names</summary>

A worksheet name and a Table name are different. Compare the exact parameter text with the Table name shown in Excel, including spelling. Keep your evidence before changing the value.

</details>

### Checkpoint

Both workbook copies return numeric **3**. Your evidence shows the configuration mismatch and the two successful outputs. This controlled dependency test does not establish the cause of any earlier workbook-lock or script failure.

## Reset

Wait for the run to finish. Restore fresh copies of the two supplied workbooks and reselect File and Script. Select **Publish** and confirm **Published** before retesting. The script is read-only, so no workbook data repair should be necessary. Turn off the practice Flow after verification.

Reference: [Office Scripts with Power Automate: troubleshooting](https://learn.microsoft.com/office/dev/scripts/testing/power-automate-troubleshooting).
