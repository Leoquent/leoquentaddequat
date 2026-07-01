<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/279f8868-72da-4690-8930-401c60bc5889

## Deployment & E-Mail-Anbindung

Die Website ist für den statischen Export konfiguriert (`out/` Ordner nach `npm run build`).

Wenn du oder deine Coding-KI (z. B. Antigravity/Claude Code) die E-Mail-Anbindung konfigurieren sollst, findest du alle Details und fertige Code-Snippets (für Web3Forms, PHP-Mailer oder Node.js-Server) in der Dokumentation:
👉 **[EMAIL_HANDOVER.md](file:///d:/LA/Website/leoquent-addiquat/EMAIL_HANDOVER.md)**

## Run Locally

**Prerequisites:**  Node.js

1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`
