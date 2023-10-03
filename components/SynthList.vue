<script setup>
import { computed, onMounted, ref } from 'vue';
import { useForm } from "../composables/useForm.js";
import { data } from "../db/synths.data";
import SynthCard from "./SynthCard.vue";
import { SlickList, SlickItem } from "vue-slicksort";

import { version } from '../package.json'

const { isAccessGranted } = useForm()

const list = ref(data)

function isOff(n) {
  return !isAccessGranted.value && n > 5
}


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
      :key="synth.id"
      v-bind="synth"
      :off="isOff(s)")
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
