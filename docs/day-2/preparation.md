---
title: Day 2 preparation
prev:
  text: Day 2 overview
  link: /day-2/
next:
  text: Exercise 1. Repair Relay
  link: /day-2/exercises/01-repair-relay
pageClass: day2-exercise
---

# Preparation and starter Flows

Before class, check your account and download the complete workshop ZIP. You will select the files and settings for each Flow when you reach that exercise.

## Before class {#access-and-licences}

1. Open [Power Automate](https://make.powerautomate.com/) in your browser.
2. Sign in with the organisational training account agreed with the instructor.
3. Open [Outlook](https://outlook.office.com/mail/) in another tab. Confirm that your mailbox opens.
4. Open [Microsoft 365](https://www.microsoft365.com/). Open **OneDrive** from the app launcher and confirm that your files page opens.

> If an app does not open, note its name and the message shown. Share that with the organiser before class. The organiser checks licences and permissions; you do not need to change account or environment settings.

## Download your complete workshop {#prepare-your-pair-s-workspace}

1. Open [Day 2 downloads](./downloads.md).
2. Select **Download complete Day 2 workshop (ZIP)**.
3. Find the downloaded ZIP in your computer's Downloads folder.
4. Extract it: double-click on macOS, or right-click and select **Extract All** on Windows.
5. Open the extracted folder and read **README.md**. Open **files/** and confirm that you can see **DOC-A.pdf**, **DOC-B.pdf**, the core workbooks and a **reset** folder.

Keep the **files/reset** folder unchanged. It contains clean copies you can use if an exercise needs to restart.

### Find the included starter and solution packages

Your complete workshop download already includes **starters/** and **solutions/** alongside **files/**. No second download is needed.

1. Open **README.md** in the extracted **day-2-workshop.zip** folder.
2. Find **starters**, which has one folder per exercise, and **solutions**, which contains the eight working answers in one bundle.
3. Do not extract the inner ZIPs. Wait for the instructor's starting route below before importing anything. **The outer workshop ZIP is not an import package.**

All nine inner packages use **solution import**, not Legacy import. You do not need the solution answers to begin an exercise.

### Ready checkpoint

Your before-class preparation is complete when **Power Automate, Outlook and OneDrive open**, and your practice files are extracted. You do not need to build a Flow before class.

## In class: start your assigned Flow {#start-your-assigned-flow}

<span id="import-a-prepared-starter"></span>

A **starter flow** is the prepared flow you will repair. Each exercise includes its file preparation and two starting-route tabs. **Follow the tab announced by your instructor.**

| Tab | What you do |
|---|---|
| **Use my prepared flow** | Open the personal flow link supplied for your account or pair. Check the assigned name and editing access. |
| **Import starter ZIP** | Import the assigned inner START solution ZIP into the separate target approved by the organiser. |

Being in the same environment does not make another person's flow visible. The organiser confirms the environment and gives you access to your personal flow, or approves the import route. You do not need to work out the environment arrangement yourself.

> **Starting checkpoint:** Packages are available, but fresh imports of these delivery packages and representative learner-account checks remain unperformed. Stop if your assigned flow, connection or resource is unavailable.

### Use my prepared flow {#shared-environment-copy}

The organiser has already created an independent personal flow and explicitly granted your account editing access. Open their link, check the assigned name and your account under **Co-owner** or **Owners**, then select **Edit**. Do not make another copy or edit the baseline.

If the flow is missing or you cannot edit it, stop and show the organiser the message. Selecting the same environment is not a substitute for access.

<span id="optional-route-import-a-package"></span>

### Import starter ZIP {#solution-route-for-this-edition}

Use this tab on your assigned exercise page. It shows the exact START filename and the complete import steps. Extract the outer **day-2-workshop.zip**, keep the inner ZIP zipped and use **Solutions → Import**. Check the approved target before continuing.

If the solution already exists or the screen proposes an update, stop. Re-importing the same solution can change existing flows rather than create a personal copy. Renaming the ZIP does not change its component identities.

### Other package formats {#legacy-package-route-only-when-supplied}

<details><summary>Legacy packages — not supplied in this course download</summary>

All supplied inner ZIPs are solution packages. Do not use **Import Package (Legacy)** for them. A genuine non-solution package requires a different, separately confirmed route; company policy may disable that route. See [Microsoft's non-solution package guide](https://learn.microsoft.com/power-automate/export-import-flow-non-solution).

</details>

### Return to your exercise

Open only the exercise you are starting:

- [Exercise 1: workbook and flow preparation](./exercises/01-repair-relay.md#practice-1-prepare-your-exercise)
- [Exercise 2: PDF and flow preparation](./exercises/02-document-handoff.md#practice-1-prepare-your-documents)
- [Exercise 3: tracker and flow preparation](./exercises/03-match-close-remind.md#practice-1-prepare-your-tracker)
- [Exercise 4: your assigned Rescue card](./exercises/04-flow-rescue.md)

### Save your changes {#save-your-changes}

In the exercises, **save your changes** means using the control shown in your own Flow editor:

- If it shows **Save**, select Save before testing.
- If it shows **Publish**, select Publish and wait for **Published**. **Save draft** alone does not make the edited version runnable. If it already says Published and you made no edit, continue to Test.

Use the control shown in your personal flow, whether it was prepared for you or imported.

> **Copy is still off:** If Flow checker shows **0 errors** and only **This flow is off**, close the checker and return to your own copy's details page. Select **Turn on** and confirm **On** before testing. This specific warning does not need field changes or another Publish. For other errors, stop at the message and follow [If setup stops](#when-an-import-or-connection-is-blocked).

### If Test asks you to sign in {#first-test-connection-check}

If the **Test** dialog is loading, wait until **Manually** appears before continuing. Your first test may then show **Sign in** before the input fields.

1. Check that every app row shows a green check or **Valid connection**.
2. Confirm that the listed connection is the one you already checked for your own account. If it is missing or different, stop and return to the account check. Do not select **Switch account** by guessing.
3. Select **Continue**. The **Run flow** input screen opens; enter the values on your exercise page.

### Open your test result {#open-your-test-result}

After entering the test inputs in **Run flow**:

1. Select **Run flow**.
2. When the confirmation says **Your flow run successfully started**, select **Done**. This message means the run has started; it does not confirm its outputs.
3. Wait for the run-result view. It shows the Flow's actions with their run statuses and durations. Select the action named in your exercise and wait for its details to finish loading before checking Inputs or Outputs. A brief empty panel during loading is not evidence of an empty result.
4. If the result view does not appear, select **Back** to return to your Flow's details page. Under **28-day run history**, open the newest run by its start time. Wait for the action statuses before checking the result.

For the next test, select **Edit** to return to the designer, then **Test → Manually → Test** again. Use the inputs on your exercise page.

### Check the account used by each service {#check-your-connection-account}

A personal Flow copy can still use the instructor's connection. Before selecting files or running a test, check every connector action listed on your exercise page. Change settings only in **your own copy**.

**Supplied solution flows:** use the reference check below.


1. In your own Flow copy, select the named action and open **Parameters**.
2. Select **Change connection reference** to open the **Change connection** panel.
3. Read the selected connection row. Confirm **Connected**, **your assigned training email** and the connection label identified for your pair. If the account or status is blank, stop here. If rows look the same, use the optional check below.
4. If the correct row is already selected, close the panel and continue at step 6. Otherwise, select the **radio button at the left** of your identified personal row. The panel returns to the action automatically; it has no Save step.
5. Reopen **Change connection reference**. Confirm that the selected row shows **Connected** and your email, then close the panel.
6. Repeat the check for every action in your exercise's list. Do not assume that selecting a connection for one action changes all the others.

If your personal connection is not available, follow only the section for that service below: [Excel](#create-your-own-excel-connection), [Outlook](#create-your-own-outlook-connection) or [OneDrive](#create-your-own-onedrive-connection).

<details><summary>If two connection rows look the same</summary>

Use this check only when the label and email do not distinguish your connection.

1. In that row's **Details** column, select **Edit**. Here, Edit opens a read-only **Connection details** popover.
2. Read **Logical name**. Compare it with the identity assigned by the instructor, or the one you recorded for your newly created connection. If you have neither, stop here and ask the instructor before selecting a row.
3. Select the same row's **Details → Edit** again to close the information popover.
4. Select the **radio button at the left** of the matching personal row. The panel returns to the action automatically.
5. Reopen **Change connection reference**. Confirm that the selected row shows **Connected** and your training email, then close the panel.

Do not guess from the email alone or change a shared reference's configuration elsewhere.

After **Add new** returns to the action, the newly created connection is selected. If several rows look identical, use its read-only details to note the Logical name privately before selecting it in other actions. You do not need this metadata step for a clearly identified connection.

</details>

#### If you need your own Excel connection {#create-your-own-excel-connection}

These are the observed **Excel Online (Business)** steps for this draft. They create a new personal connection/reference for your copied Flow; they do not edit the old shared reference.

1. In your own copy, open the Excel action's **Parameters → Change connection reference**.
2. In **Change connection**, select **Add new**.
3. In **Create connection**, select **Sign in**.
4. When Microsoft shows **Pick an account**, select your approved training account. Do not select the instructor's account.
5. Wait until Power Automate returns to the action. The new reference is assigned to this copied action.
6. Open **Change connection reference** again. Check the selected connection label and your email. If the account or status is blank, stop. If several rows look identical, use the optional read-only details check above. Do not infer its identity from the sign-in screen closing.
7. Check each remaining Excel action in your own copy. Select the personal connection identified for you where needed, then check its label and email again. Each action must be checked separately.
8. Return to your exercise and select the workbook fields shown there. [Save your changes](#save-your-changes) at the end of that setup, before any test.

#### If you need your own Outlook connection {#create-your-own-outlook-connection}

Outlook adds a connection-name field that is not present in the Excel sequence. Work only in your own copied Flow.

1. Open the Outlook action's **Parameters → Change connection reference**. In **Change connection**, select **Add new**.
2. In **Create connection**, enter a **Connection name** containing your pair code. For example, pair 01 could enter:

   ```text
   B2D2-v2-PAIR01-Outlook
   ```

   Replace PAIR01 with your own assigned pair code so you can recognise this connection later.
3. Leave **Authentication Type** at its default option for signing in as a user. Select **Sign in**.
4. In Microsoft's **Pick an account**, select your approved training account. Wait until Power Automate returns to the action.
5. Open **Change connection reference** again. Check the selected connection label and your email. If the account or status is blank, stop. If several rows look identical, use the optional read-only details check above. Do not infer its identity from the sign-in screen closing.
6. Check every other Outlook action in your own copy and select the personal connection identified for you where needed.
7. Return to your exercise, complete any remaining setup and [save your changes](#save-your-changes) before testing.

#### If you need your own OneDrive connection {#create-your-own-onedrive-connection}

Use these observed **OneDrive for Business** steps only in your own copied Flow.

1. Open the OneDrive action's **Parameters → Change connection reference**. In **Change connection**, select **Add new**.
2. In **Create connection**, select **Sign in**.
3. In Microsoft's **Pick an account**, select your approved training account. Wait until Power Automate returns to the action.
4. Open **Change connection reference** again. Check the selected connection label and your email. If the account or status is blank, stop. If several rows look identical, use the optional read-only details check above. Do not infer its identity from the sign-in screen closing.
5. Check every other OneDrive action in your own copy and select the personal connection identified for you where needed.
6. Return to your exercise, complete its remaining file/folder selections and [save your changes](#save-your-changes) before testing.

If a sign-in or reference-selection step is unavailable, stop at that action and note the message. Do not change a shared reference's configuration or organisation settings to continue.

Before running, every listed action must show your identified connection as **Connected** with your training email. A blank account or status does not pass the checkpoint. These checks do not prove that another learner has the required permissions or that all Flow actions have been updated automatically.

## Set up only the exercise you are starting {#rebind-only-your-own-resources}

Each exercise's first Practice shows the account, files and settings to check. A **connection** lets a Flow use your account, such as your OneDrive or Outlook account. Your files must also be in the location named by that exercise.

When an exercise asks you to upload files in OneDrive, use **Create or upload → Files upload**. Some versions label the top button **Add new**. Upload only the files named in that exercise.

For Exercises 1 and 2, agree on two test recipients with your partner:

- **RecipientA:** your own authorised training mailbox.
- **RecipientB:** a second authorised training mailbox whose owner agrees to receive the tests.

Keep these two addresses ready. Enter them in **Run flow** when asked. The labels **SLOT-A** and **SLOT-B** in the sample data are not email addresses. If only one test mailbox is available, you can check the message content, but you cannot prove that the two recipient routes are different.

## If setup stops {#when-an-import-or-connection-is-blocked}

Stop at the step that failed. Keep the page open and note the step number and message. Do not switch import routes or change organisation settings. Follow the instructor's announced class route.

If you use captured examples instead of running a Flow, label your result **Evidence review**. That activity helps you diagnose the problem, but it is not a completed live repair.

## During the exercises {#test-and-reset-rules}

- Use the environment announced by the instructor.
- To start a test from your own Flow's details page, select **Edit** to open the designer, then **Test → Manually → Test**.
- Run one test at a time and wait for it to finish.
- Close Excel's editing tab before a Flow updates the workbook.
- After changing a Flow, [save with the control shown in your editor](#save-your-changes) before testing.
- Follow the reset instructions on the exercise page. A fresh workbook does not remove old emails or previous runs.

Keep this page open. Start [Exercise 1: Repair Relay](./exercises/01-repair-relay.md) when the instructor announces it.
