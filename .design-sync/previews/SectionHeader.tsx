import React from "react";
import { SectionHeader } from "leoquent-addequat-brand";

export const DunkleSektion = () => (
    <div style={{ background: "#050505", padding: "3rem" }}>
        <SectionHeader
            kicker="Solutions"
            tone="dark"
            intro="Egal ob bestehende Systeme intelligent vernetzen oder komplett neue Software entwickeln – wir bauen exakt die Lösung, die Ihr Problem löst."
        >
            Ihre Logik.
            <br />
            Unser Code.
        </SectionHeader>
    </div>
);

export const HelleSektion = () => (
    <div style={{ background: "#FFFFFF", padding: "3rem" }}>
        <SectionHeader
            kicker="Prozess"
            tone="light"
            intro="Transparente Meilensteine von der Analyse bis zum Betrieb. Keine Blackbox."
        >
            Unser Weg zu
            <br />
            Ihrer Lösung.
        </SectionHeader>
    </div>
);

export const OhneIntro = () => (
    <div style={{ background: "#050505", padding: "3rem" }}>
        <SectionHeader kicker="Zukunftssicherheit" tone="dark">
            Der Mittelstand
            <br />
            wird autonom.
        </SectionHeader>
    </div>
);
