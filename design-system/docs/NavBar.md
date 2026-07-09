---
category: Navigation
---

Top bar: brand wordmark with lime ampersand, 10px mono uppercase links, CTA slot right.

```tsx
<NavBar
  tone="dark"
  links={[
    { label: "Status Quo", href: "#status-quo" },
    { label: "Solutions", href: "#solutions" },
    { label: "Prozess", href: "#prozess" },
  ]}
  action={<Button size="sm">Potenzial analysieren</Button>}
/>
```

- `light` is the over-hero state (white bar, dark text); `dark` the scrolled state.
- The "&" in `brand` is automatically rendered in lime.
