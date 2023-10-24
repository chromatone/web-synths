<script setup>
const props = defineProps({
  title: { type: String, default: '' },
  description: { type: String, default: '' },
  author: { type: String, default: '' },
  author_link: { type: String, default: '' },
  cover: { type: String, default: '' },
  slug: { type: String, default: '' },
  url: { type: String, default: '' },
  tags: { type: Array, default: [] }
})
</script>

<template lang='pug'>
.flex.flex-col.gap-4.bg-light-300.dark-bg-dark-400.rounded-lg.overflow-hidden
  .p-0
    img(:src="`/cover/${slug}.webp`")
  .flex.flex-col.p-4.gap-4
    .text-4xl.font-bold {{ title }}
    component.text-xl(
      v-if="author"
      :is="author_link ? 'a' : 'div'"
        :href="author_link") by {{ author }}
    a(
      :href="url" 
      target="_blank"
      ) {{ url }}
    .flex-1.flex.items-end.flex.flex-wrap.gap-2(v-if="tags?.length>0")
      .px-2.py-1.text-sm.bg-light-800.dark-bg-dark-500.rounded-lg(v-for="tag in tags" :key="tag") {{ tag }}
    .p-0(v-if="description") {{ description }}
  .p-0
    slot
</template>