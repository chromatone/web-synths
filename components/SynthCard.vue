<script setup>
import { onMounted, ref, watch } from 'vue'
import { checkAvailability, isFormOpen } from '../composables/useForm.ts';
import { favourites } from '../composables/useFavourites.ts';



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

function toggleFav(url) {
  favourites.value[url] = !favourites.value[url]
  console.log(favourites.value)
}

</script>

<template lang='pug'>
component.p-0.bg-light-300.shadow-lg.flex.flex-col.dark-bg-dark-300.-hover-translate-y-2px.transition.hover-shadow-xl.rounded-xl.overflow-hidden.relative(
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
    button.scale-60(@click.stop.prevent="toggleFav(url)")
      svg(
        v-if="!favourites[url]"
        xmlns="http://www.w3.org/2000/svg", width="32", height="32", viewBox="0 0 32 32")
        path(d="M16 2.125l-.906 2.063l-3.25 7.28l-7.938.845l-2.25.25l1.688 1.5l5.906 5.343l-1.656 7.813l-.469 2.187l1.969-1.125l6.906-4l6.906 4l1.969 1.125l-.469-2.187l-1.656-7.813l5.906-5.343l1.688-1.5l-2.25-.25l-7.938-.844l-3.25-7.281zm0 4.906l2.563 5.782l.25.53l.562.063l6.281.656l-4.687 4.22l-.438.405l.125.563l1.313 6.156l-5.469-3.125l-.5-.312l-.5.312l-5.469 3.125l1.313-6.156l.125-.563l-.438-.406l-4.687-4.218l6.281-.657l.563-.062l.25-.531z", fill="#888888")
      svg(v-else xmlns="http://www.w3.org/2000/svg", width="32", height="32", viewBox="0 0 32 32")
        path(d="M30.336 12.547l-10.172-1.074L16 2.133l-4.164 9.34l-10.172 1.074l7.598 6.848L7.14 29.398L16 24.29l8.86 5.11l-2.122-10.004z", fill="#ffaa00")
</template>

<style scoped lang="postcss">
button {
  @apply cursor-not-allowed !dark-text-light-900/50 !text-dark-900/50;
}

button img {
  @apply opacity-30;
}
</style>