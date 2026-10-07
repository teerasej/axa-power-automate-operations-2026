import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

export default withMermaid(defineConfig({
  title: 'Power Automate · Operations',
  description: 'ฝึกสร้าง flow ทีละขั้น รับคำขอผ่าน Forms บันทึก Excel และใช้ ChatGPT ช่วยคิดและตรวจข้อผิดพลาด',
  lang: 'th-TH',
  base: '/axa-power-automate-operations-2026/',
  cleanUrls: true,
  lastUpdated: false,
  // VitePress 1.x treats XLSX links as pages. Only these verified static files are exempt.
  ignoreDeadLinks: [/^\/downloads\/operations-request-tracker(?:-reset)?\.xlsx$/],
  themeConfig: {
    logo: '/images/workflow-mark.svg',
    siteTitle: 'Power Automate · Operations',
    nav: [
      { text: 'เริ่มต้น', link: '/' },
      { text: 'แบบฝึกหัด', link: '/exercises/01-foundation-email' },
      { text: 'คู่มือ ChatGPT', link: '/guidebook/' },
      { text: 'ดาวน์โหลด', link: '/resources/downloads' }
    ],
    sidebar: [
      { text: 'เริ่มฝึก', items: [
        { text: 'ภาพรวม', link: '/' },
        { text: 'แนวคิดพื้นฐาน', link: '/resources/foundations' }
      ] },
      { text: 'แบบฝึกหัด', items: [
        { text: '1 · Email flow แรก', link: '/exercises/01-foundation-email' },
        { text: '2 · Forms → Excel', link: '/exercises/02-forms-to-excel' },
        { text: '4 · ChatGPT และ error repair', link: '/exercises/04-chatgpt-design-and-troubleshooting' }
      ] },
      { text: 'คู่มือและไฟล์', items: [
        { text: 'คู่มือ ChatGPT', link: '/guidebook/' },
        { text: 'ตัวอย่างประกอบเมื่อเปิด ChatGPT ไม่ได้', link: '/guidebook/saved-examples' },
        { text: 'ข้อมูลทดสอบ', link: '/resources/sample-inputs' },
        { text: 'ดาวน์โหลดและ reset', link: '/resources/downloads' }
      ] }
    ],
    search: { provider: 'local', options: { locales: { root: { translations: {
      button: { buttonText: 'ค้นหา', buttonAriaLabel: 'ค้นหาเอกสาร' },
      modal: { noResultsText: 'ไม่พบผลลัพธ์', resetButtonTitle: 'ล้างคำค้น', footer: { selectText: 'เลือก', navigateText: 'เลื่อน', closeText: 'ปิด' } }
    } } } } },
    outline: { label: 'ในหน้านี้', level: [2, 3] },
    docFooter: { prev: 'ย้อนกลับ', next: 'ถัดไป' },
    sidebarMenuLabel: 'สารบัญ',
    returnToTopLabel: 'กลับด้านบน',
    darkModeSwitchLabel: 'รูปแบบสี',
    lightModeSwitchTitle: 'ใช้สีสว่าง',
    darkModeSwitchTitle: 'ใช้สีมืด',
    footer: { message: 'ใช้ข้อมูลสมมติในการฝึก · ตรวจผลจริงทุกครั้งก่อนนำไปใช้' }
  }
}))
