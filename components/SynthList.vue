<script setup>

import { data } from '../synths.data'
import { data as texts } from '../texts.data'
import SynthCard from './SynthCard.vue'

</script>

<template lang='pug'>
.px-4.flex.items-center.gap-4.justify-center
  a(href="https://playtronica.com" target="_blank")
    img.max-h-20.dark-invert(src="/pl-logo.webp")
  .text-4xl &
  a.w-60.dark-invert(href="https://chromatone.center" target="_blank")
    img.max-h-20(src="/line.svg")
.mx-auto.p-4.max-w-75ch.dark-text-light-200.text-center.line-height-loose.text-md.intro.md-text-lg(v-html="texts.intro")
.flex.flex-wrap.gap-4.md-gap-6.m-2.lg-m-8
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