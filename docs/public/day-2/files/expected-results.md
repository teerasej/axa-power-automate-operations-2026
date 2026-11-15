# Day 2 expected results

All records are synthetic. SLOT-A and SLOT-B refer to controlled training recipients configured separately. These are target outputs for checking your work, not evidence that a Flow already ran successfully.

## Repair Relay

| RouteKey | RequestID | RecipientSlot | AmountText | Outcome |
| --- | --- | --- | --- | --- |
| IT | R-101 | SLOT-A | 1250.00 | Processed |
| PMO | R-102 | SLOT-B | 2750.00 | Processed |

Check the actual Results rows and received emails. Each email must have its matching request ID, route and amount, and reach the intended controlled recipient.

## Reliable Document Handoff

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

The first correct Reminder_preview result contains one item, R-101|2026-11, SLOT-A, DueDate 2026-11-17. The RESET marker is gone from the workbook's ReminderPreview table.

Add the row from core03-final-response.csv to Responses, confirm the edit has persisted, close editing and rerun. All three requests become Closed. Reminder_preview contains zero items and the old preview row is removed. The Flow previews follow-up selection and does not send a scheduled reminder.

## Reset copies

The files under reset/ restore the original synthetic data. Upload a fresh separate workbook copy and reselect it in the relevant Flow actions. Do not overwrite a workbook during an active run. Each pair uses its own copies.
