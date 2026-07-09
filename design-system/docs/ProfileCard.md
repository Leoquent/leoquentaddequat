---
category: Cards
---

Team member card: full-bleed photo with name anchored bottom; on hover the photo desaturates, a vanta gradient rises and the lime quote + bio slide up.

```tsx
<ProfileCard
  name="Leonid"
  role="The Architect of Intent"
  quote="Übersetzt tiefe Geschäftsbedürfnisse in präzise Sprachlogik und Workflows."
  imageUrl="/fotos/leonid.webp"
  expanded
>
  Als Senior Copywriter und Konzeptioner hat er gelernt: Strategie ohne Kreativität ist eine Tabelle.
</ProfileCard>
```

- `expanded` forces the hover state for static mockups.
- Works without `imageUrl` as a plain dark card.
