# GrooveHouse Record Store — Praktikum 4

Website company profile dengan Next.js App Router untuk 7 persyaratan praktikum:
1. Multi-page company profile: Home, About, Records, Contact.
2. Dynamic routing pada `/records/[slug]`.
3. Reusable components: Navbar, Footer, SectionTitle, RecordCard.
4. Navigasi antarhalaman memakai `next/link`.
5. Active link di Navbar memakai `usePathname`.
6. Responsive layout untuk desktop/tablet/mobile.
7. Struktur folder rapi.

## Cara menjalankan
Ekstrak ZIP, buka folder yang langsung berisi `package.json` di VS Code, lalu jalankan:
```bash
npm install
npm run dev
```
Buka http://localhost:3000

Tes detail album:
- http://localhost:3000/records/abbey-road
- http://localhost:3000/records/thriller
- http://localhost:3000/records/rumours

Cover demo memakai placeholder online; internet diperlukan untuk melihatnya.
