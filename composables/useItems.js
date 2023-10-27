
import { createDirectus, rest, staticToken, readItem, readItems } from '@directus/sdk'

export const client = createDirectus(
  'https://synthdb.chromatone.center/'
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
