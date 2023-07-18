<script setup>
import { onMounted, ref, watch } from 'vue'
import { checkAvailability, isFormOpen } from '../composables/useForm.ts';
import SynthFav from './SynthFav.vue';

const props = defineProps({
  disabled: Boolean,
  title: String,
  description: String,
  img: String,
  url: String
})

const online = ref(null)

watch(checkAvailability, async check => {
  try {
    const response = await fetch('https://corsproxy.io/?' + props.url);
    if (response.status == 200) {
      online.value = true
    } else {
      online.value = false
    }
  } catch (e) {
    online.value = false
  }
})



</script>

<template lang='pug'>
component.card.p-0.bg-light-300.shadow-lg.flex.flex-col.dark-bg-dark-300.-hover-translate-y-2px.transition.hover-shadow-xl.rounded-xl.overflow-hidden.relative(
  style="flex: 1 1 240px; color: #333"
  :href="url"
  :is="!disabled ? 'a' : 'button'"
  target="_blank"
  @click="disabled ? isFormOpen = true : 0"
  )
  img(:src="`/img/${img}.jpg`")
  .flex-1
  .p-4.flex.items-center.justify-between
    .text-md.font-bold.flex.items-center.gap-2 {{ title }} 
      .w-2.h-2.rounded-full.shadow-inset(
        :class="{'bg-green-500': online === true, 'bg-red-500':online === false}"
        )
      //- SynthFav.scale-70.absolute.bottom-2.right-2(:url="url")
</template>

<style scoped lang="postcss">
button.card {
  @apply cursor-not-allowed !dark-text-light-900/50 !text-dark-900/50;
}

button.card img {
  @apply opacity-30;
}
</style>