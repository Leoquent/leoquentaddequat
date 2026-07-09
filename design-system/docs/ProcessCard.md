---
category: Cards
---

One step of the process timeline on white: mono number in a lime chip, uppercase title, muted description. Stack for the full sequence.

```tsx
<ProcessCard number="01" title="Analyse">
  Wir identifizieren Ihre Flaschenhälse und ungenutzte Potenziale in einer tiefen, kostenlosen Potenzialanalyse.
</ProcessCard>
<ProcessCard number="02" title="Architektur" pending>
  Wir entwerfen die maßgeschneiderte Blaupause für Ihr System.
</ProcessCard>
```

- `pending` dims a step that hasn't been reached in a scroll/step sequence.
- Numbers are zero-padded strings ("01"–"04").
