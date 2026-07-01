import type { Metadata } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata: Metadata = {
  title: "Impressum | leoquent & addequat",
  robots: { index: false, follow: true },
};

// ⚠️ TODO vor Launch: Alle [eckigen Klammern] mit den echten Angaben füllen.
// Rechtsgrundlage: § 5 DDG (Digitale-Dienste-Gesetz) + § 18 Abs. 2 MStV.
// Bei einer GbR (zwei Gründer ohne GmbH/UG) beide Namen + eine ladungsfähige
// Anschrift angeben. Ein Postfach genügt NICHT. Bei Arbeit von zu Hause ist das
// in der Regel die Privatadresse. Im Zweifel Impressum-Generator/Anwalt prüfen.

export default function ImpressumPage() {
  return (
    <main className="bg-vanta text-bone min-h-screen">
      <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        <a href={`${basePath}/`} className="font-mono text-xs uppercase tracking-widest text-lime hover:opacity-80 transition-opacity">
          ← Zurück zur Startseite
        </a>

        <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mt-8 mb-10">Impressum</h1>

        <h2 className="text-lg font-bold uppercase tracking-tight mb-3">Angaben gemäß § 5 DDG</h2>
        <p className="text-sm text-bone/70 leading-relaxed mb-6">
          leoquent &amp; addequat GbR<br />
          [Vorname Nachname Leonid] &amp; [Vorname Nachname Admir]<br />
          [Straße und Hausnummer]<br />
          [PLZ und Ort]<br />
          Deutschland
        </p>

        <h2 className="text-lg font-bold uppercase tracking-tight mb-3">Vertreten durch</h2>
        <p className="text-sm text-bone/70 leading-relaxed mb-6">
          [Vorname Nachname Leonid], [Vorname Nachname Admir]
        </p>

        <h2 className="text-lg font-bold uppercase tracking-tight mb-3">Kontakt</h2>
        <p className="text-sm text-bone/70 leading-relaxed mb-6">
          E-Mail: <a href="mailto:info@lunda-ki.de" className="text-lime hover:opacity-80">info@lunda-ki.de</a><br />
          Telefon: [optional, aber empfohlen]
        </p>

        <h2 className="text-lg font-bold uppercase tracking-tight mb-3">Umsatzsteuer-ID</h2>
        <p className="text-sm text-bone/70 leading-relaxed mb-6">
          Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:<br />
          in Beantragung – wird nach Erteilung ergänzt.
        </p>

        <h2 className="text-lg font-bold uppercase tracking-tight mb-3">
          Redaktionell verantwortlich (§ 18 Abs. 2 MStV)
        </h2>
        <p className="text-sm text-bone/70 leading-relaxed mb-6">
          [Vorname Nachname], [Anschrift wie oben]
        </p>

        <h2 className="text-lg font-bold uppercase tracking-tight mb-3">EU-Streitschlichtung</h2>
        <p className="text-sm text-bone/70 leading-relaxed mb-6">
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
          <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-lime hover:opacity-80">
            https://ec.europa.eu/consumers/odr/
          </a>
          . Unsere E-Mail-Adresse finden Sie oben im Impressum.
        </p>

        <h2 className="text-lg font-bold uppercase tracking-tight mb-3">
          Verbraucherstreitbeilegung / Universalschlichtungsstelle
        </h2>
        <p className="text-sm text-bone/70 leading-relaxed mb-6">
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen.
        </p>

        <p className="text-xs text-mute/60 leading-relaxed mt-12 border-t border-gridline pt-6 font-mono">
          Hinweis: Diese Seite ist eine Vorlage. Bitte vor dem Launch mit den echten Angaben
          vervollständigen und rechtlich prüfen lassen.
        </p>
      </div>
    </main>
  );
}
