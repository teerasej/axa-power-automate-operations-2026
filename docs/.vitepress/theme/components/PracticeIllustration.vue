<script setup lang="ts">
import { computed } from 'vue'
import { withBase } from 'vitepress'

const props = withDefaults(defineProps<{ src: string; alt: string; width?: number; height?: number }>(), { width: 1536, height: 512 })
const source = computed(() => withBase(props.src))
const sources = computed(() => `${withBase(props.src.replace(/\.webp$/, '-768.webp'))} 768w, ${source.value} 1536w`)
</script>

<template>
  <figure class="practice-illustration">
    <img
      :src="source"
      :srcset="sources"
      sizes="(min-width: 768px) 688px, calc(100vw - 48px)"
      :alt="alt"
      :width="props.width"
      :height="props.height"
      :style="{ aspectRatio: `${props.width} / ${props.height}` }"
      loading="lazy"
      decoding="async"
    >
  </figure>
</template>

<style scoped>
.practice-illustration {
  margin: 12px 0 24px;
}
.practice-illustration img {
  display: block;
  width: 100%;
  height: auto;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  object-fit: contain;
  background: #faf8f3;
}
</style>
