# design-sync notes — leoquent-addequat-brand

- This repo is a Next.js marketing site, NOT a component library. The design system
  was **extracted** from the site into `design-system/` (src + docs + plain CSS with
  `--la-*` tokens / `la-*` classes). `app/page.tsx` + `app/globals.css` remain the
  visual source of truth — if the site design changes, update `design-system/src/`
  to match before re-syncing.
- Build: `./node_modules/.bin/tsc -p design-system/tsconfig.json` (from repo root)
  → `design-system/dist/` (ESM + .d.ts). React 19 lives in the repo root
  `node_modules`; pass `--node-modules ./node_modules` and
  `--entry ./design-system/dist/index.js`.
- Components use plain CSS (no Tailwind dependency) so the bundle is fully
  self-contained. The site itself uses Tailwind v4 — class names intentionally
  differ (`la-*` prefix).
- Fonts: the site really only loads **Inter** (next/font). `font-mono` on the site
  falls back to the system monospace stack; the DS mirrors that
  (`--la-font-mono: ui-monospace, …`). Inter is a remote Google Fonts `@import`
  in `src/styles.css` → validate prints `[FONT_REMOTE]`, which is informational.
- No provider needed — all components are self-contained (CSS only, one useState
  in Accordion).
- Session context: first sync ran in a headless session where claude.ai/design
  authorization was unavailable, so the bundle was built and verified locally
  but never uploaded. A follow-up interactive session ran `/design-login`,
  created the project, and pushed all 12 components in one pass (everything
  was already verified, so there was no batching — one push, then close-out).
  Project: **"leoquent & addequat BRAND"** — `projectId` pinned in
  `.design-sync/config.json`. https://claude.ai/design/p/6c97c0ba-5dbf-4fd8-9f68-ab86970d8a2d

## Known gaps (user-reported, 2026-07-09)

- **Logo not carried over.** The site's actual logo is `public/logo.png` (a
  `mask-image`-based mark, colored via `bg-lime`/`bg-vanta` — see `app/page.tsx`
  `<nav>`). `NavBar.tsx` in the extracted design system only renders a **text
  wordmark** ("leoquent & addequat" with a lime "&") — it never references the
  image. Fix for a future re-sync: add a `logoUrl`/`logoSrc` prop to `NavBar`
  that renders the masked logo image (mirror the site's
  `WebkitMaskImage`/`maskImage` technique so it recolors with `tone`), copy
  `public/logo.png` into `design-system/assets/`, and wire it as the default.
  User's verdict on the rest of the sync: good, this was the one visible gap.

## Re-sync risks

- The extracted components can drift from the live site — nothing enforces parity
  between `design-system/src/` and `app/page.tsx`. Diff visually against the site
  when the site's look changes.
- NavBar ships without the real logo mark (see "Known gaps" above) until that's
  fixed — any design built with this DS will show the text wordmark only.
- Inter is fetched from Google Fonts at runtime (remote @import) — offline render
  environments will show fallback sans.
- Accordion previews rely on `defaultOpen` for the open state; hover states
  (FeatureCard, ProfileCard) are frozen via their `active`/`expanded` props in
  previews — the CSS `:hover` path itself is not machine-verified.
