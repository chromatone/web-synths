<script setup>
import { ref } from 'vue';

const email = ''
const open = ref(false)
</script>

<template lang='pug'>
button.p-4.z-2000(@click="open=!open")
  .i-la-user.p-4
teleport(to="body")
  .p-8.bg-purple-200.text-3xl.fixed.z-100.left-10.top-20(v-if="open") HI!!
</template>