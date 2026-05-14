"use client";

import { useState, useEffect, useCallback } from "react";

// ─── QUIZ DATA ───────────────────────────────────────────────

const STEPS = [
    {
        id: "goal",
        label: "Schritt 1 von 5",
        headline: "Was ist Ihr primäres Ziel?",
        subline: "Wählen Sie die Option, die am besten zu Ihrem Vorhaben passt.",
        type: "single-choice" as const,
        options: [
            "Prozesse & Administration automatisieren",
            "Mehr Leads / Kundenanfragen generieren",
            "Bestehende Software intelligent vernetzen",
            "Neue Website / Digitales Rebranding",
        ],
        hasOther: true,
    },
    {
        id: "painpoint",
        label: "Schritt 2 von 5",
        headline: "Wo verliert Ihr Team am meisten Zeit?",
        subline: "Identifizieren Sie den größten Flaschenhals.",
        type: "single-choice-with-dropdown" as const,
        options: [
            "Manuelle Datenpflege & Dokumentation",
            "Beantwortung von Standard-Kundenanfragen",
            "Koordination & interne Abstimmung",
            "Veraltete, unübersichtliche Software",
        ],
        hasOther: true,
        dropdown: {
            label: "Teamgröße",
            placeholder: "Mitarbeiteranzahl wählen",
            options: [
                "1 – 5 Mitarbeiter",
                "6 – 20 Mitarbeiter",
                "21 – 50 Mitarbeiter",
                "51 – 200 Mitarbeiter",
                "200+ Mitarbeiter",
            ],
        },
    },
    {
        id: "timeline",
        label: "Schritt 3 von 5",
        headline: "Wie schnell soll die Lösung stehen?",
        subline: "Das hilft uns, Ihr Projekt richtig einzuplanen.",
        type: "single-choice" as const,
        options: [
            "So schnell wie möglich (akuter Bedarf)",
            "In den nächsten 1 – 3 Monaten",
            "In den nächsten 3 – 6 Monaten",
            "Ich orientiere mich erstmal",
        ],
        hasOther: false,
    },
    {
        id: "maturity",
        label: "Schritt 4 von 5",
        headline: "Nutzen Sie bereits KI-Tools oder Automatisierung?",
        subline: "Damit wir genau wissen, wo wir ansetzen können.",
        type: "single-choice" as const,
        options: [
            "Nein, noch gar nicht",
            "Ja, einzelne Tools (z. B. ChatGPT, Zapier)",
            "Ja, wir haben bereits eigene Automationen",
            "Wir sind unsicher, was möglich ist",
        ],
        hasOther: false,
    },
    {
        id: "contact",
        label: "Schritt 5 von 5",
        headline: "Fast geschafft – wie erreichen wir Sie?",
        subline: "Ihre Daten werden vertraulich behandelt und ausschließlich für die Terminvereinbarung genutzt.",
        type: "contact" as const,
    },
];

// ─── TYPES ───────────────────────────────────────────────────

interface QuizAnswers {
    goal: string;
    goalOther: string;
    painpoint: string;
    painpointOther: string;
    teamSize: string;
    timeline: string;
    maturity: string;
    name: string;
    email: string;
    phone: string;
    website: string;
}

interface QuizModalProps {
    isOpen: boolean;
    onClose: () => void;
}

// ─── COMPONENT ───────────────────────────────────────────────

