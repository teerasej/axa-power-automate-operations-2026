# แบบฝึกหัด Power Automate สำหรับทีม Operations

Learner site: https://teerasej.github.io/axa-power-automate-operations-2026/

เอกสารผู้เรียนภาษาไทย เก็บ product names, UI labels และ column names เป็น English ทุกตัวอย่างเป็นข้อมูลสมมติ ใช้ฝึก cloud flows และ ChatGPT เป็นผู้ช่วยคิดนอก flow

## ดูแลเว็บไซต์

- Learner source: `docs/`
- Site configuration: `docs/.vitepress/config.mts`
- Downloadable files: `docs/public/downloads/`
- Run `npm ci`, then `npm run docs:dev` for local development.
- Run `npm run docs:build` and `npm run docs:preview` to check production output.
- GitHub Pages deploys `docs/.vitepress/dist` from `main` through `.github/workflows/deploy.yml`.

เผยแพร่เฉพาะ learner content และ synthetic files ไม่เก็บ facilitator guidelines, environment preparation, presentation outlines, tenant information หรือ participant submissions ใน repository นี้
