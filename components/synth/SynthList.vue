<script setup>
import { computed, onMounted, ref } from 'vue';
import { useForm } from "../../composables/useForm.js";
import { data } from "../../db/synths.data";
import { useItems } from '../../composables/useItems.js';

const { isAccessGranted } = useForm()

const list = ref(data)

function isOff(n) {
  return !isAccessGranted.value && n > 5
}

const clicks = ref([])

onMounted(async () => {
  clicks.value = await useItems('synths', {
    fields: ['id', 'clicks']
  })
})

</script>

<template lang='pug'>
.flex.flex-col.items-center.gap-8.py-8.p-2.max-w-160.mx-auto
  .flex.w-full.sticky(
    :style="{top:`${80+s*4}px`, zIndex: s+10}"
    style="flex: 1 1 240px"
    v-for="(synth,s) in list" 
    :key="synth.id"
    :index="s") 

    SynthCard( 
      :pos="s"
      :style="{filter: isOff(s) ? `contrast(70%) blur(2px) opacity(80%)` : `` }"
      :key="synth.id"
      v-bind="synth"
      :counter="clicks.find(el=>el.id==synth.id)?.clicks"
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
