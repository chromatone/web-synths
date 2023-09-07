import download from 'image-downloader'

import path from "node:path";
import { fileURLToPath } from "node:url";
import fs from 'node:fs'
import { Directus } from '@directus/sdk';

export default {
  async load() {

    const dirname = path.dirname(fileURLToPath(import.meta.url));

    const directus = new Directus('https://db.chromatone.center');

    const res = await directus.items('synths').readByQuery({ sort: ['sort', 'id'], limit: -1, filter: { status: { '_eq': 'published' } } });

    const records = res.data

    for (let r of records) {
      let dest = path.resolve(dirname, './public/cover/')

      if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
      }

      let filePath = path.resolve(dest, `${r.title.toLowerCase().split(' ').join('-')}.webp`)
      if (fs.existsSync(filePath)) continue
      let url = `https://db.chromatone.center/assets/${r.cover}?quality=70&width=1000&format=webp&download`
      console.log('downloading file:', r.title.toLowerCase().split(' ').join('-') + '.webp')
      await download.image({ url, dest: filePath })
    }

    return records
  }
}