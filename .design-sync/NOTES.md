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
  authorization was unavailable (`/design-login` needs an interactive terminal).
  The bundle was built and verified locally; the upload happens via `/design-sync`
  in an interactive `claude` session. No `projectId` could be pinned yet.
  Project name agreed with the user: **"leoquent-addiquat Brand"**.

## Re-sync risks

- The extracted components can drift from the live site — nothing enforces parity
  between `design-system/src/` and `app/page.tsx`. Diff visually against the site
  when the site's look changes.
- Inter is fetched from Google Fonts at runtime (remote @import) — offline render
  environments will show fallback sans.
- Accordion previews rely on `defaultOpen` for the open state; hover states
  (FeatureCard, ProfileCard) are frozen via their `active`/`expanded` props in
  previews — the CSS `:hover` path itself is not machine-verified.
