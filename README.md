# ToothTown (React + Vite)

The same site as `toothtown_locations_updated.html`, rebuilt as a React app.

## Run it

You need Node.js 18+ (https://nodejs.org). Then, in this folder:

```
npm install
npm run dev        # opens a local preview (usually http://localhost:5173)
npm run build      # makes the finished site in the "dist" folder
```

Upload the contents of `dist` to your hosting when you are ready.

## Where things are

- `src/data.js` – all the text content (services, FAQs, reviews, locations, links). Edit here.
- `src/pages/` – one file per tab of the site.
- `src/components/` – header, footer, hero slideshow, icons.
- `src/assets/` – logo and the 7 hero photos (they used to be embedded inside the HTML).
- `index.html` – holds the original CSS in a `<style>` block (keep it above the Tailwind script), and loads Tailwind, Font Awesome and the Baloo 2 font from the same CDNs as before.

## Notes

- Tailwind still comes from its CDN script, exactly like the original, so the styling is identical.
- Icons use `lucide-react` (the same Lucide icon set the original loaded from a CDN).
- The scroll-reveal animation now marks visible elements with a `data-in-view` attribute instead of an
  `in-view` class (`.reveal[data-in-view]` in `index.html`). Same look; it just can't be overwritten by React.

## Languages (English / العربية)

- The header has a language button (globe icon). The choice is remembered on the visitor's device.
- All Arabic text lives in `src/i18n/ar.js` — each line is `"English text": "Arabic text"`. Edit the Arabic there.
  If you add new English text to the site, wrap it in `t("...")` and add its Arabic line to that file.
- `src/rtl.css` holds the right-to-left layout fixes (only active in Arabic).
- Font: Baloo 2 has no Arabic letters, so Arabic uses **Baloo Bhaijaan 2**, the Arabic version of the same Baloo family.
- The ToothTown logo / wordmark and customer reviews are kept as written (review dates and buttons are translated).

## WhatsApp button

`src/components/WhatsAppButton.jsx` (+ `.css`) is the round green button fixed to the right side of every page.
Its link is the `HOTLINE_WHATSAPP_URL` constant at the top of that file.
