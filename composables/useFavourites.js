
import { useStorage } from '@vueuse/core';

export const favourites = useStorage('favourites', { "3": true, "29": true, "39": true, })

