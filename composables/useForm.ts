import { ref, computed, watch, Ref, onMounted } from 'vue'
import { RemovableRef, useStorage } from '@vueuse/core';

const isAccessGranted = ref(false)
const isFormOpen = ref(false)
const checkAvailability = ref(false)
const storedEmail = useStorage('storedEmail', '')
const storedName = useStorage('storedName', '')
const isSent = ref(false)
const email = ref('')
const name = ref('')
const isValidEmail = computed(() => validateEmail(email.value))
const started = ref(false)

function validateEmail(mail) {
  return /^[^@]+@\w+(\.\w+)+\w$/.test(mail)
}

function resetEmail() {
  storedEmail.value = ''
  storedName.value = ''
  isSent.value = false
  isAccessGranted.value = false
}

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
    name,
    grantAccess,
    isSent,
    isFormOpen,
    checkAvailability,
    storedEmail,
    storedName,
    resetEmail
  }
}

const url = 'https://db.chromatone.center/flows/trigger/f36a3461-c476-4ce5-88c9-eba2216083b0'

export async function grantAccess() {
  if (!email.value && !validateEmail(email.value)) return
  isAccessGranted.value = true
  if (!isSent.value) {
    isSent.value = true
    try {
      const data = { email: email.value, name: name.value.slice(0, 30) }
      storedEmail.value = email.value
      storedName.value = name.value
      const response = await fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json"
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data), // body data type must match "Content-Type" header
      });



      console.log(response?.json())

    } catch (e) {
      console.error(e)
    }
  }

}


