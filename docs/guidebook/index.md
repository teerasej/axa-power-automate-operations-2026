---
title: Generative AI guidebook
pageClass: ai-review-exercise
prev:
  text: Smart Request Intake and Routing
  link: /exercises/02-forms-to-excel
next:
  text: Review and troubleshoot with generative AI
  link: /exercises/04-chatgpt-design-and-troubleshooting
---

# Generative AI guidebook: Show a screenshot, check and test {#chatgpt-guidebook-show-an-image-ask-briefly-verify-the-result}

Like showing a colleague a map, share your flow screenshot and state your goal. Use any organisation-approved AI app that can read images. SecureGPT was suggested by IT; confirm image input separately from image generation. The AI can explain a flow with text arrows, so image generation is unnecessary. Browsing is optional; learners can open Microsoft Learn themselves.

## Five steps

1. **Capture the flow:** take an overview screenshot with readable action names and branches. For an error, capture the failed action and message, plus its expression and relevant input. A clear photo of a training flow drawing also works.
2. **Check before sharing:** remove private URLs, account details, email addresses, identifiers, credentials and customer data. Crop people and unrelated surroundings from photos.
3. **Set the role and ask:** paste the starter below into a new chat, upload the sanitised screenshot, then ask the short task question. Send close-ups of relevant settings when requested.
4. **Verify the advice:** correct misunderstandings and open Microsoft Learn to check the supporting passage. Mark unchecked claims Unverified. If the app cannot browse, check the sources yourself or supply an excerpt.
5. **Test one suggestion:** compare with actual settings, run the flow and inspect the result. AI advice and documentation are not evidence that your flow has run successfully.

## Reusable starter prompt

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

## Design-review question

Upload your training flow screenshot, a clear photo of your drawing, or the [supplied routing illustration](/downloads/request-routing-training.png). Then ask:

```text
My goal is to receive requests through Forms, record them in Excel, and send an Operations- or Finance-labelled email to my own training mailbox.
Review the attached flow screenshot. Explain what you can see, then suggest one point to check and a test for both categories.
Ask for a close-up if you need to see a setting. Do not guess hidden mappings.
```

Check the read-back. An overview may hide field settings; open the relevant action and send a sanitised close-up when needed.

## Text fallback: design {#text-backup-design}

Use this supplied block only if your app cannot read images. You do not need to write a full description of your own flow.

```text
This is a synthetic training design, not evidence of a real run.
Goal: receive requests through Forms, record them in Excel, and email my own training mailbox.
When a new response is submitted
--> Get response details
--> Add a row into a table (RequestsTable)
--> Condition: Category from Get response details is equal to Operations
    Yes --> Send an email (V2), Operations-labelled, to my own mailbox
    No  --> Send an email (V2), Finance-labelled, to my own mailbox
Get response details uses the same Form Id and Response Id from the trigger.
Excel mappings:
RequestId = Response Id from the trigger
Title = Task title from Get response details
Description = Description from Get response details
RequesterEmail = Requester email from Get response details
Category = Category from Get response details
Status = typed text Pending
Category is required, with only Operations or Finance as choices.
Both emails include Task title and Category from Get response details.
Review this design. Suggest one point to check and a test for both categories.
Do not add Switch or extra exception handling.
```

## Error-review question

Upload the screenshots from Exercise 4 Practice 2 showing the failed action, error message and expression/input, then ask:

```text
This Compose action should convert numeric text to an integer. Diagnose the error shown in the attached screenshots.
Explain the cause, suggest the smallest correction, and describe how to test it.
Validate the explanation with Microsoft Learn; mark any unchecked claim Unverified.
Ask for a close-up if essential information is missing. Do not invent an error message or run result.
```

If you have no screenshot of your own, use the [supplied error illustration](/downloads/compose-error-training.png) and identify it as a training illustration. If image input is unavailable, use the text fallback below. Neither sample is your own failed-run evidence.

## Text fallback: error {#text-backup-error}

```text
This is a synthetic training example, not evidence of my own run.
Flow: Manually trigger a flow --> Compose
Expression: int('not-a-number')
Input value: not-a-number
Purpose: convert numeric text to an integer.
No actual error message or run result is supplied in this example.
The constant expression may be rejected at Save; do not assume a failed run exists.
Runtime fallback: Manually trigger a flow --> SampleText --> Compose
SampleText is a Compose action containing plain text not-a-number.
The conversion Compose uses int(outputs('SampleText')).
```

## If the image is unclear or misread

If the AI misreads your screenshot, ask:

```text
Tell me which action names, sequence and values you can read.
Separate visible evidence from assumptions and ask for the missing information.
```

Send a clearer close-up of the requested setting, or copy just the relevant sanitised text. Do not share a full run URL or raw JSON.

## If your approved AI app is unavailable {#if-chatgpt-is-unavailable}

Review the [prepared examples](./saved-examples.md) with a partner. Record this as an authored-example review, not live AI practice. Continue Power Automate testing if your account is ready.

## Check advice before acting

| Evidence | What it establishes |
|---|---|
| AI advice | A proposed explanation, improvement or repair |
| Microsoft Learn passage you checked | Documentation support for a specific technical claim |
| Actual flow run and destination output | Whether your tested flow produced the expected result |

Open the relevant article and locate the supporting passage. A plausible-looking citation alone is not verification. If a claim is unsupported, keep it Unverified and ask the instructor before relying on it.

- [Forms scenarios](https://learn.microsoft.com/en-us/power-automate/forms/popular-scenarios): check response retrieval and recording in Excel.
- [Expression functions: int](https://learn.microsoft.com/en-us/azure/logic-apps/workflow-definition-language-functions-reference#int): check conversion of numeric text to an integer.
- [Troubleshoot cloud flow errors](https://learn.microsoft.com/en-us/power-automate/troubleshoot-flow-errors): inspect the relevant action and error.


Stay within the existing Standard-connector exercise. Text examples and supplied images are training aids, not tenant-readiness evidence.

[Open Exercise 4](../exercises/04-chatgpt-design-and-troubleshooting.md) · [Download prompts and text examples](/downloads/chatgpt-text-backup.txt) · [Practice images](../resources/downloads.md)
