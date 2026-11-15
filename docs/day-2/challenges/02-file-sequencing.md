---
title: Rescue R2. File dependency order
pageClass: day2-exercise
prev:
  text: Flow Rescue Challenge
  link: /day-2/exercises/04-flow-rescue
next: false
---

# Rescue R2: File dependency order

The prepared Flow creates a uniquely named training text file and returns its contents. It currently cannot retrieve the expected result. Trace when the file becomes available and restore the dependency path.

> **Access:** Confirm Power Automate and your own authorised OneDrive for Business. Check [starter availability](../downloads.md#starter-flow-status) before live practice. This minimal challenge uses your OneDrive root and a unique `B2D2-R02-sequence-` filename on every run. It is a controlled missing-file/dependency case, not a manufactured file-lock error.

## Your test card

| Item | Resource |
|---|---|
| Starter | B2D2-R02-FileSequencing-START |
| Expected content | Sequence verified |
| Test A | New run with a fresh generated filename |
| Test B | Another new run with a different generated filename |
| Scope | One dependency-order repair; retain the unique-name design |

## Practice 1: Restore the file dependency order

<PracticeIllustration src="/day-2/images/r02-p01.webp" :width="1536" :height="768" alt="A document must be placed on a shelf before it can be retrieved." />

Repair the file dependency so each new run returns the content of its own created file.

1. Import the starter and bind your own authorised OneDrive connection. Keep the prepared creation and retrieval paths together. **Folder Path** uses your OneDrive root:

   ```text
   /
   ```

   The prepared retrieval path uses that same root and the generated filename. Do not change only the creation folder or introduce an uncreated folder. Select **Publish**, confirm **Published** and run test A.
2. Open the run. Record the unique path, the first failed action, its error and the status of the file creation action. Check the actual folder after the run finishes.
3. Write the prerequisite for each file action in plain language. Identify which prerequisite did not exist when the failed action ran.
4. Repair the ordering or successful-run dependency justified by your evidence. Right-click the action card that needs a different predecessor, select **Run after**, then open **Select actions**. Select the required predecessor and clear the old one; keep **Succeeded** as the required result. Close **Select actions** and finish the dependency changes before checking or testing the Flow. Keep the manual trigger and the same path calculation. Do not solve the case by manually creating the expected file before each run.
5. Select **Publish**, confirm **Published** and start a fresh run. Check `Retrieved_result` and open the created file. Its content must be:

   ```text
   Sequence verified
   ```

6. Run again without reusing the first filename. Verify the second distinct file contains the same expected text and its retrieval succeeds.
7. Give the two run IDs or timestamps, filenames and observed content to a peer team.

### Progressive hints

<details><summary>Hint 1: Follow the first error</summary>

A missing-file error directs attention to the file’s location and availability. A delay alone cannot supply a prerequisite that no action has completed.

</details>

<details><summary>Hint 2: Trace the same path</summary>

Compare the creation and retrieval paths. Both should use the one generated token for that run. An old file elsewhere does not satisfy this test.

</details>

<details><summary>Hint 3: Check dependency status</summary>

Look at the creation action’s status at the moment retrieval begins. Explain the order you need before changing the designer.

</details>

### Checkpoint

Two fresh runs produce two distinct files. Each retrieval returns **Sequence verified** from its own created file. Your evidence identifies the original dependency failure.

## Reset

Wait for active runs to finish. Each retest creates another unique prefixed file, so it does not depend on removing an earlier file. When cleanup is announced, remove only your own files created by these runs, checking the recorded `B2D2-R02-sequence-` names. Do not remove other root files or another team’s work.

Reference: [OneDrive for Business file actions](https://learn.microsoft.com/connectors/onedriveforbusiness/).
