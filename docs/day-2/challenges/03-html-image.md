---
title: Rescue R3. Email image resource
pageClass: day2-exercise
prev:
  text: Flow Rescue Challenge
  link: /day-2/exercises/04-flow-rescue
next: false
---

# Rescue R3: Email image resource

The test email arrives, but its picture is missing. Repair the image address in one prepared action, then check two received messages.

> **Draft rehearsal:** A separate instructor-account copy of **B2D2-v2-R03-HtmlImage-START** reproduced the missing picture. One URL repair produced new A/B Inbox messages with the supplied image. This bounded check does not establish fresh imports, learner-account permissions, an uninterrupted final-text attempt or classroom timing.

> **Access:** Use your authorised Outlook training mailbox and the image supplied below. The instructor checks that the class email client can display it. Do not change sharing or security settings.

## Your test card

| Test | TestLabel | Required result after repair |
|---|---|---|
| A | A | The received message shows label A and the supplied image |
| B | B | A second message shows label B and the same image |

Use the same approved **RecipientEmail** address for both tests.

## Supplied image resource

[Open the supplied training image](https://teerasej.github.io/axa-power-automate-operations-2026/images/practices/ex01-p01-768.webp). Keep it open as the picture you expect to see in the email.

## Setup

<StarterFlowSetup exercise="R3" />

### Check your settings


| Action to check | Service |
|---|---|
| Send image | Office 365 Outlook |

<PersonalConnectionCheck />

Keep your approved receiving mailbox address ready for **RecipientEmail**. Leave **Image source** and the prepared email body unchanged for the first test. No OneDrive file is needed.

### Save and turn on your flow

<FlowReadyCheck />

**Ready checkpoint:** Your assigned personal flow is On. Every listed action uses your authorised account, and the prepared fault is unchanged.

## Practice 1: Verify an email image resource {#practice-1-verify-an-email-image-resource}

<PracticeIllustration src="/day-2/images/r03-p01.webp" :width="1536" :height="864" alt="An email image is checked against its intended source resource." />

Replace one image URL and verify its picture in the received emails.

1. On your copy's details page, select **Edit** to open the designer. Then select **Test → Manually → Test**. If **Sign in** appears, complete the [first-test connection check](../preparation.md#first-test-connection-check). Enter:

   - **TestLabel**

     ```text
     A
     ```

   - **RecipientEmail:** your approved receiving address.

2. Select **Run flow**. When the confirmation says the run has started, select **Done**. Wait for the run-result view showing the action statuses. If it does not appear, follow [Open your test result](../preparation.md#open-your-test-result).
3. Open Outlook. Find the newest email with subject **[D2 Image] Controlled rendering test**. Check that the body says **Test label: A**, then note the missing picture.
4. Return to the Power Automate tab and its run-result view. Select **Image source → Outputs** and compare its address with the supplied image.

Use the test card to diagnose the fault, make one repair and run tests A and B. Try the hints below, or open the full solution whenever you need help.

### Progressive hints

<details><summary>Hint 1: The message already arrives</summary>

Sending works. Start with the value that tells the email where to fetch its picture.

</details>

<details><summary>Hint 2: Compare the complete address</summary>

A different filename points to a different resource. Compare Image source with the supplied URL, including its filename and extension.

</details>

<details><summary>Hint 3: Keep the rest of the email</summary>

Replace Image source's Inputs only. The prepared email already uses that output in its image element.

</details>

### Solution available {#solution}

Includes the exact repair and both verification tests. Open whenever you need help.

<details class="rescue-solution">
<summary>View step-by-step solution</summary>
<div class="rescue-solution-content">

1. Return to **Edit → Image source → Parameters**. Replace the complete **Inputs** value with this URL as ordinary text:

   ```text
   https://teerasej.github.io/axa-power-automate-operations-2026/images/practices/ex01-p01-768.webp
   ```

   <div class="day2-field-stack" role="figure" aria-label="Image address to repair">
     <div><span class="subject-reference-label">Image source → Inputs</span><div class="subject-reference-field">Typed directly: the complete supplied image URL above</div></div>
   </div>

2. Save your changes. Select **Test → Manually → Test** and enter **TestLabel** A and the same **RecipientEmail**. Select **Run flow**, then **Done** at the started confirmation. Wait for the run-result view, then open the new received email and check that the supplied picture appears.
3. Return to the Power Automate tab. Select **Edit → Test → Manually → Test**. Enter **TestLabel**:

   ```text
   B
   ```

   Enter the same approved **RecipientEmail**.
4. Select **Run flow**, then **Done** at the started confirmation. Wait for the run-result view. Open the second new message. Check label B and the picture separately from test A. Show both messages to your partner.

</div>
</details>

### Checkpoint

Two received messages show their own labels, A and B, and the supplied picture. If the email client blocks images, record that result and stop; a correct URL alone does not prove that the picture displayed.

## Reset

Use a new run time or a new TestLabel to distinguish a retest from old mail. Keep the approved receiving address unchanged. Turn off the training Flow during announced cleanup.

Reference: [Office 365 Outlook connector](https://learn.microsoft.com/connectors/office365/).
