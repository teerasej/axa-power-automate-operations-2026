import type { DefaultTheme } from 'vitepress'

export const day2Exercises = [
  { number: 1, title: 'Repair Relay', path: '/day-2/exercises/01-repair-relay', practices: [
    { title: 'Trace an incorrect result', anchor: 'practice-1-trace-an-incorrect-result' },
    { title: 'Repair and verify both routes', anchor: 'practice-2-repair-and-verify-both-routes' }
  ] },
  { number: 2, title: 'Reliable Document Handoff', path: '/day-2/exercises/02-document-handoff', practices: [
    { title: 'Retrieve the correct document', anchor: 'practice-1-retrieve-the-correct-document' },
    { title: 'Attach and verify readable content', anchor: 'practice-2-attach-and-verify-readable-content' }
  ] },
  { number: 3, title: 'Match, Close and Remind', path: '/day-2/exercises/03-match-close-remind', practices: [
    { title: 'Match responses to requests', anchor: 'practice-1-match-responses-to-requests' },
    { title: 'Select only due outstanding requests', anchor: 'practice-2-select-only-due-outstanding-requests' }
  ] },
  { number: 4, title: 'Flow Rescue Challenge', path: '/day-2/exercises/04-flow-rescue', practices: [
    { title: 'Repair one assigned Flow', anchor: 'practice-1-repair-one-assigned-flow' },
    { title: 'Verify another team’s test', anchor: 'practice-2-verify-another-teams-test' }
  ] }
]

export const day2Challenges = [
  { id: 'R1', title: 'Office Script result', path: '/day-2/challenges/01-office-script' },
  { id: 'R2', title: 'File dependency order', path: '/day-2/challenges/02-file-sequencing' },
  { id: 'R3', title: 'Email image resource', path: '/day-2/challenges/03-html-image' },
  { id: 'R4', title: 'Decision gate simulation', path: '/day-2/challenges/04-approval-gate' },
  { id: 'R5', title: 'PDF output', path: '/day-2/challenges/05-pdf-generation' }
]

export const day2Menu = day2Exercises.map(e => ({ text: `${e.number}. ${e.title}`, link: e.path }))

function sidebarFor(current?: number): DefaultTheme.SidebarItem[] {
  return [
    { text: 'Day 2', items: [
      { text: 'Overview and timetable', link: '/day-2/' },
      { text: 'Preparation and starter Flows', link: '/day-2/preparation' }
    ] },
    { text: 'Exercises', items: day2Exercises.map(e => ({
      text: `${e.number}. ${e.title}`, link: e.path, collapsed: current !== e.number,
      items: e.practices.map((p, i) => ({ text: `${i + 1}. ${p.title}`, link: `${e.path}#${p.anchor}` }))
    })) },
    { text: 'Rescue test cards', collapsed: current !== 4, items: day2Challenges.map(e => ({ text: `${e.id}. ${e.title}`, link: e.path })) },
    { text: 'Day 2 resources', items: [
      { text: 'Downloads and reset copies', link: '/day-2/downloads' },
      { text: 'Microsoft Learn references', link: '/day-2/references' },
      { text: 'Return to Day 1', link: '/' }
    ] }
  ]
}

export const day2Sidebar: DefaultTheme.Sidebar = {
  '/day-2/': sidebarFor(),
  ...Object.fromEntries(day2Exercises.map(e => [e.path, sidebarFor(e.number)])),
  ...Object.fromEntries(day2Challenges.map(e => [e.path, sidebarFor(4)]))
}
