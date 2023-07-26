<script setup>
import TheForm from './TheForm.vue'

import texts from '../texts.json'

import { ref } from "vue";
import { isAccessGranted } from "../composables/useForm.ts";
import { data } from "../synths.data";
import SynthCard from "./SynthCard.vue";
import { SlickList, SlickItem, DragHandle } from "vue-slicksort";

const list = ref(data);

function isOff(n) {
  return !isAccessGranted.value && n > 5
}

//https://vue-slicksort.netlify.app/components/slicklist
</script>

<template lang='pug'>
TheForm
SlickList.flex.flex-wrap.items-stretch.gap-4.md-gap-6.m-2.lg-m-8(
  v-model:list="list", 
  axis="xy", 
  use-drag-handle)
  SlickItem.flex(
    style="flex: 1 1 240px"
    v-for="(synth,s) in list" 
    :key="synth.title"
    :index="s")
    SynthCard.card.p-0.bg-light-300.shadow-lg.flex.flex-col.dark-bg-dark-300.-hover-translate-y-2px.transition.hover-shadow-xl.rounded-xl.overflow-hidden.relative( 
      :style="{opacity: isOff(s) ? 0.8 : 1}"
      :title="synth.title"
      :description="synth.description"
      :img="synth.img"
      :url="synth.url"
      :off="isOff(s)")
.mx-auto.p-4.max-w-75ch.dark-text-light-200.text-center.line-height-loose.text-md.intro.md-text-lg(v-html="texts.intro")
</template>

<style lang="postcss">
.dark a {
  color: #eee !important;
}

.intro p {
  @apply my-4;
}

.intro a {
  @apply underline font-bold;
}

.card {
  @apply flex-1
}
</style>
