import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import Layout from './Layout.vue'
import PracticeIllustration from './components/PracticeIllustration.vue'
import StarterFlowSetup from './components/StarterFlowSetup.vue'
import LearnScreenshot from './components/LearnScreenshot.vue'
import PersonalConnectionCheck from './components/PersonalConnectionCheck.vue'
import FlowReadyCheck from './components/FlowReadyCheck.vue'
import './custom.css'
export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('PracticeIllustration', PracticeIllustration)
    app.component('StarterFlowSetup', StarterFlowSetup)
    app.component('LearnScreenshot', LearnScreenshot)
    app.component('PersonalConnectionCheck', PersonalConnectionCheck)
    app.component('FlowReadyCheck', FlowReadyCheck)
  }
} satisfies Theme
