<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { checkAvailability, isFormOpen, isAccessGranted } from '../composables/useForm.ts';
// import SynthFav from './SynthFav.vue';

const props = defineProps({
  off: { type: Boolean, default: false },
  title: { type: String, default: '' },
  description: { type: String, default: '' },
  img: { type: String, default: '' },
  url: { type: String, default: '' },
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

const disabled = computed(() => !isAccessGranted.value && props.off)

function click() {
  if (disabled.value) {
    isFormOpen.value = !isFormOpen.value
  } else {
    window.open(props.url, '_blank')
  }
  console.log('clicked', props.url, disabled.value)

}

</script>

<template lang='pug'>
button.card.p-0.bg-light-300.shadow-lg.flex.flex-col.dark-bg-dark-300.-hover-translate-y-2px.transition.hover-shadow-xl.rounded-xl.overflow-hidden.relative(
  style="flex: 1 1 240px; color: #333"
  :class="{disabled}"
  @click="click"
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
.disabled {
  @apply cursor-not-allowed !dark-text-light-900/50 !text-dark-900/50;
}

.disabled img {
  @apply opacity-30;
}
</style>