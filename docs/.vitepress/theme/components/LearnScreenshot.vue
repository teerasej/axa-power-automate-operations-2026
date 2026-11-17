<script setup lang="ts">
import { withBase } from 'vitepress'

const images = {
  folder: { file: 'onedrive-folder.png', width: 221, height: 137, alt: 'OneDrive Add New menu with Folder.', caption: 'Choose Folder. Your menu may say Create or upload instead of Add New.', source: 'https://learn.microsoft.com/azure/ai-services/document-intelligence/tutorial/logic-apps#create-a-onedrive-folder' },
  'folder-name': { file: 'create-folder.png', width: 371, height: 289, alt: 'Create a folder dialog with Name and Create.', caption: 'Enter the folder name from the step above, not the example name in this image.', source: 'https://learn.microsoft.com/azure/ai-services/document-intelligence/tutorial/logic-apps#create-a-onedrive-folder' },
  import: { file: 'import-solution.png', width: 408, height: 230, alt: 'Import a solution dialog with Browse and Next.', caption: 'Browse selects the inner START ZIP. Use the filename in your step, not the example shown.', source: 'https://learn.microsoft.com/power-automate/import-flow-solution' },
  script: { file: 'code-editor.png', width: 1246, height: 958, alt: 'Office Scripts code editor with the script name, code and save status.', caption: 'This identifies the code editor only. Replace its sample code with the supplied script below.', source: 'https://learn.microsoft.com/office/dev/scripts/overview/excel#code-editor' }
} as const
const props = defineProps<{ image: keyof typeof images }>()
</script>

<template>
  <figure class="learn-screenshot">
    <a :href="withBase('/day-2/images/learn/' + images[props.image].file)" target="_blank" rel="noopener" :aria-label="'Open full-size screenshot: ' + images[props.image].alt">
      <img :src="withBase('/day-2/images/learn/' + images[props.image].file)" :alt="images[props.image].alt" :width="images[props.image].width" :height="images[props.image].height" loading="lazy" decoding="async">
    </a>
    <figcaption>{{ images[props.image].caption }} <a :href="images[props.image].source" target="_blank" rel="noopener">Microsoft Learn screenshot</a> · Select image to enlarge.</figcaption>
  </figure>
</template>

<style scoped>
.learn-screenshot { margin: 16px 0 24px; }
.learn-screenshot img { display: block; max-width: 100%; width: auto; height: auto; border: 1px solid var(--vp-c-divider); border-radius: 8px; }
.learn-screenshot figcaption { margin-top: 8px; color: var(--vp-c-text-2); font-size: 13px; line-height: 1.6; }
.learn-screenshot a:focus-visible { outline: 3px solid var(--vp-c-brand-1); outline-offset: 4px; }
</style>
