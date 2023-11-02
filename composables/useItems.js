
import { createDirectus, rest, readItem, readItems } from '@directus/sdk'

export const client = createDirectus(
  'https://db.synth.chromatone.center/'
).with(
  rest()
)

export async function useItems(collection, query) {
  try {
    const items = await client.request(readItems(collection, query))
    return items
  } catch (e) {
    console.log(e)
  }
}


export async function useItem(collection, key, query) {
  try {
    const item = await client.request(readItem(collection, key, query))
    return item
  } catch (e) {
    console.log(e)
  }
}