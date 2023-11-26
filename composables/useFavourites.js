
import { useStorage } from '@vueuse/core';

export const favourites = useStorage('favourites', { "3": 'default', "29": 'default', "39": 'default', })

