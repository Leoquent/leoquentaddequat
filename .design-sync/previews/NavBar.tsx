import React from "react";
import { NavBar, Button } from "leoquent-addequat-brand";

const links = [
    { label: "Status Quo", href: "#status-quo" },
    { label: "Solutions", href: "#solutions" },
    { label: "Prozess", href: "#prozess" },
    { label: "Branchen", href: "#branchen" },
];

export const DunkelGescrollt = () => (
    <div style={{ width: "100%" }}>
        <NavBar tone="dark" links={links} action={<Button size="sm">Potenzial analysieren</Button>} />
    </div>
);

export const HellUeberHero = () => (
    <div style={{ width: "100%" }}>
        <NavBar tone="light" links={links} action={<Button variant="dark" size="sm">Analyse</Button>} />
    </div>
);
