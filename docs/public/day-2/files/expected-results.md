# Day 2 expected results

All records are synthetic. SLOT-A and SLOT-B refer to controlled training recipients configured separately. These are target outputs for checking your work, not evidence that a Flow already ran successfully.

## Repair Relay

| RouteKey | RequestID | RecipientSlot | AmountText | Outcome |
| --- | --- | --- | --- | --- |
| IT | R-101 | SLOT-A | 1250.00 | Processed |
| PMO | R-102 | SLOT-B | 2750.00 | Processed |

Check the actual Results rows and received emails. Each email must have its matching request ID, route and amount, and reach the intended controlled recipient.

## Reliable Document Handoff

The v2 exercise uses two prepared mappings inside the Flow. It needs only the two supplied PDFs in your own OneDrive and your controlled email recipients; no Excel workbook is needed for this exercise.

| RequestID | Filename | RecipientSlot | Contents to check after opening |
| --- | --- | --- | --- |
| R-101 | DOC-A.pdf | SLOT-A | DOC-A, IT equipment request, 1250.00, Blue folder |
| R-102 | DOC-B.pdf | SLOT-B | DOC-B, PMO reporting request, 2750.00, Orange folder |

A filename ending in .pdf does not prove the attachment is readable. Open both received files and compare their contents.

## Match, Close and Remind

CutoffDate is 2026-11-17. Before the first run, Requests contains three Pending rows, Responses contains the two October responses and ReminderPreview contains one RESET marker.

| RequestKey | After first correct run |
| --- | --- |
| R-101\|2026-10 | Closed |
| R-102\|2026-10 | Closed |
| R-101\|2026-11 | Pending |

After the first correct run, the workbook's ReminderPreview Table contains one item: R-101|2026-11, SLOT-A, DueDate 2026-11-17. The RESET marker is gone.

Add the row from core03-final-response.csv to Responses. Use the exercise's Table Design → Resize Table step to include the new row in the Table, confirm the edit has persisted, close editing and rerun. All three requests become Closed and ReminderPreview has zero populated rows. The Flow previews follow-up selection and does not send a scheduled reminder.

## Reset copies

The four files under reset/ restore the original synthetic data for Core01, Core03 and the two Office Script workbooks. Wait for active runs to finish and close the workbook's editing tabs. Each pair restores only its own synthetic resources.

- **Core01:** use reset/core01-repair-relay.xlsx to restore the exact own-OneDrive path B2D2-Operations-Request-Desk/core01-repair-relay.xlsx. Verify the original Requests and both Results rows with Pending in Outcome.
- **Core03:** use reset/core03-match-close-remind.xlsx to restore the exact own-OneDrive path B2D2-Operations-Request-Desk/core03-match-close-remind.xlsx. Verify three Pending requests, two October responses and RESET in ReminderPreview's RequestKey column.
- **R1:** upload a fresh separate workbook copy and repeat that exercise's workbook selection.
- **Document Handoff:** use the unchanged DOC-A.pdf and DOC-B.pdf files again.

For Core01 and Core03, keep the canonical folder and filename unchanged and leave the Flow's prepared File/Table values unchanged. If OneDrive reports a shared-use lock, keep editing tabs closed, wait and select Retry. At a replacement prompt, check that this is your own training workbook, select Replace and wait for Uploaded.

Follow the exercise's Reset instructions for the exact route. A successful upload must still be checked against the pristine data. These target checks do not establish reset or access readiness for your learner account.
