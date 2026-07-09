import React from "react";

export interface MarkerProps {
    /** Text (or inline elements) to highlight. */
    children: React.ReactNode;
    /** `highlighter` draws the skewed acid-lime pen stroke behind the text (single line only); `chip` is a solid lime block that can wrap across lines. */
    variant?: "highlighter" | "chip";
    /** Additional CSS class. */
    className?: string;
}

/**
 * The brutalist lime highlighter — the brand's most recognizable element.
 * Wraps a word or short phrase in an acid-lime marker stroke with dark text
 * on top. Used for section kickers ("Status Quo", "Prozess") and to punch
 * single words inside headlines ("Arbeit machen."). Keep it to a few words.
 */
export function Marker({ children, variant = "highlighter", className = "" }: MarkerProps) {
    const classes = [
        "la-marker",
        variant === "chip" ? "la-marker--chip" : "",
        className,
    ]
        .filter(Boolean)
        .join(" ");

    return <span className={classes}>{children}</span>;
}
