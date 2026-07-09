import React from "react";
import { Accordion } from "leoquent-addequat-brand";

export const BranchenListe = () => (
    <div style={{ background: "#050505", padding: "2rem", maxWidth: 480 }}>
        <Accordion
            defaultOpen={0}
            items={[
                {
                    title: "Gesundheit",
                    content:
                        "Weniger Dokumentationsaufwand. Mehr Zeit für Patienten. Unsere lokalen KI-Systeme unterstützen Praxen bei Dokumentation, Informationsaufbereitung und administrativen Abläufen.",
                },
                {
                    title: "Handwerk",
                    content: "Weniger Bürokratie. Mehr Zeit für Baustelle und Kunden.",
                },
                {
                    title: "Logistik",
                    content: "Mehr Überblick im Tagesgeschäft. Schnellere Reaktion bei Störungen.",
                },
            ]}
        />
    </div>
);

export const Geschlossen = () => (
    <div style={{ background: "#050505", padding: "2rem", maxWidth: 480 }}>
        <Accordion
            defaultOpen={null}
            items={[
                { title: "KI-Strategie", content: "Von der ersten Idee bis zur fertigen Roadmap." },
                { title: "Autonome Agenten", content: "Intelligente KI-Mitarbeiter, 24/7, fehlerfrei." },
                { title: "System-Integration", content: "Nahtloser Datenfluss zwischen Ihren Tools." },
            ]}
        />
    </div>
);
