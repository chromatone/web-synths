
import { createDirectus, rest, staticToken, readItem, readItems } from '@directus/sdk'

export const publicClient = createDirectus(
  'https://db.chromatone.center/'
).with(
  rest()
)

export const client = createDirectus(
  'https://db.chromatone.center/'
).with(
  rest()
).with(
  staticToken('Ht2TXBROp85jXh6r5ho7Q_V1Pygm-KbC')
)

export async function useItems(collection, query) {
  try {
    const items = await client.request(readItems(collection, query))
    return items
  } catch (e) {
    console.log(e)
  }
}
