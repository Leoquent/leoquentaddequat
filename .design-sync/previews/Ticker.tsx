import React from "react";
import { Ticker } from "leoquent-addequat-brand";

export const TechBand = () => (
    <div style={{ width: "100%" }}>
        <Ticker
            items={[
                "GENERATIVE UI",
                "COMPUTER VISION",
                "PREDICTIVE MODELS",
                "NEURAL NETWORKS",
                "AUTONOMOUS AGENTS",
                "DATA PIPELINES",
            ]}
        />
    </div>
);
