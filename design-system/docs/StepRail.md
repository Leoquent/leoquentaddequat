---
category: Interactive
---

Horizontal progress rail for multi-step flows on white: 2px bars fill lime as steps complete; the step number becomes a lime chip.

```tsx
<StepRail
  activeStep={1}
  steps={[
    { number: "01", title: "Analyse" },
    { number: "02", title: "Architektur" },
    { number: "03", title: "Entwicklung" },
    { number: "04", title: "Betrieb" },
  ]}
/>
```

- Pairs with ProcessCard: the rail shows position, the cards show content.
- `activeStep={-1}` renders the untouched state.
