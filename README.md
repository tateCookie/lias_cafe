# Lía Cafe — Website

A production-ready, bilingual (English / Arabic) website for Lía Cafe (ليا كافيه), Muaither, Doha.

## What's inside

```
lia-cafe/
├── index.html        All page content and markup
├── styles.css         All styling (design tokens at the top)
├── script.js          Language switch (EN/AR + RTL), mobile nav
├── assets/
│   ├── logo-blue.png       Brand-blue logo, transparent background (header + footer)
│   ├── about-us.jpg        The supplied About Us photo
│   └── food/               The 7 supplied food & drink photos, optimized for web
└── README.md
```

No build step, no framework, no dependencies to install — it's plain HTML/CSS/JS.

## Running it locally

Any static file server works. From this folder, run one of:

```bash
python3 -m http.server 8080
# then open http://localhost:8080
```

or simply double-click `index.html` to open it directly in a browser (language switching and layout will work fine either way).

## Publishing it

This is a static site, so it can be deployed to any static host:

- **Netlify / Vercel** — drag-and-drop the `lia-cafe` folder, or connect a Git repo.
- **GitHub Pages** — push this folder to a repo and enable Pages on the `main` branch.
- **Any web host / cPanel** — upload the contents of `lia-cafe/` to your `public_html` (or equivalent) root.

No environment variables or server-side code are required.

## Notes on content

- Hours, location, and links are taken directly from the details provided (Google Maps, Snoonu, Talabat, Instagram). No menu items, prices, reviews, or claims were invented.
- The Arabic copy is a natural, professional translation (not a literal one) and the whole layout mirrors correctly in RTL when Arabic is selected.
- The language switcher remembers the visitor's choice (stored in the browser) between visits.
- Fonts (Fraunces for headings, Inter for English body text, IBM Plex Sans Arabic for Arabic text) load from Google Fonts via the `<link>` in `index.html`'s CSS — this requires the site to have normal internet access once deployed, which it will.

## If you swap in new photos later

Drop replacement JPGs into `assets/food/` and update the matching `<img src="...">` line in `index.html`'s gallery section (each `<figure>` block). The gallery grid automatically stays balanced whether there are 4, 7, or 12 images.
