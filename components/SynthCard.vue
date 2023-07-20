<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { checkAvailability, isFormOpen, isAccessGranted } from '../composables/useForm.ts';
import { DragHandle } from 'vue-slicksort';
//@ts-ignore
import SynthFav from './SynthFav.vue';

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

function click() {
  if (props.off) {
    isFormOpen.value = !isFormOpen.value
  } else {
    window.open(props.url, '_blank')
  }
  console.log('clicked', props.url, props.off)

}

</script>

<template lang='pug'>
button.flex.flex-col.text-left.relative(
  @click="click"
  )
  img(:src="`/img/${img}.jpg`")
  .flex-1 
  .p-4.flex.items-center.justify-between
    .text-md.font-bold.flex.items-center.gap-2.flex-1
      .p-0 {{ title }}
      .flex-1
      .w-2.h-2.rounded-full.shadow-inset(
        :class="{'bg-green-500': online === true, 'bg-red-500':online === false}"
        )
      ClientOnly
        SynthFav.scale-70.absolute.top-2.right-2(:url="url")
      DragHandle.scale-80.opacity-40.cursor-grab
        svg(xmlns="http://www.w3.org/2000/svg", width="32", height="32", viewBox="0 0 32 32")
          path(d="M4 7v2h24V7zm0 8v2h24v-2zm0 8v2h24v-2z", fill="#888888")
      
</template>

<style scoped lang="postcss">
.card img {
  @apply filter grayscale-70 hover-grayscale-0 transition;
}
</style>