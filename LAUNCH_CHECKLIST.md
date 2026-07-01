# Launch-Checkliste — leoquent & addequat

Status nach der Code-Überarbeitung. Verifiziert mit `tsc --noEmit` (0 Fehler) und `eslint` (0 Fehler).
Ein vollständiger `next build` konnte in der Offline-Umgebung nicht laufen (SWC-Binary nicht ladbar) — **bitte lokal einmal `./node_modules/.bin/next build` ausführen**, bevor du deployst.

---

## ✅ Erledigt (im Code umgesetzt)

- **Lead-Formular funktioniert jetzt ohne Server.** `QuizModal` sendet die Anfrage per **Web3Forms** an **info@lunda-ki.de**. Alle Antworten werden übermittelt (inkl. der vorher verlorenen Felder „KI-Reife" & Branche). Es gibt jetzt einen **Erfolgs-Screen** („Danke, wir melden uns" + Calendly-Button) und einen **Fehler-/Retry-Zustand** — keine stillen Verluste mehr.
- **Marken-Schreibweise vereinheitlicht** auf „leoquent & addequat" (Titel, Metadaten, `metadata.json`, E-Mail-Route).
- **Impressum & Datenschutz** als echte Seiten angelegt (`/impressum`, `/datenschutz`), im Footer verlinkt (vorher tote `#`-Links).
- **Bilder optimiert:** die zwei genutzten Fotos → WebP (**je ~60 KB statt 6,4 MB**), auf 1120px skaliert. Vier ungenutzte Fotos + doppelter `FOTOS`-Ordner gelöscht (**~38 MB → ~120 KB**). Code-Referenzen auf `.webp` umgestellt.
- **Open Graph / Social-Preview:** `og:image` (1200×630, on-brand), OG- & Twitter-Metadaten, `metadataBase`, Canonical in `layout.tsx`. Link-Vorschau auf LinkedIn zeigt jetzt eine Titelkarte.
- **Favicon** (`app/icon.svg` — serifiges „&" in Limegrün auf Vanta) + **Apple-Touch-Icon** (`app/apple-icon.png`).
- **robots.txt & sitemap.xml** via `app/robots.ts` und `app/sitemap.ts`.
- **Toter Code/Deps entfernt:** `AnalyseFunnel.tsx` gelöscht, ungenutzter `next/head`-Import raus, `motion` & `@google/genai` aus `package.json`.
- **GSAP-Leak behoben:** nur noch eine `matchMedia`-Instanz (wird sauber revertet).
- **Accessibility:** Accordions & Team-Karten sind jetzt per Tastatur bedienbar (`role`, `tabIndex`, `aria-expanded`/`aria-pressed`, Enter/Space).
- **Reduced-Motion:** Typewriter, Marquee, Pulse & Co. werden bei `prefers-reduced-motion` ruhiggestellt.
- **ESLint sauber:** der `//`-Textknoten-Fehler ist behoben.

---

## ⚠️ Von dir noch manuell zu erledigen (vor dem Launch)

1. **Web3Forms-Key holen** (2 Min, kostenlos): auf [web3forms.com](https://web3forms.com) `info@lunda-ki.de` eintragen, bestätigen, Access-Key kopieren → als `NEXT_PUBLIC_WEB3FORMS_KEY` setzen (lokal in `.env.local` **und** in der Deploy-Umgebung / GitHub-Actions-Env). **Ohne Key sendet das Formular nicht.**
2. **Impressum ausfüllen** (`app/impressum/page.tsx`): echte Namen, **ladungsfähige Anschrift** (bei Homeoffice i. d. R. die Privatadresse — ein Postfach reicht rechtlich nicht), optional Telefon. USt-IdNr sobald erteilt ergänzen. Zur Rechtsform siehe Antwort im Chat.
3. **Datenschutz prüfen** (`app/datenschutz/page.tsx`): an die real genutzten Dienste anpassen (Hosting-Name eintragen) und idealerweise mit Generator (eRecht24) oder Anwalt gegenprüfen.
4. **Hosting/Domain-Entscheidung** — betrifft `basePath` & Preview-URLs:
   - **Eigene Domain lunda-ki.de** (empfohlen): in `next.config.ts` den `basePath`/`assetPrefix` `/leoquentaddiquat` **entfernen** und `NEXT_PUBLIC_SITE_URL=https://lunda-ki.de` setzen.
   - **GitHub Project Pages** (username.github.io/leoquentaddiquat): `basePath` behalten, aber `NEXT_PUBLIC_SITE_URL` auf die github.io-URL setzen.
   - In beiden Fällen `NEXT_PUBLIC_SITE_URL` in der GitHub-Actions-Build-Env ergänzen (aktuell fehlt sie), damit OG-Bild, Canonical & Sitemap absolute, korrekte URLs bekommen.
5. **Lokalen Build testen:** `./node_modules/.bin/next build` — bestätigt, dass Export inkl. robots/sitemap/Icons sauber durchläuft.

---

## ℹ️ Hinweise

- Die alte Server-Route `app/api/analyse/route.ts` (Gmail SMTP) bleibt im Code, wird auf statischem Hosting aber **nicht** genutzt. Sie ist nützlich, falls ihr später auf **Vercel** umzieht — dann funktioniert sie sofort (Env-Vars in `.env.example`).
- Die Marken-Schreibweise steht jetzt überall auf „leoquent & addequat" (klein). Falls doch „Addiquat" gewünscht ist, ist das ein globaler Such-/Ersetzen-Vorgang.
