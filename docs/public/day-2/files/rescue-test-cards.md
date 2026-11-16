# Flow Rescue test cards

Use the assigned prepared Flow. Record the expected result, actual result, first divergence, one repair and the results of both tests. A peer should rerun or inspect the supplied evidence. These cards deliberately describe outcomes without giving the repair.

## R01 - Office Script

- Test A: use rescue01-script-workbook-a.xlsx. The correct read-only script returns numeric result 3.
- Test B: bind rescue01-script-workbook-b.xlsx and rerun. The same script returns 3. Neither workbook's data changes.
- Evidence: selected workbook, Run script inputs, actual result and unchanged rows.

## R02 - File sequencing

- Test A: run once. A new uniquely named file exists and retrieval returns Sequence verified.
- Test B: run again. A different uniquely named file exists and retrieval returns the same expected content.
- Before repair in the v2 starter: creation succeeds, but retrieval is Skipped. A skipped action has not attempted to read the file.
- Evidence: the creation and retrieval statuses, both unique file names and retrieved contents. Explain why retrieval did not start; this case is not an actual workbook lock.

## R03 - HTML image

- Supplied synthetic image resource: [request illustration](https://teerasej.github.io/axa-power-automate-operations-2026/images/practices/ex01-p01-768.webp) (approximately 11.1 KB). Keep the starter unchanged for the first diagnostic run.
- Test A: send a controlled training message with TestLabel A. Open it in Outlook on the web in Edge and check that the supplied image appears.
- Test B: send TestLabel B. The image appears again and the label matches B.
- Evidence: actual received messages and the image source resource. If the organization blocks external images, use the facilitator's labelled captured evidence route.

## R04 - Approval gate simulation

- Test A: ManagerDecision Reject, FinanceDecision Approve. Final result is Rejected. The Finance gate Condition is Skipped.
- Test B: ManagerDecision Approve, FinanceDecision Approve. Finance stage runs. Final result is Approved.
- Evidence: both decision inputs, branch status and final result. The exercise uses a supplied synthetic rule and sends no real approval request.

## R05 - PDF generation

- Test A: RequestID R-PDF-01, AmountText 1250.00. Open the new PDF and check both values.
- Test B: RequestID R-PDF-02, AmountText 2750.00. Open the second PDF and check both values. It must not contain the first request's values.
- Evidence: created source file type, conversion input/output and both readable PDFs. Use the preconfigured conversion route.
