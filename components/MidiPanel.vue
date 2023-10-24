<script setup>
import { useMidi } from '../composables/useMidi.js';

const { midi } = useMidi()
</script>

<template lang='pug'>
.flex.flex-wrap.gap-2.items-center.p-2.bg-light-900.bg-opacity-60.backdrop-blur-lg.dark-bg-dark-500.dark-bg-opacity-50.max-h-60.overflow-y-scroll.rounded.max-w-180.mx-auto.w-full.z-100.text-center
  .opacity-50.absolute
    .i-simple-icons-midi.text-2xl(
      title="MIDI"
      :style="{color: midi.enabled ? 'green' : 'gray'}"
      )
  template(v-if="Object.keys(midi.inputs).length>0")
    .select-none.flex.flex-col.gap-1.rounded.px-2.py-1.bg-light-300.dark-bg-dark-700.shadow(
      v-for="input in midi.inputs" 
      :key="input.name" 
      :title="`by ${input.manufacturer}`"
      )
      .text-sm {{ input.name }} 
  template(v-else)
    .text-xs.opacity-50(style="flex: 1 1 200px") No MIDI devices detected.
</template>