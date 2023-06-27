<script setup>

import { data } from '../synths.data'
import { data as texts } from '../texts.data'
import SynthCard from './SynthCard.vue';

</script>

<template lang='pug'>
.p-4.max-w-75ch.dark-text-light-200.line-height-loose.text-lg.intro(v-html="texts.intro")
.flex.flex-wrap.gap-4.m-2.lg-m-8
  SynthCard( 
    v-for="synth in data" :key="synth.url"
    v-bind="synth"
    )
</template>

<style>
.dark a {
  color: #eee !important;
}

.intro p {
  @apply my-4;
}

.intro a {
  @apply underline font-bold;
}
</style>