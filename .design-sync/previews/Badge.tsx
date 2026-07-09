import React from "react";
import { Badge } from "leoquent-addequat-brand";

export const AufDunklem = () => (
    <div style={{ background: "#050505", padding: "2rem", display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
        <Badge>Workflow-Automation</Badge>
        <Badge>Dokumenten-Verarbeitung</Badge>
        <Badge>Kunden-Kommunikation</Badge>
        <Badge>Datenpflege</Badge>
    </div>
);

export const Invertiert = () => (
    <div style={{ background: "#CCFF00", padding: "2rem", display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
        <Badge variant="inverted">CRM-Systeme</Badge>
        <Badge variant="inverted">Dashboards</Badge>
        <Badge variant="inverted">API-Vernetzung</Badge>
    </div>
);
