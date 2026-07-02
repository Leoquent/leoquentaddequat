# Handover für die Coding-KI — leoquent & addequat

Kurzbriefing: Was geändert wurde, wo es liegt, wie man den Build testet, plus offene manuelle Schritte.
Stack: **Next.js 15 (App Router), React 19, Tailwind v4, GSAP**. Marketing-Site liegt komplett in `app/page.tsx` (`"use client"`). Details siehe `CLAUDE.md`.

---

## 1. Auftrag an dich (Coding-KI)

1. `npm install` ausführen (installiert u. a. das plattformspezifische SWC-Binary).
2. **Erst die Build-Blocker-Entscheidung unten (Abschnitt 4) umsetzen** — sonst schlägt der Build fehl.
3. `./node_modules/.bin/next build` laufen lassen (lokales Binary, **nicht** `npx`).
4. Erwartetes Ergebnis: Build ohne Fehler, Ordner `out/` wird erzeugt, enthält `index.html`, `impressum/`, `datenschutz/`, `robots.txt`, `sitemap.xml`, `og-image.png`, Icons.
5. Zusätzlich zur Sicherheit: `./node_modules/.bin/tsc --noEmit` (muss 0 Fehler zeigen — TS-Fehler brechen den Build). ESLint ist im Build absichtlich deaktiviert (`eslint.ignoreDuringBuilds: true`), läuft aktuell aber auch sauber.

---

## 2. Was geändert/neu ist (Dateikarte)

**Geändert:**
- `app/page.tsx` — Foto-Refs auf `.webp`; Tastatur-A11y (role/tabIndex/aria/onKeyDown) an Accordions & Team-Karten; `next/head`-Import entfernt; GSAP `matchMedia`-Leak behoben (nur noch eine Instanz); Reduced-Motion-Fallback im Typewriter; Footer-Links auf `/impressum/` & `/datenschutz/`; JSX-Kommentar-Lintfehler behoben.
- `components/QuizModal.tsx` — **Formular sendet jetzt via Web3Forms** an info@lunda-ki.de (statt `/api/analyse`); sendet alle Felder inkl. „maturity"; **Erfolgs-Screen** (Danke + Calendly) und **Fehler-/Retry-Zustand**.
- `app/layout.tsx` — Open-Graph/Twitter-Metadaten, `metadataBase`, Canonical, Markenname „leoquent & addequat".
- `app/globals.css` — `@media (prefers-reduced-motion: reduce)`-Block (Marquee/Pulse/Transitions ruhig).
- `metadata.json` — Marke.
- `package.json` — `motion` und `@google/genai` (ungenutzt) entfernt.
- `.env.example` — neue Variablen (siehe Abschnitt 3).
- `app/api/analyse/route.ts` — nur Marken-Strings angepasst (**siehe Build-Blocker, Abschnitt 4**).

