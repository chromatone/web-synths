<script setup>
import { computed, ref } from 'vue';
import { useElementVisibility, useTransition, watchOnce } from '@vueuse/core'
import { data } from '../../db/synths.data.js'

const counters = ref()
const players = ref([])
const synths = ref(0)
const count = computed(() => players.value.length)
const synthCounter = useTransition(synths)
const counter = useTransition(count)

const visible = useElementVisibility(counters)

watchOnce(visible, v => {
  if (v) {
    synths.value = data.length
    fetch('https://db.chromatone.center/items/players?limit=-1')
      .then(response => response.json())
      .then(({ data }) => players.value = data)
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