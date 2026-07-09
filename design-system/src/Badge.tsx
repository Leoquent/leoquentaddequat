import React from "react";

export interface BadgeProps {
    /** Badge label — short, technical, uppercase reads best ("Workflow-Automation"). */
    children: React.ReactNode;
    /** `default` is the translucent lime outline for dark surfaces; `inverted` is solid vanta with lime text (used on lime surfaces). */
    variant?: "default" | "inverted";
    /** Additional CSS class. */
    className?: string;
}

/**
 * Technical tag chip — 10px mono uppercase with wide tracking and a
 * translucent lime border. Used in rows to list capabilities under a card
 * title (e.g. "CRM-Systeme", "Dashboards", "API-Vernetzung").
 */
export function Badge({ children, variant = "default", className = "" }: BadgeProps) {
    const classes = [
        "la-badge",
        variant === "inverted" ? "la-badge--inverted" : "",
        className,
    ]
        .filter(Boolean)
        .join(" ");

    return <span className={classes}>{children}</span>;
}
