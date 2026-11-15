---
title: Rescue R3. Email image resource
pageClass: day2-exercise
prev:
  text: Flow Rescue Challenge
  link: /day-2/exercises/04-flow-rescue
next: false
---

# Rescue R3: Email image resource

The prepared HTML email contains a short training message and an image. The message arrives, but the intended image is absent. Trace the resource used by the image and verify the result in the rehearsed email client.

> **Access:** Check [starter availability](../downloads.md#starter-flow-status), then use only the approved static image resource, controlled mailbox and rehearsed recipient client. Do not create anonymous sharing links or change mailbox/security settings. If external images are blocked by policy, use captured evidence and record live rendering as unverified.

## Your test card

| Item | Resource |
|---|---|
| Starter | B2D2-R03-HtmlImage-START |
| Prepared content | HTML message with Image_source and a visible TestLabel |
| RecipientEmail | Your authorised controlled receiving address, entered when running the test |
| Test A | TestLabel A |
| Test B | TestLabel B |
| Acceptance | The intended supplied image is visible in both received messages |
| Scope | One image resource repair; keep the rest of the HTML and recipient unchanged |

## Supplied image resource

Use this existing synthetic training illustration as the intended resource for both tests. [Open the supplied image](https://teerasej.github.io/axa-power-automate-operations-2026/images/practices/ex01-p01-768.webp) (approximately 11.1 KB). It was rendered in the instructor's tested Outlook web client; your recipient client's behavior still needs checking.

```text
https://teerasej.github.io/axa-power-automate-operations-2026/images/practices/ex01-p01-768.webp
```

Keep the starter unchanged for the first diagnostic run. Compare its actual resource with this supplied input before deciding what to repair.

## Practice 1: Verify an email image resource

<PracticeIllustration src="/day-2/images/r03-p01.webp" :width="1536" :height="864" alt="An email image is checked against its intended source resource." />

Repair the image resource used by the prepared message and verify its rendering in two received emails.

1. Import the starter. Keep its initial settings for the first test and use the supplied image above as your comparison reference. Confirm **Published**; publish any Flow edits first. Start a manual test. In **RecipientEmail**, enter your own authorised training mailbox or another approved controlled recipient who has agreed to receive it. Enter **TestLabel**:

   ```text
   A
   ```

2. Open the received email in the rehearsed client. Record the visible text and image result. Inspect the email action’s actual HTML input and `Image_source` output.
3. Compare the intended image resource with what the HTML actually requests. Record evidence before making one relevant change. Do not replace the entire body with a screenshot.
4. Select **Publish**, confirm **Published** and rerun test A. Check the image in the **received message**. A correct-looking source string or successful send action alone does not prove rendering.
5. Run a second case using the same controlled **RecipientEmail**, with **TestLabel**:

   ```text
   B
   ```

6. Check the second received message separately. Record both labels, the client used and whether the supplied image appears. Give the two-message evidence to a peer team.

### Progressive hints

<details><summary>Hint 1: Separate sending from rendering</summary>

If the message arrives, examine the resource used by the image and the recipient client’s result. Do not assume every HTML element is correct because the email action succeeded.

</details>

<details><summary>Hint 2: Read the HTML input</summary>

An image’s src is the resource the client requests. Compare it with the prepared source value, including the filename and extension.

</details>

<details><summary>Hint 3: Verify the direct resource</summary>

A webpage or sharing page is not necessarily an image response. The approved route must return the actual image resource, and the rehearsed client must permit displaying it.

</details>

### Checkpoint

The supplied image appears in received tests A and B in the rehearsed client. Your evidence records the resource mismatch and observed rendering. If policy blocks rendering, state the boundary explicitly instead of claiming success.

## Reset

Keep the controlled recipient unchanged between the two acceptance tests. Enter it in RecipientEmail for each manual run. Use new TestLabel values or run timestamps to distinguish retests from old messages. Turn off the practice Flow after verification.

Reference: [Office 365 Outlook connector](https://learn.microsoft.com/connectors/office365/).
