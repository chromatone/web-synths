import download from 'image-downloader'

import path from "node:path";
import { fileURLToPath } from "node:url";
import fs from 'node:fs'
import { useItems } from './composables/useItems.js';

export default {
  async load() {

    const dirname = path.dirname(fileURLToPath(import.meta.url));

    const records = await useItems('synths', {
      sort: ['sort', 'id'], limit: -1, filter: { status: { '_eq': 'published' } }
    });

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