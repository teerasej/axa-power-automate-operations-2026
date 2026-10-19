import type { DefaultTheme } from 'vitepress'

// Shared by the exercise dropdown and native sidebar. Keep legacy anchors intact.
export const exercises = [
  {
    "number": 1,
    "title": "Your first email flow",
    "path": "/exercises/01-foundation-email",
    "practices": [
      {
        "number": 1,
        "title": "Create a trigger with a task input",
        "anchor": "practice-1-create-a-trigger-with-a-task-input"
      },
      {
        "number": 2,
        "title": "Pass the input into an email",
        "anchor": "practice-2-pass-the-input-into-an-email"
      },
      {
        "number": 3,
        "title": "Verify two different runs",
        "anchor": "practice-3-verify-two-different-runs"
      }
    ]
  },
  {
    "number": 2,
    "title": "Smart Request Intake and Routing",
    "path": "/exercises/02-forms-to-excel",
    "practices": [
      {
        "number": 1,
        "title": "Prepare your Excel workbook",
        "anchor": "practice-1-prepare-your-excel-workbook"
      },
      {
        "number": 2,
        "title": "Create your request Form",
        "anchor": "practice-1-create-your-request-form"
      },
      {
        "number": 3,
        "title": "Retrieve a Form response",
        "anchor": "practice-1-retrieve-a-form-response"
      },
      {
        "number": 4,
        "title": "Record the request before routing",
        "anchor": "practice-2-record-the-request-before-routing"
      },
      {
        "number": 5,
        "title": "Choose one of two routes",
        "anchor": "practice-3-choose-one-of-two-routes"
      },
      {
        "number": 6,
        "title": "Verify both routes",
        "anchor": "practice-4-verify-both-routes"
      }
    ]
  },
  {
    "number": 3,
    "title": "Approval and one reminder",
    "path": "/exercises/03-document-approval",
    "practices": [
      {
        "number": 1,
        "title": "Prepare your approval tracker",
        "anchor": "practice-1-prepare-your-approval-tracker"
      },
      {
        "number": 2,
        "title": "Create one identifiable approval",
        "anchor": "practice-1-—-create-one-identifiable-approval"
      },
      {
        "number": 3,
        "title": "Record and wait for the same request",
        "anchor": "practice-2-—-record-and-wait-for-the-same-request"
      },
      {
        "number": 4,
        "title": "Record and communicate the decision",
        "anchor": "practice-3-—-record-and-communicate-the-decision"
      },
      {
        "number": 5,
        "title": "Prove Part 1 before improving it",
        "anchor": "practice-4-prove-part-1-before-improving-it"
      },
      {
        "number": 6,
        "title": "Check the recorded status before reminding",
        "anchor": "practice-5-—-check-the-recorded-status-before-reminding"
      },
      {
        "number": 7,
        "title": "Send and verify one reminder",
        "anchor": "practice-6-—-send-and-verify-one-reminder"
      }
    ]
  },
  {
    "number": 4,
    "title": "Generative AI and error repair",
    "path": "/exercises/04-chatgpt-design-and-troubleshooting",
    "practices": [
      {
        "number": 1,
        "title": "Review a flow design",
        "anchor": "practice-1-review-the-design-from-an-image"
      },
      {
        "number": 2,
        "title": "Capture evidence of a conversion error",
        "anchor": "practice-2-capture-evidence-of-a-conversion-error"
      },
      {
        "number": 3,
        "title": "Diagnose the error and verify a repair",
        "anchor": "practice-3-diagnose-the-error-and-verify-a-repair"
      }
    ]
  }
]

