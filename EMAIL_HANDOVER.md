# E-Mail-Anbindung Handover & Dokumentation

Dieses Dokument dient als Handover für den Kollegen (oder dessen Coding-KI), der die finale E-Mail-Anbindung der Potenzialanalyse (Formular im Quiz) einrichtet. 

Die Website ist als **statischer Next.js-Export** konfiguriert (`output: 'export'` in `next.config.ts`). Nach dem Build (`npm run build`) wird der Ordner `out/` erzeugt, dessen Inhalt per FTP auf den Webserver hochgeladen wird.

Da es sich um eine statische Website handelt, gibt es auf dem Webserver keinen Node.js-Server, der API-Routen (wie `/api/analyse/route.ts`) ausführen kann. Es gibt daher drei Möglichkeiten, die E-Mails anzubinden.

---

## Option A: Web3Forms (Empfohlen, einfachste Lösung)
Das Formular sendet die Daten direkt vom Browser des Nutzers an den kostenlosen Dienst **Web3Forms**, welcher die E-Mail an `info@lunda-ki.de` zustellt. Es wird **kein** Node.js/PHP auf eurem Server benötigt.

### To-dos für den Kollegen / die KI:
1. Gehe auf [web3forms.com](https://web3forms.com/) und hole einen kostenlosen Access Key für `info@lunda-ki.de`.
2. Trage diesen Key in der Deploy-Umgebung oder der `.env.local` ein:
   ```env
   NEXT_PUBLIC_WEB3FORMS_KEY="dein-erhaltenener-web3forms-key"
   NEXT_PUBLIC_SITE_URL="https://lunda-ki.de"
   ```
3. Führe den Build aus und lade den Ordner `out/` hoch. Das Formular ist sofort aktiv.

---

## Option B: Eigener PHP-Mailer (Keine Drittanbieter, eigene Domain)
Wenn ihr die Daten nicht über Web3Forms senden wollt, sondern direkt über euren eigenen SMTP-Server von Strato (oder einem anderen Hoster) via PHP.

### To-dos für den Kollegen / die KI:

#### 1. PHP-Datei erstellen
Erstelle eine Datei namens `send-mail.php` im Root-Verzeichnis eures Webspace (neben der `index.html`) mit folgendem Inhalt:

```php
<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Method not allowed"]);
    exit;
}

$input = json_decode(file_get_contents("php://input"), true);

// Spam-Schutz (Botcheck)
if (!empty($input["botcheck"])) {
    echo json_encode(["success" => true, "message" => "Spam detected"]);
    exit;
}

$name = strip_tags($input["Name"] ?? "");
$email = filter_var($input["E-Mail"] ?? "", FILTER_VALIDATE_EMAIL);
$phone = strip_tags($input["Telefon"] ?? "");
$website = strip_tags($input["Website"] ?? "—");
$goal = strip_tags($input["Ziel"] ?? "—");
$painpoint = strip_tags($input["Flaschenhals"] ?? "—");
$teamSize = strip_tags($input["Teamgröße"] ?? "—");
$timeline = strip_tags($input["Zeitrahmen"] ?? "—");
$maturity = strip_tags($input["KI-Reife"] ?? "—");

if (!$name || !$email || !$phone) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Pflichtfelder fehlen"]);
    exit;
}

// E-Mail-Empfänger
$to = "info@lunda-ki.de";
$subject = "=?UTF-8?B?" . base64_encode("Neue Potenzialanalyse-Anfrage – " . $name) . "?=";

// E-Mail-Inhalt (HTML)
$message = "
<html>
<head>
  <title>Neue Anfrage</title>
</head>
<body style='font-family: Arial, sans-serif; background: #050505; color: #EAEAEA; padding: 20px;'>
  <div style='max-width: 600px; margin: 0 auto; border: 1px solid #1A1A1A; padding: 20px;'>
    <h2 style='color: #CCFF00; text-transform: uppercase;'>Potenzialanalyse Anfrage</h2>
    <p><strong>Name:</strong> {$name}</p>
    <p><strong>E-Mail:</strong> {$email}</p>
    <p><strong>Telefon:</strong> {$phone}</p>
    <p><strong>Website:</strong> {$website}</p>
    <hr style='border: 0; border-top: 1px solid #1A1A1A;' />
    <p><strong>Ziel:</strong> {$goal}</p>
    <p><strong>Flaschenhals:</strong> {$painpoint}</p>
    <p><strong>Teamgröße:</strong> {$teamSize}</p>
    <p><strong>Zeitrahmen:</strong> {$timeline}</p>
    <p><strong>KI-Reife:</strong> {$maturity}</p>
  </div>
</body>
</html>
";

// Headers
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/html; charset=utf-8';
$headers[] = 'From: leoquent & addequat Website <info@lunda-ki.de>'; // Muss eine authentifizierte Domain-E-Mail sein
$headers[] = "Reply-To: {$name} <{$email}>";

if (mail($to, $subject, $message, implode("\r\n", $headers))) {
    echo json_encode(["success" => true]);
} else {
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Mail-Versand fehlgeschlagen"]);
}
```

#### 2. Formular in `components/QuizModal.tsx` anpassen
In der Datei `components/QuizModal.tsx` die Funktion `handleSubmit` (Zeilen ~216–257) so anpassen, dass sie an euer PHP-Skript sendet:

```typescript
const res = await fetch("/send-mail.php", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
        Name: answers.name,
        "E-Mail": answers.email,
        Telefon: answers.phone,
        Website: answers.website || "—",
        Ziel: goal || "—",
        Flaschenhals: painpoint || "—",
        "Teamgröße": answers.teamSize || "—",
        Zeitrahmen: answers.timeline || "—",
        "KI-Reife": answers.maturity || "—",
        botcheck: "",
    }),
});
```

---

## Option C: Eigener Node.js-Server (z. B. VPS, Vercel)
Falls der Webserver Node.js unterstützt und die Website dynamisch laufen soll.

### To-dos für den Kollegen / die KI:
1. Deaktiviere in `next.config.ts` den statischen Export (Zeile `output: 'export'` löschen).
2. Passe die Datei `app/api/analyse/route.ts` an, um eure Strato-SMTP-Zugangsdaten (Host `smtp.strato.de`, Port `465`, SSL/TLS, Benutzername und Passwort) zu hinterlegen.
3. Ändere die Ziel-URL in `components/QuizModal.tsx` bei `handleSubmit` von `https://api.web3forms.com/submit` zu `/api/analyse`.
4. Deploye das Next.js-Projekt dynamisch auf dem Server.
