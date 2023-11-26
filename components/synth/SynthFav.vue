<script setup>
import { computed, ref } from 'vue';
import { favourites } from '../../composables/useFavourites.js';

const props = defineProps({
  id: { type: Number, default: 0 },
  stars: { type: Number, default: 0 },
})

const favourite = computed(() => favourites.value[props.id])

const favs = ref(props.stars)

async function toggleFav() {
  if (favourites.value[props.id] === undefined || favourites.value[props.id] === null) {
    sendFav(props.id)
  }
  if (favourites.value[props.id] === 'default') {
    favourites.value[props.id] = null
    return
  }
  favourites.value[props.id] = !favourites.value[props.id]
}

async function sendFav(id) {
  try {
    const counting = await fetch(
      'https://dbs.chromatone.center/flows/trigger/f235dc43-5911-4a7a-8327-5a5c39beb3b2',
      {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify({ id }),
      });
    favs.value = await counting?.json()
  } catch (e) {
    console.error(e, e?.errors?.[0]?.message, e?.response?.status)
  }
}

</script>

<template lang="pug">
button.p-0.cursor-pointer.flex.items-center.gap-1.justify-center(@click.stop.prevent="toggleFav()" title="Toggle star") 
  .i-la-star(v-if="!favourite")
  .i-la-star-solid.text-yellow(v-else)
  .text-xs.opacity-50.absolute.-bottom-3(v-if="favs || stars") {{ favs || stars }}
</template>