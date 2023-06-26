<script setup>
import synths from '../synths.json'
import { ref } from 'vue'

const open = ref(false)

</script>

<template lang='pug'>
.flex.flex-wrap.gap-4.m-2.lg-m-8
  a.p-0.bg-light-300.shadow-lg.flex.flex-col.dark-bg-dark-300(
    v-for="synth in synths" :key="synth.url"
    style="flex: 1 1 200px; color: #333"
    :href="synth.url"
    target="_blank"
    ) 
    img(:src="'/img/'+synth.img")
    .flex-1
    .p-2 {{ synth.title }}
</template>

<style scoped>
.dark a {
  color: #eee !important;
}
</style>