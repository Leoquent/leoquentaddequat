---
category: Cards
---

The signature hover-invert card: vanta at rest, floods solid lime on hover while the description slides up from below. Use in 2-up grids with shared gridline borders.

```tsx
<FeatureCard
  title="Autonome Agenten"
  badges={["Workflow-Automation", "Dokumenten-Verarbeitung", "Kunden-Kommunikation"]}
>
  Intelligente KI-Mitarbeiter, die Routineaufgaben eigenständig erledigen – 24/7, fehlerfrei.
</FeatureCard>
```

- `active` forces the lime state — use it for static mockups and touch layouts where hover doesn't exist.
- Titles are short and uppercase-set by the card; badges list 3–5 capabilities.
