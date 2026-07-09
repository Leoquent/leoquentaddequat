import React from "react";
import { ProfileCard } from "leoquent-addequat-brand";

// Self-contained portrait stand-in (real team photos live in the site repo)
const placeholderPortrait =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='600'%3E%3Crect width='400' height='600' fill='%23262626'/%3E%3Ccircle cx='200' cy='210' r='85' fill='%23404040'/%3E%3Crect x='75' y='320' width='250' height='280' rx='24' fill='%23404040'/%3E%3C/svg%3E";

export const Aufgeklappt = () => (
    <div style={{ maxWidth: 420 }}>
        <ProfileCard
            name="Leonid"
            role="The Architect of Intent"
            quote="Übersetzt tiefe Geschäftsbedürfnisse in präzise Sprachlogik und Workflows."
            imageUrl={placeholderPortrait}
            expanded
        >
            Als Senior Copywriter und Konzeptioner in internationalen Agenturnetzwerken hat er
            gelernt: Strategie ohne Kreativität ist eine Tabelle. Kreativität ohne Strategie ist
            Dekoration. Er vereint beides.
        </ProfileCard>
    </div>
);

export const Ruhezustand = () => (
    <div style={{ maxWidth: 420 }}>
        <ProfileCard
            name="Admir"
            role="The Guardian of Execution"
            quote="Verwandelt Konzepte in produktionsreifen Code."
            imageUrl={placeholderPortrait}
        >
            Als IT-Berater hat er Projekte für den Mittelstand gerettet, die vor dem Aus standen.
        </ProfileCard>
    </div>
);
