<script setup>
import synths from '../synths.json'
</script>

<template lang='pug'>
.flex.flex-wrap.gap-4.m-2.lg-m-8
  a.p-0.bg-light-300.shadow-lg.flex.flex-col(
    v-for="synth in synths" :key="synth.url"
    style="flex: 1 1 200px; color: #333"
    :href="synth.url"
    target="_blank"
    ) 
    img(:src="'/img/'+synth.img")
    .flex-1
    .p-2.text-lg.font-bold {{ synth.title }}
</template>