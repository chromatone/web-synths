<script setup>
import { data as texts } from '../texts.data'
</script>

<template lang='pug'>
.mx-auto.p-4.max-w-75ch.dark-text-light-200.text-center.line-height-loose.text-md.intro.md-text-lg
  p(v-html="texts.intro")
//- .px-4.flex.items-center.gap-4.justify-center
  a(href="https://playtronica.com" target="_blank")
    img.max-h-20.dark-invert(src="/pl-logo.webp")
  .text-4xl &
  a.w-60.dark-invert(href="https://chromatone.center" target="_blank")
    img.max-h-20(src="/line.svg")
</template>

