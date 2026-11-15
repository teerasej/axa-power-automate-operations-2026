---
title: Day 2 Exercise 1. Repair Relay
pageClass: day2-exercise
prev:
  text: Preparation and starter Flows
  link: /day-2/preparation
next:
  text: Exercise 2. Reliable Document Handoff
  link: /day-2/exercises/02-document-handoff
---

# Exercise 1: Repair Relay

The Operations Request Desk sends IT and PMO requests to controlled recipients and records their results. A prepared Flow finishes, but some values do not reach the correct destination. Your pair will follow the evidence, repair the first mismatch, and rerun both routes.

> **Access:** Power Automate, Excel Online (Business), OneDrive for Business and Office 365 Outlook are required. Confirm service licences, environment permissions and controlled recipient access using [Preparation](../preparation.md). The [starter status](../downloads.md#starter-flow-status) distinguishes available files from live import packages.

## Starting resources

- Starter Flow: **B2D2-Core01-RepairRelay-START**.
- Workbook: **core01-repair-relay.xlsx**. `Requests` contains the supplied request data. `Results` starts with two Pending rows, keyed by RequestID.
- A separate reset copy and illustrative expected results are on [Downloads](../downloads.md).
- Use one driver and one evidence checker. Swap roles after the first diagnosis.

## Practice 1: Trace an incorrect result

<PracticeIllustration src="/day-2/images/core01-p01.webp" :width="1536" :height="864" alt="A magnifier traces a mismatched request between its input and destination." />

Find the first action whose actual value differs from the expected request.

1. Import the assigned starter through [Preparation](../preparation.md#import-a-prepared-starter). Select your own workbook in every Excel action and choose the two approved recipient addresses for SLOT-A and SLOT-B.
2. Open `Requests` and inspect these two supplied rows. Do not change them to make the output appear correct.

   | RequestID | RouteKey | RecipientSlot | SubjectText | AmountText |
   |---|---|---|---|---|
   | R-101 | IT | SLOT-A | IT equipment request | 1250.00 |
   | R-102 | PMO | SLOT-B | PMO reporting request | 2750.00 |

3. Close Excel’s editing tab. Select **Publish** and confirm **Published**. Select **Test → Manually** and enter the first **RouteKey** below. Run it and wait for completion, then repeat with the second value. If no live starter is available, use the instructor’s labelled static evidence instead and record that route.

   **First RouteKey**

   ```text
   IT
   ```

   **Second RouteKey**

   ```text
   PMO
   ```

   On **Run flow**, type your approved SLOT-A mailbox into **RecipientA** and SLOT-B mailbox into **RecipientB**. Both are required on every run. Keep those addresses unchanged when repeating the two routes.
4. Open the run. Compare the trigger or input row, the selected route, the recipient selection, the Excel action input and the email action input. Inspect the actual `Results` rows and the received messages as well.
5. For each request record the expected and actual amount, route label and recipient slot. Find the first mismatch in the action chain, rather than changing the last action immediately.

   ```text
   RequestID:
   Expected result:
   Actual result:
   First action where the value changes:
   Input and output evidence:
   ```

### Checkpoint

Point to one specific input/output pair that explains an incorrect destination value. A green run alone is insufficient evidence. The input row remains unchanged.

## Practice 2: Repair and verify both routes

<PracticeIllustration src="/day-2/images/core01-p02.webp" :width="1536" :height="864" alt="Two differently marked requests reach their matching destinations." />

Repair the identified mapping or routing setting and prove that both requests reach the correct output.

1. Open the action where you found the first divergence. In the prepared Flow, `Selected_request` contains the one matching row, `Mapped_amount` supplies the amount used by both `Update_result` and `Send_result`, and `Mapped_recipient` supplies the controlled address. Compare the field with its intended source below. Insert a Dynamic content or expression token; do not type its display label as ordinary text.

   <div class="day2-field-stack" role="figure" aria-label="Expected field sources for one request">
     <div><span class="subject-reference-label">Mapped_amount → Inputs</span><div class="subject-reference-field"><span class="subject-reference-token">Expression: outputs('Selected_request')?['AmountText']</span></div></div>
     <div><span class="subject-reference-label">Update_result → AmountText</span><div class="subject-reference-field"><span class="subject-reference-token">Outputs · Mapped_amount</span></div></div>
     <div><span class="subject-reference-label">Send_result → To</span><div class="subject-reference-field"><span class="subject-reference-token">Outputs · Mapped_recipient</span></div></div>
     <div><span class="subject-reference-label">Send_result → Subject</span><div class="subject-reference-field">[D2 Relay] <span class="subject-reference-token">Expression: outputs('Selected_request')?['RequestID']</span> - <span class="subject-reference-token">Expression: outputs('Selected_request')?['SubjectText']</span></div></div>
   </div>

2. Expand **One request**, open **Mapped amount**, then select **Parameters**. In **Inputs**, select the entire existing value and replace it with this complete expression. It reads AmountText from the selected request object.

   ```text
   @{outputs('Selected_request')?['AmountText']}
   ```

   Click outside the field. The current designer converts the expression into a purple **outputs** token. Check that it is a token rather than ordinary text, then select **Publish** and confirm **Published**. Change only the setting justified by your evidence. If another wrong value appears afterward, trace it before changing unrelated settings.
3. Rerun the same two supplied requests. Keep each current request’s ID throughout the Excel update and email. Wait for the run to finish before reopening the workbook.
4. Verify both populated Results rows and the received messages against this acceptance table. Check the destination mailbox/slot, not only Sent Items.

   | RequestID | Required route | Required recipient | Required amount |
   |---|---|---|---|
   | R-101 | IT | SLOT-A | 1250.00 |
   | R-102 | PMO | SLOT-B | 2750.00 |

5. Ask the other pair to check both rows and both received emails. Each subject/body must identify the correct request and contain its supplied nonblank details.
6. Add your change and retest result to the evidence note. Keep the input data unchanged for the comparison.

### Checkpoint

Both routes produce correctly matched Results rows with Outcome `Processed`, and readable, nonblank emails at the approved recipient slots. Another pair can explain the repair using the recorded before/after evidence.

## Reset

Wait for active runs to finish. Upload the Core 01 reset workbook as a new file and select it in every Excel read/update action. Confirm `Requests` still contains the two supplied inputs and `Results` contains the two Pending starter rows. Select **Publish** and confirm **Published** before retesting. Earlier messages remain in the mailbox; use the new run time to distinguish them.

## If you cannot continue

| Symptom | First checkpoint |
|---|---|
| Workbook or Table is unavailable | Check the connection account, File picker and Table selection. A worksheet and a Table are different objects. |
| Row is correct but email is wrong | Compare the email action’s actual inputs with the current request. |
| Both routes use one approved mailbox | Content can be checked. Distinct recipient routing remains unverified until two approved mailboxes are used. |
| Publish reports an expression error | Check the exact action/column name and the expression input before running again. |

You now have a repeatable trace-and-retest method. Exercise 2 applies it to document content.

Reference: [Troubleshoot cloud Flow errors](https://learn.microsoft.com/power-automate/troubleshoot-flow-errors).
