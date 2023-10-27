<script setup>
import { computed } from 'vue';
import { useLocalStorage } from '@vueuse/core';

const props = defineProps({
  url: { type: String, default: '' }
})

const favourite = useLocalStorage('fav:' + props.url, false)

function toggleFav(url) {
  favourite.value = !favourite.value
}

</script>

<template lang="pug">
.text-3xl(@click.stop.prevent="toggleFav()")
  .i-la-star(v-if="!favourite")
  .i-la-star-solid.text-yellow(v-else)
</template>