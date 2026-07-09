import React from "react";

export interface StepRailStep {
    /** Step number label ("01"). */
    number: string;
    /** Short step title ("Analyse"). */
    title: string;
}

export interface StepRailProps {
    /** The steps, in order. */
    steps: StepRailStep[];
    /** Index of the current step (0-based). Steps up to and including it show lime fill and chip; `-1` = nothing reached yet. */
    activeStep?: number;
    /** Additional CSS class. */
    className?: string;
}

/**
 * Horizontal progress rail for multi-step sequences on white surfaces: one
 * thin 2px bar per step that fills lime as steps complete, with the mono
 * step number (lime chip when reached) and uppercase title underneath.
 */
export function StepRail({ steps, activeStep = -1, className = "" }: StepRailProps) {
    return (
        <div className={`la-step-rail ${className}`.trim()}>
            <div className="la-step-rail__bars" aria-hidden="true">
                {steps.map((s, i) => (
                    <span
                        key={s.number}
                        className={`la-step-rail__bar ${i <= activeStep ? "la-step-rail__bar--done" : ""}`.trim()}
                    >
                        <span className="la-step-rail__bar-fill" />
                    </span>
                ))}
            </div>
            <div className="la-step-rail__labels">
                {steps.map((s, i) => (
                    <div
                        key={s.number}
                        className={[
                            "la-step-rail__step",
                            i <= activeStep ? "la-step-rail__step--done" : "",
                            i === activeStep ? "la-step-rail__step--active" : "",
                        ]
                            .filter(Boolean)
                            .join(" ")}
                    >
                        <span className="la-step-rail__num">{s.number}</span>
                        <span className="la-step-rail__title">{s.title}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
