---
title: "Exercise 4 · Review and troubleshoot a flow with generative AI"
pageClass: ai-review-exercise
prev:
  text: Approval and one reminder
  link: /exercises/03-document-approval
next:
  text: Prepared review examples
  link: /guidebook/saved-examples
---

# Exercise 4: Review and troubleshoot a flow with generative AI {#exercise-4-review-a-flow-image-and-troubleshoot-with-chatgpt}

![Learners compare a workflow with AI advice and verify the result themselves](/images/chatgpt-assistance-header.jpg)

Like showing a colleague a map, share a screenshot of your flow, check the AI's understanding, then test one suggestion yourself. The AI can explain its findings using text and arrows; image generation is not required.

**14:45–16:00:** method 10 minutes → design review 20 → controlled error and repair 30 → review and questions 15.

> **License and access:** You need Power Automate cloud-flow access. The error practice uses Built-in actions, with no Premium connector. Use any organisation-approved generative AI app that can read uploaded screenshots, including the IT-suggested SecureGPT if image input is supported. The organiser must confirm access, image input and any licence requirements; no particular AI plan or model is prescribed. Browsing and image generation are not required. If image input is unavailable, use the supplied text fallback; if no approved AI app is available, use [prepared examples](../guidebook/saved-examples.md).

## Before you start

- Open Power Automate and your organisation-approved AI app with authorised accounts.
- Use the synthetic Exercise 2 flow or a drawing of its Forms → Excel → Condition → email sequence. Do not use a real operational flow containing private data.
- Download the [images and text backup](../resources/downloads.md). Error repair uses a separate flow, not your request tracker.
- Read the [AI preparation and verification guide](../guidebook/index.md).

## Choose an available route

| What you have | What to use |
|---|---|
| Your training flow and an approved app with image input | A sanitised screenshot of the flow, followed by close-ups when needed |
| No readable screenshot of your own | A photo of your training drawing or a supplied training illustration |
| Image input is unavailable | The supplied text fallback; no need to describe your whole flow manually |
| Browsing is unavailable | Open the Microsoft Learn links yourself and check the relevant claims |
| No approved AI app is available | Prepared examples with a partner, plus Power Automate tests if your account permits |

The routing diagram is author-prepared; the error illustration is AI-generated. **Neither is an actual Power Automate screenshot or run record.** Actual UI positions and error wording may differ.

## Practice 1: Review a flow design {#practice-1-review-the-design-from-an-image}

<PracticeIllustration src="/images/practices/ex04-p01.webp" alt="A learner reviews a workflow picture with chat assistance." />

Evaluate one suggestion against the flow's purpose and define a test for it.

1. Start a new chat in your approved AI app. Paste this reusable role-based starter prompt. Use it again whenever you start a new troubleshooting chat:

   ```text
   Act as a patient Power Automate coach and technical reviewer helping a beginner.
   I will upload sanitised screenshots of a training flow or error, or a photo of a flow drawing.
   First explain what you can read in the images. Restate the flow using plain-text --> arrows and label Yes/No branches. You do not need to generate an image.
   Separate supplied evidence from assumptions. Ask focused questions if essential information is missing; do not guess settings or unreadable text.
   For design review, suggest one relevant improvement. For troubleshooting, suggest the smallest correction. Use exact action and connector names and stay within the existing exercise; do not add Premium connectors or change permissions.
   Validate technical claims against Microsoft Learn. Give the relevant article links and explain which claim each supports.
   If you cannot browse or verify a claim, say so and mark it Unverified. Never invent links or claim you opened a source you did not access. Ask me to check the supplied Learn links or paste the relevant excerpt.
   Give a short test with input, expected result and where to inspect it.
   Keep AI advice, documentation verification and actual flow-run evidence separate. Never claim my flow works or is repaired without my run results.
   If an image is unclear or settings are hidden, ask for a close-up of the relevant action or field instead of asking me to describe the whole flow. I may supply a prepared text fallback if image input is unavailable.
   Keep your answer concise. Wait for my screenshot and task.
   ```

