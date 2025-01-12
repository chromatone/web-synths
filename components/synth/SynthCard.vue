<script setup>
import { ref, watch } from 'vue'
import { useForm } from '../../composables/useForm.js';
import { useClicks, } from '../../composables/useClicks.js';
import { favourites } from '../../composables/useFavourites.js';
import { useData } from 'vitepress';
const { isDark } = useData()

const props = defineProps({
  pos: { type: Number, default: 0 },
  sort: { type: Number, default: 0 },
  public: { type: Boolean, default: false },
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
  iframe: { type: Boolean, default: null },
  clicks: { type: Number, default: 0 },
  stars: { type: Number, default: 0 },
  counter: { type: Number, default: 0 },
  is_new: { type: Boolean, default: null },
  playtronica_compatible: { type: Boolean, default: null },
})

const { isFormOpen, isAccessGranted } = useForm()

const { clicksCount, clickSynth } = useClicks(props.id)

async function click() {
  if (!props.public && !isAccessGranted.value) {
    isFormOpen.value = !isFormOpen.value
  } else {
    clickSynth(props.id)
    if (props.iframe) {
      window.open(props.slug + '/', '_self')
    } else {
      window.open(props.archive ? props.archive_link : props.url, '_blank')
    }

  }
}

</script>

<template lang='pug'>
button.max-w-180.w-full.flex.flex-wrap.items-stretch.text-left.relative.bg-light-500.dark-bg-dark-300.-hover-translate-y-6px.transition.duration-200.hover-shadow-lg.rounded-lg.overflow-hidden.relative.border-1.border-dark-200.border-opacity-10.shadow-sm.dark-border-light-800.dark-border-opacity-20(
  :style="{ borderColor: favourites[id] ? isDark ? 'hsl(50deg,80%,45%)' : 'hsl(40deg,90%,80%)' : null }"
  @click="click")
  .cover.min-h-50.bg-cover.bg-center.filter.transition(
    :style="{ backgroundImage: `url(/cover/${slug}.webp)` }"
    style="flex: 1 1 280px"
    )
    //- DragHandle.scale-80.opacity-40.cursor-grab.absolute.top-2.left-2
    //-   svg(xmlns="http://www.w3.org/2000/svg", width="32", height="32", viewBox="0 0 32 32")
    //-     path(d="M4 7v2h24V7zm0 8v2h24v-2zm0 8v2h24v-2z", fill="#888888")
    //- img(
    //-   :src="`/cover/${slug}.webp`" 
    //-   :alt="`${title} illustration`")

    .px-2.py-1.bg-light-800.dark-bg-dark-800.rounded-xl.transition.text-sm.select-none.absolute.bottom-2.left-2.text-center.z-200.flex.items-center.gap-1.opacity-70.hover-opacity-100(
      title="Since 28 Oct 2023"
      v-if="clicksCount || counter"
      ) 
      .i-la-eye
      .p-0.mt-2px  {{ clicksCount || counter }}
  .p-4.flex.flex-col.items-start.justify-between.gap-2(style="flex: 10 0 200px")
    .flex.items-center.gap-2.flex-0.w-full
      .transition.text-xl.select-none.absolute.top-4.left-4.text-center.z-200.text-shadow-md {{ sort }}

      .flex-auto
        span.flex.items-center.gap-2
          .text-2xl.font-bold {{ title }}
          span.font-normal(title="Archived locally by us" v-if="archive")
            .i-ph-archive-duotone
          a.i-la-external-link-square-alt.text-lg.opacity-40.transition.transition.hover-opacity-100(
            @click.stop :href="`/${slug}/`" v-if="!iframe"
              title="Opens in a new window"
            )
      ClientOnly
        SynthFav.text-xl.mr-2.absolute.z-200(:id="id" :stars="stars" )
    component.p-0.text-md(:is="author_link ? 'a' : 'div'" v-if="author" :href="author_link" target="_blank") by {{ author }}
    .flex-1
      slot
    .flex-1.flex.items-end.flex.flex-wrap.gap-2(v-if="tags?.length > 0")
      .px-2.py-1.text-sm.bg-light-800.dark-bg-dark-500.rounded-lg(v-for="tag in tags" :key="tag") {{ tag }}


    .text-xl.p-2.absolute.left-2.top-4.bg-yellow-600.rounded-xl.shadow.font-bold.z-1000.transform.-rotate-10(
      v-if="is_new"
      ) NEW!
    svg.absolute.bottom-6.right-2.w-15.-rotate-20.hover-scale-180.-hover-translate-x-4.-hover-translate-y-2.transition-500.-hover-rotate-25(viewBox="0 0 30 10" title="Compatible with Playtronica devices" alt="Compatible with Playtronica devices" v-if="playtronica_compatible")
      rect(width="30" y="1" rx="4" height="8" fill="white")
      circle(cx="5" cy="5" r="5" fill="hsl(50deg,50%,50%)")
      circle(cx="25" cy="5" r="5" fill="hsl(50deg,50%,50%)")
      text(x="10.5" y="6.5" font-size="4") Touch Me
      path(d="M3 5 L4.5 6.5 L7 4", stroke="green", stroke-width="0.7", fill="none")
  
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