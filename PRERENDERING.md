# Static prerendering

The site now generates a static HTML document for each route during the production build, then hydrates that HTML in the browser.

## Build

```bash
npm install
npm run build
npm run preview
```

The build runs these steps:

1. Type-check the application.
2. Build the browser assets with Vite.
3. Build the server-only React rendering entry into `dist-server/`.
4. Render every route listed in `src/pages/pageIndex.tsx` into `dist/`.
5. Generate a root-level `404.html`.

The `dist-server/` directory is a temporary build artifact. Cloudflare Pages should continue to publish `dist/` only.

## Public site URL, canonical URLs and sitemap

Set `SITE_URL` to the public origin in the build environment, without a trailing slash. For example:

```bash
SITE_URL=https://www.example.com npm run build
```

When `SITE_URL` is set, the build adds a canonical URL and Open Graph URL to each prerendered page, and generates `dist/sitemap.xml` and `dist/robots.txt`.

Set this to the real production domain only after that domain is configured to serve this Cloudflare Pages project. Do not use the temporary `pages.dev` address as the canonical origin if the custom domain is intended to be the public website.

## Route SEO metadata

Edit the `seo` object for each route in `src/pages/pageIndex.tsx`. Each route supports:

- `title`
- `description`
- `noIndex` (optional; emits `noindex,follow` and excludes the route from the sitemap)

Project-page titles and descriptions are generated from `websiteProjects`.

## Browser rendering and animation runtime

The browser entry uses `hydrateRoot` when prerendered markup exists. Vite development uses `createRoot` when the root is empty.

`AppRoutes` does not access `window` during its initial render. The RE-Codebase transition controller is attached in an effect after hydration. The navbar and transition masks are rendered as part of the React tree rather than through `document.body` portals, so their markup is included in prerendered HTML.
