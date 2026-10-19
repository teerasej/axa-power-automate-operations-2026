<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import DefaultTheme from 'vitepress/theme'

// VitePress closes its drawer on page changes, but not same-page anchor jumps.
// Use its existing backdrop control so native state and scroll locking stay in sync.
function closeAfterPracticeSelection(event: MouseEvent) {
  const target = event.target instanceof Element ? event.target : null
  const link = target?.closest<HTMLAnchorElement>('.VPSidebar.open a[href*="#"]')
  if (!link || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return
  document.querySelector<HTMLElement>('.VPBackdrop')?.click()
}
onMounted(() => document.addEventListener('click', closeAfterPracticeSelection, true))
onUnmounted(() => document.removeEventListener('click', closeAfterPracticeSelection, true))
</script>

<template><DefaultTheme.Layout /></template>
