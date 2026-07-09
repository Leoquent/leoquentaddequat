import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** Visual style. `primary` is the acid-lime CTA, `outline` the quiet dark-section button, `dark` the inverted button for light sections. */
    variant?: "primary" | "outline" | "dark";
    /** Size of the button. */
    size?: "sm" | "md" | "lg";
    /** Stretch to the full width of the container (mobile CTA tiles). */
    block?: boolean;
}

/**
 * Brand CTA button — mono uppercase type, hard 0px corners, and the signature
 * "glitch" hover (lime offset shadow + 2px translate). Use `primary` for the
 * main call-to-action ("Potenzial analysieren"), `outline` on dark sections,
 * `dark` on white sections.
 */
export function Button({
    variant = "primary",
    size = "md",
    block = false,
    className = "",
    children,
    ...rest
}: ButtonProps) {
    const classes = [
        "la-btn",
        variant !== "primary" ? `la-btn--${variant}` : "",
        size !== "md" ? `la-btn--${size}` : "",
        block ? "la-btn--block" : "",
        className,
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <button className={classes} {...rest}>
            {children}
        </button>
    );
}
