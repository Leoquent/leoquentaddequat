import type { Metadata } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | leoquent & addequat",
  robots: { index: false, follow: true },
};

// ⚠️ TODO vor Launch: Diese Datenschutzerklärung ist eine solide Vorlage, aber KEINE
// Rechtsberatung. Bitte an die tatsächlich eingesetzten Dienste anpassen (Hosting,
// Formular-Dienst, Calendly, Analyse-Tools) und rechtlich prüfen lassen — z. B. mit
// einem DSGVO-Generator (eRecht24, Dr. Schwenke) oder einem Anwalt.

export default function DatenschutzPage() {
  return (
    <main className="bg-vanta text-bone min-h-screen">
      <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        <a href={`${basePath}/`} className="font-mono text-xs uppercase tracking-widest text-lime hover:opacity-80 transition-opacity">
          ← Zurück zur Startseite
        </a>

        <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mt-8 mb-10">Datenschutzerklärung</h1>

        <h2 className="text-lg font-bold uppercase tracking-tight mb-3">1. Verantwortlicher</h2>
        <p className="text-sm text-bone/70 leading-relaxed mb-6">
          Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br />
          leoquent &amp; addequat GbR, [Anschrift wie im Impressum]<br />
          E-Mail: <a href="mailto:info@lunda-ki.de" className="text-lime hover:opacity-80">info@lunda-ki.de</a>
        </p>

        <h2 className="text-lg font-bold uppercase tracking-tight mb-3">2. Hosting &amp; Server-Logfiles</h2>
        <p className="text-sm text-bone/70 leading-relaxed mb-6">
          Diese Website wird bei [Hosting-Anbieter, z. B. GitHub Pages / Vercel] gehostet. Beim
          Aufruf der Seite werden automatisch Informationen (Server-Logfiles) erhoben, die Ihr
          Browser übermittelt: IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Seite,
          Referrer-URL, Browsertyp und Betriebssystem. Die Verarbeitung erfolgt zur Sicherstellung
          eines störungsfreien Betriebs und der Sicherheit (Art. 6 Abs. 1 lit. f DSGVO – berechtigtes
          Interesse). Mit dem Hosting-Anbieter besteht ggf. ein Vertrag zur Auftragsverarbeitung.
        </p>

        <h2 className="text-lg font-bold uppercase tracking-tight mb-3">3. Kontakt- und Analyse-Formular</h2>
        <p className="text-sm text-bone/70 leading-relaxed mb-6">
          Wenn Sie unser Analyse-Formular auf der Website nutzen, verarbeiten wir die von Ihnen
          angegebenen Daten (Name, E-Mail, Telefonnummer, ggf. Website sowie Ihre Angaben zu Ziel,
          Flaschenhals, Teamgröße, Zeitrahmen und KI-Reife), um Ihre Anfrage zu bearbeiten und Kontakt
          aufzunehmen (Art. 6 Abs. 1 lit. b und lit. f DSGVO). Der Versand erfolgt über den Dienst
          <strong> Web3Forms</strong> (Softminds Consultancy) als Auftragsverarbeiter, der die
          Formulardaten per E-Mail an uns zustellt. Die Daten werden gelöscht, sobald sie für die
          Zweckerreichung nicht mehr erforderlich sind. [Falls ein anderer Formular-/CRM-Dienst
          eingesetzt wird, hier anpassen.]
        </p>

        <h2 className="text-lg font-bold uppercase tracking-tight mb-3">4. Terminbuchung (Calendly)</h2>
        <p className="text-sm text-bone/70 leading-relaxed mb-6">
          Für die Buchung von Terminen nutzen wir <strong>Calendly</strong> (Calendly LLC, USA). Wenn
          Sie einen Termin buchen, werden die dort eingegebenen Daten von Calendly verarbeitet.
          Rechtsgrundlage ist Art. 6 Abs. 1 lit. b und lit. f DSGVO. Details finden Sie in der
          Datenschutzerklärung von Calendly.
        </p>

        <h2 className="text-lg font-bold uppercase tracking-tight mb-3">5. Schriftarten</h2>
        <p className="text-sm text-bone/70 leading-relaxed mb-6">
          Die verwendeten Schriftarten werden lokal von unserem Server ausgeliefert (self-hosted über
          next/font). Es besteht dabei keine Verbindung zu Servern von Google.
        </p>

        <h2 className="text-lg font-bold uppercase tracking-tight mb-3">6. Cookies</h2>
        <p className="text-sm text-bone/70 leading-relaxed mb-6">
          Diese Website setzt keine Tracking- oder Marketing-Cookies. [Falls später Analyse-Tools
          eingesetzt werden, ist hier ein Cookie-/Consent-Banner erforderlich.]
        </p>

        <h2 className="text-lg font-bold uppercase tracking-tight mb-3">7. Ihre Rechte</h2>
        <p className="text-sm text-bone/70 leading-relaxed mb-6">
          Sie haben das Recht auf Auskunft (Art. 15), Berichtigung (Art. 16), Löschung (Art. 17),
          Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) sowie Widerspruch
          (Art. 21 DSGVO). Zudem haben Sie das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu
          beschweren. Wenden Sie sich dazu an{" "}
          <a href="mailto:info@lunda-ki.de" className="text-lime hover:opacity-80">info@lunda-ki.de</a>.
        </p>

        <p className="text-xs text-mute/60 leading-relaxed mt-12 border-t border-gridline pt-6 font-mono">
          Stand: {new Date().getFullYear()} · Vorlage – bitte vor dem Launch an die tatsächlich
          eingesetzten Dienste anpassen und rechtlich prüfen lassen.
        </p>
      </div>
    </main>
  );
}
