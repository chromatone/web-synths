// Playtronica web apps pinned on top of the list for about a month (Black Friday 2026 → 24 Dec).
// Shown in the browser only while Date.now() < PROMO_END (00:00 24 Dec 2026, Berlin time);
// the "Black Friday" tag only until BF_END (00:00 1 Dec 2026, end of Cyber Monday),
// so the list goes back to the plain database order by itself — no redeploy needed.
// Negative ids mark these cards as local (no click/star counters, no internal page).

export const PROMO_END = new Date('2026-12-24T00:00:00+01:00').getTime()
export const BF_END = new Date('2026-12-01T00:00:00+01:00').getTime()

const utm = '?utm_source=synth.playtronica.com&utm_medium=referral&utm_campaign=bf2026'

export const promo = [
  { id: -1, slug: 'playtron', title: 'Playtron', url: 'https://play.playtronica.com/' + utm, tags: ['playtronica', 'sampler', 'midi'] },
  { id: -2, slug: 'biotron', title: 'Biotron', url: 'https://biotron.playtronica.com/' + utm, tags: ['playtronica', 'plant music', 'midi'] },
  { id: -3, slug: 'touchme-playtronica', title: 'TouchMe', url: 'https://touchme.playtronica.com/' + utm, tags: ['playtronica', 'touch', 'midi'] },
].map(s => ({ ...s, sort: null, public: true, iframe: false, author: 'Playtronica', author_link: 'https://playtronica.com', playtronica_compatible: true }))
