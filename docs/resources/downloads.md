# Practice downloads

## Project Refinement PowerPoint

[Open the Project Refinement guide](../project-refinement.md) to download the editable 15-slide learner template and follow the completion guidance. The template is separate from the classroom sample ZIP and contains no instructor guide.

| File | When to use it |
|---|---|
| [operations-request-tracker.xlsx](/downloads/operations-request-tracker.xlsx) | Upload your personal six-column tracker to OneDrive for Business before Section 2. |
| [operations-request-tracker-reset.xlsx](/downloads/operations-request-tracker-reset.xlsx) | Restart with the same empty table schema. |
| [sample-requests.csv](/downloads/sample-requests.csv) | Read the two synthetic requests; do not import them into the tracker. |
| [document-approval-tracker.xlsx](/downloads/document-approval-tracker.xlsx) | Personal four-column tracker for Section 3; upload to OneDrive for Business. |
| [document-approval-tracker-reset.xlsx](/downloads/document-approval-tracker-reset.xlsx) | Empty reset copy with the same DocumentApprovalsTable schema. |
| [document-approval-expected-results.xlsx](/downloads/document-approval-expected-results.xlsx) | Illustrative Completed/Approve, Completed/Reject and Pending examples; fictional IDs, not run evidence. |
| [document-approval-sample-inputs.txt](/downloads/document-approval-sample-inputs.txt) | Two copyable request titles, review briefs and test expectations. |
| [request-routing-training.png](/downloads/request-routing-training.png) | Design-review context if you do not have your own image. |
| [compose-error-training.png](/downloads/compose-error-training.png) | Error-review context if you do not have an actual error image. |
| [chatgpt-text-backup.txt](/downloads/chatgpt-text-backup.txt) | Copy the descriptions and short questions when image upload is unavailable. |
| [download-manifest.json](/downloads/download-manifest.json) | Sample file list and SHA-256 checksums, including the ZIP checksum. |
| [learner-materials.zip](/downloads/learner-materials.zip) | All 10 sample files: workbooks, reset copies, sample inputs and instructional images/text backups. |

The morning workbook contains worksheet Requests, table RequestsTable and six columns: RequestId, Title, Description, RequesterEmail, Category and Status. It starts with one blank row and contains no customer information or macros.

Section 3 uses a separate workbook with worksheet **Approvals**, table **DocumentApprovalsTable** and four columns: **ApprovalId, RequestTitle, Status, Decision**. The tracker and reset copy have one blank starter row; the expected-results file is for reading only. Complete [Section 3 preparation](./section-3-preparation.md) before building.

Complete [pre-session preparation](./section-2-preparation.md) before the session so the exercise time can focus on building and testing both routes.

## Exercise header illustrations

The 2D headers introduce each topic. They are not configuration diagrams; follow the actual steps and technical diagrams. These four website illustrations are available separately below and are not included in the sample ZIP.

- [Email flow header](/images/foundation-email-header.jpg)
- [Request routing header](/images/request-routing-header.jpg)
- [Document approval header](/images/document-approval-header.jpg)
- [ChatGPT assistance header](/images/chatgpt-assistance-header.jpg)

## Images for Exercise 4

The routing diagram was prepared by the author; the Compose illustration was AI-generated. Neither is an actual screenshot or evidence of a run or tenant readiness. Routing shows intake, mappings, one Condition and two email routes to your own mailbox. The Compose image shows an illustrative expression and error summary. Actual wording may differ, and a constant expression may be rejected at Save. Follow the fallback in [Exercise 4](../exercises/04-chatgpt-design-and-troubleshooting.md).

Open images at full size to read them. Use the text backup if upload is unavailable, or [prepared examples](../guidebook/saved-examples.md) if ChatGPT is unavailable. If an image opens in the browser, use **Save image as**, or download the ZIP instead.

## Reset the morning tracker {#reset}

1. Stop testing, wait for active runs to finish and close the workbook.
2. Download the reset workbook and upload it as a new file in your personal training folder.
3. Open Add a row into a table. Use the File picker to select the new workbook and select RequestsTable again. Recheck all six mappings and Save.
4. Submit fresh Operations and Finance responses. Verify the new workbook and both correctly labelled emails.

Changing workbooks does not delete previous Forms responses or Run history. Do not assume Delete or Replace will automatically update a flow's File reference.

## Reset the approval tracker

Finish or cancel your outstanding training approvals and cancel any remaining active runs before changing files. Cancelling a flow run alone does not guarantee cancellation of the approval record. Upload the approval reset file as a new personal workbook. Reselect **File** and **DocumentApprovalsTable** in **Add a row**, **Update a row** and, after Part 2, **Get a row**. Recheck the Approval ID mappings and start a fresh test. Follow [Exercise 3 cleanup](../exercises/03-document-approval.md#troubleshooting-and-reset).

## Extract the sample files

Download the ZIP from this page or the homepage, then choose **Extract All** on Windows or double-click it on macOS. All 10 sample files are directly inside the archive, so you can open the workbooks, CSV, text files and instructional PNG images without navigating through website folders. The four approval-practice files are included. Keep the exercise instructions open on this website while practising.
