# Synthetic test inputs

Use these values in the Exercise 2 Form. Replace Requester email with your own authorised training address. These are fictional requests.

## Sample A {#sample-a}

- **Task title**

  ```text
  Prepare the request summary for the team meeting
  ```

- **Description**

  ```text
  Collect three fictional tasks for the training meeting
  ```

- **Category**

  ```text
  Operations
  ```

- **Requester email:** enter your own training email.

## Sample B {#sample-b}

- **Task title**

  ```text
  Check the sample expense table
  ```

- **Description**

  ```text
  Check item names and statuses in the fictional training file
  ```

- **Category**

  ```text
  Finance
  ```

- **Requester email:** enter your own training email.

## Expected records

RequestsTable has two new populated rows, excluding the initial blank row. RequestId values differ; Title and Category match Samples A/B; Status is Pending in both. Actual Response Id values depend on the Form's previous responses and need not be 1 and 2.

## Expected routing

- **Sample A:** Condition True / Yes; Operations email action runs and Finance is Skipped. Subject is [TRAINING][Operations] followed by Sample A's Task title.
- **Sample B:** Condition False / No; Finance email action runs and Operations is Skipped. Subject is [TRAINING][Finance] followed by Sample B's Task title.

Both emails reach your own mailbox. These two tests produce two populated rows and two emails. Status stays Pending. Do not add owner/status columns or unknown-category tests to the required practice.
