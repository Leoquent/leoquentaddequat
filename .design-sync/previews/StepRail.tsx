import React from "react";
import { StepRail } from "leoquent-addequat-brand";

const steps = [
    { number: "01", title: "Analyse" },
    { number: "02", title: "Architektur" },
    { number: "03", title: "Entwicklung" },
    { number: "04", title: "Betrieb" },
];

export const InArbeit = () => (
    <div style={{ background: "#FFFFFF", padding: "2rem", maxWidth: 480 }}>
        <StepRail steps={steps} activeStep={1} />
    </div>
);

export const Abgeschlossen = () => (
    <div style={{ background: "#FFFFFF", padding: "2rem", maxWidth: 480 }}>
        <StepRail steps={steps} activeStep={3} />
    </div>
);

export const Startzustand = () => (
    <div style={{ background: "#FFFFFF", padding: "2rem", maxWidth: 480 }}>
        <StepRail steps={steps} activeStep={-1} />
    </div>
);
