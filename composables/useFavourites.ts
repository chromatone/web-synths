import { ref, computed, watch, Ref } from 'vue'
import { useStorage } from '@vueuse/core';

export const favourites = useStorage('favourites', {})