import React from "react";

export interface FooterLink {
    /** Link label ("Impressum", "Datenschutz"). */
    label: string;
    /** Target href. */
    href: string;
}

export interface FooterProps {
    /** Left-hand line, e.g. "© 2026 leoquent & addequat. All systems nominal." */
    children: React.ReactNode;
    /** Legal / meta links on the right, lime on hover. */
    links?: FooterLink[];
    /** Additional CSS class. */
    className?: string;
}

/**
 * Minimal site footer strip: 12px mono muted text over vanta with a gridline
 * on top, meta links on the right that glow lime on hover.
 */
export function Footer({ children, links = [], className = "" }: FooterProps) {
    return (
        <footer className={`la-footer ${className}`.trim()}>
            <p style={{ margin: 0 }}>{children}</p>
            {links.length > 0 && (
                <div className="la-footer__links">
                    {links.map((l) => (
                        <a key={l.label} href={l.href} className="la-footer__link">
                            {l.label}
                        </a>
                    ))}
                </div>
            )}
        </footer>
    );
}
