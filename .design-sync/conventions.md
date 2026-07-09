# leoquent & addequat — build conventions

**Brand in one line:** brutalist editorial B2B — vanta-black surfaces, acid-lime accents, hard 0px corners everywhere, mono uppercase micro-labels, German copy that is short and imperative.

## Setup

No provider needed — every component is self-contained. Give each page/screen the base class so font and selection color apply:

```tsx
<div className="la-page" style={{ minHeight: "100vh" }}>…</div>
```

`la-page` sets `background: var(--la-vanta)` and Inter. Sections alternate between dark (`var(--la-vanta)`, `#080808`) and plain white; separate sections with `1px solid var(--la-gridline)` borders, never with shadows or rounded corners.

## Styling idiom

Style your own layout glue with **inline styles or small CSS using these tokens** (defined in `styles.css`):

| Token | Value | Use |
|---|---|---|
| `--la-vanta` | `#050505` | page + section background |
| `--la-surface` / `--la-surface-2` | `#080808` / `#0a0a0a` | raised dark surfaces, cards |
| `--la-lime` | `#CCFF00` | CTAs, highlights, active states — always with dark text on top, never lime text on white |
| `--la-gridline` | `#1A1A1A` | all borders |
| `--la-bone` | `#EAEAEA` | body text on dark |
| `--la-bone-70` / `--la-bone-60` | rgba bone | secondary text on dark (contrast-safe) |
| `--la-mute` | `#666666` | secondary text on white only |
| `--la-font-sans` | Inter | everything |
| `--la-font-mono` | system mono | labels, buttons, badges, numbers |
| `--la-ease-out` | cubic-bezier(0.16,1,0.3,1) | all reveals/transitions |

Typography utility classes you may use directly: `la-hero-headline` (clamp 900 uppercase), `la-headline` (clamp 800 uppercase), `la-kicker` (12px mono uppercase), `la-intro` (muted 14px light). Headlines break deliberately with `<br />` and end with a period.

**Hard rules:** no border-radius, no drop shadows (the only shadow is the Button's lime glitch offset), no gradients except the ProfileCard photo overlay, dark-text-on-lime always.

## Where the truth lives

Read `styles.css` (all tokens + every `la-*` class) and each component's `.prompt.md` before styling. Components: Button, Marker, Badge, SectionHeader, Ticker, Accordion, FeatureCard, ProcessCard, StepRail, NavBar, Footer, ProfileCard — all on `window.LABrand`.

## Idiomatic section

```tsx
<div className="la-page">
  <NavBar tone="dark"
    links={[{ label: "Solutions", href: "#solutions" }, { label: "Prozess", href: "#prozess" }]}
    action={<Button size="sm">Potenzial analysieren</Button>} />
  <section style={{ padding: "5rem 2.5rem", borderBottom: "1px solid var(--la-gridline)" }}>
    <SectionHeader kicker="Solutions" tone="dark"
      intro="Wir bauen exakt die Lösung, die Ihr Problem löst.">
      Ihre Logik.<br />Unser Code.
    </SectionHeader>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, marginTop: "3rem" }}>
      <FeatureCard title="Autonome Agenten" badges={["Workflow-Automation", "Datenpflege"]}>
        Intelligente KI-Mitarbeiter, die Routineaufgaben eigenständig erledigen – 24/7.
      </FeatureCard>
      <FeatureCard title="Custom Development" badges={["CRM-Systeme", "Dashboards"]} active>
        Wir programmieren exakt die Software, die Ihr Problem löst.
      </FeatureCard>
    </div>
  </section>
  <Footer links={[{ label: "Impressum", href: "#" }]}>© 2026 leoquent &amp; addequat.</Footer>
</div>
```

Hover states can't be shown statically — freeze them with `active` (FeatureCard) / `expanded` (ProfileCard) / `defaultOpen` (Accordion) when a mockup needs the open/lime state.
