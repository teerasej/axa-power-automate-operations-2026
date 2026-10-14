# Understand the parts of a flow

Think of a restaurant: an order starts the work, staff follow steps, the order slip carries information, and each station needs the right tools and access.

| Term | Meaning | Training example |
|---|---|---|
| Environment | A workspace for flows and related resources | Select the organiser's training environment. |
| Trigger | The event that starts a run | Press a button or submit a new Form response. |
| Action | A step performed after the flow starts | Send an email (V2); Add a row into a table. |
| Connector | The interface Power Automate uses to call a service | Office 365 Outlook; Excel Online (Business). |
| Connection | An authenticated connection with an account's permissions | An account allowed to read the Form or write the workbook. |
| Input | A value supplied to a step or at the start | TaskTitle. |
| Dynamic content | Values from a trigger or earlier action | Task title from Get response details. |
| Run history | The record of individual runs | Open a run and inspect Inputs and Outputs. |

An environment is like the kitchen you work in. A connector is the doorway to a station; a connection is your access badge. Use the prepared environment today rather than creating a new one.

## Three ways to start a cloud flow

- **Instant cloud flow:** starts when a user presses a button, as in Exercise 1.
- **Automated cloud flow:** starts after an event, such as a new Form response.
- **Scheduled cloud flow:** starts at a scheduled time, such as a daily summary. This is background knowledge here, not an extra required flow.

## Plain text and Dynamic content

Typing TaskTitle into an email body sends that word. Selecting the TaskTitle token sends the value supplied for that run, like filling the blanks in a reusable letter.

Choose each value from the step that actually supplies it. Response Id comes from the Forms trigger; the question answers come from Get response details.

## Check the result

After a test, ask: **Did the run follow the expected steps?** and **Does the email or Excel record match the input?** If not, inspect action Inputs/Outputs, correct one point and test again.

[Build your first email flow](../exercises/01-foundation-email.md)

## References

- [Cloud flow types](https://learn.microsoft.com/power-automate/overview-cloud)
- [Power Automate environments](https://learn.microsoft.com/power-automate/environments-overview)
- [Troubleshoot cloud flows](https://learn.microsoft.com/power-automate/guidance/coding-guidelines/troubleshoot-cloud-flows)
