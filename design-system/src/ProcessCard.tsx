import React from "react";

export interface ProcessCardProps {
    /** Step number, zero-padded ("01", "02", …). Rendered as a lime chip. */
    number: string;
    /** Step title ("Analyse", "Architektur"). */
    title: string;
    /** Step description. */
    children: React.ReactNode;
    /** Dim the card for steps not yet reached in a scroll sequence. */
    pending?: boolean;
    /** Additional CSS class. */
    className?: string;
}

/**
 * One step of the process timeline on a white surface: a mono step number in
 * a lime chip, an uppercase title, and a muted description. Stack them with
 * shared top borders to build the "Unser Weg zu Ihrer Lösung" sequence.
 */
export function ProcessCard({
    number,
    title,
    children,
    pending = false,
    className = "",
}: ProcessCardProps) {
    return (
        <div className={`la-process-card ${pending ? "la-process-card--pending" : ""} ${className}`.trim()}>
            <div className="la-process-card__number">{number}</div>
            <h3 className="la-process-card__title">{title}</h3>
            <p className="la-process-card__text">{children}</p>
        </div>
    );
}
