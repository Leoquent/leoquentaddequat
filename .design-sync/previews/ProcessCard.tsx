import React from "react";
import { ProcessCard } from "leoquent-addequat-brand";

export const Sequenz = () => (
    <div style={{ background: "#FFFFFF", maxWidth: 560, border: "1px solid #1A1A1A", borderTop: 0 }}>
        <ProcessCard number="01" title="Analyse">
            Wir identifizieren Ihre Flaschenhälse und ungenutzte Potenziale in einer tiefen,
            kostenlosen Potenzialanalyse.
        </ProcessCard>
        <ProcessCard number="02" title="Architektur">
            Wir entwerfen die maßgeschneiderte Blaupause für Ihr System – ausgelegt für minimale
            Latenz und höchste Sicherheit.
        </ProcessCard>
        <ProcessCard number="03" title="Entwicklung" pending>
            Wir programmieren, testen und iterieren Ihre autonome Lösung in enger Abstimmung mit
            Ihnen.
        </ProcessCard>
    </div>
);

export const EinzelnerSchritt = () => (
    <div style={{ background: "#FFFFFF", maxWidth: 560, border: "1px solid #1A1A1A", borderTop: 0 }}>
        <ProcessCard number="04" title="Betrieb">
            Integration, dediziertes Hosting, ständige Wartung &amp; Updates. Sie erhalten ein
            schlüsselfertiges System. Dauerhaft.
        </ProcessCard>
    </div>
);
