import { ref, computed, watch, Ref } from 'vue'
import { Directus } from '@directus/sdk';
import { RemovableRef, useStorage } from '@vueuse/core';

const directus = new Directus('https://db.chromatone.center');

export const isAccessGranted: RemovableRef<boolean | string> = useStorage('access-granted', false)

const isSent = ref(false)

export const email = ref('')
export const isValidEmail = computed(() => /^[^@]+@\w+(\.\w+)+\w$/.test(email.value))

export async function grantAccess(email: string) {
  if (!email) return
  const data = { email }
  isAccessGranted.value = email
  if (!isSent.value) {
    isSent.value = true
    try {
      await directus.items('players').createOne(data)
    } catch (e) {
      console.error(e)
    }
  }

}

export const isFormOpen = ref(false)

watch(isAccessGranted, a => {
  if (a) isFormOpen.value = false
})

export const checkAvailability = ref(false)

