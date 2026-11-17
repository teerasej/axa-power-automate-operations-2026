---
title: Day 2 Exercise 1. Repair Relay
pageClass: day2-exercise
prev:
  text: Preparation
  link: /day-2/preparation
next:
  text: Exercise 2. Reliable Document Handoff
  link: /day-2/exercises/02-document-handoff
---

# Exercise 1: Repair Relay

<PracticeIllustration src="/day-2/images/core01-overview.webp" :width="1536" :height="864" alt="Two colleagues compare a request with its recorded and delivered results." loading="eager" />

Your team tracks IT and PMO requests in Excel. The prepared flow reads a selected request, updates its row in **Results**, and emails the amount to the chosen test recipient. For example, **R-101** has an amount of **1250.00**; both the result row and email should show that value.

The flow finishes successfully, but records and sends the wrong amount. It is like copying a price from an order onto a receipt: completing the task does not mean the number is correct.

Trace the amount through the flow, repair the first setting that changes it, and check both the IT and PMO results.

> **Access:** Use the training account checked in [Preparation](../preparation.md). This exercise needs Power Automate, Excel Online (Business), OneDrive for Business and Outlook. The organiser confirms the required service access before class.

## Starting resources

- Starter: **B2D2-v2-Core01-RepairRelay-START**, supplied by the instructor after the starting-route check.
- Workbook: **core01-repair-relay.xlsx**, from the extracted practice files.
- Your two agreed test addresses, **RecipientA** and **RecipientB**.

Use one driver and one checker. The checker reads the next step and checks the result; swap roles after Practice 2.

> **Your workbook location:** The starter expects the exact folder and filename below in your own OneDrive. Check your own connection and document library; leave the prepared **File** and **Table** values unchanged.

## Practice 1: Prepare your exercise

<PracticeIllustration src="/day-2/images/core01-setup.webp" :width="1536" :height="864" alt="A colleague places a workbook in a personal training folder beside a readiness checklist." />

Put the supplied workbook where your personal Flow expects it, then check its account and prepared settings.


Both Excel actions already use this prepared **File** value:

```text
B2D2-Operations-Request-Desk/core01-repair-relay.xlsx
```

### Prepare your OneDrive files

