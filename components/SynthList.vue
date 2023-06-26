<script setup>

import { data } from '../synths.data'
import SynthCard from './SynthCard.vue';

</script>

<template lang='pug'>
.flex.flex-wrap.gap-4.m-2.lg-m-8
  SynthCard( 
    v-for="synth in data" :key="synth.url"
    v-bind="synth"
    )
</template>

<style scoped>
.dark a {
  color: #eee !important;
}
</style>