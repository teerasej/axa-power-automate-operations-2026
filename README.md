# Power Automate exercises for Operations

Learner site: https://teerasej.github.io/axa-power-automate-operations-2026/

English learner instructions, synthetic practice files and generative AI assistance outside the flow. The classroom ZIP contains 10 sample files. The optional after-class package adds three independent exercises and a separate 12-file optional ZIP.

## Maintenance

- Canonical learner source: docs/
- Site configuration: docs/.vitepress/config.mts
- Downloads: docs/public/downloads/
- Project Refinement guide: docs/project-refinement.md
- Use npm ci, then npm run docs:dev for local development.
- Use npm run docs:build and npm run docs:preview for production checks.
- The build runs npm run samples:pack to recreate learner-materials.zip and its checksum manifest. The ZIP contains only the 10 practice files listed on the downloads page, directly at its root. Update the explicit allowlist in scripts/package-samples.mjs when the approved sample list changes. Requires Node.js 24, matching the Pages workflow.
- The build also runs npm run optional:samples:pack to recreate optional-sample-files.zip and its separate manifest. Its explicit 12-file allowlist must match the optional hub. Both ZIPs contain samples only at the archive root; no headers, Markdown pages, manifests or other archives.
- GitHub Pages deploys docs/.vitepress/dist from main using .github/workflows/deploy.yml.

Keep facilitator guidance, private environment details, speaker notes, presentation sources and build artifacts, learner assessments and submissions outside this repository. The approved public presentation artifacts are the teaching PDF at `docs/public/downloads/AXA-Batch2-Day1-Training.pdf` and the learner-only Project Refinement template at `docs/public/downloads/AXA-Batch2-Project-Refinement-Student-v4.pptx`. The private instructor Project Refinement deck remains outside this repository. Section 2 uses a prepared Form/workbook, one Condition and two self-addressed email routes. Section 3 uses one manual request title: complete the approval and Excel decision record first, then add one reminder based on a fresh status lookup. Each learner uses a separate workbook and their own training mailbox. See [Exercise 3](docs/exercises/03-document-approval.md), [Project Refinement](docs/project-refinement.md) and [downloads](docs/resources/downloads.md).

[Optional A–C](docs/optional/index.md) cover list comparison, task-date reminders and email attachment registration. All setup lives inside Practice 1 of each exercise. They have no deadlines or submissions and do not change the teaching-day agenda. Build success does not establish tenant execution or independent learner readiness.
