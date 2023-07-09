<script setup>
import { onMounted, ref } from 'vue'

const props = defineProps({
  disabled: Boolean,
  title: String,
  description: String,
  img: String,
  url: String
})

const online = ref(null)

// onMounted(async () => {
//   try {
//     const response = await fetch('https://corsproxy.io/?' + props.url);
//     if (response.status == 200) {
//       online.value = true
//     } else {
//       online.value = false
//     }
//   } catch (e) {
//     online.value = false
//   }

// })
</script>

<template lang='pug'>
component.p-0.bg-light-300.shadow-lg.flex.flex-col.dark-bg-dark-300.-hover-translate-y-2px.transition.hover-shadow-xl.rounded-xl.overflow-hidden.relative(
  style="flex: 1 1 240px; color: #333"
  :href="url"
  :is="!disabled ? 'a' : 'button'"
  target="_blank"
  )
  img(:src="`/img/${img}.jpg`")
  .flex-1
  .p-4.flex.items-center.justify-center
    .text-md.font-bold {{ title }} 
    .w-2.h-2.rounded-full.shadow-inset.absolute.right-4(
      :class="{'bg-green-500': online === true, 'bg-light-900':online === false}"
      )
</template>

<style scoped lang="postcss">
button {
  @apply cursor-not-allowed !dark-text-light-900/50 !text-dark-900/50;
}

button img {
  @apply opacity-30;
}
</style>