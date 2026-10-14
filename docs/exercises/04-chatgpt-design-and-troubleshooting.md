---
title: "Exercise 4 · ChatGPT design review and error repair"
prev:
  text: ChatGPT guidebook
  link: /guidebook/
next:
  text: Prepared review examples
  link: /guidebook/saved-examples
---

# Exercise 4: Review a flow image and troubleshoot with ChatGPT

![Learners compare a workflow image with ChatGPT advice and verify the result themselves](/images/chatgpt-assistance-header.jpg)

*Training illustration, not a Power Automate screenshot or evidence of a successful run.*

Showing a friend a map can be easier than describing every turn. Use an image and a short question, check that ChatGPT read the image correctly, then test one suggestion yourself.

**14:45–16:00:** method 10 minutes → design review 20 → controlled error and repair 30 → review and questions 15.

> **License and access:** You need Power Automate cloud-flow access. The error practice uses Built-in actions, with no Premium connector. Use an organisation-approved ChatGPT account; the organiser must confirm access and image upload. No specific paid plan or model is required by this exercise. Use text when upload is unavailable, or [prepared examples](../guidebook/saved-examples.md) when ChatGPT is unavailable.

## Before you start

- Open Power Automate and [ChatGPT](https://chatgpt.com) with authorised accounts.
- Use the synthetic Exercise 2 flow or a drawing of its Forms → Excel → Condition → email sequence. Do not use a real operational flow containing private data.
- Download the [images and text backup](../resources/downloads.md). Error repair uses a separate flow, not your request tracker.
- Read the [image preparation and verification guide](../guidebook/index.md).

## Choose an available route

| What you have | What to use |
|---|---|
| Your own training flow or drawing | A sanitised screenshot or clear photo |
| No readable image of your own | The supplied training image |
| ChatGPT works but image upload does not | The complete text backup; no need to write a new description |
| ChatGPT is unavailable | Prepared examples with a partner, plus Power Automate tests if your account permits |

The routing diagram is author-prepared; the error illustration is AI-generated. **Neither is an actual Power Automate screenshot or run record.** Actual UI positions and error wording may differ.

## Practice 1: Review the design from an image

Evaluate one suggestion against the flow's purpose and define a test for it.

1. Prepare one of these images:
   - **Your screenshot:** show intake, Excel, Condition and the email action in each branch. Open Get response details and Add a row into a table settings to review mapping. Use separate close-ups if a single image makes the text too small.
   - **Your drawing:** draw Forms intake → retrieve answers → record in Excel → Category = Operations → Yes/No email routes. Add arrows and field names, such as Task title → Title. Take a straight, well-lit photo and crop away the surroundings.
   - **Supplied image:** download [request-routing-training.png](/downloads/request-routing-training.png).

   ![Training diagram showing six mappings, one Condition and two labelled email routes to the learner's mailbox](/downloads/request-routing-training.png)

   [Open the diagram at full size](/downloads/request-routing-training.png) to read its settings.

2. Remove private URLs, account names, email addresses, connection identifiers, customer data and credentials. A photo must exclude people, badges and unrelated boards. Inspect the final image before sending it.
3. Start a new chat, attach or paste the image using the controls available in your interface, then ask:

   ```text
   My goal is to receive requests through Forms, record them in Excel, then send an Operations- or Finance-labelled email to my own mailbox.
   Explain the steps you can see in the image, then suggest one point to check and a way to test it.
   If the image is unclear or information is missing, ask first. Do not guess.
   ```

   If upload is unavailable, use the [design text backup](../guidebook/index.md#text-backup-design).

4. **Check the read-back before using advice.** It should identify the trigger → Get response details → Add a row into a table → Condition → selected email branch. Check that Response Id comes from the trigger and question answers come from Get response details. Correct any misread labels before continuing.
5. Choose one relevant suggestion, compare it with your actual settings and test it in the existing flow. For example, check Title mapping with both sample requests and compare Excel and email results. A drawing or a collapsed action card cannot prove that field settings are correct.
6. If you only have a drawing or cannot run the flow, describe the result as a design review and test plan, not a verified run.

### Quick check

Explain what ChatGPT read correctly or incorrectly, identify one suggestion and name the evidence you checked. A chat answer is not a flow test result.

## Practice 2: Capture evidence of a conversion error

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
7. Capture close-ups of the expression and actual failed-action error. Remove private identifiers. For the fallback, include the SampleText value. The overall flow picture alone does not explain the failure.

### Quick check

Identify the expression, the nonnumeric value and the actual run error. If you cannot run it, use the supplied sample in Practice 3 and state that the failed-run checkpoint is incomplete.

## Practice 3: Diagnose the error and verify a repair

Verify a correction with a new run that outputs integer `25`.

1. Use your close-ups from Practice 2, or download [compose-error-training.png](/downloads/compose-error-training.png). This illustration uses the constant expression to explain the cause; it is not run evidence. Use the runtime fallback when Save rejects that constant.

   ![Training illustration of Compose and an example conversion error from int('not-a-number'), not a real run](/downloads/compose-error-training.png)

   [Open the error illustration at full size](/downloads/compose-error-training.png).

2. Attach the image and ask:

   ```text
   This Compose action should convert numeric text to an integer, but it shows the error in the image.
   Explain the cause, suggest the smallest correction, and describe how to test it.
   If information is missing, ask first.
   ```

   Say when you are using a supplied illustration. If upload is unavailable, use the [error text backup](../guidebook/index.md#text-backup-error). If your image is unclear, copy only the relevant sanitised expression/error text; do not share a raw run URL or full JSON.

3. Check that ChatGPT read the action and expression correctly. Separate visible evidence from assumptions. If it suggests extra connectors or permission changes, ask it to focus on the sample conversion error.
4. Edit the conversion Compose action. Replace its **Expression** with:

   ```text
   int('25')
   ```

   This repair works for both routes. It tests a fixed numeric value; it does not validate arbitrary incoming text.

5. Select **Add/Update**, Save and Test again. Open the new run. Confirm Compose is **Succeeded** and **Outputs** is integer `25`. Compare it with the original failed run. Editing a chat message does not change your flow.
6. If you only reviewed the illustration or cannot run the flow, explain the cause, proposed fix and planned test without claiming a verified repair. If ChatGPT is unavailable, use the [prepared examples](../guidebook/saved-examples.md); you can still test Power Automate if access permits.

### Quick check

Show the failed run before the repair and the successful run producing integer 25 afterward. Explain the change. Neither an illustration nor ChatGPT's response replaces these run records.

## Review and close

Share three points: whether ChatGPT read the image correctly, which suggestion you chose, and what evidence supports the result. Apply the image → short question → verification method independently to authorised work.

References: [OpenAI — Image inputs](https://learn.chatgpt.com/docs/image-inputs), [Expression functions — int](https://learn.microsoft.com/azure/logic-apps/workflow-definition-language-functions-reference#int), [Cloud flow error reference](https://learn.microsoft.com/power-automate/error-reference), [Troubleshoot a cloud flow](https://learn.microsoft.com/power-automate/fix-flow-failures)
