---
title: Rescue R5. PDF output
pageClass: day2-exercise
prev:
  text: Flow Rescue Challenge
  link: /day-2/exercises/04-flow-rescue
next: false
---

# Rescue R5: PDF output

The prepared Flow makes a tiny HTML request summary, converts it with OneDrive for Business and saves a PDF. The current starting copy cannot produce the expected readable document. Trace the source artifact and conversion inputs.

> **Access:** Check [starter availability](../downloads#starter-flow-status), then run this challenge only after the organiser has rehearsed the permitted OneDrive for Business HTML-to-PDF route with the training account. The supplied `Conversion_wait` is 10 seconds, as used in the instructor's two successful synthetic cases; that duration does not establish readiness for another account. Keep it unchanged during the repair. This route uses no Premium Word action.

## Your test card

| Test | RequestID | AmountText | Required output |
|---|---|---|---|
| A | R-PDF-01 | 1250.00 | Readable PDF with this request and amount |
| B | R-PDF-02 | 2750.00 | Another readable PDF with this request and amount |

Starter: **B2D2-R05-PdfGeneration-START**. One deliberate source-file setting is wrong. Keep the supplied HTML content, selectors and timing support unchanged during the repair.

## Practice 1: Verify a generated document

<PracticeIllustration src="/day-2/images/r05-p01.webp" :width="1536" :height="864" alt="A prepared source document is converted and its finished PDF is inspected." />

Repair the source-file setting and verify that two generated PDFs contain the corresponding test values.

1. Import the starter and bind your own authorised OneDrive connection. Keep the prepared source/output paths on your OneDrive root `/`. Select **Publish**, confirm **Published** and run test A using:

   **RequestID**

   ```text
   R-PDF-01
   ```

   **AmountText**

   ```text
   1250.00
   ```

2. Inspect `Source_name`, `Summary_html` and `Create_html_source`, then the created source file, `Convert_summary` and `Save_pdf`. Compare the actual **File Name** with the saved file's name and format. Record the first failed action, its actual error and any later action marked **Skipped**.
3. Compare the source’s content and metadata with the supported conversion route. Repair the one justified setting. Keep the unique generated filename design, the 10-second `Conversion_wait`, the converter's **File** binding to the created file's identifier, **Target type** selection and the binary **File Content** mapping in `Save_pdf` unchanged. Inserted values and expressions remain tokens; do not replace them with their display labels as ordinary text.
4. Select **Publish**, confirm **Published** and rerun test A. Open the **saved PDF** in OneDrive and verify RequestID and AmountText against the input. A .pdf extension alone does not prove conversion succeeded.
5. Run test B with:

   **RequestID**

   ```text
   R-PDF-02
   ```

   **AmountText**

   ```text
   2750.00
   ```

6. Open the second saved PDF and verify its values independently. Make sure it contains no values from test A. Give both readable files and the run evidence to the peer team.

### Progressive hints

<details><summary>Hint 1: Verify the source artifact</summary>

Check what the creation action actually saved before inspecting the converter. The converter acts on a file, not just the text visible in Compose.

</details>

<details><summary>Hint 2: Compare content and metadata</summary>

The source contains self-contained HTML. Compare the created file’s metadata with the supported source format in the connector documentation.

</details>

<details><summary>Hint 3: Distinguish reference from content</summary>

Conversion uses the created file’s identifier. Saving the result uses the conversion’s binary output. Confirm the first divergence before modifying either mapping.

</details>

### Checkpoint

Two saved PDFs open and display the correct request and amount for their own tests. If the route has not been rehearsed or is unavailable, report an evidence review with conversion still unverified.

## Reset

Wait for active runs to finish. Use new generated filenames on each retest. Remove only your pair’s synthetic source/PDF outputs during announced cleanup. Do not remove shared resources or earlier learner work.

Reference: [OneDrive for Business conversion actions and limitations](https://learn.microsoft.com/connectors/onedriveforbusiness/).
