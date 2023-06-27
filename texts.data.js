import { Directus } from '@directus/sdk';


export default {
  async load() {
    const directus = new Directus('http://dir.defucc.me');

    const records = await directus.items('texts').readByQuery({ limit: -1 })
    const texts = {}
    records.data.forEach(r => {
      texts[r.title] = r.content
    })

    return texts
  }
}