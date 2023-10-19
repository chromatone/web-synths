<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { useForm } from '../composables/useForm.js';

const props = defineProps({
  pos: { type: Number, default: 0 },
  off: { type: Boolean, default: false },
  title: { type: String, default: '' },
  slug: { type: String, default: '' },
  description: { type: String, default: '' },
  cover: { type: String, default: '' },
  url: { type: String, default: '' },
  author: { type: String, default: '' },
  author_link: { type: String, default: '' },
  tags: { type: Array, default: () => ([]) },
  archive: { type: Boolean, default: false },
  archive_link: { type: String, default: '' },
})

const { checkAvailability, isFormOpen } = useForm()

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
    window.open(props.archive ? props.archive_link : props.url, '_blank')
  }
  // console.log('clicked', props.url, props.off)
}

</script>

<template lang='pug'>
button.w-full.flex.flex-wrap.text-left.relative.bg-light-300.shadow-lg.dark-bg-dark-300.-hover-translate-y-2px.transition.hover-shadow-xl.rounded-xl.overflow-hidden.relative(
  :data-umami-event="title"
  @click="click")
  .cover.bg-cover.min-h-50.bg-center.filter.transition(
    :style="{backgroundImage: `url(/cover/${slug}.webp)`}"
    style="flex: 1 1 140px"
    )
    //- DragHandle.scale-80.opacity-40.cursor-grab.absolute.top-2.left-2
    //-   svg(xmlns="http://www.w3.org/2000/svg", width="32", height="32", viewBox="0 0 32 32")
    //-     path(d="M4 7v2h24V7zm0 8v2h24v-2zm0 8v2h24v-2z", fill="#888888")
    //- img(
    //-   :src="`/cover/${slug}.webp`" 
    //-   :alt="`${title} illustration`")
  .p-4.flex.flex-col.items-start.justify-between.gap-2(
    style="flex: 1 0 200px"
    )
    .font-bold.flex.items-center.gap-2.flex-0.w-full
      span.opacity-40.hover-opacity-80.transition.text-2xl.select-none.absolute.bottom-4.right-5.text-center {{ pos+1 }}
      .flex-1 
        span.text-xl {{ title }} 
        span.font-normal(title="Archived locally by us" v-if="archive") (A)
      .w-2.h-2.rounded-full.shadow-inset(
        v-if="checkAvailability"
        :class="{'bg-green-500': online === true, 'bg-red-500':online === false}"
        )
      ClientOnly
        SynthFav.scale-70.w-10.absolute.right-2(:url="url")
    component.p-0.text-sm(:is="author_link ? 'a' : 'div'" v-if="author" :href="author_link" target="_blank") by {{ author }}
    .flex-1
    .flex-1.flex.items-end.flex.flex-wrap.gap-2(v-if="tags?.length>0")
      .px-2.py-1.text-sm.bg-light-800.dark-bg-dark-500.rounded-lg(v-for="tag in tags" :key="tag") {{ tag }}
      
</template>

<style scoped lang="postcss">
.card img {
  @apply filter grayscale-70 hover-grayscale-0 transition;
}

.cover {
  @apply grayscale-80 opacity-90;
}

button:hover .cover {
  @apply grayscale-0 opacity-100;
}
</style>