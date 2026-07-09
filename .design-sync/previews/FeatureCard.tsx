import React from "react";
import { FeatureCard } from "leoquent-addequat-brand";

export const Ruhezustand = () => (
    <div style={{ background: "#050505", padding: "2rem", maxWidth: 520 }}>
        <FeatureCard
            title="Autonome Agenten"
            badges={["Workflow-Automation", "Dokumenten-Verarbeitung", "Kunden-Kommunikation"]}
        >
            Intelligente KI-Mitarbeiter, die Routineaufgaben eigenständig erledigen. Vom
            Call-Center-Agenten bis zur autonomen Terminplanung – 24/7, fehlerfrei.
        </FeatureCard>
    </div>
);

export const AktivLime = () => (
    <div style={{ background: "#050505", padding: "2rem", maxWidth: 520 }}>
        <FeatureCard
            title="Custom Development"
            badges={["CRM-Systeme", "Dashboards", "Planungstools"]}
            active
        >
            Wir programmieren exakt die Software, die Ihr Problem löst – maßgeschneidert auf
            Ihre Geschäftslogik.
        </FeatureCard>
    </div>
);
