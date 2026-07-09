---
category: Interactive
---

Dark rows divided by gridlines; the open row floods solid lime with dark text and its "+" rotates to "×". One row open at a time.

```tsx
<Accordion
  defaultOpen={0}
  items={[
    { title: "Gesundheit", content: "Weniger Dokumentationsaufwand. Mehr Zeit für Patienten. Unsere lokalen KI-Systeme unterstützen Praxen bei Dokumentation und Abläufen." },
    { title: "Handwerk", content: "Weniger Bürokratie. Mehr Zeit für Baustelle und Kunden." },
    { title: "Logistik", content: "Mehr Überblick im Tagesgeschäft. Schnellere Reaktion bei Störungen." },
  ]}
/>
```

- Used for the mobile Branchen and Solutions lists.
- `defaultOpen={null}` starts fully collapsed.
