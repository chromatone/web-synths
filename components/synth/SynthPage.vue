<script setup>
import { ref } from 'vue';

const props = defineProps({
  title: { type: String, default: '' },
  description: { type: String, default: '' },
  author: { type: String, default: '' },
  author_link: { type: String, default: '' },
  cover: { type: String, default: '' },
  slug: { type: String, default: '' },
  url: { type: String, default: '' },
  tags: { type: Array, default: [] },
  archive: { type: Boolean, default: false },
  archive_link: { type: String, default: '' },
})

const iframeLoaded = ref(false)

function iFrameLoad(e) {
  if (e.timeStamp < 5000) {
    iframeLoaded.value = true;
  }
}
</script>

<template lang='pug'>
.flex.flex-col.gap-4.bg-light-300.dark-bg-dark-300.rounded-lg.shadow-xl.overflow-hidden.mx-auto
  .p-0.h-70svh.bg-cover.bg-center(
    :style="{backgroundImage: `url(/cover/${slug}.webp)`}"
    )
    iframe.w-full.h-70svh.bg-light-100.dark-bg-dark-800(
      allow="midi *"
      v-show="iframeLoaded"
      @load="iFrameLoad"
      :title="title" 
      :src="archive ? archive_link : url"
      )

  .flex.flex-col.p-4.gap-1.bottom-0.bg-light-100.dark-bg-dark-200.w-full.max-w-180.mx-auto.mb-12
    .text-xl.font-bold.flex.items-center.gap-4 {{ title }} 
      component.text-lg.font-300(
        v-if="author"
        target="_blank"
        :is="author_link ? 'a' : 'div'"
          :href="author_link") by {{ author }}
    a.my-2.font-mono.text-sm(
      :href="url" 
      target="_blank"
      ) {{ url }}
    .flex-1.flex.items-end.flex.flex-wrap.gap-2(v-if="tags?.length>0")
      .px-2.py-1.text-sm.bg-light-800.dark-bg-dark-500.rounded-lg(v-for="tag in tags" :key="tag") {{ tag }}
    .p-0(v-if="description") {{ description }}

    .mt-4
      slot
</template>

<style scoped lang="postcss"></style>