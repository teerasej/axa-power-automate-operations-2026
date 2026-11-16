---
title: Day 2 Exercise 3. Match, Close and Remind
pageClass: day2-exercise
prev:
  text: Exercise 2. Reliable Document Handoff
  link: /day-2/exercises/02-document-handoff
next:
  text: Exercise 4. Flow Rescue Challenge
  link: /day-2/exercises/04-flow-rescue
---

# Exercise 3: Match, Close and Remind

> **Draft rehearsal:** The **B2D2-v2-Core03-MatchCloseRemind-START** baseline is available for the current instructor-account shared-copy rehearsal. Use only the baseline assigned to you. The full beginner path and learner-account checks are still being rehearsed; this availability does not establish classroom readiness.

An October response must not close a November request. Repair the matching rule, then check which request still needs a response.

> **Access:** This exercise uses Power Automate, Excel Online (Business) and OneDrive for Business. The organiser confirms the required service access. It creates a **reminder preview** in Excel; it does not send reminder emails.

## Starting resources

- Starter: **B2D2-v2-Core03-MatchCloseRemind-START**, supplied after the starting-route check.
- Workbook: **core03-match-close-remind.xlsx** from the extracted practice files.

A request is identified by its **RequestID** and **PeriodKey** together. For example, R-101 in October and R-101 in November are two separate requests, even if they share a recipient.

> **Your workbook location:** The starter expects the exact folder and filename below in your own OneDrive. Check your own connection and document library in each action; leave the prepared **File** and **Table** values unchanged.

## Practice 1: Prepare your tracker

Put the supplied workbook where your personal Flow expects it, then check its account and prepared settings.

Check all six Excel Online (Business) actions in your own copy:

| Action | Where to open it | Prepared Table |
|---|---|---|
| List requests | Main Flow path | Requests |
| List responses | Main Flow path | Responses |
| List existing preview | Main Flow path | ReminderPreview |
| Delete preview row | Clear existing preview | ReminderPreview |
| Update request | For each request | Requests |
| Add preview row | For each request → Due and pending → True | ReminderPreview |

All six actions already use this prepared **File** value:

```text
B2D2-Operations-Request-Desk/core03-match-close-remind.xlsx
```

