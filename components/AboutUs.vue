<script setup>
import { computed, onMounted, ref } from 'vue';
import { useShare, useElementVisibility, useTransition } from '@vueuse/core'

const props = defineProps({
  synths: { type: Number, default: 30 }
})

const counters = ref()
const players = ref([])
const count = computed(() => players.value.length)
const counter = useTransition(count)

onMounted(() => {
  fetch('https://corsproxy.io/?https://db.chromatone.center/items/players?limit=-1')
    .then(response => response.json())
    .then(({ data }) => players.value = data)
})

const visible = useElementVisibility(counters)

const { share, isSupported } = useShare()

function startShare() {
  share({
    title: 'Web synths collection',
    text: 'Look at this online synthesizer collection. No need to install anything - just your browser and any MIDI controller will do.',
    url: location.href,
  })
}
</script>

<template lang='pug'>
.bg-light-300.dark-bg-dark-700.dark-text-light-200.text-center.line-height-loose.text-md.py-16
  .mx-auto.max-w-75ch.intro.md-text-lg
    slot
    .flex.justify-center(ref="counters")
      .p-2.flex.flex-col.mt-8(v-if="visible")
        .text-4xl.font-bold {{ synths }}
        .text-lg web synths
      .p-2.flex.flex-col.mt-8(v-if="visible&&count>0")
        .text-4xl.font-bold {{ counter.toFixed() }}+
        .text-lg web musicians
    button.text-white.py-2.px-4.mt-6.shadow-lg.rounded-lg.cursor-pointer.bg-green-600.-hover-translate-y-2px.transition(@click="startShare()" v-if="isSupported") Share now to save for later
</template>