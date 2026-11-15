---
title: Day 2 preparation and starter Flows
prev:
  text: Day 2 overview
  link: /day-2/
next:
  text: Exercise 1. Repair Relay
  link: /day-2/exercises/01-repair-relay
pageClass: day2-exercise
---

# Preparation and starter Flows

Prepare your own copies before diagnosing an exercise. Connections are the keys to your mailbox and files. An imported Flow needs your authorised keys and your own file selections before it can produce useful evidence.

## Access and licences

Use an authorised organisational account with **Power Automate cloud flows**, **Office 365 Outlook**, **OneDrive for Business** and **Excel Online (Business)**. These exercises use Built-in actions and Standard connectors. Your Power Automate and Microsoft 365 service entitlements, environment permissions, mailbox and file access must be confirmed before training. Standard connector classification does not establish service access.

For this edition's solution-import route, the organiser must confirm an approved Dataverse-backed target environment, the required import/edit roles and applicable user entitlements, including any Managed Environments requirements. Use only the announced target; learners do not provision or change environments.

The Office Script challenge also needs an eligible Microsoft 365 business licence, Office Scripts enabled and permission to run the supplied script through Power Automate. The PDF challenge needs the rehearsed OneDrive for Business conversion route. The instructor assigns either challenge only when its route is ready. The approval challenge uses synthetic decisions and Conditions; it creates no real approval request.

## Prepare your pair’s workspace

