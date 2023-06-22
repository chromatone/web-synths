<script setup>
import synths from './synths.json'
</script>

<template lang='pug'>
.flex.flex-wrap.gap-4.p-4
  .p-2(v-for="synth in synths" :key="synth.url") 
    .text-xl.font-bold {{ synth.title }}
</template>