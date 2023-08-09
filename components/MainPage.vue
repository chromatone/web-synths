<script setup>
import { computed, onMounted, ref } from 'vue';
import { useForm } from "../composables/useForm.ts";
import { data } from "../synths.data";
import SynthCard from "./SynthCard.vue";
import { SlickList, SlickItem } from "vue-slicksort";
import { useElementVisibility, useTransition } from '@vueuse/core';
import { version } from '../package.json'

const { isAccessGranted } = useForm()

import { useShare } from '@vueuse/core'

const { share, isSupported } = useShare()

function startShare() {
  share({
    title: 'Web synths collection',
    text: 'Look at this online synthesizer collection. No need to install anything - just your browser and any MIDI controller will do.',
    url: location.href,
  })
}

const list = ref(data)

function isOff(n) {
  return !isAccessGranted.value && n > 5
}

const players = ref([])
const count = computed(() => players.value.length)
const counter = useTransition(count)

const counters = ref()
const visible = useElementVisibility(counters)

onMounted(() => {
  fetch('https://corsproxy.io/?https://db.chromatone.center/items/players?limit=-1')
    .then(response => response.json())
    .then(({ data }) => players.value = data)
})

//https://vue-slicksort.netlify.app/components/slicklist
</script>

<template lang='pug'>
SlickList.flex.flex-wrap.items-stretch.gap-4.md-gap-6.m-2.lg-m-8(
  v-model:list="list", 
  axis="xy", 
  use-drag-handle)
  SlickItem.flex(
    style="flex: 1 1 240px"
    v-for="(synth,s) in list" 
    :key="synth.id"
    :index="s")
    SynthCard( 
      :style="{opacity: isOff(s) ? 0.8 : 1}"
      :title="synth.title"
      :description="synth.description"
      :cover="synth.cover"
      :url="synth.url"
      :key="synth.id"
      :off="isOff(s)")
.mx-auto.p-4.max-w-75ch.dark-text-light-200.text-center.line-height-loose.text-md.intro.md-text-lg.pt-16
  slot
  .flex.justify-center(ref="counters")
    .p-2.flex.flex-col.mt-8(v-if="visible")
      .text-4xl.font-bold {{ list.length }}
      .text-lg web synths
    .p-2.flex.flex-col.mt-8(v-if="visible&&count>0")
      .text-4xl.font-bold {{ counter.toFixed() }}+
      .text-lg web musicians
  button.text-white.py-2.px-4.mt-6.shadow-lg.rounded-lg.cursor-pointer.bg-green-600.-hover-translate-y-2px.transition(@click="startShare()" v-if="isSupported") Share now to save for later
</template>

<style lang="postcss">
.dark a {
  color: #fff !important;
}

.intro p {
  @apply my-4;
}

.intro a {
  @apply underline font-bold;
}
</style>
