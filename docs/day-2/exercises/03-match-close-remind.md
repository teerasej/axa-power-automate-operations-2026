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

<PracticeIllustration src="/day-2/images/core03-overview.webp" :width="1536" :height="864" alt="A colleague compares request and response cards and separates completed work from items needing follow-up." loading="eager" />

Your team uses Excel to track requests that repeat each month. **R-101 for October** and **R-101 for November** need separate responses—like two monthly bills for the same account.

The prepared flow treats October’s response as if it also answers November’s request. It marks the November request **Closed**, so it disappears from the follow-up list.

Repair the matching rule so a response closes only the request with the same **RequestID** and **PeriodKey** (month). Then check that the unanswered November request appears in the **reminder preview**.

> **Access:** This exercise uses Power Automate, Excel Online (Business) and OneDrive for Business. The organiser confirms the required service access. It creates a **reminder preview** in Excel; it does not send reminder emails.

## Starting resources

- Starter: **B2D2-v2-Core03-MatchCloseRemind-START**, supplied after the starting-route check.
- Workbook: **core03-match-close-remind.xlsx** from the extracted practice files.

A request is identified by its **RequestID** and **PeriodKey** together. For example, R-101 in October and R-101 in November are two separate requests, even if they share a recipient.

> **Your workbook location:** The starter expects the exact folder and filename below in your own OneDrive. Check your own connection and document library in each action; leave the prepared **File** and **Table** values unchanged.

## Practice 1: Prepare your tracker

<PracticeIllustration src="/day-2/images/core03-setup.webp" :width="1536" :height="864" alt="A colleague arranges request cards and response cards beside a tracker workbook before testing." />

Put the supplied workbook where your personal Flow expects it, then check its account and prepared settings.


The Excel actions use this prepared **File** value:

```text
B2D2-Operations-Request-Desk/core03-match-close-remind.xlsx
```

### Prepare your OneDrive files

Open [Day 2 downloads](../downloads.md) and select **Download the Day 2 practice files (ZIP)** if needed. Extract the ZIP: right-click → **Extract All** on Windows, or double-click on Mac.

1. In OneDrive, open your training folder. If it is missing, select **Create or upload → Folder** (or **Add new → Folder**) and name it:

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

3. On **Responses**, confirm two rows with **PeriodKey** 2026-10. On **ReminderPreview**, confirm **RESET** in the **RequestKey** column. You will clear this marker before the first test.
4. Close the Excel tab.

### Open your personal flow

<StarterFlowSetup exercise="Core03" />

### Check connections and settings

::: warning Required — remove the preview cleanup before checking connections
Do this in **your personal flow** before continuing:

1. In the designer, select the **Clear existing preview** loop. Open its **… (More commands)** menu and select **Delete**. Confirm if prompted. This also removes **Delete preview row** inside it.
2. Select **List existing preview**, open **… (More commands)** and select **Delete**. Confirm if prompted.
3. Check that both are gone and **For each request** follows **Initialize candidates**. Keep **For each request** and **Add preview row**.

