import React from "react";
import { Marker } from "./Marker";

export interface SectionHeaderProps {
    /** Kicker label rendered inside the lime Marker ("Status Quo", "Solutions", "Prozess"). */
    kicker?: string;
    /** The section headline. Use `<br />` inside for deliberate line breaks ("Ihre Logik.<br/>Unser Code."). */
    children: React.ReactNode;
    /** Optional intro paragraph rendered under the headline in muted light type. */
    intro?: React.ReactNode;
    /** `dark` for sections on vanta/black, `light` for sections on white. */
    tone?: "dark" | "light";
    /** Additional CSS class. */
    className?: string;
}

/**
 * Standard section opener: a lime Marker kicker on top, an 800-weight
 * uppercase fluid headline below, and an optional muted intro paragraph.
 * Every section of the site starts with this pattern.
 */
export function SectionHeader({
    kicker,
    children,
    intro,
    tone = "dark",
    className = "",
}: SectionHeaderProps) {
    const classes = ["la-section-header", `la-section-header--${tone}`, className]
        .filter(Boolean)
        .join(" ");

    return (
        <header className={classes}>
            {kicker && (
                <p className="la-kicker">
                    <Marker>{kicker}</Marker>
                </p>
            )}
            <h2 className="la-headline">{children}</h2>
            {intro && <p className="la-intro">{intro}</p>}
        </header>
    );
}
