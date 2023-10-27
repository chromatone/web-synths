<script setup>
import { ref, watch } from 'vue'
import { useForm } from '../../composables/useForm.js';
import { useClicks, } from '../../composables/useClicks.js';

const props = defineProps({
  pos: { type: Number, default: 0 },
  off: { type: Boolean, default: false },
  title: { type: String, default: '' },
  id: { type: Number, default: 0 },
  slug: { type: String, default: '' },
  description: { type: String, default: '' },
  cover: { type: String, default: '' },
  url: { type: String, default: '' },
  author: { type: String, default: '' },
  author_link: { type: String, default: '' },
  tags: { type: Array, default: () => ([]) },
  archive: { type: Boolean, default: false },
  archive_link: { type: String, default: '' },
  iframe: { type: Boolean, default: false },
  clicks: { type: Number, default: 0 },
})

const { checkAvailability, isFormOpen, isAccessGranted } = useForm()

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

const { clicksCount, clickSynth } = useClicks(props.id)

watch(() => props.clicks, c => clicksCount.value = c, { immediate: true })

async function click() {
  if (props.off) {
    isFormOpen.value = !isFormOpen.value
  } else {
    clickSynth(props.id)
    window.open(props.archive ? props.archive_link : props.url, '_blank')
  }
}

</script>

<template lang='pug'>
button.max-w-180.w-full.flex.flex-wrap.items-stretch.text-left.relative.bg-light-500.dark-bg-dark-300.-hover-translate-y-6px.transition.duration-200.hover-shadow-lg.rounded-lg.overflow-hidden.relative.border-1.border-dark-100.border-opacity-20.shadow-sm.dark-border-light-800.dark-border-opacity-20(
  @click="click")
  .cover.min-h-50.bg-cover.bg-center.filter.transition(
    :style="{backgroundImage: `url(/cover/${slug}.webp)`}"
    style="flex: 1 1 280px"
    )
    //- DragHandle.scale-80.opacity-40.cursor-grab.absolute.top-2.left-2
    //-   svg(xmlns="http://www.w3.org/2000/svg", width="32", height="32", viewBox="0 0 32 32")
    //-     path(d="M4 7v2h24V7zm0 8v2h24v-2zm0 8v2h24v-2z", fill="#888888")
    //- img(
    //-   :src="`/cover/${slug}.webp`" 
    //-   :alt="`${title} illustration`")
  .p-4.flex.flex-col.items-start.justify-between.gap-2(
    style="flex: 10 0 200px"
    )
    .flex.items-center.gap-2.flex-0.w-full
      .transition.text-xl.select-none.absolute.top-4.left-4.text-center.z-200 {{ pos+1 }}
      .px-2.py-1.bg-light-800.dark-bg-dark-800.rounded-xl.transition.text-sm.select-none.absolute.bottom-2.left-2.text-center.z-200.flex.items-center.gap-1  {{ clicksCount }}
        .i-la-hand-pointer
      .flex-1 
        span.flex.items-center.gap-2
          .text-2xl.font-bold {{ title }}
          span.font-normal(title="Archived locally by us" v-if="archive")
            .i-ph-archive-duotone
        .w-2.h-2.rounded-full.shadow-inset(
          v-if="checkAvailability"
          :class="{'bg-green-500': online === true, 'bg-red-500':online === false}"
          )
      ClientOnly
        SynthFav.scale-70.w-10.absolute.right-2.z-200(:url="url")
    component.p-0.text-md(:is="author_link ? 'a' : 'div'" v-if="author" :href="author_link" target="_blank") by {{ author }}
    .flex-1
    .flex-1.flex.items-end.flex.flex-wrap.gap-2(v-if="tags?.length>0")
      .px-2.py-1.text-sm.bg-light-800.dark-bg-dark-500.rounded-lg(v-for="tag in tags" :key="tag") {{ tag }}
    .absolute.bottom-4.right-4
      a.text-lg.opacity-40.hover-opacity-80.transition(
        title="Open in an iFrame"
        @click.stop :href="`/${slug}/`"
        v-if="iframe"
        )
        .i-tabler-browser-check
      .i-tabler-browser-x.text-lg.opacity-40.transition(v-else title="Open in a new window")
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