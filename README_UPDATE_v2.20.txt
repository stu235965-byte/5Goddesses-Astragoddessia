5Goddesses Astragoddessia – Update v2.20
Basis: hochgeladene v2.19. Service-Worker-Cache: v131.

Sofortige Zerstörung
- Ursache: Das Rüstkammer-Symbol wurde als Rüstung interpretiert. Ausspielprüfung,
  Zielauswahl und Auflösung berücksichtigten ausschließlich den armor-Slot.
- Korrigierter Effekt: Zerstöre eine offene fraktionslose Rüstkammerkarte.
- Instabiler Stab ist als offene fraktionslose Waffe ein gültiges Ziel.
- Offen aus der Hand in Versorgungs- und Nachschubphase spielbar, sofern ein
  gültiges Ziel und ein freier, nicht blockierter AZR-Platz vorhanden sind.
- Alle Ausrüstungsplätze und offene Rüstkammerkarten in Feldzonen werden geprüft.
  Eigene Karten sind ebenfalls wählbar. Verdeckte und fraktionsgebundene Karten
  sind ausgeschlossen. Die Zielgültigkeit wird bei der Auflösung erneut geprüft.
- Zerstörung nutzt die vorhandene Feldkarten-Auflösung. Astralfragment-Belohnungen
  bleiben erhalten; mit dem Stab entfällt unmittelbar sein Ausrüstungsbonus.
- Datenbankbeschreibung und Zielauswahltext korrigiert; alle Datenexporte abgeglichen.
- Historischen engine_key und gespeicherte Auswahlsorte aus Kompatibilitätsgründen
  beibehalten. Keine Änderung der bestehenden Instinkt-Kennzeichnung.

Verifikation
- Neuer Regressionstest test_sofortige_zerstoerung_v220.js: 17 PASS / 0 FAIL.
  Vor dem Fix: 2 PASS / 15 FAIL; der gemeldete Fehler war reproduzierbar.
- Instinkt/Schildauswahl: 8/8; Direktschaden/Ablage: 12/12;
  entwickelte Ausrüstung: 4/4; Storykarte/Decks/Gefechtsstarts: 59/59;
  Wunderkosten-Entwicklung: 80/80; zusätzliche Stufe-2-Wunderkosten: 30/30.
- Insgesamt 210 bestandene Prüfungen dieser gezielten Testauswahl.
- Syntaxprüfungen erfolgreich. Kein manueller Browser-Gesamtdurchlauf.
- Die historischen, bereits in v2.19 veralteten Tests wurden nicht pauschal angepasst.

Installation
Den Inhalt des Projektordners in dieser vollständigen ZIP über die bestehende
PWA legen und veröffentlichen. Nach dem Neuladen muss v2.20 angezeigt werden.
Spielstände und Decks behalten ihre bisherigen Speicherschlüssel.
