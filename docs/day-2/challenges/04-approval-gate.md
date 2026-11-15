---
title: Rescue R4. Decision gate simulation
pageClass: day2-exercise
prev:
  text: Flow Rescue Challenge
  link: /day-2/exercises/04-flow-rescue
next: false
---

# Rescue R4: Decision gate simulation

The fictional request desk checks a manager decision before entering a finance stage. The prepared Flow records the wrong result for one test. Compare the supplied rule with the branch that actually runs.

> **Access:** Complete [Preparation](../preparation.md) and check [starter availability](../downloads.md#starter-flow-status) before live practice. This challenge uses a manual trigger, Conditions and recorded synthetic results. It sends no real approval request and does not establish workplace approval authority.

## Your test card

**Supplied training rule:** A manager rejection ends the request as Rejected. Finance runs only after manager approval. Finance approval then produces Approved.

| Test | ManagerDecision | FinanceDecision | Required result |
|---|---|---|---|
| A | Reject | Approve | Rejected; finance actions show Skipped |
| B | Approve | Approve | Approved; finance stage executes |

Starter: **B2D2-R04-ApprovalGate-START**. One deliberate Condition defect is present.

## Practice 1: Verify a decision gate

<PracticeIllustration src="/day-2/images/r04-p01.webp" :width="1536" :height="768" alt="A gate checks a decision before allowing a request to proceed to a second stage." />

Repair the decision gate so both synthetic cases follow the supplied rule.

1. Import the starter. Confirm **Published**; publish any Flow edits first. Run test A with the exact values below.

   **ManagerDecision**

   ```text
   Reject
   ```

   **FinanceDecision**

   ```text
   Approve
   ```

2. Inspect `Manager_gate`, the finance-stage action statuses and the recorded final result. Identify the first branch that differs from the supplied rule.
3. Record the actual values compared by the Condition and the branch result. Repair only the justified comparison. Keep the synthetic inputs and the rule unchanged.
4. Select **Publish**, confirm **Published** and rerun test A. Verify Rejected and confirm finance actions show **Skipped**.
5. Run test B with the values below.

   **ManagerDecision**

   ```text
   Approve
   ```

   **FinanceDecision**

   ```text
   Approve
   ```

6. Verify the finance stage executes and the result is Approved. Share both branch traces with another team.

### Progressive hints

<details><summary>Hint 1: Start at the earliest wrong branch</summary>

The last recorded value is an effect. Compare the first decision’s actual values with the supplied rule before changing the result text.

</details>

<details><summary>Hint 2: Inspect actual Condition values</summary>

Read the left input, operator and right input in the manager Condition. A correct action name does not prove that the comparison expresses the intended rule.

</details>

<details><summary>Hint 3: Check skipped actions</summary>

For test A, finance must not execute at all. A final Rejected label is insufficient if finance still runs on the wrong branch.

</details>

### Checkpoint

Test A returns Rejected and skips finance. Test B enters finance and returns Approved. Your evidence identifies the comparison that caused the earlier wrong branch.

## Reset

This simulation does not write a workbook or issue approvals. Start a fresh manual run with the original test values. Turn off the practice Flow when finished.

Reference: [Conditions in cloud Flows](https://learn.microsoft.com/power-automate/add-condition).