**Neu:**
- `app/impressum/page.tsx`, `app/datenschutz/page.tsx` — Rechtstexte mit `[Platzhaltern]` (müssen von den Gründern gefüllt werden).
- `app/robots.ts`, `app/sitemap.ts` — statisch generiert.
- `app/icon.svg` (Favicon, serifiges „&" lime auf vanta), `app/apple-icon.png`.
- `public/og-image.png` (1200×630 Social-Preview).
- `public/FOTOS/leonid_v4.webp`, `public/FOTOS/admir_v2.webp` (~60 KB statt 6,4 MB).

**Gelöscht:** `components/AnalyseFunnel.tsx` (toter Code), 4 ungenutzte Fotos + doppelter Top-Level-`FOTOS/`-Ordner, alle alten `.png`-Fotos in `public/FOTOS/`.

---

## 3. Env-Variablen (in `.env.local` und in der Deploy-Umgebung setzen)

```
NEXT_PUBLIC_WEB3FORMS_KEY="<access key von web3forms.com für info@lunda-ki.de>"
NEXT_PUBLIC_SITE_URL="https://lunda-ki.de"
# Nur wenn basePath genutzt wird (GitHub Project Pages):
NEXT_PUBLIC_BASE_PATH="/leoquentaddequat"
```
Ohne `NEXT_PUBLIC_WEB3FORMS_KEY` baut die Seite zwar, aber das Formular sendet nicht.

---

## 4. ⚠️ BUILD-BLOCKER: `output: 'export'` + `/api/analyse`

`app/api/analyse/route.ts` ist ein **POST-Route-Handler mit `req.json()`**. Das ist mit `output: 'export'` (statischer Export, `next.config.ts`) **nicht kompatibel** → `next build` bricht ab. Das Formular nutzt diese Route **nicht mehr** (jetzt Web3Forms). Wähle einen Weg:

### Weg A — Statisch bleiben (GitHub Pages) — EMPFOHLEN, schnellster Launch
1. **`app/api/analyse/route.ts` löschen** (Ordner `app/api/` mit entfernen). Leads laufen über Web3Forms an info@lunda-ki.de.
2. `NEXT_PUBLIC_WEB3FORMS_KEY` + `NEXT_PUBLIC_SITE_URL` setzen; wenn GitHub Project Pages: `NEXT_PUBLIC_BASE_PATH=/leoquentaddequat` (muss zum `basePath` in `next.config.ts` passen).
3. `next build` → sollte sauber durchlaufen.
> Bei eigener Domain lunda-ki.de: `basePath`/`assetPrefix` `/leoquentaddequat` in `next.config.ts` **entfernen** (sonst liegen alle Assets fälschlich unter `/leoquentaddequat/`).

### Weg B — Eigener Mailserver (Strato) → braucht Node-Host (z. B. Vercel)
Wenn ihr **selbst über euren Strato-Server senden** wollt (gebrandeter Absender, Autoresponder):
1. In `next.config.ts` **`output: 'export'` entfernen** (und `basePath`/`assetPrefix`, falls eigene Domain) → normaler `next build`, der POST-Routen unterstützt.
2. `route.ts` behalten und den Nodemailer-Transport auf Strato umstellen (Abschnitt 5).
3. Auf Vercel deployen, Env-Vars dort setzen.

---

## 5. Strato-Mailserver konfigurieren (nur Weg B)

Strato-SMTP-Daten (Stand 2026): **Host `smtp.strato.de`, Port `465`, SSL/TLS, Auth = volle E-Mail-Adresse + Postfach-Passwort.**

In `app/api/analyse/route.ts` den Transport ersetzen:
```ts
const transporter = nodemailer.createTransport({
  host: "smtp.strato.de",
  port: 465,
  secure: true, // SSL/TLS
  auth: {
    user: process.env.STRATO_MAIL_USER,      // z. B. info@lunda-ki.de
    pass: process.env.STRATO_MAIL_PASSWORD,  // Postfach-Passwort
  },
});
```
Wichtig:
- **`from:` muss die authentifizierte Adresse sein** (`info@lunda-ki.de`) — Strato lehnt fremde Absender ab. In beiden `sendMail`-Aufrufen das `from` auf `"leoquent & addequat" <info@lunda-ki.de>` setzen.
- Env-Vars: `STRATO_MAIL_USER`, `STRATO_MAIL_PASSWORD`.
- Für Zustellbarkeit (nicht im Spam): **SPF, DKIM, DMARC** für `lunda-ki.de` im Strato-DNS setzen.
- Damit funktioniert dann auch die Lead-Bestätigungs-Mail an den Interessenten (bereits in `route.ts` angelegt, mit Calendly-Link).

> Nur Leads **empfangen** (nicht selbst senden)? Dann reicht Weg A: Web3Forms stellt die Mail an das Strato-Postfach `info@lunda-ki.de` zu — dafür ist keine SMTP-Konfiguration nötig, nur das Postfach bei Strato anlegen.

---

## 6. Bekannte Umgebungs-Constraints
- Node 20, `npm ci`/`npm install` nötig (SWC-Binary plattformabhängig).
- TS-Fehler brechen den Build; ESLint nicht (absichtlich).
- Deploy aktuell via `.github/workflows/deploy.yml` (GitHub Pages, setzt `NEXT_PUBLIC_BASE_PATH`). Bei Weg B (Vercel) Workflow anpassen/ersetzen.

---

## 7. Restliche manuelle To-dos (Menschen, nicht Code)
Siehe `LAUNCH_CHECKLIST.md` — v. a. Web3Forms-Key holen, Impressum/Datenschutz-Platzhalter füllen (ladungsfähige Anschrift = i. d. R. Privatadresse; USt-IdNr später), Hosting/Domain-Entscheidung.
