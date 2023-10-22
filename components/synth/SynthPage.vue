<script setup>
const props = defineProps({
  title: { type: String, default: '' },
  description: { type: String, default: '' },
  author: { type: String, default: '' },
  author_link: { type: String, default: '' },
  cover: { type: String, default: '' },
  slug: { type: String, default: '' },
  url: { type: String, default: '' },
})
</script>

<template lang='pug'>
.flex.flex-col.gap-4
  .p-0
    img(:src="`/cover/${slug}.webp`")
  .flex.flex-col
    .text-4xl.font-bold {{ title }}
    component.text-xl(
      v-if="author"
      :is="author_link ? 'a' : 'div'"
        :href="author_link") by {{ author }}
    a(:href="url" target="_blank") {{ url }}
  .p-0(v-if="description") {{ description }}
  .p-0
    slot
</template>