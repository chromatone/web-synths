<script setup>
import { computed, onMounted, ref } from 'vue';
import { useForm } from "../../composables/useForm.js";
import { data } from "../../db/synths.data";

import { version } from '../../package.json'

const { isAccessGranted } = useForm()

const list = ref(data)

function isOff(n) {
  return !isAccessGranted.value && n > 5
}

</script>

<template lang='pug'>
.flex.flex-col.items-stretch.gap-8.md-gap-6.bg-light-900.dark-bg-dark-800.py-8.p-2
  .flex.max-w-200.w-full.mx-auto(
    style="flex: 1 1 240px"
    v-for="(synth,s) in list" 
    :key="synth.id"
    :index="s")
    SynthCard( 
      :pos="s"
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
