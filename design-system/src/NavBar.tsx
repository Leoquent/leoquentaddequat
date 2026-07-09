import React from "react";

export interface NavBarLink {
    /** Link label ("Status Quo", "Solutions"). */
    label: string;
    /** Target href. */
    href: string;
}

export interface NavBarProps {
    /** Brand name. An "&" in the string is automatically rendered lime. */
    brand?: string;
    /** Navigation links, rendered as 10px mono uppercase. */
    links?: NavBarLink[];
    /** Right-hand slot, typically a small Button ("Potenzial analysieren"). */
    action?: React.ReactNode;
    /** `dark` (vanta bar, the scrolled state) or `light` (white bar, over the hero). */
    tone?: "dark" | "light";
    /** Additional CSS class. */
    className?: string;
}

/**
 * Top navigation bar: brand wordmark with a lime ampersand on the left, mono
 * uppercase links in the middle, a CTA slot on the right. `light` tone is
 * the over-hero state, `dark` the scrolled state.
 */
export function NavBar({
    brand = "leoquent & addequat",
    links = [],
    action,
    tone = "dark",
    className = "",
}: NavBarProps) {
    const parts = brand.split("&");

    return (
        <nav className={`la-navbar ${tone === "light" ? "la-navbar--light" : ""} ${className}`.trim()}>
            <a href="#" className="la-navbar__logo">
                {parts.map((part, i) => (
                    <React.Fragment key={i}>
                        {i > 0 && <span className="la-navbar__logo-amp">&amp;</span>}
                        {part}
                    </React.Fragment>
                ))}
            </a>
            {links.length > 0 && (
                <div className="la-navbar__links">
                    {links.map((l) => (
                        <a key={l.label} href={l.href} className="la-navbar__link">
                            {l.label}
                        </a>
                    ))}
                </div>
            )}
            {action}
        </nav>
    );
}
