---
title: ChatGPT image guidebook
prev:
  text: Smart Request Intake and Routing
  link: /exercises/02-forms-to-excel
next:
  text: Design review and error repair
  link: /exercises/04-chatgpt-design-and-troubleshooting
---

# ChatGPT guidebook: Show an image, ask briefly, verify the result

A map helps a friend understand your route, but you still need to say where you want to go. Supply a screenshot or drawing, state your goal and check ChatGPT's interpretation before using its advice.

## Five steps

1. **Prepare the image:** use a synthetic flow screenshot or drawing. Action names and arrows should be readable. For an error, show the action, expression and error message.
2. **Check before sharing:** remove private URLs, account details, email addresses, identifiers, credentials and customer data. Crop people, badges and unrelated surroundings from photos. Use only organisation-approved context.
3. **Attach and ask briefly:** state your goal and request. Use the text backups below when image upload is unavailable.
4. **Check the read-back:** compare names, sequence, fields and expressions with the image. Correct misinterpretations; use a close-up or relevant text if needed.
5. **Test one suggestion:** compare with actual configuration, run again and inspect the destination. ChatGPT does not verify your tenant, permissions or successful repair.

## Design-review question

Use with the Exercise 2 Forms → Excel → Condition → email image:

```text
My goal is to receive requests through Forms, record them in Excel, then send an Operations- or Finance-labelled email to my own mailbox.
Explain the steps you can see in the image, then suggest one point to check and a way to test it.
If the image is unclear or information is missing, ask first. Do not guess.
```

A drawing supports discussion of sequence and data movement. A screenshot showing only action names does not expose settings. Open field mappings before accepting a claim that they are correct. Without a run, call the outcome a design review.

## Error-review question

```text
This Compose action should convert numeric text to an integer, but it shows the error in the image.
Explain the cause, suggest the smallest correction, and describe how to test it.
If information is missing, ask first.
```

Show the failed action and relevant expression, not just the overall flow. Actual error wording can differ from the illustration.

## If the image is unclear or misread

```text
First tell me which action names, sequence and values you can read.
Separate what is clearly visible from what you cannot read, then ask only for the missing information.
```

Correct the misunderstanding briefly or send a sanitised close-up of one action. Check privacy again before sharing more of the screen.

## Text backup: design {#text-backup-design}

Copy the complete block when you cannot upload an image:

```text
This is a synthetic Power Automate training design, not evidence of a real run.
Flow: When a new response is submitted → Get response details → Add a row into a table → Condition → Send an email (V2) in the selected branch.
Excel table: RequestsTable
RequestId = Response Id from the trigger
Title = Task title from Get response details
Description = Description from Get response details
RequesterEmail = Requester email from Get response details
Category = Category from Get response details
Status = fixed text Pending
Category is required single choice: Operations or Finance only.
After recording: Condition compares Category from Get response details is equal to Operations.
Yes sends an Operations-labelled email; No sends a Finance-labelled email. Both To fields use the learner's own mailbox.
Two tests: Operations → Yes and Finance → No; check two rows and two emails.
Do not add Switch, unknown-category handling or complex exceptions.
Explain the steps, suggest one point to check and a way to test it.
If information is missing, ask first. Do not guess, add connectors or change permissions.
```

## Text backup: error {#text-backup-error}

This is sample context, not a report of your own run:

```text
This is a Power Automate training example, not evidence of a real run.
Flow: Manually trigger a flow → Compose
Example expression: int('not-a-number')
The value not-a-number is not numeric text.
Expected purpose: convert numeric text to an integer.
The constant expression may be rejected at Save; do not assume a failed run exists.
Explain the cause, suggest the smallest correction and a test using numeric text.
If information is missing, ask first. Do not add connectors or change permissions.
```

Add your sanitised expression or exact error message only when needed. [Download the text backup](/downloads/chatgpt-text-backup.txt).

## If ChatGPT is unavailable

Review the [prepared examples](./saved-examples.md) with a partner. Record this as an authored-example review, not live ChatGPT practice. Continue Power Automate testing if your account is ready.

## Check advice before acting

| ChatGPT claim | Your check |
|---|---|
| This is the action sequence | Compare with the image and correct misread labels. |
| The mapping is correct | Does the image actually show the fields and source tokens? |
| Here is a test | Does it specify input, expected result and where to inspect it? |
| The flow is fixed | Verify a new run and actual output first. |
| Add a service or broaden access | Check scope and ask the organiser before acting. |

ChatGPT cannot see settings outside your image or your account's permissions. Stay within the existing Standard-connector exercise. Supplied images are training aids, not actual screenshots or readiness evidence.

[Open Exercise 4](../exercises/04-chatgpt-design-and-troubleshooting.md) · [Download practice images](../resources/downloads.md)

Reference: [OpenAI — Image inputs](https://learn.chatgpt.com/docs/image-inputs)
