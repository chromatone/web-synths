<script setup>
import { computed, onMounted, ref } from 'vue';
import { useShare, useElementVisibility, useTransition, watchOnce } from '@vueuse/core'
import { data } from '../db/synths.data.js'

const counters = ref()
const players = ref([])
const count = computed(() => players.value.length)
const counter = useTransition(count)

onMounted(() => {
  fetch('https://db.chromatone.center/items/players?limit=-1')
    .then(response => response.json())
    .then(({ data }) => players.value = data)
})

const visible = useElementVisibility(counters)
const seen = ref(false)

watchOnce(visible, v => {
  if (v) seen.value = true
})

const { share, isSupported } = useShare()

function startShare() {
  share({
    title: 'Web synths collection',
    text: 'Look at this online synthesizer collection. No need to install anything - just your browser and any MIDI controller will do.',
    url: location.href,
  })
}

function scrollTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template lang='pug'>
.text-center.line-height-loose.text-md.py-16.px-4
  .mx-auto.max-w-75ch.intro.md-text-lg
    slot
    .flex.justify-center(ref="counters")
      .p-2.flex.flex-col.mt-8
        .text-4xl.font-bold {{ data.length }}
        .text-lg web synths
      .p-2.flex.flex-col.mt-8(v-if="seen&&count>0")
        .text-4xl.font-bold {{ counter.toFixed() }}+
        .text-lg web musicians
    button.mx-auto.flex.items-center.gap-2.text-white.py-2.px-4.mt-6.shadow-lg.rounded-lg.cursor-pointer.bg-green-600.-hover-translate-y-2px.transition(
      @click="startShare()" 
      data-umami-event="Shared via button"
      v-if="isSupported") 
        .i-mdi-share
        span Share to save for later
  button.opacity-70.my-12.mx-auto.p-4.text-4xl.items-center.flex.flex-col(@click="scrollTop()")
    .i-la-angle-up
    span.font-100 Scroll up

</template>