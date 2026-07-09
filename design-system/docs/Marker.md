---
category: Typography
---

The acid-lime highlighter pen stroke — the brand's most recognizable element. Dark text on a skewed lime block.

```tsx
<p className="la-kicker"><Marker>Status Quo</Marker></p>
<h1 className="la-hero-headline">KI-Systeme, die Ihre <Marker>Arbeit machen.</Marker></h1>
<p>Wir bauen <Marker variant="chip">autonome Architekturen</Marker> für den Mittelstand.</p>
```

- `highlighter` (default) is single-line only — keep it to a few words.
- `chip` is a plain solid-lime block that can wrap; use it for inline emphasis in body copy.
- Always dark text on lime — never lime text on white (contrast).
