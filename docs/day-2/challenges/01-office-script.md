---
title: Rescue R1. Office Script result
pageClass: day2-exercise
prev:
  text: Flow Rescue Challenge
  link: /day-2/exercises/04-flow-rescue
next: false
---

# Rescue R1: Office Script result

A prepared Flow should count the requests in a workbook. It stops because the supplied script cannot find the table it was asked to read. Repair the one parameter that identifies that table.

> **Draft rehearsal:** The **B2D2-v2-R01-OfficeScript-START** baseline is available for the current instructor-account shared-copy rehearsal. Use only the baseline assigned to you. Learner-account, package-import and complete beginner-path checks are still pending; this availability does not establish classroom readiness.

> **Access:** The instructor confirms Excel for the web and Office Scripts access before assigning R1. If **Automate** or **Run script** is unavailable, stop and tell the instructor. You copy a supplied read-only script; you do not write TypeScript.

## Your test card

| Test | File selected in Run table check | Required result |
|---|---|---|
| A | rescue01-script-workbook-a.xlsx | Numeric 3 |
| B | rescue01-script-workbook-b.xlsx | Numeric 3 |

> **Excel file selection:** In **Document Library**, choose your OneDrive document library. It may appear as **Documents** or **เอกสาร**. Do not select **PersonalCacheLibrary**. For this card, select the supplied **File** and **Script**; there is no Table picker in Run script.

The supplied workbook Table is named **RequestsTable**. The worksheet tab is **Requests**; those two names are different.

## Setup: Install the supplied script

Complete this setup before the repair timer starts.

| Action to check | Service |
|---|---|
| Run table check | Excel Online (Business) |


1. Upload both R1 workbooks from your extracted practice files to your OneDrive training folder.
2. Open **rescue01-script-workbook-a.xlsx** in Excel for the web.
3. Select **Automate → New Script → Create in Code Editor**. If the first-use screen offers **Write a script**, select it.
4. Select all default code in the editor and replace it with the unchanged supplied script:

   ```typescript
   /**
    * Read-only table check for the Operations Request Desk exercise.
    * Save this as an Office Script before binding Run script in Power Automate.
    * This source file is not an importable Flow package.
    */
   function main(workbook: ExcelScript.Workbook, tableName: string): number {
     const table = workbook.getTable(tableName);
     if (!table) {
       throw new Error(`Required table missing: ${tableName}`);
     }
     return table.getRowCount();
   }
   ```

5. Select **Rename**. In **Enter script name**, type:

   ```text
   B2D2-CheckTable-ReadOnly
   ```

   Press **Enter** to confirm the name.
6. If **Save script** is shown, select it. Wait for **Script saved**, then close the Excel tab.
7. Complete [Start your assigned Flow](../preparation.md#start-your-assigned-flow) using the route announced for R1. Open the Flow you just copied or imported and select **Edit**.
8. Complete [Check the account used by each service](../preparation.md#check-your-connection-account) for Run table check. Stop if its selected account/reference is not assigned to you.
9. Select **Run table check → Parameters**. Set **Location** to **OneDrive for Business** and **Document Library** to your document library. Select workbook A in **File**. In **Script**, select the script you just named in step 5 — normally **B2D2-CheckTable-ReadOnly**.
10. Wait for the script's parameter fields to finish loading. Check **tableName** (shown as **ScriptParameters/tableName** in some views). Its prepared starting value should be:

    ```text
    RequestsTypo
    ```

    If the field is empty, type this value. This restores the starter's intended first-test value after selecting a different script. You will repair it during Practice 1.
11. [Save your changes](../preparation.md#save-your-changes).
12. After saving the setup, open your own copy's details page. If it is Off, select **Turn on**. Confirm it is On before starting test A.

## Practice 1: Check a script dependency {#practice-1-check-a-script-dependency}

<PracticeIllustration src="/day-2/images/r01-p01.webp" :width="1536" :height="864" alt="A workbook reference is checked against the dependency required by a supplied script." />

Correct the table-name parameter and return the count from two workbook copies.

1. On your copy's details page, select **Edit** to open the designer. Then select **Test → Manually → Test**. If **Sign in** appears, complete the [first-test connection check](../preparation.md#first-test-connection-check). This trigger needs no input; select **Run flow**. When the confirmation says the run has started, select **Done**.
2. Wait for the run-result view showing the action statuses. If it does not appear, follow [Open your test result](../preparation.md#open-your-test-result).
3. Select the failed **Run table check** action. Read its **Inputs** and error. It should report that the requested table is missing.
4. Compare the requested **tableName** in the failed action with the supplied Table name above: **RequestsTable**. The script needs the Table name, not the Requests worksheet name.
5. Return to **Edit → Run table check → Parameters**. In **tableName** (shown as **ScriptParameters/tableName** in some views), replace the existing value with:

   ```text
   RequestsTable
   ```

6. Save your changes using the [control shown in your editor](../preparation.md#save-your-changes).
7. Select **Test → Manually → Test** for test A. No input is needed. Select **Run flow**, then **Done** at the started confirmation. Wait for the run-result view, then check **Script result → Outputs** contains numeric **3**.
8. Select **Edit**, then **Run table check → Parameters**. Select workbook B in **File**. Keep the same script and repaired tableName. Save your changes.
9. Select **Test → Manually → Test** for test B. No input is needed. Select **Run flow**, then **Done** at the started confirmation. Wait for the run-result view, then check **Script result → Outputs** for numeric **3** again.

### Progressive hints

<details><summary>Hint 1: Read the error first</summary>

A missing-table message means the script ran far enough to look for a table. Compare the tableName input with the workbook's actual Table name.

</details>

<details><summary>Hint 2: A sheet is not a Table</summary>

The sheet is called Requests. The Table on it is called RequestsTable. The script needs the Table name.

</details>

<details><summary>Hint 3: Keep the script unchanged</summary>

Repair the tableName parameter in Run table check. Do not edit the TypeScript or workbook data.

</details>

### Checkpoint

Both workbook copies return numeric **3**. Your evidence names the wrong parameter and shows the two corrected outputs.

## Reset

The script is read-only. Select clean copies from the **reset** folder only if you changed a workbook. Reselect File and Script and save before retesting.

References: [Office Scripts troubleshooting](https://learn.microsoft.com/office/dev/scripts/testing/power-automate-troubleshooting), [Create a script for a Flow](https://learn.microsoft.com/office/dev/scripts/tutorials/excel-power-automate-manual).
