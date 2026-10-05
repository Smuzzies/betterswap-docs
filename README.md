# betterswap-docs

Source for [docs.betterswap.io](https://docs.betterswap.io). Pages are React components in `app/<route>/page.tsx`, rendered to plain static HTML at build time; the site ships no client-side JavaScript.

```bash
bun install
bun run dev     # http://localhost:3000, rebuilds on change
bun run build   # writes the static site to dist/
```

- Add a page: create `app/<route>/page.tsx` (export `metadata` and a default component) and list it in `components/nav.tsx`.
- Styling: Tailwind v4, theme in `styles/globals.css` (palette from betterswap.io).
- Deploy: `docker compose up -d --build` builds `dist/` and serves it with nginx (port 80) on the external `caddy` network; Caddy proxies `docs.betterswap.io` to `betterswap-docs:80`. See `nginx.conf` for headers, caching and redirects.
