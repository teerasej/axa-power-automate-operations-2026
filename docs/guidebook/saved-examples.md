# Prepared examples when your approved AI app is unavailable {#prepared-examples-when-chatgpt-is-unavailable}

These responses were **written by the course author for teaching**. They are not AI transcripts, tenant test results or evidence of live learner use. Review them with the [practice images or text backups](../resources/downloads.md).

## Example: Read the design and review it {#example-read-the-design-image-and-review-it}

> The supplied design describes When a new response is submitted → Get response details → Add a row into a table. A Condition checks Category = Operations. Yes selects the Operations-labelled email; No selects Finance. Both go to the learner's mailbox. RequestId uses Response Id from the trigger. Title and the other answers come from Get response details; Status is Pending.
>
> One point to check is Title: did you select the Task title token from Get response details, or type its name as plain text? Submit one Operations and one Finance request. Compare the action Inputs, Excel Title and email subject for each run. Both emails should reach your own mailbox.
>
> The supplied context explains the design but cannot prove that your account's configuration matches it or that your flow has run successfully.

**Discuss:** Is this reading accurate? Which claims can you check in the supplied context, and which require the designer, a run or Excel? Can a drawing alone prove a token's source?

## Example: Ask about an unclear image

> I can see Forms and Excel, but the mapping text is too small to confirm Title. Please provide a sanitised close-up of the relevant Add a row into a table fields, or copy the field name and source token.

**Discuss:** This response asks for specific missing evidence. If the AI invents a column that is not in your image, correct its interpretation before choosing a fix.

## Example: Diagnose a conversion error

> The supplied error example describes Compose with int('not-a-number'). That value is not numeric text, so it cannot be converted to an integer. The error summary is illustrative, not a real run message.
>
> The constant expression may be rejected at Save with InvalidTemplate. To practise failed-run inspection, use the Exercise 4 runtime fallback: SampleText outputs plain text not-a-number to Compose using int(outputs('SampleText')).
>
> For this sample, change the conversion Compose to int('25'), Save and run again. Check Outputs is integer 25 and compare with the failed run. This verifies the tested sample, not every possible input.

**Discuss:** What can you claim before running the flow? Can an illustration prove a repair? Why does editing a chat message not repair the Power Automate flow?

## Advice to challenge

> “The picture proves it works. There is no need to test.”
>
> “Add a Premium connector and make the file public; that will definitely fix it.”

Identify where the advice exceeds the evidence or exercise scope. Return to the input, source token, actual error and result. An image does not authorise permission changes or use of customer data.

## Check the sources

These authored examples are advice, not verified repairs. Check the relevant Microsoft Learn passage, then run the sample yourself. If your AI app cannot browse, it should mark its technical claims Unverified rather than inventing citations.

- [Forms scenarios](https://learn.microsoft.com/en-us/power-automate/forms/popular-scenarios): check response retrieval and recording in Excel.
- [Expression functions: int](https://learn.microsoft.com/en-us/azure/logic-apps/workflow-definition-language-functions-reference#int): check conversion of numeric text to an integer.
- [Troubleshoot cloud flow errors](https://learn.microsoft.com/en-us/power-automate/troubleshoot-flow-errors): inspect the relevant action and error.

[Return to Exercise 4](../exercises/04-chatgpt-design-and-troubleshooting.md)
