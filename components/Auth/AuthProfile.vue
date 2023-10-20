<script setup>
import { useUser } from '../../composables/useUser.js';

const { user } = useUser()
</script>

<template lang='pug'>
.flex.flex-col.gap-4.p-4
  .text-xl Profile
  pre.text-sm {{ user }}
</template>