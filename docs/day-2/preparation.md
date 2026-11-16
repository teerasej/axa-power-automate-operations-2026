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

Before class, check your account and download the practice files. You will select the files and settings for each Flow when you reach that exercise.

## Before class {#access-and-licences}

1. Open [Power Automate](https://make.powerautomate.com/) in your browser.
2. Sign in with the organisational training account agreed with the instructor.
3. Open [Outlook](https://outlook.office.com/mail/) in another tab. Confirm that your mailbox opens.
4. Open [Microsoft 365](https://www.microsoft365.com/). Open **OneDrive** from the app launcher and confirm that your files page opens.

> If an app does not open, note its name and the message shown. Share that with the organiser before class. The organiser checks licences and permissions; you do not need to change account or environment settings.

## Download your practice files {#prepare-your-pair-s-workspace}

1. Open [Day 2 downloads](./downloads.md).
2. Select **Download the Day 2 practice files (ZIP)**.
3. Find the downloaded ZIP in your computer's Downloads folder.
4. Extract it: double-click on macOS, or right-click and select **Extract All** on Windows.
5. Open the extracted folder. Confirm that you can see **DOC-A.pdf**, **DOC-B.pdf**, the core workbooks and a **reset** folder.

Keep the **reset** folder unchanged. It contains clean copies you can use if an exercise needs to restart.

### Download the starter and solution packages

1. Return to the [Day 2 home page](./index.md) and select **Download Flow starters + solutions**.
2. Extract **day-2-flow-packages.zip** on your computer.
3. Open **README.md**. Find **starters**, which has one folder per exercise, and **solutions**, which contains the eight working answers in one bundle.
4. Do not extract the inner ZIPs. Wait for the instructor's starting route below before importing anything. **The outer download ZIP is not an import package.**

All nine inner packages use **solution import**, not Legacy import. You do not need the solution answers to begin an exercise.

### Ready checkpoint

Your before-class preparation is complete when **Power Automate, Outlook and OneDrive open**, and your practice files are extracted. You do not need to build a Flow before class.

## In class: start your assigned Flow {#start-your-assigned-flow}

<span id="import-a-prepared-starter"></span>

A **starter Flow** is the prepared Flow you will repair. Your instructor announces **one starting route** for the class. Follow only that route; you do not need to compare environment settings.

> **Starting checkpoint:** Use the route and target environment announced by the instructor. The packages are available, but fresh imports of these delivery packages and representative learner-account checks remain unperformed. Stop if the assigned copy, connection or resource is unavailable.

| Route announced by the instructor | What you do |
|---|---|
| **Shared training environment — recommended class route** | Make your own copy of the assigned starter |
| **Legacy Flow package** for a separate target | Import the supplied package as Create as New |
| **Solution package** for a separate target | Import the supplied solution into the target confirmed by the instructor |

### Make your own copy in the shared environment {#shared-environment-copy}

The instructor imports and prepares the class starter once, then gives your account access to the assigned baseline. Your pair makes a separate copy before editing anything.

1. In Power Automate, select the training environment announced by the instructor.
2. Open the assigned starter from the instructor's link. If you are using the Flow list instead, open **My flows → Shared with me** and select the exact baseline name given by the instructor. Stay on its **details page**; do not select Edit on the shared baseline.
3. Select **Save As**. In **Create a copy of this flow**, enter a unique **Flow name** using your own pair number and exercise name. For example, pair 01 could use **PAIR01-RepairRelay**. Select **Save**. The copy is added to My flows and starts turned off.
4. Open **My flows** and search for the exact copy name you entered. If it is missing or search shows **No match found** after Save has completed, refresh the page once and repeat the search for that exact name. Do not repeat Save As. If the copy is still missing, stop and tell the instructor. Open the new copy's details page.
5. Check that its name is the unique name you entered. Under **Co-owner**, read the Flow owners list and confirm that your own account is listed. Select **Edit** only after these checks.
6. Return to the exercise page at the step immediately after its **Start your assigned Flow** link. Do not repeat Save As. Continue the personal setup shown there; a copied Flow can still use the instructor's connections or resource settings.
7. After that setup, [save your changes](#save-your-changes). On your copy's details page, select **Turn on** if it is Off. Start the first test only after your own copy is On.

**Copy checkpoint:** Your own uniquely named Flow is open. Its connection accounts and file selections are assigned to you, and it is On before the first test. The shared baseline has not been edited. This is a personal-copy check, not a package-import check.

If this is your announced route, continue to your exercise. The package import sections below are for a different starting route.

If the assigned baseline or Save As is unavailable, stop on that screen and tell the instructor which item is missing. Do not edit the shared baseline as a workaround.

### Optional route: import a package

The Flow download contains **eight START solution ZIPs** and **one working SOLUTION bundle**. Extract the outer download and choose the exact inner START filename listed on [Day 2 downloads](./downloads.md#starter-flow-packages). These packages use the solution route below. Neither the outer download nor the practice-files ZIP is importable. The Legacy guide is provided for a genuine Legacy package supplied separately; no Legacy package is included in this edition.

### Legacy Flow package {#legacy-package-route-only-when-supplied}

1. Select the environment announced by the instructor. In **My flows**, select **Import → Import Package (Legacy)**.
2. Select **Upload** and choose the supplied legacy Flow package ZIP.
3. Under the Flow's **Import setup**, select **Create as New**. Enter a new personal Flow name using the team name given by the instructor, then select **Save**. Do not select Update for an existing Flow.
4. Under **Related Resources**, open each required row's **Import setup**. Select your own authorised connection, then select **Save** in that dialog. When every required setup item is complete, select **Import**.
5. When import completes, open the new Flow in **My flows**. Confirm its personal name and continue with the personal setup in your exercise's first Practice.

If the legacy import option is unavailable, stop at that screen. Do not change environment settings or upload this package through the solution route.

### Solution package {#solution-route-for-this-edition}

1. Select the environment announced by the instructor. In **Solutions**, select **Import → Browse** and choose your assigned inner START solution ZIP from the extracted **starters** folder.
2. Check the solution name with the instructor before continuing. If it is already present in this shared environment, stop: importing the same solution can update it instead of creating your own Flow. Renaming the ZIP does not create a separate copy.
3. Follow the import screens. For each connection reference shown, select your own authorised connection. Select **Import** and wait for completion.
4. Open the imported solution and its named START Flow. Confirm that this is the personal copy assigned to you before editing it.
5. Continue with the personal setup in your exercise's first Practice. Check its required workbook, PDF or script location as directed there.

The instructor confirms the target and separate-copy arrangement before this route. You do not need to create an environment or change organisation settings.

### Save your changes {#save-your-changes}

In the exercises, **save your changes** means using the control shown in your own Flow editor:

- If it shows **Save**, select Save before testing. This is the legacy Flow route.
- If it shows **Publish**, select Publish and wait for **Published**. **Save draft** alone does not make the edited version runnable. If it already says Published and you made no edit, continue to Test.

A copy in the shared environment may still use Publish. Use the control in that copy; making a copy does not change the rule.

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

**Shared-environment copy or solution Flow:** use the reference check below.

**Legacy Flow:** your own connections are selected under Related Resources during import. Its action connection selector is different from the reference button below. The exact post-import account-check steps still need rehearsal for that target; stop here until the instructor confirms them. Do not look for a solution reference button in a legacy Flow.

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
