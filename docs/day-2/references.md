---
title: Day 2 Microsoft Learn references
pageClass: day2-exercise
prev:
  text: Downloads and reset copies
  link: /day-2/downloads
next: false
---

# Microsoft Learn references

Use these first-party references to check current action behavior and limitations. The exercise scenarios, records and deliberate faults are synthetic. Documentation explains product behavior; account access, import and actual output checks require rehearsal in the training environment.

| Topic | Microsoft Learn reference | Effect on the exercise |
|---|---|---|
| Diagnosis | [Troubleshoot cloud Flow errors](https://learn.microsoft.com/power-automate/troubleshoot-flow-errors) | Compare action inputs and outputs when a run succeeds but its business output is wrong |
| Package import | [Export and import a non-solution Flow](https://learn.microsoft.com/power-automate/export-import-flow-non-solution) | Use a real exported package, Create as New, authorised connections and the required destination role |
| Solution import | [Import a solution](https://learn.microsoft.com/power-automate/import-flow-solution) | Follow the supported route when the environment requires solutions |
| Target access and entitlements | [Power Automate licensing FAQ](https://learn.microsoft.com/power-platform/admin/power-automate-licensing/faqs) | Organiser confirms the Dataverse-backed target, required roles and applicable entitlements; Standard connector classification alone does not prove readiness |
| Runnable versions | [Drafts and versioning for solution-aware cloud Flows](https://learn.microsoft.com/power-automate/drafts-versioning) | Publish edits before testing; a draft cannot be tested and native export includes only the last published version |
| Data operations | [Filter array and other data operations](https://learn.microsoft.com/power-automate/data-operations) | Match the current request to the response array and inspect the resulting count |
| Expressions | [Workflow expression functions](https://learn.microsoft.com/azure/logic-apps/workflow-definition-language-functions-reference) | Use exact action names and correct current-item references |
| Excel connector | [Excel Online (Business)](https://learn.microsoft.com/connectors/excelonlinebusiness/) | Use real Tables and unique row keys; avoid concurrent edits and immediate read-after-write assumptions |
| File content and conversion | [OneDrive for Business](https://learn.microsoft.com/connectors/onedriveforbusiness/) | Distinguish file paths/IDs from file content, and rehearse the supported conversion route |
| Mail and attachments | [Office 365 Outlook](https://learn.microsoft.com/connectors/office365/) | Pass actual file content to the attachment and verify the received email |
| Office Scripts | [Power Automate and Office Scripts troubleshooting](https://learn.microsoft.com/office/dev/scripts/testing/power-automate-troubleshooting) | Check the selected workbook, supplied script and script parameters |
| Supplied-script setup | [Create a script and connect it to a manual Flow](https://learn.microsoft.com/office/dev/scripts/tutorials/excel-power-automate-manual) | Install the unchanged supplied script through Excel's Automate tools before binding Run script |
| Script access | [Office Scripts platform requirements and limits](https://learn.microsoft.com/office/dev/scripts/testing/platform-limits) | Confirm eligible Microsoft 365 access and Power Automate support before assigning R1 |
| Decision paths | [Add a Condition to a cloud Flow](https://learn.microsoft.com/power-automate/add-condition) | Inspect actual comparisons and which branch runs |

## Boundaries that affect your result

- A successful send action requires a received-message check for attachment readability or image rendering.
- A connector’s Standard classification does not prove that a learner has the related Microsoft 365 service or permissions.
- A prepared Flow needs connection rebinding, file selection and controlled recipient configuration after import.
- A sample result documents what should happen. It is not evidence that the current tenant produced that result.
- The reminder preview and decision gate are controlled simulations. They do not create an operational schedule or define workplace approval authority.
