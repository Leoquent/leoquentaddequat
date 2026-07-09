---
category: Actions
---

The brand CTA button: mono uppercase, hard 0px corners, and the signature "glitch" hover (lime offset shadow, 2px translate). German CTA copy is short and imperative: "Potenzial analysieren", "Jetzt befreien".

```tsx
<Button>Potenzial analysieren</Button>
<Button variant="outline">Mehr erfahren</Button>
<Button variant="dark" size="sm">Analyse</Button>
<Button size="lg">Jetzt befreien</Button>
```

- `primary` (lime) is the one main CTA per view; `outline` for secondary actions on dark sections; `dark` on white sections.
- `block` stretches the button full-width (mobile CTA tiles).
