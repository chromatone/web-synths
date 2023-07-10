import { ref, computed, watch, Ref } from 'vue'
import { Directus } from '@directus/sdk';
import { useStorage } from '@vueuse/core';

//@ts-ignore
const apiToken = import.meta.env.VITE_API_KEY

const directus = new Directus('https://dir.defucc.me');

export const isAccessGranted = useStorage('access-granted', false)

export const email = ref('')
export const isValidEmail = computed(() => /^[^@]+@\w+(\.\w+)+\w$/.test(email.value))


export async function grantAccess(email: string) {
  const data = {
    email,
  }
  const user = await directus.items('players').createOne(data)
  isAccessGranted.value = true
}

export const isFormOpen = ref(false)

watch(isAccessGranted, a => {
  isFormOpen.value = false
})