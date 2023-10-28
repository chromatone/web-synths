<script setup>
import { computed } from 'vue';
import { favourites } from '../../composables/useFavourites.js';

const props = defineProps({
  id: { type: Number, default: 0 }
})


const favourite = computed(() => favourites.value[props.id])

function toggleFav() {
  favourites.value[props.id] = !favourites.value[props.id]
}

</script>

<template lang="pug">
.p-0.cursor-pointer(@click.stop.prevent="toggleFav()")
  .i-la-star(v-if="!favourite")
  .i-la-star-solid.text-yellow(v-else)
</template>