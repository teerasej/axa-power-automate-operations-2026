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

The request desk expects one response for each request and reporting period. An October response must not close a November request, even when the recipient is the same. Repair the matching path, record the right state and produce a preview containing only due outstanding requests.

> **Access:** Confirm Power Automate, Excel Online (Business) and OneDrive for Business. This exercise uses prepared response rows and a manual cutoff date. It produces a **ReminderPreview** table; it does not schedule or send reminder emails. See [Preparation](../preparation.md).

> **Before starting:** Check [starter Flow status](../downloads.md#starter-flow-status). The instructor has reproduced the Core 03 fault and verified the repair below. Fresh import, learner permissions and resource rebinding remain unverified. Begin live practice only after the instructor confirms your starter and account route. Otherwise, use the supplied evidence-review activity and record your conclusions as evidence analysis.

## Starting resources

- Starter: **B2D2-Core03-MatchCloseRemind-START**.
- Independent workbook: **core03-match-close-remind.xlsx** with Tables `Requests`, `Responses` and `ReminderPreview`.
- Every request begins `Pending`. DueDate is **2026-11-17** for all three requests.
- `RequestKey` combines `RequestID` and `PeriodKey`, such as R-101|2026-10. The same recipient can have several distinct requests.
- ReminderPreview contains one reset marker, `RESET`, with its other fields blank. The Flow clears existing preview rows, including this marker, before calculating its current preview.

## Practice 1: Match responses to requests

<PracticeIllustration src="/day-2/images/core03-p01.webp" :width="1536" :height="864" alt="Responses are matched to request identifiers and reporting periods." />

Match each response to the same RequestID and PeriodKey before calculating its request status.

1. Import the Core 03 starter and select your own workbook in every Excel action. Open the workbook and verify these prepared requests.

   | RequestKey | RequestID | PeriodKey | RecipientSlot | Status |
   |---|---|---|---|---|
   | R-101\|2026-10 | R-101 | 2026-10 | SLOT-A | Pending |
   | R-102\|2026-10 | R-102 | 2026-10 | SLOT-B | Pending |
   | R-101\|2026-11 | R-101 | 2026-11 | SLOT-A | Pending |

2. Inspect `Responses`: it contains the two October responses only. Close the workbook. Select **Publish**, confirm **Published** and run it with this **CutoffDate**:

   ```text
   2026-11-17
   ```

3. In Run history, inspect the array of requests, the array of responses and each iteration of the current request. Compare the response matches for the two periods of R-101. In the faulty starter, the November request incorrectly matches the October response, becomes Closed and disappears from the reminder preview.
4. Reopen the starter for editing. Open **Matching responses** (**Filter array**, definition name `Matching_responses`). Confirm **From** contains response rows from `List_responses`. The faulty rule compares two RequestID values in basic mode. Select **Edit in advanced mode**.
5. Select the entire **Filter Query** field and replace its contents with this query. Paste it directly into that field, including the leading `@`; do not add `@{...}` around it or enter it through a separate Function editor.

   ```text
   @and(equals(item()?['RequestID'], items('For_each_request')?['RequestID']), equals(item()?['PeriodKey'], items('For_each_request')?['PeriodKey']))
   ```

   Here `item()` is the response being checked. `items('For_each_request')` is the current request held by the outer loop. Keep the supplied action and column names unchanged. Both RequestID and PeriodKey must match; the recipient address alone cannot identify a request.

   <div class="day2-field-stack" role="figure" aria-label="Response matching rule">
     <div><span class="subject-reference-label">From</span><div class="subject-reference-field"><span class="subject-reference-token">Inserted value: value · List_responses</span></div></div>
     <div><span class="subject-reference-label">Filter Query</span><div class="subject-reference-field">Typed directly: @and(...) — use the complete query above</div></div>
   </div>

6. Inspect **Code view** without editing it. Confirm the rule contains `@and(...)` with both comparisons, rather than an `@{...}` text wrapper. Select **Publish** and confirm **Published**.
7. Rerun with the same CutoffDate and the same two response rows. Do not manually reset the request statuses: the prepared `Calculated_status` recalculates Closed or Pending from the current matches. Keep RequestKey as the unique row key for `Update_request`.
8. Wait for the run to finish. Inspect the actual Requests Table and the current run’s calculated states.

   | RequestKey | Required status |
   |---|---|
   | R-101\|2026-10 | Closed |
   | R-102\|2026-10 | Closed |
   | R-101\|2026-11 | Pending |

### Checkpoint

The two October requests are Closed and the November request remains Pending. The matching evidence includes both RequestID and PeriodKey. Shared recipients do not close another request.

## Practice 2: Select only due outstanding requests

<PracticeIllustration src="/day-2/images/core03-p02.webp" :width="1536" :height="768" alt="Only the remaining due request is selected while completed requests are set aside." />

Build a current reminder preview from the calculated status and cutoff date, then prove that a matching response suppresses it.

1. Open the prepared outstanding-item selection. Check both requirements: the current calculated status is Pending, and DueDate is on or before CutoffDate. Use the fixed date for repeatable classroom tests.
2. Keep the prepared clearing step for earlier preview rows. Use the current calculated result for each preview decision. Do not insert an immediate reread after an Excel update to decide the status; connector writes can take time to become visible.
3. Run the initial three-request/two-response case. Wait for completion and inspect `ReminderPreview`.

   | RequestKey | RequestID | PeriodKey | RecipientSlot | DueDate |
   |---|---|---|---|---|
   | R-101\|2026-11 | R-101 | 2026-11 | SLOT-A | 2026-11-17 |

   Excel may display the same date as `17/11/2026`. Compare the calendar date and request key; the Flow's calculated preview keeps `2026-11-17`. Keep the ISO value when entering CutoffDate.

4. In `Responses`, add the following row to represent the final response. Type one value into each named column, then close Excel before running again.

   **ResponseID**

   ```text
   RESP-003
   ```

   **RequestKey**

   ```text
   R-101|2026-11
   ```

   **RequestID**

   ```text
   R-101
   ```

   **PeriodKey**

   ```text
   2026-11
   ```

5. Rerun with the same CutoffDate. Verify all three request statuses are Closed and ReminderPreview has **zero populated rows**. An old preview row must not remain from the previous run.
6. If the instructor assigns an additional boundary check, use a reset copy for each test below. The initial and final-response cases above remain the required checkpoint. Do not combine extra cases in one workbook while identifying a fault.

   | Extra test | Expected result |
   |---|---|
   | Add a duplicate of an October response with a different ResponseID | November remains Pending; the preview contains one November item, not an extra duplicate |
   | Add a response for the wrong PeriodKey | The unmatched request remains Pending |
   | Set CutoffDate before all supplied DueDate values | No preview row is due, even while a request remains Pending |

7. Ask another pair to reproduce the initial and final-response results. Record the preview row count and the corresponding request state for both tests.

### Checkpoint

The initial case has exactly one populated preview row. After the matching final response, the next run has zero populated preview rows and all requests are Closed. Duplicate or earlier-period responses do not close a different request.

## Reset

Wait for active runs to finish. Upload the Core 03 reset workbook as a new file. Select its Requests, Responses and ReminderPreview Tables in all actions, then select **Publish** and confirm **Published**. Confirm three Pending requests, two October responses and the RESET preview marker. The prepared Flow removes that marker when it starts. Keep the illustrative expected-results document separate from the writable tracker.

## If the result is unexpected

Check the first wrong match count before changing the status update. If status is correct but preview is wrong, inspect the cutoff comparison and stale preview clearing. Keep Excel writes sequential and avoid simultaneous manual edits.

References: [Data operations and Filter array](https://learn.microsoft.com/power-automate/data-operations), [Excel Online (Business) limitations](https://learn.microsoft.com/connectors/excelonlinebusiness/).
