import React from "react";

export interface TickerProps {
    /** Terms to scroll, separated by "/" glyphs ("GENERATIVE UI", "COMPUTER VISION", …). */
    items: string[];
    /** Additional CSS class. */
    className?: string;
}

/**
 * Full-width lime marquee strip on a near-black surface — 48px tall, mono
 * uppercase terms separated by dimmed slashes, scrolling continuously.
 * Sits between sections as a technical texture band. Respects
 * prefers-reduced-motion (the strip stands still).
 */
export function Ticker({ items, className = "" }: TickerProps) {
    const track = (ariaHidden: boolean) => (
        <div className="la-ticker__track" aria-hidden={ariaHidden || undefined}>
            {items.map((item, i) => (
                <React.Fragment key={`${item}-${i}`}>
                    <span>{item}</span>
                    <span className="la-ticker__sep">/</span>
                </React.Fragment>
            ))}
        </div>
    );

    return (
        <div className={`la-ticker ${className}`.trim()} aria-hidden="true">
            {track(false)}
            {track(true)}
        </div>
    );
}
