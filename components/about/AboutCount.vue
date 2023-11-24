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

watchOnce(visible, async v => {
  if (v) {
    synths.value = data.length
    const res = await fetch('https://dbs.chromatone.center/flows/trigger/0c0e8d82-8e12-44a6-867a-57ddeec9d774',
      {
        type: 'GET',
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      })
    const response = await res.json()
    counts.value = response.count
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