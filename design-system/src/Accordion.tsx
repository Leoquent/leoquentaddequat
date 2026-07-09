import React, { useState } from "react";

export interface AccordionItemData {
    /** Row title, shown uppercase ("Gesundheit", "Handwerk"). */
    title: string;
    /** Expanded body content. */
    content: React.ReactNode;
}

export interface AccordionProps {
    /** The rows. */
    items: AccordionItemData[];
    /** Index of the initially open row; `null` starts fully collapsed. */
    defaultOpen?: number | null;
    /** Additional CSS class. */
    className?: string;
}

/**
 * Brand accordion — dark rows divided by gridlines; the open row inverts to
 * solid lime with dark text and its "+" icon rotates into an "×". One row
 * open at a time. Used for the mobile Branchen and Solutions lists.
 */
export function Accordion({ items, defaultOpen = null, className = "" }: AccordionProps) {
    const [open, setOpen] = useState<number | null>(defaultOpen);

    return (
        <div className={`la-accordion ${className}`.trim()}>
            {items.map((item, i) => {
                const isOpen = open === i;
                return (
                    <button
                        key={item.title}
                        type="button"
                        aria-expanded={isOpen}
                        onClick={() => setOpen(isOpen ? null : i)}
                        className={`la-accordion-item ${isOpen ? "la-accordion-item--open" : ""}`.trim()}
                    >
                        <span className="la-accordion-item__head">
                            <span className="la-accordion-item__title">{item.title}</span>
                            <span className="la-accordion-item__icon" aria-hidden="true">+</span>
                        </span>
                        <span className="la-accordion-item__body">
                            <span className="la-accordion-item__body-inner">
                                <span className="la-accordion-item__content">{item.content}</span>
                            </span>
                        </span>
                    </button>
                );
            })}
        </div>
    );
}
