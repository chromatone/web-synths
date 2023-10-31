
import { createDirectus, rest, readMe, authentication, readItems, realtime } from '@directus/sdk'
import { onMounted, ref } from 'vue'

class LocalStorage {
  get() {
    return JSON.parse(localStorage.getItem("directus-data"));
  }
  set(data) {
    localStorage.setItem("directus-data", JSON.stringify(data));
  }
}

export const userDB = createDirectus(
  'https://db.synth.chromatone.center/'
).with(
  rest({ credentials: 'include' })
).with(
  authentication('json', { credentials: 'include', storage: new LocalStorage() })
).with(realtime({ credentials: 'include' }))

const user = ref()

const email = ref('')
const password = ref('')
const authData = ref({})
const access_token = ref('')

let init = false

export function useUser() {
  if (!init) {
    onMounted(async () => {
      await refreshToken()
      await userRead()
    })
    init = true
  }


  return {
    access_token,
    email,
    password,
    authData,
    user,
    userDB,
    userCreate,
    userRead,
    refreshToken,
    submitLogin,
    logoutUser
  }
}



async function refreshToken() {
  try {
    let data = await userDB.refresh()
    access_token.value = data.access_token
    delete data.access_token
    authData.value = data
  } catch (e) {
    console.log(e.errors[0])
  }
}

async function submitLogin() {
  try {
    let data = await userDB.login(email.value, password.value)
    access_token.value = data.access_token
    delete data.access_token
    authData.value = { ...data }
  } catch (e) {
    console.log(e.errors[0])
  }
}


async function userRead() {
  try {
    user.value = await userDB.request(readMe())
    user.value.players = await userDB.request(readItems('players', {
      fields: ['*', { synths: ['*', { synths_id: ['*'] }] }]
    }))
    return user.value
  } catch (e) {
    console.log(e)
  }
}

async function userCreate({ email }) {

  // user.value = await userDB.request(readMe())
  // return user.value
}

export async function useUserItems(collection, query) {
  try {
    const items = await userDB.request(readItems(collection, query))
    return items
  } catch (e) {
    console.log(e)
  }
}


async function logoutUser() {
  await userDB.logout()
  access_token.value = ''
  authData.value = ''
}