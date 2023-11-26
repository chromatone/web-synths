<script setup>
import { computed, onMounted, ref, watch } from 'vue';
import { useForm } from "../../composables/useForm.js";
import { data } from "../../db/synths.data";
import { useItems } from '../../composables/useItems.js';
import Fuse from "fuse.js";
import { favourites } from '../../composables/useFavourites.js';
import { useStorage } from '@vueuse/core';

const { isAccessGranted } = useForm()

const list = ref(data)

const fuse = new Fuse(data, {
  includeScore: true,
  ignoreLocation: true,
  shouldSort: true,
  keys: ['title', 'slug', 'author']
});

const favFilter = useStorage('fav-filter', false)

const search = ref('')

const results = computed(() => fuse.search(search.value));

const searchFilter = computed(() => results.value.filter(item => item.score < 0.2).sort((a, b) => a.score > b.score ? 1 : 0).map(item => {
  return item.item.slug
}))

const filteredList = computed(() => list.value.filter(item => search.value ? searchFilter.value.includes(item.slug) : favFilter.value ? favourites.value[item.id] : true))

const clicks = ref([])

onMounted(async () => {
  clicks.value = await useItems('synths', {
    fields: ['id', {
      stats: ['views', 'stars']
    }
    ]
  })
})

watch(favourites, f => {
  if (Object.values(f).filter(Boolean).length == 0) {
    favFilter.value = false
  }
}, {
  deep: true,
  immediate: true
})

</script>

<template lang='pug'>
.flex.flex-col.items-center.mb-2.px-8
  .w-full.max-w-110.flex.items-center.relative.my-4
    input.w-full.focus.text-xl.py-1.pl-9.bg-light-200.bg-opacity-20.shadow-inner.border-1.border-dark-100.border-opacity-10.rounded-lg.dark-bg-dark-200.outline-none.focus-border-opacity-90(
      :placeholder="'Start typing to search...'"
      v-model="search")
    .i-la-search.absolute.left-2.text-xl.opacity-40
    .i-la-times.absolute.right-2.text-xl.opacity-40.hover-opacity-80.transition.cursor-pointer(@click="search=''" v-if="search")
    button.p-1.flex.items-center.gap-2.text-xl.text-yellow(
      :title=" favFilter ? 'Only favourites are shown' : 'Show only favourites'" 
      v-if="Object.values(favourites).filter(Boolean).length>0 && !search" @click="favFilter=!favFilter")
      .i-la-star-solid(v-if="favFilter")
      .i-la-star(v-else)
.flex.flex-col.items-center.gap-8.p-2.max-w-160.mx-auto.mb-12
  .flex.w-full.sticky(
    :style="{top:`${80+s*4}px`, zIndex: s+10}"
    style="flex: 1 1 240px"
    v-for="(synth,s) in filteredList" 
    :key="synth.id"
    :index="s") 
    transition-group(name="fade")
      SynthCard( 
        :pos="s"
        :style="{filter: !synth.public&&!isAccessGranted ? `contrast(70%) blur(2px) opacity(80%)` : `` }"
        :key="synth.id"
        v-bind="synth"
        :counter="clicks?.find(el=>el?.id==synth?.id)?.stats?.[0]?.views"
        :stars="clicks?.find(el=>el?.id==synth?.id)?.stats?.[0]?.stars"
        )
  .p-2(key="nnn" v-if="filteredList.length==0") 
    .animate-pulse.text-center We don't know such a web-app yet. 
    FormSynth.max-w-140.mx-auto.mt-6
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

input:disabled {
  @apply opacity-50
}
</style>
