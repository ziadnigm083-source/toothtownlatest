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
