<script setup lang="ts">
import { ref, watch } from 'vue'
import { withBase } from 'vitepress'
import LearnScreenshot from './LearnScreenshot.vue'

const starters = {
  Core01: ['RepairRelay', 'RepairRelay'],
  Core02: ['DocumentHandoff', 'DocumentHandoff'],
  Core03: ['MatchCloseRemind', 'MatchCloseRemind'],
  R1: ['R01OfficeScript', 'R01-OfficeScript'],
  R2: ['R02FileSequencing', 'R02-FileSequencing'],
  R3: ['R03HtmlImage', 'R03-HtmlImage'],
  R4: ['R04ApprovalGate', 'R04-ApprovalGate'],
  R5: ['R05PdfGeneration', 'R05-PdfGeneration']
} as const
const props = defineProps<{ exercise: keyof typeof starters }>()
const selected = ref(0)
watch(() => props.exercise, () => { selected.value = 0 })
const labels = ['Use my prepared flow', 'Import starter ZIP']
const baseId = () => `starter-${props.exercise}`
const filename = () => `B2D2V2${props.exercise.startsWith('Core') ? props.exercise : ''}${starters[props.exercise][0]}START_1_0_0_1.zip`
const flowName = () => `B2D2-v2-${props.exercise.startsWith('Core') ? props.exercise + '-' : ''}${starters[props.exercise][1]}-START`
function navigate(event: KeyboardEvent) {
  const next = event.key === 'Home' ? 0 : event.key === 'End' ? 1 : event.key === 'ArrowRight' || event.key === 'ArrowLeft' ? 1 - selected.value : null
  if (next === null) return
  event.preventDefault()
  selected.value = next
  ;(event.currentTarget as HTMLElement).querySelectorAll<HTMLButtonElement>('[role="tab"]')[next].focus()
}
</script>

<template>
  <section class="starter-setup" aria-label="Open your personal starter flow">
    <p><strong>Follow the tab announced by your instructor. Complete only one route.</strong> Select the approved environment in Power Automate first. Being in the same environment does not give you access to another person's flow.</p>
    <div class="starter-tabs" role="tablist" aria-label="Starter flow route" @keydown="navigate">
      <button v-for="(label, index) in labels" :id="`${baseId()}-tab-${index}`" :key="label" type="button" role="tab" :aria-selected="selected === index" :aria-controls="`${baseId()}-panel-${index}`" :tabindex="selected === index ? 0 : -1" @click="selected = index">{{ label }}</button>
    </div>
    <div v-for="(label, index) in labels" :id="`${baseId()}-panel-${index}`" :key="index" role="tabpanel" :aria-labelledby="`${baseId()}-tab-${index}`" :hidden="selected !== index" tabindex="0" class="starter-panel">
      <p class="print-route"><strong>{{ label }}</strong></p>
      <template v-if="index === 0">
        <ol>
          <li>Open the personal flow link supplied by the organiser for this exercise.</li>
          <li>Check its name matches the name assigned to your account or pair. The organiser has already made this personal copy.</li>
          <li>Check that your training account is listed under <strong>Co-owner</strong> or <strong>Owners</strong>. Select <strong>Edit</strong>.</li>
        </ol>
        <p><strong>Cannot open or edit it?</strong> Stop and show the organiser the message. Do not edit a baseline or create another copy as a workaround.</p>
      </template>
      <template v-else>
        <ol>
          <li>Open <a :href="withBase('/day-2/day-2-workshop.zip')" download>Download complete Day 2 workshop (ZIP)</a>. Find <strong>day-2-workshop.zip</strong> in Downloads.</li>
          <li>Extract the outer ZIP: right-click → <strong>Extract All</strong> on Windows, or double-click on Mac.</li>
          <li>Open <strong>starters → {{ props.exercise }}</strong>. Keep this inner ZIP zipped:<br><code class="package-name">{{ filename() }}</code></li>
          <li>In Power Automate, select <strong>Solutions → Import → Browse</strong>. Select that inner ZIP, then <strong>Open → Next</strong>.
            <LearnScreenshot image="import" />
          </li>
          <li>Check the solution is the assigned START. If it already exists or the screen proposes an update, <strong>stop and ask the organiser</strong>.</li>
          <li v-if="props.exercise === 'R4'">No service connections are needed for this starter. Select <strong>Import</strong>.</li>
          <li v-else>If connections are requested, select your own authorised account for each service. Complete any sign-in, then select <strong>Import</strong>.</li>
          <li>Wait for completion. Open the imported solution, then <strong>{{ flowName() }}</strong>. Check your account is listed as an owner and select <strong>Edit</strong>.</li>
        </ol>
        <p><strong>Use only an approved separate target.</strong> The organiser confirms it before import. Re-importing a solution in one environment can update existing flows. Neither renaming the ZIP nor hiding another user's flow creates a separate copy. These ZIPs do not use <strong>Import Package (Legacy)</strong>.</p>
      </template>
    </div>
    <p><strong>Continue below:</strong> <template v-if="props.exercise === 'R4'">confirm the built-in settings and turn your personal flow on.</template><template v-else>check your own connections and exercise settings before turning the flow on.</template></p>
  </section>
</template>

<style scoped>
.starter-setup { margin: 16px 0 24px; }
.starter-tabs { display: flex; gap: 4px; border-bottom: 1px solid var(--vp-c-divider); }
.starter-tabs button { flex: 1; padding: 12px 10px; font-size: 14px; font-weight: 600; line-height: 1.5; border-bottom: 3px solid transparent; }
.starter-tabs button[aria-selected="true"] { color: var(--vp-c-brand-1); border-bottom-color: var(--vp-c-brand-1); background: var(--vp-c-brand-soft); }
.starter-panel { padding: 4px 16px; border: 1px solid var(--vp-c-divider); border-top: 0; border-radius: 0 0 8px 8px; }
.starter-panel[hidden] { display: none; }
.starter-tabs button:focus-visible, .starter-panel:focus-visible { outline: 3px solid var(--vp-c-brand-1); outline-offset: 3px; }
.package-name { display: inline-block; max-width: 100%; white-space: normal; overflow-wrap: anywhere; }
.print-route { display: none; }
@media print { .starter-tabs { display: none; } .starter-panel[hidden] { display: block !important; } .starter-panel { border: 1px solid #aaa; margin-bottom: 12px; } .print-route { display: block; } }
</style>