**The flow will no longer clear old reminders automatically.** Follow [Clear the reminder preview](#clear-the-reminder-preview) before **every test**, including reruns, so old rows do not affect your result.
:::

Check the **four remaining Excel actions** below:

| Action | Where to open it | Prepared Table |
|---|---|---|
| List requests | Main Flow path | Requests |
| List responses | Main Flow path | Responses |
| Update request | For each request | Requests |
| Add preview row | For each request → Due and pending → True | ReminderPreview |

<PersonalConnectionCheck />

1. Open each action's **Parameters**. Check **Location** is **OneDrive for Business** and **Document Library** is your own document library. It may appear as **Documents** or **เอกสาร**; do not select **PersonalCacheLibrary**. If a selection needs changing, choose your own location/library and wait for the action's fields to finish loading.
2. In each action, check that **File** matches the prepared path above and **Table** matches the table above. Leave both values unchanged. If either is missing or different, stop at that action.
3. Expand **For each request** and select **Update request → Parameters**. Check the prepared **Status** field contains its supplied token; it may display **Outputs** or **Body**. Then expand **Due and pending**. In its **True** branch, select **Add preview row → Parameters**. Check **RequestKey**, **RequestID**, **PeriodKey**, **RecipientSlot** and **DueDate** each contain a prepared value. If any supplied writing field is missing or blank, stop before testing; this is a setup problem.

### Clear the reminder preview

Before **every test**, start with an empty preview—like wiping a whiteboard before making a new list.

1. Wait for any active run to finish. Open **core03-match-close-remind.xlsx** in OneDrive and select **ReminderPreview**.
2. Select all populated cells **below the header row**, across columns **A–E**, including **RESET** or reminders from an earlier run. Use **Home → Clear → Clear Contents**. If there are no populated cells, skip this step. Keep the headers and the Excel table; leave **Requests** and **Responses** unchanged.
3. Confirm that no values remain below the headers. Wait for Excel to save, then close the workbook tab before running the flow.

### Save and turn on your flow

<FlowReadyCheck />

### Checkpoint {#setup-checkpoint}

Your canonical workbook has three Pending requests, two October responses and no populated reminder rows. The two cleanup steps are removed. All four remaining Excel actions use your account/library and the supplied File/Table settings. The prepared writing fields remain populated. Your personal flow is On. You have not changed **Matching responses** yet.

## Practice 2: Reproduce the wrong match {#practice-1-match-responses-to-requests}

<PracticeIllustration src="/day-2/images/core03-p01.webp" :width="1536" :height="864" alt="Responses are matched to request identifiers and reporting periods." />

Show which response incorrectly closes the November request.

Before starting or repeating this test, [clear the reminder preview](#clear-the-reminder-preview).

1. On your copy's details page, select **Edit** to open the designer. Then select **Test**. Wait until **Manually** appears, select it, then select **Test**. If **Sign in** appears, complete the [first-test connection check](../preparation.md#first-test-connection-check). Enter **CutoffDate**:

   ```text
   2026-11-17
   ```

2. Select **Run flow**. When the confirmation says the run has started, select **Done**.
3. Wait for the run-result view showing the action statuses. If it does not appear, follow [Open your test result](../preparation.md#open-your-test-result).
4. Expand **For each request**. In its iteration box showing **1 of 3**, enter **3**. Confirm that it shows **3 of 3** before inspecting the actions below.
5. In the Flow canvas, scroll to **Update request** and select it. Under **Inputs → parameters**, find **id**, the row key. Confirm it is **R-101|2026-11** and **idColumn** is **RequestKey**. You are now looking at the November request.
6. Select **Matching responses** and wait for its details to finish loading. Under **Outputs → Body**, find **0.PeriodKey** = **2026-10** and **0.RequestKey** = **R-101|2026-10**. This first matched response is from October. Select **Calculated status → Outputs** and note its **Closed** result.
7. After the run finishes, open **core03-match-close-remind.xlsx** from your OneDrive training folder. Check both sheets:

   - **Requests:** all three rows show **Closed**, including **R-101|2026-11** (November).
   - **ReminderPreview:** there is no request listed for follow-up.

   **Why is this wrong?** The reply for **R-101** belongs to **October**. There is no November reply yet. The flow has mistaken the old reply for a new one—like treating last month’s paid bill as proof that this month’s bill is paid.

   ```mermaid
   flowchart TB
     A["Reply received for October<br/>R-101 · 2026-10"] -->|Wrong match: same ID, different month| B["November request marked Closed<br/>R-101 · 2026-11"]
     B --> C["ReminderPreview is empty<br/>The unanswered request is missed"]
   ```

   **What should happen instead?** The two October requests should be **Closed**. The November request should stay **Pending** and appear in **ReminderPreview** because it is due and still unanswered. You will repair this in Practice 3.
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

[Clear the reminder preview](#clear-the-reminder-preview) before this test and every rerun.

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
3. Select **A4**. Confirm that **Table Design** is available and the Table's blue banding includes the new row. Then [clear the reminder preview](#clear-the-reminder-preview) to remove the reminder from Test A. Keep the response you just added. Wait for Excel to save, then close the tab.
4. Return to the Power Automate tab. Select **Edit → Test → Manually → Test**. Enter **CutoffDate**:

   ```text
   2026-11-17
   ```

5. Select **Run flow**, then **Done** at the started confirmation. Wait for the run-result view and completed action statuses. In your OneDrive training folder, open **core03-match-close-remind.xlsx**. All three **Requests** statuses must be Closed and **ReminderPreview** must have zero populated rows.
6. Ask your partner to compare the final response with the November request and check the empty preview.

### Checkpoint {#checkpoint-1}

Test A creates exactly one November reminder item. After you clear that preview and add the matching response, Test B closes the request and creates no new reminder. You repaired the matching query; the flow updates the statuses, and you clear old preview values before each run.

<details><summary>Extra tests, only if assigned</summary>

Use a clean reset copy for each test. A duplicate October response must not close the November request. A response for the wrong period must not close it either. A CutoffDate before the supplied DueDate values should produce no due preview items.

</details>

## Reset

1. Wait for active runs to finish and close all editing tabs for this workbook.
2. In OneDrive, open **My files → B2D2-Operations-Request-Desk**. Use **Create or upload → Files upload** and select **reset/core03-match-close-remind.xlsx** from your extracted practice files. Keep its canonical filename unchanged.
3. If OneDrive reports **locked for shared use**, keep the workbook tabs closed, wait, then select **Retry** for the upload. Do not rename the file or change the Flow's File/Table settings.
4. At the **Replace** prompt, check that this is your own synthetic **core03-match-close-remind.xlsx**, then select **Replace**. Wait for **Uploaded**.
5. Open the workbook. If Excel shows a workbook-restored notice, select **Close**. Verify three Pending requests, exactly two October responses and **RESET** in ReminderPreview's **RequestKey** column. Then [clear the reminder preview](#clear-the-reminder-preview), including RESET, and close the Excel tab before testing.

The restored file must remain at this exact own-OneDrive location:

```text
B2D2-Operations-Request-Desk/core03-match-close-remind.xlsx
```

An Uploaded message alone is not the reset checkpoint. Continue only after checking the workbook's starting data. Leave the Flow's prepared File/Table values unchanged.

## If the result is unexpected

| What you see | Check first |
|---|---|
| November still Closed | Check that Filter Query contains both the RequestID and PeriodKey comparisons |
| Old or duplicate reminder rows remain | Clear ReminderPreview before every test; the cleanup actions were removed during setup |
| Status correct but new preview is blank | Check the five writing fields in Add preview row, then confirm CutoffDate |
| Excel is busy or an update fails | Close its editing tab and wait for the active run to finish before trying again |

References: [Data operations and Filter array](https://learn.microsoft.com/power-automate/data-operations), [Excel Online (Business)](https://learn.microsoft.com/connectors/excelonlinebusiness/).
