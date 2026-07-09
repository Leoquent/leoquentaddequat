import React from "react";
import { Marker } from "leoquent-addequat-brand";

export const KickerLabel = () => (
    <div style={{ background: "#050505", padding: "2rem" }}>
        <p className="la-kicker" style={{ margin: 0 }}>
            <Marker>Status Quo</Marker>
        </p>
    </div>
);

export const InHeadline = () => (
    <div style={{ background: "#FFFFFF", padding: "2.5rem" }}>
        <h1 className="la-hero-headline" style={{ fontSize: "3.5rem" }}>
            KI-Systeme,
            <br />
            die Ihre
            <br />
            <Marker>Arbeit machen.</Marker>
        </h1>
    </div>
);

export const ChipImFliesstext = () => (
    <div style={{ background: "#080808", padding: "2rem", maxWidth: 560 }}>
        <p style={{ color: "rgba(234,234,234,0.8)", fontFamily: "'Inter', sans-serif", fontSize: "1rem", lineHeight: 1.625, fontWeight: 300, margin: 0 }}>
            Wir konzipieren und programmieren <Marker variant="chip">autonome Architekturen</Marker>,
            die sich kompromisslos Ihrer Geschäftslogik unterwerfen.
        </p>
    </div>
);