export const optionalExercises = [
  {
    "id": "A",
    "title": "Compare Two Lists and Find Missing Records",
    "path": "/optional/compare-lists",
    "practices": [
      {
        "number": 1,
        "title": "Prepare your comparison workbook",
        "anchor": "practice-1-prepare-your-comparison-workbook"
      },
      {
        "number": 2,
        "title": "Read both lists",
        "anchor": "practice-2-read-both-lists"
      },
      {
        "number": 3,
        "title": "Find matching records",
        "anchor": "practice-3-find-matching-records"
      },
      {
        "number": 4,
        "title": "Record Matched or Missing",
        "anchor": "practice-4-record-matched-or-missing"
      },
      {
        "number": 5,
        "title": "Verify results and reset",
        "anchor": "practice-5-verify-results-and-reset"
      }
    ]
  },
  {
    "id": "B",
    "title": "Due-Date Reminders for Pending Tasks",
    "path": "/optional/due-date-reminders",
    "practices": [
      {
        "number": 1,
        "title": "Prepare your task tracker and dates",
        "anchor": "practice-1-prepare-your-task-tracker-and-dates"
      },
      {
        "number": 2,
        "title": "Create the scheduled flow",
        "anchor": "practice-2-create-the-scheduled-flow"
      },
      {
        "number": 3,
        "title": "Filter tasks that need a reminder",
        "anchor": "practice-3-filter-tasks-that-need-a-reminder"
      },
      {
        "number": 4,
        "title": "Compose the reminder email",
        "anchor": "practice-4-compose-the-reminder-email"
      },
      {
        "number": 5,
        "title": "Verify results and turn off the flow",
        "anchor": "practice-5-verify-results-and-turn-off-the-flow"
      }
    ]
  },
  {
    "id": "C",
    "title": "Email-to-Document Register",
    "path": "/optional/email-document-register",
    "practices": [
      {
        "number": 1,
        "title": "Prepare your files, folder and register",
        "anchor": "practice-1-prepare-your-files-folder-and-register"
      },
      {
        "number": 2,
        "title": "Configure the training-email trigger",
        "anchor": "practice-2-configure-the-training-email-trigger"
      },
      {
        "number": 3,
        "title": "Retrieve the attachment",
        "anchor": "practice-3-retrieve-the-attachment"
      },
      {
        "number": 4,
        "title": "Save the PDF",
        "anchor": "practice-4-save-the-pdf"
      },
      {
        "number": 5,
        "title": "Record its saved location",
        "anchor": "practice-5-record-its-saved-location"
      },
      {
        "number": 6,
        "title": "Verify results and clean up",
        "anchor": "practice-6-verify-results-and-clean-up"
      }
    ]
  }
]

export const exerciseMenu = exercises.map(e => ({ text: `${e.number} · ${e.title}`, link: e.path }))

function sidebarFor(current?: number | string): DefaultTheme.SidebarItem[] {
  return [
    { text: 'Start learning', items: [
      { text: 'Overview', link: '/' },
      { text: 'Flow foundations', link: '/resources/foundations' }
    ] },
    { text: 'Exercises', items: exercises.map(e => ({
      text: `${e.number} · ${e.title}`, link: e.path,
      collapsed: e.number !== current,
      items: e.practices.map(p => ({ text: `${p.number}. ${p.title}`, link: `${e.path}#${p.anchor}` }))
    })) },
    { text: 'Optional exercises', link: '/optional/', items: optionalExercises.map(e => ({
      text: `Optional ${e.id} · ${e.title}`, link: e.path, collapsed: e.id !== current,
      items: e.practices.map(p => ({text: `${p.number}. ${p.title}`, link: `${e.path}#${p.anchor}`}))
    })) },
    { text: 'Guides and files', items: [
      { text: 'Project refinement', link: '/project-refinement' },
      { text: 'Generative AI guidebook', link: '/guidebook/' },
      { text: 'Prepared review examples', link: '/guidebook/saved-examples' },
      { text: 'Prepare for Section 2', link: '/resources/section-2-preparation' },
      { text: 'Prepare for Section 3', link: '/resources/section-3-preparation' },
      { text: 'Test inputs', link: '/resources/sample-inputs' },
      { text: 'Downloads and reset', link: '/resources/downloads' }
    ] }
  ]
}

// A fresh native sidebar configuration on page changes resets the default groups.
export const exerciseSidebar: DefaultTheme.Sidebar = {
  '/': sidebarFor(),
  ...Object.fromEntries(exercises.map(e => [e.path, sidebarFor(e.number)])),
  ...Object.fromEntries(optionalExercises.map(e => [e.path, sidebarFor(e.id)]))
}
