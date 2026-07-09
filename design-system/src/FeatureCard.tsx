import React from "react";
import { Badge } from "./Badge";

export interface FeatureCardProps {
    /** Card title ("KI-Strategie", "Autonome Agenten"). */
    title: string;
    /** Capability tags rendered as Badge chips under the title. */
    badges?: string[];
    /** Description that slides up from the bottom on hover. */
    children: React.ReactNode;
    /** Force the hovered (lime) state — for static contexts and touch devices. */
    active?: boolean;
    /** Additional CSS class. */
    className?: string;
}

/**
 * The signature hover-invert card: vanta-black at rest, floods solid lime on
 * hover while the description slides up from below the fold. Title flips to
 * dark, badges invert. Used for the Solutions grid; works in 2-up grids.
 */
export function FeatureCard({
    title,
    badges = [],
    children,
    active = false,
    className = "",
}: FeatureCardProps) {
    return (
        <div className={`la-feature-card ${active ? "la-feature-card--active" : ""} ${className}`.trim()}>
            <h3 className="la-feature-card__title">{title}</h3>
            {badges.length > 0 && (
                <div className="la-feature-card__badges">
                    {badges.map((b) => (
                        <Badge key={b}>{b}</Badge>
                    ))}
                </div>
            )}
            <div className="la-feature-card__reveal">
                <p className="la-feature-card__text">{children}</p>
            </div>
        </div>
    );
}
