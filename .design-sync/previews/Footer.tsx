import React from "react";
import { Footer } from "leoquent-addequat-brand";

export const Standard = () => (
    <div style={{ width: "100%" }}>
        <Footer
            links={[
                { label: "Impressum", href: "/impressum" },
                { label: "Datenschutz", href: "/datenschutz" },
            ]}
        >
            © 2026 leoquent &amp; addequat. All systems nominal.
        </Footer>
    </div>
);
