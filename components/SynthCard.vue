<script setup>
import { onMounted, ref } from 'vue'

const props = defineProps({
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
a.p-0.bg-light-300.shadow-lg.flex.flex-col.dark-bg-dark-300.-hover-translate-y-2px.transition.hover-shadow-xl.rounded-xl.overflow-hidden(
  style="flex: 1 1 240px; color: #333"
  :href="url"
  target="_blank"
  ) 
  img(:src="`/img/${img}.jpg`")
  .flex-1
  .p-4.flex.items-center
    .text-md.font-bold {{ title }} 
    .flex-1 
    .w-2.h-2.rounded-full.shadow-inset(
      :class="{'bg-green-500': online === true, 'bg-light-900':online === false}"
    )
</template>