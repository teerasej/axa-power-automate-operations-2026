import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'
import { exerciseMenu, exerciseSidebar } from './exercise-navigation'

export default withMermaid(defineConfig({
  title: 'Power Automate · Operations',
  description: 'Build email, routing and approval flows, add a reminder, then review and troubleshoot with generative AI',
  lang: 'en-US',
  base: '/axa-power-automate-operations-2026/',
  cleanUrls: true,
  lastUpdated: false,
  // VitePress 1.x treats XLSX links as pages. Only these verified static files are exempt.
  ignoreDeadLinks: [/^\/downloads\/(?:list-comparison|due-date-tracker|email-document-register)(?:-reset|-expected-results)?\.xlsx$/, /^\/downloads\/operations-request-tracker(?:-reset)?\.xlsx$/, /^\/downloads\/document-approval-(?:tracker(?:-reset)?|expected-results)\.xlsx$/],
  themeConfig: {
    logo: '/images/workflow-mark.svg',
    siteTitle: 'Power Automate · Operations',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Exercises', items: exerciseMenu },
      { text: 'Optional exercises', link: '/optional/' },
      { text: 'Generative AI guidebook', link: '/guidebook/' },
      { text: 'Downloads', link: '/resources/downloads' }
    ],
    sidebar: exerciseSidebar,
    search: { provider: 'local' },
    outline: { label: 'On this page', level: [2, 3] },
    docFooter: { prev: 'Previous', next: 'Next' },
    sidebarMenuLabel: 'Exercises & practices',
    returnToTopLabel: 'Back to top',
    darkModeSwitchLabel: 'Appearance',
    lightModeSwitchTitle: 'Switch to light theme',
    darkModeSwitchTitle: 'Switch to dark theme',
    footer: {
      message: 'Use synthetic training data · Verify actual results before applying changes',
      copyright: '<span class="publishing-notice">© 2026 Teerasej Jiraphatchandej. All rights reserved.</span><span class="publishing-links"><a href="mailto:teerasej@nextflow.in.th">Email me</a><span aria-hidden="true">·</span><a href="https://www.facebook.com/teerasej" target="_blank" rel="noopener noreferrer">Facebook</a><span aria-hidden="true">·</span><a href="https://www.youtube.com/teerasej" target="_blank" rel="noopener noreferrer">YouTube</a></span>'
    }
  }
}))
