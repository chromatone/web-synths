<script setup>
import { computed, ref } from 'vue';
import { useElementVisibility, useTransition, watchOnce } from '@vueuse/core'
import { data } from '../../db/synths.data.js'

const counters = ref()
const synths = ref(0)
const counts = ref(0)
const synthCounter = useTransition(synths)
const counter = useTransition(counts)

const visible = useElementVisibility(counters)

watchOnce(visible, v => {
  if (v) {
    synths.value = data.length
    fetch('https://db.chromatone.center/flows/trigger/5912fabc-c7af-4e00-bb0e-873a6b5a6494')
      .then(response => response.json())
      .then(({ count }) => counts.value = count)
  }
})

</script>

<template lang='pug'>
.text-center.line-height-loose.text-md
  .mx-auto.max-w-75ch.intro.md-text-lg

    .flex.justify-center(ref="counters")
      .p-2.flex.flex-col.mt-8
        .text-4xl.font-bold {{ synthCounter.toFixed()  }}
        .text-lg web synths
      .p-2.flex.flex-col.mt-8()
        .text-4xl.font-bold {{ counter.toFixed() || 5000 }}+
        .text-lg web musicians
</template>