# Building the static site

The published HTML remains fully static and works without JavaScript for content access. Shared header and footer markup live in `components/` and are copied into each substantive page at build time.

After changing either component or page metadata, run:

```powershell
node scripts/build.mjs
python scripts/generate-social-card.py
node scripts/validate.mjs
```

`scripts/build.mjs` also:

- adds the global navigation script consistently;
- generates Open Graph, Twitter Card, favicon, and Schema.org metadata;
- marks placeholder pages `noindex, follow`;
- removes placeholder pages from `sitemap.xml`; and
- normalizes the homepage canonical URL.

`scripts/validate.mjs` checks generated metadata, JSON-LD syntax, duplicate IDs, and every local link and fragment.

Commit the generated HTML, sitemap, and social card with the source changes so GitHub Pages can publish the directory directly.
