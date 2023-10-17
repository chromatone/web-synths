
import { createDirectus, rest, readMe, authentication, readItems, inviteUser } from '@directus/sdk'
import { onMounted, ref } from 'vue'

export const userDB = createDirectus(
  'https://db.chromatone.center/'
).with(
  rest({ credentials: 'include' })
).with(
  authentication('cookie', { credentials: 'include' })
) // .with(realtime({ credentials: 'include' }))

const user = ref()
const auth = ref()

export function useUser() {

  onMounted(async () => {
    // await userDB.refresh()
    // await userRead()
  })

  return {
    auth,
    user,
    userDB,
    userCreate,
    userRead
  }
}

async function userRead() {
  user.value = await userDB.request(readMe())
  return user.value
}

async function userCreate({ email }) {
  await userDB.request(inviteUser(email, '8c5fd718-323c-4616-ae90-dd28c522cdbd'))

  // await userDB.request(createUser({
  //   email,
  //   password,
  //   first_name: name,
  //   role: '8c5fd718-323c-4616-ae90-dd28c522cdbd'
  // }))

  // auth.value = await userDB.login(email, password)

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