1. Open [Power Automate](https://make.powerautomate.com/), [Outlook](https://outlook.office.com/mail/) and [Microsoft 365](https://www.microsoft365.com/) with the account agreed for training. Select only the environment announced by the instructor.
2. Download the [Day 2 practice files](./downloads.md). Extract the ZIP locally. Keep the reset folder separate from your working copies.
3. In OneDrive for Business create a personal training folder:

   ```text
   B2D2-Operations-Request-Desk
   ```

4. Upload the three core workbooks. Upload DOC-A.pdf and DOC-B.pdf into a subfolder named:

   ```text
   Documents
   ```

   R2 is a separate minimal challenge: it uses your OneDrive root `/` with unique `B2D2-R02-sequence-` filenames. Keep Create and Retrieve on that same root and leave unrelated files untouched.

5. Open each workbook once in Excel for the web and confirm its Tables against [Downloads](./downloads.md). Close its editing tab before a Flow writes to it.
6. Choose your pair’s controlled recipients. Use your own authorised training mailbox and a second authorised training recipient who has agreed to receive the test messages. In Core 01 and Core 02, type those addresses into the required **RecipientA** and **RecipientB** inputs on **Run flow** for every test. **SLOT-A** and **SLOT-B** in the public data are labels, not email addresses. Keep the same approved addresses for the two comparison cases. **Two distinct approved mailboxes are required to verify distinct recipient routing.** If only one controlled mailbox is available, you can check content and request matching, but recipient routing remains unverified.

## Rebind only your own resources

<p class="day2-table-hint">On a narrow screen, scroll the table sideways to see every column.</p>

After an approved starter import, use this checklist before its first diagnostic run. Keep the prepared logic and deliberate fault unchanged during setup. A working connection does not automatically point to your own file.

| Flow | Reselect or supply | Your resource |
|---|---|---|
| Core 01 | `List_requests` **File / Table**; `Update_result` **File / Table**; RecipientA/B on every manual run | Your `core01-repair-relay.xlsx`: Requests for the read, Results for the update |
| Core 02 | `List_documents` **File / Table**; the folder portion of `Document_path`; RecipientA/B on every manual run | Your `core02-document-handoff.xlsx`, Documents Table; PDFs under `/B2D2-Operations-Request-Desk/Documents/`. Preserve the selected filename portion of the path. |
| Core 03 | **File / Table** in `List_requests`, `Update_request`, `List_responses`, `List_existing_preview`, `Delete_preview_row` and `Add_preview_row` | Your `core03-match-close-remind.xlsx`: Requests for `List_requests` / `Update_request`; Responses for `List_responses`; ReminderPreview for `List_existing_preview` / `Delete_preview_row` / `Add_preview_row` |
| R1 | `Run_table_check` **File / Script** | Complete the [supplied-script installation](./challenges/01-office-script.md#setup-install-the-supplied-script). Select workbook A and B2D2-CheckTable-ReadOnly first; select workbook B for the second test. Keep the initial tableName value for diagnosis. |
| R2 | OneDrive connection on both file actions | Your own authorised OneDrive root `/`. Keep the prepared creation/retrieval paths and unique prefixed filenames together. |
| R3 | **RecipientEmail** at each manual run | Your own authorised controlled receiving address; use the supplied public image as the expected resource |
| R4 | No file or connector rebinding | Synthetic decision inputs only |
| R5 | OneDrive connection on source creation, conversion and PDF saving | Your own authorised OneDrive root `/`. Keep the prepared filename, content and conversion bindings unchanged for diagnosis. |

Close workbook editing tabs before connector writes. After rebinding, resolve validation warnings, select **Publish** and confirm **Published**, then follow the assigned exercise's first test. Record setup/access failures separately from the prepared challenge fault.

## Import a prepared starter

Check [starter Flow status](./downloads.md#starter-flow-status) first. Import only a real package supplied for this edition. A sample-files ZIP is not a Flow package. Do not paste complete Flow JSON into Code view, which is a view of the definition rather than a general Flow importer.

### Solution route for this edition

The current build route uses **solution-aware Flows**. These require a native **solution export**. The legacy package export route does not export a solution-aware Flow. Native exports remain private for inspection. No approved learner package is available in this website release; see the separate export and rehearsal states on the downloads page.

**Publish before testing a change.** A saved draft of a solution-aware Flow cannot be tested. Select **Publish** and confirm **Published** to make your edits the runnable version in the training environment. Repeat this after a repair or resource rebinding. Native export includes only the last published version. [Microsoft Learn: Drafts and versioning](https://learn.microsoft.com/power-automate/drafts-versioning).

If the header already confirms **Published** and you have made no Flow edits, continue to **Test**. The Publish button can be disabled when there is no change to publish.

For a live exercise, the instructor must supply an approved small **Unmanaged** solution containing your assigned **START** Flow and its required connection references. Instructor SOLUTION Flows belong in a separate private package. The steps below describe that route; they do not establish that a package has been released or successfully imported.

1. Use only the approved target environment announced by the instructor. In **Solutions**, select **Import**, then **Browse** and select the supplied solution ZIP.
2. Confirm the package identity with the instructor before importing. If that solution already exists in the target environment, stop at this checkpoint. A repeated import or update does not establish a new personal Flow copy. Renaming the ZIP does not change the solution's identity.
3. Follow the supplied import guidance to bind its connection references to your authorised connections. Import completion does not verify its workbook, script, file or recipient selections.
4. Open the imported START Flow. Reselect every dependent Excel **File** and **Table** and OneDrive resource. Select the supplied Office Script separately when that challenge requires it. Supply the controlled recipient inputs on each manual run as described above.
5. Check the imported Flow's state before testing. An import can restore the exported enabled state. Keep the manual training Flow idle, resolve validation warnings, select **Publish** and confirm **Published** before its first test.

**Rehearsal status: Unperformed.** A separate target environment is unavailable for the current rehearsal. Fresh import, learner permissions, the actual learner-copy route and resource rebinding remain unverified. The organiser must complete these checks before using the live import route in class. A solution already present in the instructor's environment is not evidence of a fresh import in a learner environment. Do not change tenant policies or use a different package type to bypass an unavailable route.

**Finding an action:** the new designer can display a supplied action name with spaces, such as **Image source**, while its expression name remains `Image_source`. Match the intended action and its Dynamic content token. Keep the supplied expression names unchanged.

### Legacy package route, only when supplied

Use this route only when the organiser supplies a non-solution package and confirms that this environment supports it. Microsoft requires an appropriate role on the destination environment, including **Environment Maker** for the documented non-solution import route.

1. In **My flows**, select **Import → Import Package (Legacy)**.
2. Upload the package for your assigned exercise. Configure the Flow as **Create as New**, using a new personal training name. Do not select **Update** for an existing Flow.
3. Under **Related Resources**, select your authorised connections. Complete required import settings, then select **Import**.
4. Open the imported Flow. Reselect every Excel **File** and **Table**, OneDrive folder/file selection, and the controlled recipient settings for your pair. A connection sign-in does not automatically select the correct workbook.
5. Save and resolve validation warnings. Keep the Flow idle until the exercise’s first test.

### When an import or connection is blocked

Record the blocked step and the message without including account tokens or private data. Use the instructor’s explicitly labelled static action evidence to practise the diagnostic method. Record this as an **evidence review**, not as a successful execution. The [downloads page](./downloads.md#starter-flow-status) distinguishes resources from live Flow exports.

## Test and reset rules

- Run one test at a time. Wait for a run to finish before editing a workbook or changing its file reference.
- Inspect **Run history**, action inputs/outputs and the actual destination artifact.
- Use each exercise’s reset copy as a new file. Reselect all dependent **File** and **Table** fields, then publish the changed solution-aware version before retesting.
- For Match, Close and Remind, clear the earlier reminder preview before evaluating the next test. The core Flow builds its preview from the current calculated result instead of immediately rereading an Excel update.
- Finish or cancel active training runs before a reset. Turn off practice Flows when the instructor announces cleanup.

References: [Solution export](https://learn.microsoft.com/power-automate/export-flow-solution), [Solution import](https://learn.microsoft.com/power-automate/import-flow-solution), [Non-solution Flow import](https://learn.microsoft.com/power-automate/export-import-flow-non-solution), [Excel Online (Business)](https://learn.microsoft.com/connectors/excelonlinebusiness/).