Open [Day 2 downloads](../downloads.md) and select **Download complete Day 2 workshop (ZIP)** if needed. Extract the ZIP: right-click → **Extract All** on Windows, or double-click on Mac. Open **files/** for the practice resources.

1. In OneDrive, open your training folder. If it does not exist, select **Create or upload → Folder** (or **Add new → Folder**) and name it:

   ```text
   B2D2-Operations-Request-Desk
   ```

   <LearnScreenshot image="folder" />

   <LearnScreenshot image="folder-name" />

2. Open that folder. If **core01-repair-relay.xlsx** is already there, follow [Reset](#reset) before continuing. Otherwise, select **Create or upload → Files upload** and upload that workbook from your extracted practice files. Keep the exact filename; the prepared Flow expects this folder and name. Each pair uses its own OneDrive.
3. Open the workbook in Excel for the web. Select **Requests** and confirm these two requests:

   | RequestID | RouteKey | RecipientSlot | AmountText |
   |---|---|---|---|
   | R-101 | IT | SLOT-A | 1250.00 |
   | R-102 | PMO | SLOT-B | 2750.00 |

4. Select **Results**. Confirm that the **R-101** and **R-102** rows exist and both have **Pending** in **Outcome**. Close the Excel tab.

### Open your personal flow

<StarterFlowSetup exercise="Core01" />

### Check connections and settings

| Action | Service | Prepared Table |
|---|---|---|
| List requests | Excel Online (Business) | Requests |
| Update result, inside One request → True | Excel Online (Business) | Results |
| Send result, inside One request → True | Office 365 Outlook | Not applicable |

<PersonalConnectionCheck />

1. Open **List requests → Parameters**. Check **Location** is **OneDrive for Business** and **Document Library** is your own document library. It may show **Documents** or **เอกสาร**; do not select **PersonalCacheLibrary**. Expand **One request** and repeat this own-location/library check on **Update result** in its **True** branch. Wait for the fields to finish loading after any necessary selection.
2. Check that both actions' **File** values match the path above and their **Table** values match the table above. Leave File and Table unchanged. In **Update result**, check **Key Column** is **RequestID**, **Key Value** contains its supplied token, and **RequestID**, **RouteKey**, **RecipientSlot** and **AmountText** contain prepared values. **Outcome** should be **Processed**. If a prepared value is missing or blank, stop before testing; do not rebuild the mappings for this exercise.

### Save and turn on your flow

<FlowReadyCheck />

### Checkpoint {#setup-checkpoint}

Your canonical workbook contains the expected two requests and two Pending results. Both Excel actions use your account/library and the supplied File/Table settings. The prepared keys and writing fields remain populated. Your personal flow is On. Do not repair **Mapped amount** yet.

## Practice 2: Trace an incorrect result {#practice-1-trace-an-incorrect-result}

<PracticeIllustration src="/day-2/images/core01-p01.webp" :width="1536" :height="864" alt="A magnifier traces a mismatched request between its input and destination." />

Find the first action where the amount differs from the request row.

1. On your copy's details page, select **Edit** to open the designer. Then select **Test → Manually → Test**. If **Sign in** appears, complete the [first-test connection check](../preparation.md#first-test-connection-check). In **Run flow**, enter:

   - **RouteKey**

     ```text
     IT
     ```

   - **RecipientA:** your agreed first test address.
   - **RecipientB:** your agreed second test address.

2. Select **Run flow**. When the confirmation says the run has started, select **Done**.
3. Wait for the run-result view showing the action statuses. If it does not appear, follow [Open your test result](../preparation.md#open-your-test-result).
4. Expand **One request**. In its **True** branch, select **Selected request**. Open **Outputs**. Find **RequestID** and **AmountText**. They should be **R-101** and **1250.00**.
5. Select **Mapped amount**. Open **Outputs**. Compare its value with **AmountText** in the previous action.
6. Open the workbook's **Results** sheet and the new received email. Compare their amounts with the original request. Use the message subject beginning **[D2 Relay] R-101** to find this test.
7. Close the Excel tab before returning to the Flow.
8. Record the difference:

   ```text
   Expected amount:
   Actual amount:
   First action with the wrong value:
   ```

### Checkpoint {#checkpoint}

You can point to the output that first changed the amount. The original Requests row still contains **1250.00**. A green run does not mean the amount is correct.

## Practice 3: Repair and verify both routes {#practice-2-repair-and-verify-both-routes}

<PracticeIllustration src="/day-2/images/core01-p02.webp" :width="1536" :height="864" alt="Two differently marked requests reach their matching destinations." />

Repair the amount source and check that both requests produce the right row and email.

1. Return to the Flow and select **Edit**. Expand **One request**, then select **Mapped amount → Parameters**.
2. In **Inputs**, select the entire existing value and delete it.
3. Select **fx** (**Insert expression**) beside the field to open the expression editor.
4. Enter this expression in the editor, without an `@` or `@{...}` wrapper:

   ```text
   outputs('Selected_request')?['AmountText']
   ```

5. Select **Add** to insert it into Inputs. Confirm that the field contains an inserted expression token.

   <div class="day2-field-stack" role="figure" aria-label="Amount source to repair">
     <div><span class="subject-reference-label">Mapped amount → Inputs</span><div class="subject-reference-field"><span class="subject-reference-token">Expression: outputs('Selected_request')?['AmountText']</span></div></div>
   </div>

   This reads the amount from **Selected request**. Both the Excel update and email already use this one output.
6. [Save your changes](../preparation.md#save-your-changes).
7. Select **Test → Manually → Test**. Enter the same recipients and **RouteKey**:

   ```text
   IT
   ```

8. Select **Run flow**, then **Done** at the started confirmation. Wait for the run-result view. Check the **Results** row and the received **[D2 Relay] R-101** email. Both must show **1250.00**.
9. Close the Excel tab and return to the Power Automate tab. Select **Edit → Test → Manually → Test**. Enter the same recipients and **RouteKey**:

   ```text
   PMO
   ```

10. Select **Run flow**, then **Done** at the started confirmation. Wait for the run-result view, then check both cases with your partner:

   | Request | Results Outcome | Amount in row and received email | Recipient |
   |---|---|---|---|
   | R-101 / IT | Processed | 1250.00 | RecipientA / SLOT-A |
   | R-102 / PMO | Processed | 2750.00 | RecipientB / SLOT-B |

### Checkpoint {#checkpoint-1}

The two Results rows and two received emails contain the correct request and amount. Your partner can explain which setting changed and why both outputs improved.

## Reset

1. Wait for active runs to finish and close all editing tabs for this workbook.
2. In OneDrive, open **My files → B2D2-Operations-Request-Desk**. Use **Create or upload → Files upload** and choose **reset/core01-repair-relay.xlsx** from your extracted practice files. Keep the exact filename.
3. If OneDrive reports **locked for shared use**, keep workbook tabs closed, wait and select **Retry**. At a **Replace** prompt, check that this is your own synthetic **core01-repair-relay.xlsx**, then select **Replace** and wait for **Uploaded**.
4. Open the restored workbook. Confirm the original two **Requests** and two **Results** rows with **Pending** in **Outcome**. Close Excel before another run.

The workbook must remain at **B2D2-Operations-Request-Desk/core01-repair-relay.xlsx**. Leave the Flow's File/Table values unchanged. Check the restored data before continuing; an Uploaded message alone does not prove reset. Keep old and new emails separate by received time.

## If you cannot continue

| What you see | Check first |
|---|---|
| Workbook cannot be found | Check the exact canonical folder/filename and your own Excel account/document library |
| A prepared field is missing | Stop at that action and record the missing field; keep File/Table unchanged |
| Amount still wrong | Open Mapped amount in the new run and check its actual output |
| Both tests reach one mailbox | Content can be checked, but separate recipient routing is still unproven |
| Expression error | Check the exact spelling of Selected_request and AmountText; do not change the prepared action names |

Reference: [Troubleshoot cloud Flow errors](https://learn.microsoft.com/power-automate/troubleshoot-flow-errors).
