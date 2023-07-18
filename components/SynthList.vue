<script setup >
import { favourites } from '../composables/useFavourites.ts';
import { isAccessGranted } from '../composables/useForm.ts';
import { data } from '../synths.data'
import SynthCard from './SynthCard.vue'

</script>

<template lang='pug'>
.flex.flex-wrap.gap-4.md-gap-6.m-2.lg-m-8
  SynthCard( 
    v-for="(synth,s) in data" :key="synth.title"
    :title="synth.title"
    :description="synth.description"
    :img="synth.img"
    :url="synth.url"
    :off="s>=6"
    )
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
</style>