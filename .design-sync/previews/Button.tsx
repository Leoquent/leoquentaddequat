import React from "react";
import { Button } from "leoquent-addequat-brand";

export const VariantenAufDunklem = () => (
    <div style={{ background: "#050505", padding: "2rem", display: "flex", gap: "1.5rem", alignItems: "center", flexWrap: "wrap" }}>
        <Button>Potenzial analysieren</Button>
        <Button variant="outline">Mehr erfahren</Button>
    </div>
);

export const AufWeissem = () => (
    <div style={{ background: "#FFFFFF", padding: "2rem", display: "flex", gap: "1.5rem", alignItems: "center", flexWrap: "wrap" }}>
        <Button>Potenzial kostenlos analysieren</Button>
        <Button variant="dark">Analyse</Button>
    </div>
);

export const Groessen = () => (
    <div style={{ background: "#050505", padding: "2rem", display: "flex", gap: "1.5rem", alignItems: "center", flexWrap: "wrap" }}>
        <Button size="sm">Analyse</Button>
        <Button size="md">Potenzial analysieren</Button>
        <Button size="lg">Jetzt befreien</Button>
    </div>
);

export const VolleBreite = () => (
    <div style={{ background: "#FFFFFF", padding: "2rem", maxWidth: 420 }}>
        <Button block>Potenzial kostenlos analysieren</Button>
    </div>
);
