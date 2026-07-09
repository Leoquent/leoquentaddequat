---
category: Typography
---

Every section opens with this pattern: lime Marker kicker, 800-weight uppercase fluid headline, optional muted intro.

```tsx
<SectionHeader kicker="Solutions" tone="dark"
  intro="Egal ob bestehende Systeme vernetzen oder neue Software entwickeln – wir bauen exakt die Lösung, die Ihr Problem löst.">
  Ihre Logik.<br />Unser Code.
</SectionHeader>

<SectionHeader kicker="Prozess" tone="light">
  Unser Weg zu<br />Ihrer Lösung.
</SectionHeader>
```

- Headlines use deliberate `<br />` breaks and end with a period. Two short lines beat one long one.
- `tone` must match the section background: `dark` on vanta, `light` on white.