export default function QuizModal({ isOpen, onClose }: QuizModalProps) {
    const [currentStep, setCurrentStep] = useState(0);
    const [direction, setDirection] = useState<"forward" | "backward">("forward");
    const [isAnimating, setIsAnimating] = useState(false);
    const [answers, setAnswers] = useState<QuizAnswers>({
        goal: "",
        goalOther: "",
        painpoint: "",
        painpointOther: "",
        teamSize: "",
        timeline: "",
        maturity: "",
        name: "",
        email: "",
        phone: "",
        website: "",
    });

    // Reset when modal opens
    useEffect(() => {
        if (isOpen) {
            setCurrentStep(0);
            setDirection("forward");
            setAnswers({
                goal: "", goalOther: "", painpoint: "", painpointOther: "",
                teamSize: "", timeline: "", maturity: "",
                name: "", email: "", phone: "", website: "",
            });
        }
    }, [isOpen]);

    // Body scroll lock
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [isOpen]);

    // ESC key handler
    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
    }, [onClose]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener("keydown", handleKeyDown);
            return () => window.removeEventListener("keydown", handleKeyDown);
        }
    }, [isOpen, handleKeyDown]);

    // ─── NAVIGATION ──────────────────────────────────────────

    const goNext = () => {
        if (currentStep < STEPS.length - 1 && !isAnimating) {
            setDirection("forward");
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentStep((s) => s + 1);
                setIsAnimating(false);
            }, 300);
        }
    };

    const goBack = () => {
        if (currentStep > 0 && !isAnimating) {
            setDirection("backward");
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentStep((s) => s - 1);
                setIsAnimating(false);
            }, 300);
        }
    };

    // ─── VALIDATION ──────────────────────────────────────────

    const isStepValid = (): boolean => {
        const step = STEPS[currentStep];
        switch (step.id) {
            case "goal":
                return answers.goal !== "" && (answers.goal !== "__other__" || answers.goalOther.trim() !== "");
            case "painpoint":
                return answers.painpoint !== "" && (answers.painpoint !== "__other__" || answers.painpointOther.trim() !== "") && answers.teamSize !== "";
            case "timeline":
                return answers.timeline !== "";
            case "maturity":
                return answers.maturity !== "";
            case "contact":
                return answers.name.trim() !== "" && answers.email.trim() !== "" && answers.phone.trim() !== "";
            default:
                return false;
        }
    };

    // ─── CHOICE SELECTION ────────────────────────────────────

    const handleSelect = (field: keyof QuizAnswers, value: string) => {
        setAnswers((prev) => ({ ...prev, [field]: value }));
    };

    const handleInput = (field: keyof QuizAnswers, value: string) => {
        setAnswers((prev) => ({ ...prev, [field]: value }));
    };

    const handleSubmit = () => {
        // Currently no-op as per plan. Future: CRM / Calendly integration.
        console.log("Quiz submitted:", answers);
        onClose();
    };

    // ─── PROGRESS ────────────────────────────────────────────

    const progress = ((currentStep + 1) / STEPS.length) * 100;

    if (!isOpen) return null;

    const step = STEPS[currentStep];

    // ─── RENDER ──────────────────────────────────────────────

    return (
        <div
            className="fixed inset-0 z-[9998] flex items-center justify-center"
            role="dialog"
            aria-modal="true"
            aria-label="Potenzialanalyse Quiz"
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-vanta/90 backdrop-blur-md quiz-backdrop-enter"
                onClick={onClose}
            />

            {/* Modal Container */}
            <div className="relative z-10 w-full max-w-2xl mx-4 sm:mx-6 max-h-[90vh] flex flex-col quiz-modal-enter">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 w-10 h-10 flex items-center justify-center text-white/50 hover:text-lime transition-colors group"
                    aria-label="Schließen"
                >
                    <svg className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="square" strokeWidth={2} d="M6 6l12 12M6 18L18 6" />
                    </svg>
                </button>

                {/* Progress Bar */}
                <div className="w-full h-1 bg-gridline shrink-0 overflow-hidden">
                    <div
                        className="h-full bg-lime transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                        style={{ width: `${progress}%` }}
                    />
                </div>

                {/* Scrollable Content Area */}
                <div className="flex-1 overflow-y-auto bg-[#0a0a0a] border border-gridline border-t-0">
                    <div className="px-6 py-8 sm:px-10 sm:py-12">

                        {/* Step Label */}
                        <div className="font-mono text-[10px] uppercase tracking-widest text-lime/70 mb-2">
                            {step.label}
                        </div>

                        {/* Headline */}
                        <h2
                            className={`text-2xl sm:text-3xl uppercase font-bold text-white mb-2 tracking-tight quiz-step-content ${isAnimating ? (direction === "forward" ? "quiz-exit-left" : "quiz-exit-right") : "quiz-enter"}`}
                        >
                            {step.headline}
                        </h2>

                        {/* Subline */}
                        <p
                            className={`text-sm text-mute font-light mb-8 sm:mb-10 quiz-step-content ${isAnimating ? (direction === "forward" ? "quiz-exit-left" : "quiz-exit-right") : "quiz-enter"}`}
                        >
                            {step.subline}
                        </p>

                        {/* ─── STEP BODY ───────────────────────── */}
                        <div className={`quiz-step-content ${isAnimating ? (direction === "forward" ? "quiz-exit-left" : "quiz-exit-right") : "quiz-enter"}`}>

                            {/* Single Choice Steps (1, 3, 4) */}
                            {(step.type === "single-choice") && (
                                <div className="flex flex-col gap-3">
                                    {step.options?.map((option) => {
                                        const field = step.id as keyof QuizAnswers;
                                        const isSelected = answers[field] === option;
                                        return (
                                            <button
                                                key={option}
                                                onClick={() => handleSelect(field, option)}
                                                className={`w-full text-left px-5 py-4 border font-mono text-sm transition-all duration-300 ${
                                                    isSelected
                                                        ? "bg-lime text-vanta border-lime"
                                                        : "bg-transparent text-white/80 border-gridline hover:border-lime/50 hover:text-white"
                                                }`}
                                            >
                                                {option}
                                            </button>
                                        );
                                    })}

                                    {/* "Sonstiges" option with text field */}
                                    {step.hasOther && (
                                        <div className="flex flex-col gap-2">
                                            <button
                                                onClick={() => handleSelect(step.id as keyof QuizAnswers, "__other__")}
                                                className={`w-full text-left px-5 py-4 border font-mono text-sm transition-all duration-300 ${
                                                    answers[step.id as keyof QuizAnswers] === "__other__"
                                                        ? "bg-lime text-vanta border-lime"
                                                        : "bg-transparent text-white/80 border-gridline hover:border-lime/50 hover:text-white"
                                                }`}
                                            >
                                                Sonstiges
                                            </button>
                                            {answers[step.id as keyof QuizAnswers] === "__other__" && (
                                                <input
                                                    type="text"
                                                    placeholder="Bitte beschreiben Sie Ihr Anliegen..."
                                                    value={answers[`${step.id}Other` as keyof QuizAnswers] || ""}
                                                    onChange={(e) => handleInput(`${step.id}Other` as keyof QuizAnswers, e.target.value)}
                                                    className="w-full bg-transparent border border-lime/30 text-white px-5 py-4 font-mono text-sm focus:outline-none focus:border-lime transition-colors placeholder:text-mute rounded-none quiz-field-enter"
                                                    autoFocus
                                                />
                                            )}
                                        </div>
                                    )}
                                </div>
                            )}

                            {/* Step 2: Single Choice + Dropdown */}
                            {step.type === "single-choice-with-dropdown" && (
                                <div className="flex flex-col gap-6">
                                    {/* Choices */}
                                    <div className="flex flex-col gap-3">
                                        {step.options?.map((option) => {
                                            const isSelected = answers.painpoint === option;
                                            return (
                                                <button
                                                    key={option}
                                                    onClick={() => handleSelect("painpoint", option)}
                                                    className={`w-full text-left px-5 py-4 border font-mono text-sm transition-all duration-300 ${
                                                        isSelected
                                                            ? "bg-lime text-vanta border-lime"
                                                            : "bg-transparent text-white/80 border-gridline hover:border-lime/50 hover:text-white"
                                                    }`}
                                                >
                                                    {option}
                                                </button>
                                            );
                                        })}

                                        {/* "Sonstiges" option */}
                                        <div className="flex flex-col gap-2">
                                            <button
                                                onClick={() => handleSelect("painpoint", "__other__")}
                                                className={`w-full text-left px-5 py-4 border font-mono text-sm transition-all duration-300 ${
                                                    answers.painpoint === "__other__"
                                                        ? "bg-lime text-vanta border-lime"
                                                        : "bg-transparent text-white/80 border-gridline hover:border-lime/50 hover:text-white"
                                                }`}
                                            >
                                                Sonstiges
                                            </button>
                                            {answers.painpoint === "__other__" && (
                                                <input
                                                    type="text"
                                                    placeholder="Bitte beschreiben Sie Ihren Flaschenhals..."
                                                    value={answers.painpointOther}
                                                    onChange={(e) => handleInput("painpointOther", e.target.value)}
                                                    className="w-full bg-transparent border border-lime/30 text-white px-5 py-4 font-mono text-sm focus:outline-none focus:border-lime transition-colors placeholder:text-mute rounded-none quiz-field-enter"
                                                    autoFocus
                                                />
                                            )}
                                        </div>
                                    </div>

                                    {/* Team Size Dropdown */}
                                    <div className="border-t border-gridline pt-6">
                                        <label className="font-mono text-[10px] uppercase tracking-widest text-lime/70 block mb-3">
                                            {step.dropdown?.label}
                                        </label>
                                        <div className="relative">
                                            <select
                                                value={answers.teamSize}
                                                onChange={(e) => handleInput("teamSize", e.target.value)}
                                                className="w-full bg-[#0a0a0a] border border-gridline text-white px-5 py-4 font-mono text-sm focus:outline-none focus:border-lime transition-colors appearance-none cursor-pointer rounded-none hover:border-lime/50"
                                            >
                                                <option value="" disabled className="text-mute">
                                                    {step.dropdown?.placeholder}
                                                </option>
                                                {step.dropdown?.options.map((opt) => (
                                                    <option key={opt} value={opt} className="bg-vanta text-white">
                                                        {opt}
                                                    </option>
                                                ))}
                                            </select>
                                            {/* Custom dropdown arrow */}
                                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                                <svg className="w-4 h-4 text-lime/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="square" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Step 5: Contact Form */}
                            {step.type === "contact" && (
                                <div className="flex flex-col gap-5">
                                    <div>
                                        <label className="font-mono text-[10px] uppercase tracking-widest text-lime/70 block mb-2">Name *</label>
                                        <input
                                            type="text"
                                            placeholder="Max Mustermann"
                                            value={answers.name}
                                            onChange={(e) => handleInput("name", e.target.value)}
                                            className="w-full bg-transparent border border-gridline text-white px-5 py-4 font-mono text-sm focus:outline-none focus:border-lime transition-colors placeholder:text-mute rounded-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="font-mono text-[10px] uppercase tracking-widest text-lime/70 block mb-2">E-Mail *</label>
                                        <input
                                            type="email"
                                            placeholder="ihre@email.com"
                                            value={answers.email}
                                            onChange={(e) => handleInput("email", e.target.value)}
                                            className="w-full bg-transparent border border-gridline text-white px-5 py-4 font-mono text-sm focus:outline-none focus:border-lime transition-colors placeholder:text-mute rounded-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="font-mono text-[10px] uppercase tracking-widest text-lime/70 block mb-2">Telefonnummer *</label>
                                        <input
                                            type="tel"
                                            placeholder="+49 123 456 7890"
                                            value={answers.phone}
                                            onChange={(e) => handleInput("phone", e.target.value)}
                                            className="w-full bg-transparent border border-gridline text-white px-5 py-4 font-mono text-sm focus:outline-none focus:border-lime transition-colors placeholder:text-mute rounded-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="font-mono text-[10px] uppercase tracking-widest text-lime/70 block mb-2">Website <span className="text-mute/50">(Optional)</span></label>
                                        <input
                                            type="url"
                                            placeholder="https://ihre-website.de"
                                            value={answers.website}
                                            onChange={(e) => handleInput("website", e.target.value)}
                                            className="w-full bg-transparent border border-gridline text-white px-5 py-4 font-mono text-sm focus:outline-none focus:border-lime transition-colors placeholder:text-mute rounded-none"
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Footer: Navigation Buttons */}
                <div className="bg-[#0a0a0a] border border-gridline border-t-0 px-6 py-5 sm:px-10 flex items-center justify-between shrink-0">
                    {/* Back */}
                    {currentStep > 0 ? (
                        <button
                            onClick={goBack}
                            className="font-mono text-xs uppercase tracking-widest text-mute hover:text-white transition-colors flex items-center gap-2"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="square" strokeWidth={2} d="M19 12H5m7-7l-7 7 7 7" />
                            </svg>
                            Zurück
                        </button>
                    ) : (
                        <div />
                    )}

                    {/* Next / Submit */}
                    {currentStep < STEPS.length - 1 ? (
                        <button
                            onClick={goNext}
                            disabled={!isStepValid()}
                            className={`font-mono text-sm uppercase tracking-wider px-6 py-3 border transition-all duration-300 flex items-center gap-2 ${
                                isStepValid()
                                    ? "bg-lime text-vanta border-lime hover:bg-white hover:text-vanta hover:border-white btn-glitch"
                                    : "bg-transparent text-mute/40 border-gridline/50 cursor-not-allowed"
                            }`}
                        >
                            Weiter
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="square" strokeWidth={2} d="M5 12h14m-7-7l7 7-7 7" />
                            </svg>
                        </button>
                    ) : (
                        <button
                            onClick={handleSubmit}
                            disabled={!isStepValid()}
                            className={`font-mono text-sm uppercase tracking-wider px-6 py-3 border transition-all duration-300 ${
                                isStepValid()
                                    ? "bg-lime text-vanta border-lime hover:bg-white hover:text-vanta hover:border-white btn-glitch"
                                    : "bg-transparent text-mute/40 border-gridline/50 cursor-not-allowed"
                            }`}
                        >
                            Jetzt Termin vereinbaren
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
