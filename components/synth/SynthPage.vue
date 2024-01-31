<script setup>
import { onMounted } from 'vue'
import { ref, watch } from 'vue';
import { useClicks, } from '../../composables/useClicks.js'
import { useItem } from '../../composables/useItems.js'

const props = defineProps({
  title: { type: String, default: '' },
  description: { type: String, default: '' },
  author: { type: String, default: '' },
  author_link: { type: String, default: '' },
  cover: { type: String, default: '' },
  slug: { type: String, default: '' },
  url: { type: String, default: '' },
  tags: { type: Array, default: [] },
  archive: { type: Boolean, default: false },
  archive_link: { type: String, default: '' },
  iframe: { type: Boolean, default: false },
  clicks: { type: Number, default: 0 },
  id: { type: Number, default: 0 }
})

const iframeLoaded = ref(false)

function iFrameLoad(e) {
  if (e.timeStamp < 5000) {
    iframeLoaded.value = true;
  }
}

const { clickSynth, clicksCount } = useClicks(props.id)

watch(() => props.clicks, c => clicksCount.value = c, { immediate: true })

const stars = ref(0)

onMounted(async () => {
  await clickSynth()
  let stats = await useItem('synth_stats', props.id)
  stars.value = stats?.stars || 0
})

</script>

<template lang='pug'>
.flex.flex-col.gap-4.bg-light-300.dark-bg-dark-300.rounded-lg.shadow-xl.overflow-hidden.mx-auto
  .p-0l.h-70vh.h-70svh.bg-cover.bg-center(
    :class="{'animate-pulse': iframe && !iframeLoaded}"
    :style="{backgroundImage: `url(/cover/${slug}.webp)`}"
    )
    transition(name="fade")
      iframe.w-full.h-70vh.h-70svh.bg-light-100.dark-bg-dark-800(
        allow="midi *"

        v-show="iframeLoaded"
        @load="iFrameLoad"
        :title="title" 
        :src="archive ? archive_link : url"
        )
  .flex.flex-col.p-4.gap-1.bottom-0.bg-light-100.dark-bg-dark-200.w-full.max-w-180.mx-auto.mb-12.relative


    .text-xl.flex.items-center.gap-4
      .font-bold {{ title }} 
      component.text-lg.font-300(
        v-if="author"
        target="_blank"
        :is="author_link ? 'a' : 'div'"
          :href="author_link") by {{ author }}
      .flex-auto
      SynthFav(:id="id" :stars="stars")
    .p-0.flex.gap-4
      a.my-2.font-mono.text-sm(
        :href="url" 
        target="_blank"
        ) {{ url }}
      .px-2.py-0.bg-light-800.dark-bg-dark-800.rounded-xl.transition.text-sm.select-none.text-center.z-200.flex.items-center.gap-1.opacity-40.hover-opacity-100.transition  {{ clicksCount }}
        .i-la-eye
    .flex-1.flex.items-end.flex.flex-wrap.gap-2(v-if="tags?.length>0")
      .px-2.py-1.text-sm.bg-light-800.dark-bg-dark-500.rounded-lg(v-for="tag in tags" :key="tag") {{ tag }}
    .p-0(v-if="description") {{ description }}

    .mt-4
      slot
</template>

<style scoped lang="postcss"></style>