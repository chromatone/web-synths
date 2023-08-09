import { ref, computed, watch, Ref, onMounted } from 'vue'
import { Directus } from '@directus/sdk';
import { RemovableRef, useStorage } from '@vueuse/core';

const directus = new Directus('https://db.chromatone.center');

const isAccessGranted = ref(false)
const isFormOpen = ref(false)
const checkAvailability = ref(false)
const storedEmail = useStorage('storedEmail', '')
const isSent = ref(false)
const email = ref('')
const isValidEmail = computed(() => /^[^@]+@\w+(\.\w+)+\w$/.test(email.value))
const started = ref(false)

export function useForm() {

  if (!started.value) {
    watch(isAccessGranted, a => {
      if (a) isFormOpen.value = false
    })

    onMounted(() => {
      if (storedEmail.value) {
        isAccessGranted.value = true
      }
    })
    started.value = true
  }

  return {
    isAccessGranted,
    isValidEmail,
    email,
    grantAccess,
    isSent,
    isFormOpen,
    checkAvailability,
  }
}

export async function grantAccess() {
  if (!email.value && !isValidEmail.value) return
  isAccessGranted.value = true
  if (!isSent.value) {
    isSent.value = true
    try {
      await directus.items('players').createOne({ email: email.value })
      storedEmail.value = email.value
    } catch (e) {
      console.error(e)
    }
  }

}


