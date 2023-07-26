import download from 'image-downloader'

import path from "node:path";
import { fileURLToPath } from "node:url";
import fs from 'node:fs'
import { Directus } from '@directus/sdk';

let cache

export default {
  async load() {
    if (!cache) {
      const directus = new Directus('http://dir.defucc.me');

      const dirname = path.dirname(fileURLToPath(import.meta.url));

      const res = await directus.items('synths').readByQuery({ sort: ['sort', 'id'], limit: -1, filter: { status: { '_eq': 'published' } } });
      const records = res.data

      for (let r of records) {
        let dest = path.resolve(dirname, './public/img/')
        let filePath = path.resolve(dest, `${r.img}.webp`)
        if (fs.existsSync(filePath)) continue
        let url = `https://dir.defucc.me/assets/${r.img}?quality=40&width=600&format=webp&download`
        console.log('downloading file:', r.img + '.webp')
        await download.image({ url, dest: filePath })
      }

      cache = records
      return records
    } else {
      return cache
    }
  }
}