1. In OneDrive, open your training folder. If needed, create a folder named:

   ```text
   B2D2-Operations-Request-Desk
   ```

   Open it. If **core03-match-close-remind.xlsx** is already there, follow [Reset](#reset) before continuing. Otherwise, use **Create or upload → Files upload** to upload that workbook from the extracted practice files. Keep the exact filename; the prepared Flow expects this folder and name. Each pair uses its own OneDrive.
2. Open the workbook. On the **Requests** sheet, confirm these starting rows:

   | RequestKey | RequestID | PeriodKey | Status |
   |---|---|---|---|
   | R-101\|2026-10 | R-101 | 2026-10 | Pending |
   | R-102\|2026-10 | R-102 | 2026-10 | Pending |
   | R-101\|2026-11 | R-101 | 2026-11 | Pending |

3. On **Responses**, confirm two rows with **PeriodKey** 2026-10. On **ReminderPreview**, confirm **RESET** in the **RequestKey** column. The Flow removes this marker when it starts.
4. Close the Excel tab.
5. Complete [Start your assigned Flow](../preparation.md#start-your-assigned-flow) using the announced route. Open the Flow you just copied or imported and select **Edit**.
6. Complete [Check the account used by each service](../preparation.md#check-your-connection-account) for all six actions in the table above. Check each action separately.
7. Open each action's **Parameters**. Check **Location** is **OneDrive for Business** and **Document Library** is your own document library. It may appear as **Documents** or **เอกสาร**; do not select **PersonalCacheLibrary**. If a selection needs changing, choose your own location/library and wait for the action's fields to finish loading.
8. In each action, check that **File** matches the prepared path above and **Table** matches the table above. Leave both values unchanged. If either is missing or different, stop at that action.
9. Expand **For each request** and select **Update request → Parameters**. Check the prepared **Status** field contains its supplied token; it may display **Outputs** or **Body**. Then expand **Due and pending**. In its **True** branch, select **Add preview row → Parameters**. Check **RequestKey**, **RequestID**, **PeriodKey**, **RecipientSlot** and **DueDate** each contain a prepared value. If any supplied writing field is missing or blank, stop before testing; this is a setup problem.
10. [Save your changes](../preparation.md#save-your-changes) using the control shown in your editor.
11. Return to your own copy's details page. If its status is Off, select **Turn on**. Confirm it is On before the first test.

### Checkpoint {#setup-checkpoint}

Your canonical workbook has three Pending requests, two October responses and the RESET marker. All six actions use your account/library and the supplied File/Table settings. The prepared writing fields remain populated. You have not changed **Matching responses** yet.

## Practice 2: Reproduce the wrong match {#practice-1-match-responses-to-requests}

<PracticeIllustration src="/day-2/images/core03-p01.webp" :width="1536" :height="864" alt="Responses are matched to request identifiers and reporting periods." />

Show which response incorrectly closes the November request.

1. On your copy's details page, select **Edit** to open the designer. Then select **Test**. Wait until **Manually** appears, select it, then select **Test**. If **Sign in** appears, complete the [first-test connection check](../preparation.md#first-test-connection-check). Enter **CutoffDate**:

   ```text
   2026-11-17
   ```

2. Select **Run flow**. When the confirmation says the run has started, select **Done**.
3. Wait for the run-result view showing the action statuses. If it does not appear, follow [Open your test result](../preparation.md#open-your-test-result).
4. Expand **For each request**. In its iteration box showing **1 of 3**, enter **3**. Confirm that it shows **3 of 3** before inspecting the actions below.
5. In the Flow canvas, scroll to **Update request** and select it. Under **Inputs → parameters**, find **id**, the row key. Confirm it is **R-101|2026-11** and **idColumn** is **RequestKey**. You are now looking at the November request.
6. Select **Matching responses** and wait for its details to finish loading. Under **Outputs → Body**, find **0.PeriodKey** = **2026-10** and **0.RequestKey** = **R-101|2026-10**. This first matched response is from October. Select **Calculated status → Outputs** and note its **Closed** result.
7. After the run finishes, return to your OneDrive training folder and open **core03-match-close-remind.xlsx**. On **Requests**, all three rows are now Closed. **ReminderPreview** has no populated row. That is the faulty result: the November request still has no November response.
8. Close the Excel tab before returning to the Flow.

### Checkpoint {#fault-checkpoint}

You can identify the November request and its incorrectly matched October response. The wrong match closes all requests and leaves an empty preview. You have not changed the rule yet.

## Practice 3: Repair and verify the tracker {#practice-2-select-only-due-outstanding-requests}

<PracticeIllustration src="/day-2/images/core03-p02.webp" :width="1536" :height="768" alt="Only the remaining due request is selected while completed requests are set aside." />

Repair the matching rule and prove that only a response for the same request and period closes it.

### Repair the rule

1. Return to **Edit**. Expand **For each request** and select **Matching responses → Parameters**.
2. Leave **From** unchanged. It already supplies the response rows from **List responses**. If **Edit in advanced mode** is shown, select it. If the query field is already visible and the control says **Edit in basic mode**, continue in the current mode.
3. Select all of **Filter Query** and paste this complete query directly into that field:

   ```text
   @and(equals(item()?['RequestID'], items('For_each_request')?['RequestID']), equals(item()?['PeriodKey'], items('For_each_request')?['PeriodKey']))
   ```

   Keep its leading `@`, then press **Tab** to finish entering it. The designer may display the query as an expression token. Do not put `@{...}` around it or open a separate Function editor.

   <div class="day2-field-stack" role="figure" aria-label="Response matching fields">
     <div><span class="subject-reference-label">From — leave unchanged</span><div class="subject-reference-field"><span class="subject-reference-token">value · List responses</span></div></div>
     <div><span class="subject-reference-label">Filter Query — replace the complete query</span><div class="subject-reference-field">Typed directly: the complete @and(...) query above</div></div>
   </div>

   The two checks mean **same request AND same period**. It is like a booking number and travel date: the number alone does not identify the right journey. Keep the prepared loop and status actions unchanged.
4. Save your changes using the [control shown in your editor](../preparation.md#save-your-changes).

### Test A: Keep the November request open

1. Select **Test → Manually → Test**. Enter the same **CutoffDate**:

   ```text
   2026-11-17
   ```

2. Select **Run flow**, then **Done** at the started confirmation. Wait for the run-result view and completed action statuses. In your OneDrive training folder, open **core03-match-close-remind.xlsx**. Do not reset the statuses by hand; the Flow recalculates them.
3. Check **Requests**:

   | RequestKey | Required status |
   |---|---|
   | R-101\|2026-10 | Closed |
   | R-102\|2026-10 | Closed |
   | R-101\|2026-11 | Pending |

<span id="checkpoint"></span>

4. Select **ReminderPreview**. It must contain exactly one populated row:

   | RequestKey | RequestID | PeriodKey | RecipientSlot | DueDate |
   |---|---|---|---|---|
   | R-101\|2026-11 | R-101 | 2026-11 | SLOT-A | 2026-11-17 |

   Excel may display the date as **17/11/2026**. Check the calendar date and request key.

### Test B: Close it with the final response

1. In the workbook, select **Responses**. Click the first empty row immediately below the two existing responses. Enter one value in each named column:

   - **ResponseID**

     ```text
     RESP-003
     ```

   - **RequestKey**

     ```text
     R-101|2026-11
     ```

   - **RequestID**

     ```text
     R-101
     ```

   - **PeriodKey**

     ```text
     2026-11
     ```

2. Select **A3**, an existing cell in the Responses Table. Select **Table Design → Resize Table**. Set the range to:

   ```text
   A1:D4
   ```

   Select **OK** to include the new response row.
3. Select **A4**. Confirm that **Table Design** is available and the Table's blue banding includes the new row. Wait for Excel to save, then close the tab.
4. Return to the Power Automate tab. Select **Edit → Test → Manually → Test**. Enter **CutoffDate**:

   ```text
   2026-11-17
   ```

5. Select **Run flow**, then **Done** at the started confirmation. Wait for the run-result view and completed action statuses. In your OneDrive training folder, open **core03-match-close-remind.xlsx**. All three **Requests** statuses must be Closed and **ReminderPreview** must have zero populated rows.
6. Ask your partner to compare the final response with the November request and check the empty preview.

### Checkpoint {#checkpoint-1}

Test A leaves exactly one November reminder item. Test B adds its matching response, closes the request and removes that item. You repaired only the matching query; the prepared Flow cleared the old preview and updated the statuses.

<details><summary>Extra tests, only if assigned</summary>

Use a clean reset copy for each test. A duplicate October response must not close the November request. A response for the wrong period must not close it either. A CutoffDate before the supplied DueDate values should produce no due preview items.

</details>

## Reset

1. Wait for active runs to finish and close all editing tabs for this workbook.
2. In OneDrive, open **My files → B2D2-Operations-Request-Desk**. Use **Create or upload → Files upload** and select **reset/core03-match-close-remind.xlsx** from your extracted practice files. Keep its canonical filename unchanged.
3. If OneDrive reports **locked for shared use**, keep the workbook tabs closed, wait, then select **Retry** for the upload. Do not rename the file or change the Flow's File/Table settings.
4. At the **Replace** prompt, check that this is your own synthetic **core03-match-close-remind.xlsx**, then select **Replace**. Wait for **Uploaded**.
5. Open the workbook. If Excel shows a workbook-restored notice, select **Close**. Verify three Pending requests, exactly two October responses and **RESET** in ReminderPreview's **RequestKey** column. Close the Excel tab before testing.

The restored file must remain at this exact own-OneDrive location:

```text
B2D2-Operations-Request-Desk/core03-match-close-remind.xlsx
```

An Uploaded message alone is not the reset checkpoint. Continue only after checking the workbook's starting data. Leave the Flow's prepared File/Table values unchanged.

## If the result is unexpected

| What you see | Check first |
|---|---|
| November still Closed | Check that Filter Query contains both the RequestID and PeriodKey comparisons |
| Status correct but preview wrong | Confirm CutoffDate, then open the workbook's ReminderPreview sheet after the run finishes |
| Excel is busy or an update fails | Close its editing tab and wait for the active run to finish before trying again |

References: [Data operations and Filter array](https://learn.microsoft.com/power-automate/data-operations), [Excel Online (Business)](https://learn.microsoft.com/connectors/excelonlinebusiness/).
