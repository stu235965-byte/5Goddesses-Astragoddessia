5Goddesses v2.21 – Discord-PvP (erste spielbare Serverfassung)

Was neu ist
- PvP ist NICHT im normalen PWA-Menü sichtbar.
- /gefecht @Spieler erzeugt im Discord eine Herausforderung mit Annehmen/Ablehnen.
- Nach Annahme erhalten beide Spieler per DM einen persönlichen PvP-Link.
- Jeder Spieler wählt in seiner bestehenden PWA lokal eines seiner gültigen Decks.
- Sobald beide Decks bestätigt sind, erzeugt der Server mit der bestehenden G5Engine ein gemeinsames Gefecht.
- Match-ID, persönliche Tokens, Polling und Revisionskontrolle synchronisieren beide Browser.
- Die vorhandene Karten-/Kampfengine bleibt die Regelbasis. Die KI wird im PvP deaktiviert.
- Während des gegnerischen Zuges wird die Hand nicht angezeigt; Verteidigungs-/Reaktionsfenster bleiben bedienbar.

Installation des Bots/Servers
1. Node.js 20+ installieren.
2. In discord-pvp-server: npm install
3. .env.example nach .env kopieren und DISCORD_TOKEN, DISCORD_CLIENT_ID, PWA_URL und PUBLIC_API_URL eintragen.
4. Für einen Testserver optional DISCORD_GUILD_ID eintragen.
5. npm run register
6. npm start
7. Den Server öffentlich per HTTPS bereitstellen. Die PWA kann weiter auf GitHub Pages liegen.

Discord Developer Portal
- Bot/Application anlegen und Token in .env eintragen.
- Bot mit scopes "bot" und "applications.commands" auf den Server einladen.
- Für diese Fassung sind keine Message-Content- oder Presence-Intents erforderlich.

Wichtiger Sicherheitsstand
Diese v2.21 ist für private/vertrauenswürdige Spielrunden gedacht. Der Server kontrolliert Match-Token, Revision und Zughoheit, übernimmt aber noch nicht jede einzelne Kartenaktion autoritativ. Der Browser sendet nach einer Engine-Aktion den resultierenden State. Für öffentliche Ranglisten/Turniere sollte als nächster Schritt jede Spielaktion als Command an den Server gesendet und dort vollständig mit der Engine validiert werden.

Betrieb
Die Matches liegen derzeit im RAM und verfallen nach 24 Stunden Inaktivität. Ein Serverneustart beendet laufende Matches. Für dauerhaften Betrieb sollte SQLite/PostgreSQL ergänzt werden.
