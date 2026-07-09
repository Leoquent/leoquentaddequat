import React from "react";

export interface ProfileCardProps {
    /** Person's name, rendered as a 900-weight uppercase display line. */
    name: string;
    /** Mono lime role line ("The Architect of Intent"). */
    role: string;
    /** Short lime quote block shown when expanded (one or two sentences). */
    quote?: string;
    /** Longer bio paragraph(s) shown when expanded. */
    children?: React.ReactNode;
    /** Photo URL used as the card background. Omit for a plain dark card. */
    imageUrl?: string;
    /** Force the expanded (hover) state — content up, photo desaturated. */
    expanded?: boolean;
    /** Additional CSS class. */
    className?: string;
}

/**
 * Team member card: full-bleed photo, name anchored at the bottom. On hover
 * (or `expanded`) the photo desaturates and dims, a vanta gradient rises, and
 * the lime quote + bio slide up. Used in the "Über uns" section.
 */
export function ProfileCard({
    name,
    role,
    quote,
    children,
    imageUrl,
    expanded = false,
    className = "",
}: ProfileCardProps) {
    return (
        <div className={`la-profile-card ${expanded ? "la-profile-card--expanded" : ""} ${className}`.trim()}>
            {imageUrl && (
                <div
                    className="la-profile-card__photo"
                    style={{ backgroundImage: `url('${imageUrl}')` }}
                    role="img"
                    aria-label={`Foto von ${name}`}
                />
            )}
            <div className="la-profile-card__overlay" />
            <div className="la-profile-card__content">
                <h3 className="la-profile-card__name">{name}</h3>
                <p className="la-profile-card__role">{role}</p>
                <div className="la-profile-card__detail">
                    {quote && <div className="la-profile-card__quote">{quote}</div>}
                    {children && <p className="la-profile-card__bio">{children}</p>}
                </div>
            </div>
        </div>
    );
}