2. Capture your Exercise 2 training flow:

   1. Take an overview screenshot showing the trigger, actions, Condition and both email branches. Use more than one screenshot if needed to keep action names readable.
   2. Remove private URLs, account details, email addresses, connection identifiers, customer data and credentials before sharing. For a drawing, crop people and unrelated surroundings from the photo.
   3. Attach or paste the screenshot into your AI chat. If you do not have a readable screenshot, use [request-routing-training.png](/downloads/request-routing-training.png) or a clear photo of your training flow drawing. Identify a supplied image as a training illustration.

   If your app cannot read images, use the complete [design text fallback](../guidebook/index.md#text-backup-design).

3. Send this short prompt with your screenshot:

   ```text
   My goal is to receive requests through Forms, record them in Excel, and send an Operations- or Finance-labelled email to my own training mailbox.
   Review the attached flow screenshot. Explain what you can see, then suggest one point to check and a test for both categories.
   Ask for a close-up if you need to see a setting. Do not guess hidden mappings.
   ```

4. **Check the read-back before using advice.** It should identify the trigger → Get response details → Add a row into a table → Condition → selected email branch. If the AI needs a field setting, open that action and send a sanitised close-up. Check that Response Id comes from the trigger and question answers come from Get response details. Correct misunderstandings before continuing.
5. Check the suggestion against [Microsoft Learn: use Forms in a flow](https://learn.microsoft.com/en-us/power-automate/forms/popular-scenarios) and any relevant Learn article the AI cites. Open the source yourself and find the supporting passage. If the app cannot browse, use these links yourself; mark unsupported advice **Unverified**.
6. Choose one relevant suggestion, compare it with your actual settings and test it in the existing flow. For example, check Title mapping with both sample requests and compare Excel and email results. A text description, drawing or collapsed action card cannot prove that field settings are correct.
7. If you cannot run the flow, describe the result as a design review and test plan, not a verified run.

### Quick check

Explain what the AI understood, identify one suggestion and its documentation support, and show your test result or state that testing is incomplete. A chat answer is not a flow test result.

## Practice 2: Capture evidence of a conversion error

<PracticeIllustration src="/images/practices/ex04-p02.webp" alt="A learner collects evidence of a conversion error." />

Inspect an error in a separate training flow and capture the details needed to explain its cause.

1. Select **Create → Instant cloud flow**. Name it:

   ```text
   B2-ErrorPractice
   ```

2. Select **Manually trigger a flow → Create**. Add the Built-in **Data Operation** action:

   ```text
   Compose
   ```

3. In **Inputs**, open **Expression**, or **/ → Insert expression**, and enter:

   ```text
   int('not-a-number')
   ```

4. Select **Add** or **Update**. Confirm it is an expression token, not plain text, then Save. The value not-a-number cannot be converted to an integer.
5. **If Save reports InvalidTemplate:** the constant may be checked before a run exists. Use this runtime fallback:
   - Insert another Built-in Compose between the trigger and the original Compose. Use the action's **Rename** command to name it:

     ```text
     SampleText
     ```

   - Enter plain text, not an expression, in SampleText Inputs:

     ```text
     not-a-number
     ```

   - Replace the original Compose expression with:

     ```text
     int(outputs('SampleText'))
     ```

   - Confirm the order Manually trigger a flow → SampleText → Compose, then Save. Do not change connections or permissions to bypass an error.
6. Select **Test → Manually** and run the flow. Open the **Failed** run, select Compose and inspect its error and relevant input/expression. If Compose succeeds, check whether you entered plain text instead of an expression.
7. Capture readable screenshots for troubleshooting:
   1. Show the failed Compose action and its actual error message in Run history.
   2. Show its expression and relevant input. For the runtime fallback, also show the SampleText value and action order.
   3. Crop or hide private identifiers, run URLs and credentials. Keep the useful action names and error text readable.

   If image input is unavailable, copy only the relevant sanitised expression, input and exact error into a local note. The overall flow picture alone does not explain the failure.

### Quick check

Identify the expression, the nonnumeric value and the actual run error. If you cannot run it, use the supplied sample in Practice 3 and state that the failed-run checkpoint is incomplete.

## Practice 3: Diagnose the error and verify a repair

<PracticeIllustration src="/images/practices/ex04-p03.webp" alt="A learner repairs an error and verifies a new result." />

Verify a correction with a new run that outputs integer `25`.

1. Continue your chat, or start a new chat and paste the role-based starter from Practice 1. Upload the sanitised screenshots from Practice 2 showing the failed action, error message and expression/input. If you do not have your own screenshots, use [compose-error-training.png](/downloads/compose-error-training.png) and state that it is a supplied training illustration, not your run record. If image input is unavailable, use the [error text fallback](../guidebook/index.md#text-backup-error).

2. Send this short prompt with your screenshots:

   ```text
   This Compose action should convert numeric text to an integer. Diagnose the error shown in the attached screenshots.
   Explain the cause, suggest the smallest correction, and describe how to test it.
   Validate the explanation with Microsoft Learn; mark any unchecked claim Unverified.
   Ask for a close-up if essential information is missing. Do not invent an error message or run result.
   ```

   If a detail is unreadable, send a clearer close-up or copy just that sanitised expression or error text. Do not share a raw run URL or full JSON.

3. Check that the AI read the action and expression correctly. Open [Microsoft Learn: int](https://learn.microsoft.com/en-us/azure/logic-apps/workflow-definition-language-functions-reference#int) to check the conversion, and [troubleshoot cloud flow errors](https://learn.microsoft.com/en-us/power-automate/troubleshoot-flow-errors) for error inspection. If it suggests extra connectors or permission changes, ask it to focus on the sample conversion error. Documentation supports the explanation; your next run verifies the repair.
4. Edit the conversion Compose action. Replace its **Expression** with:

   ```text
   int('25')
   ```

   This repair works for both routes. It tests a fixed numeric value; it does not validate arbitrary incoming text.

5. Select **Add/Update**, Save and Test again. Open the new run. Confirm Compose is **Succeeded** and **Outputs** is integer `25`. Compare it with the original failed run. Editing a chat message does not change your flow.
6. If you only reviewed a sample or cannot run the flow, explain the cause, proposed fix and planned test without claiming a verified repair. If your approved AI app is unavailable, use the [prepared examples](../guidebook/saved-examples.md); you can still test Power Automate if access permits.

### Quick check

Show the failed run before the repair and the successful run producing integer 25 afterward. Explain the change. Neither sample context nor an AI response replaces these run records.

## Review and close

Share three points: whether the AI read your screenshots correctly, which suggestion Microsoft Learn supports, and what your actual test showed. Reuse the role-based starter, then follow screenshot → short question → source check → test independently on authorised work.

References: [Forms scenarios](https://learn.microsoft.com/en-us/power-automate/forms/popular-scenarios), [Expression functions — int](https://learn.microsoft.com/azure/logic-apps/workflow-definition-language-functions-reference#int), [Cloud flow error reference](https://learn.microsoft.com/power-automate/error-reference), [Troubleshoot cloud flow errors](https://learn.microsoft.com/power-automate/troubleshoot-flow-errors)
