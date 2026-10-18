# Power Automate exercises for Operations

Learner site: https://teerasej.github.io/axa-power-automate-operations-2026/

English learner instructions, synthetic practice files and ChatGPT assistance outside the flow. This English learner release includes illustrated exercises and a ZIP containing all 10 sample files.

## Maintenance

- Canonical learner source: docs/
- Site configuration: docs/.vitepress/config.mts
- Downloads: docs/public/downloads/
- Use npm ci, then npm run docs:dev for local development.
- Use npm run docs:build and npm run docs:preview for production checks.
- The build runs npm run samples:pack to recreate learner-materials.zip and its checksum manifest. The ZIP contains only the 10 practice files listed on the downloads page, directly at its root. Update the explicit allowlist in scripts/package-samples.mjs when the approved sample list changes. Requires Node.js 24, matching the Pages workflow.
- GitHub Pages deploys docs/.vitepress/dist from main using .github/workflows/deploy.yml.

Keep facilitator guidance, private environment details, editable presentations, speaker notes, presentation sources and build artifacts, learner assessments and submissions outside this repository. The approved teaching presentation PDF is the only public presentation artifact and lives at `docs/public/downloads/AXA-Batch2-Day1-Training.pdf`. Section 2 uses a prepared Form/workbook, one Condition and two self-addressed email routes. Section 3 uses one manual request title: complete the approval and Excel decision record first, then add one reminder based on a fresh status lookup. Each learner uses a separate workbook and their own training mailbox. See [Exercise 3](docs/exercises/03-document-approval.md) and [downloads](docs/resources/downloads.md).
