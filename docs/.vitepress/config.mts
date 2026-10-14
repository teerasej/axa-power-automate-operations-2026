import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

export default withMermaid(defineConfig({
  title: 'Power Automate · Operations',
  description: 'Build email and request-routing flows, then review and troubleshoot with ChatGPT',
  lang: 'en-US',
  base: '/axa-power-automate-operations-2026/',
  cleanUrls: true,
  lastUpdated: false,
  // VitePress 1.x treats XLSX links as pages. Only these verified static files are exempt.
  ignoreDeadLinks: [/^\/downloads\/operations-request-tracker(?:-reset)?\.xlsx$/],
  themeConfig: {
    logo: '/images/workflow-mark.svg',
    siteTitle: 'Power Automate · Operations',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Exercises', link: '/exercises/01-foundation-email' },
      { text: 'ChatGPT guidebook', link: '/guidebook/' },
      { text: 'Downloads', link: '/resources/downloads' }
    ],
    sidebar: [
      { text: 'Start learning', items: [
        { text: 'Overview', link: '/' },
        { text: 'Flow foundations', link: '/resources/foundations' }
      ] },
      { text: 'Exercises', items: [
        { text: '1 · Your first email flow', link: '/exercises/01-foundation-email' },
        { text: '2 · Smart Request Intake and Routing', link: '/exercises/02-forms-to-excel' },
        { text: '4 · ChatGPT and error repair', link: '/exercises/04-chatgpt-design-and-troubleshooting' }
      ] },
      { text: 'Guides and files', items: [
        { text: 'ChatGPT guidebook', link: '/guidebook/' },
        { text: 'Prepared review examples', link: '/guidebook/saved-examples' },
        { text: 'Prepare for Section 2', link: '/resources/section-2-preparation' },
        { text: 'Test inputs', link: '/resources/sample-inputs' },
        { text: 'Downloads and reset', link: '/resources/downloads' }
      ] }
    ],
    search: { provider: 'local' },
    outline: { label: 'On this page', level: [2, 3] },
    docFooter: { prev: 'Previous', next: 'Next' },
    sidebarMenuLabel: 'Menu',
    returnToTopLabel: 'Back to top',
    darkModeSwitchLabel: 'Appearance',
    lightModeSwitchTitle: 'Switch to light theme',
    darkModeSwitchTitle: 'Switch to dark theme',
    footer: { message: 'Use synthetic training data · Verify actual results before applying changes' }
  }
}))
