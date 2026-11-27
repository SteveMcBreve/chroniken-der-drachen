# Chroniken der Drachen – Das elfische Archiv

Version 0.1 · D&D 2024 · Deutsch mit englischen Originalbezeichnungen

Ein responsives, statisches Kampagnenportal für die erste D&D-Runde. Der Titel ist ein Arbeitsname. Keine Anmeldung, keine externen Skripte, keine API-Schlüssel, keine Datenbank, kein Tracking. Alle Katalogdaten liegen lokal im Projekt. Die aktuelle Version enthält keine privaten Kampagnendaten.

## 1. Lokal starten (Windows / macOS / Linux)

1. ZIP entpacken und den Ordner `elfenportal-0.1` öffnen.
2. `index.html` doppelklicken. Ein moderner Browser reicht aus. Alternativ: Ordner in Visual Studio Code öffnen und eine lokale Vorschau verwenden.
3. Optional einen lokalen HTTP-Server starten. Im VS-Code-Terminal im Projektordner:

   Windows mit installiertem Python:
   ```powershell
   py -m http.server 8000
   ```

   macOS / Linux mit Python 3:
   ```bash
   python3 -m http.server 8000
   ```

   Dann `http://localhost:8000` aufrufen. Mit Strg+C im Terminal beenden. Python ist optional; zum bloßen Öffnen der Website nicht erforderlich.

## 2. Kostenlos online stellen – GitHub Pages

1. Unter https://github.com/new ein neues **öffentliches** Repository anlegen, z. B. `chroniken-der-drachen`. Kostenfreies GitHub-Konto reicht. Optional mit README initialisieren.
2. Im Repository `Add file` → `Upload files` wählen. Den **Inhalt des entpackten Projektordners** hochladen (nicht die ZIP und nicht den übergeordneten Ordner). Die Verzeichnisse `assets`, `css`, `data` und `js` müssen erhalten bleiben; `index.html` muss direkt auf der obersten Repository-Ebene liegen. Falls der Browser Verzeichnisse nicht unterstützt, die Git-Alternative unten verwenden. Commit erstellen.
3. `Settings` → `Pages`. Unter **Build and deployment** `Deploy from a branch` wählen. Branch `main`, Ordner `/(root)` und `Save`.
4. Auf den abgeschlossenen Pages-Deployment-Workflow warten und die dort angezeigte Website-Adresse öffnen. Typischer Aufbau: `https://DEIN-BENUTZERNAME.github.io/chroniken-der-drachen/`. Das ist ein Muster, keine bereits veröffentlichte URL.
5. Den von GitHub angezeigten Link mit der Gruppe teilen. Updates: Dateien ändern und erneut in `main` committen.

Offizielle Anleitung: https://docs.github.com/de/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

### Git-Alternative (VS Code)

Voraussetzungen: Git installiert, leeres öffentliches Repository erstellt, GitHub-Anmeldung eingerichtet. Im entpackten Ordner:

```bash
git init
git add .
git commit -m "Version 0.1 – Elfisches Archiv"
git branch -M main
git remote add origin https://github.com/DEIN-BENUTZERNAME/chroniken-der-drachen.git
git push -u origin main
```

Falls Git nach Name und E-Mail fragt, die eigene Git-Konfiguration setzen. Niemals Passwörter oder Zugriffstoken in den Quellcode schreiben. Anschließend Pages wie oben aktivieren. Wenn das Repository bereits Commits hat, stattdessen zuerst klonen und die Dateien in das geklonte Repository kopieren, dann committen und pushen.

## 3. Struktur

```text
elfenportal-0.1/
  index.html         Einstieg, Navigation und Detaildialog
  css/style.css      Responsive Gestaltung, Farben, Layout
  js/app.js          Navigation, Filter, Detailansichten, Quiz, Würfel
  data/catalog.js    Strukturierte Daten, Quellen und Bibliothek
  assets/emblem.svg  Eigenes grafisches Emblem
  assets/forest.svg  Eigenes grafisches Landschaftsmotiv
  README.md          Diese Anleitung
  .nojekyll          Verhindert unnötigen Jekyll-Build (optional)
```

`data/catalog.js` verwendet JavaScript-Daten statt separat geladener JSON-Dateien, damit die Website ohne Server und ohne Fetch-CORS-Probleme direkt per Doppelklick geöffnet werden kann. Die Daten lassen sich später in JSON oder eine Datenbank überführen. `window.CATALOG` enthält `sources`, `species`, `classes`, `subclasses`, `backgrounds`, `rules` und `library`.

## 4. Inhalte ändern

- **Titel**: `index.html` und `js/app.js` (Seitentitel, Marke).
- **Farben**: CSS-Variablen am Anfang von `css/style.css`.
- **Spezies**: In `data/catalog.js` eine Zeile in der entsprechenden `add`-Gruppe ergänzen: `English|Deutsch|Kategorie|Kurzbeschreibung|Varianten`.
- **Unterklasse**: In `subs` je Grundklasse `Englisch~Deutsch` an die mit Semikolon getrennte Liste anhängen.
- **Quellen**: `sources` enthält Name, URL und Version. Die Schlüssel verbinden die Einträge mit ihren Quellen.
- **Unsichere Quellen**: H1, H2 und DROP sind standardmäßig ausgeblendet. Wenn deine Heliana-Ausgabe feststeht, kannst du in den beiden Funktionen `add` und `subs` den bestätigten Schlüssel aus der Liste `['H1','H2','DROP']` entfernen. Nicht erworbene Varianten entfernen, statt sie als verfügbar auszugeben. Für Drops erst Abozugang prüfen. Partnerinhalte separat durch die Spielleitung freigeben. Änderungen in D&D Beyond und in diesem Archiv sind unabhängig; es gibt keine Kontosynchronisierung.
- **Regeln**: `rules` enthält deutsche Überschrift, englischen Begriff, eigene Erklärung und Beispiel.

## 5. Aktueller Umfang und Grenzen

- 57 Spezies-/Herkunftseinträge im Basiskatalog (einschließlich Custom Lineage); weitere 12 bedingte Einträge aus beiden möglichen Heliana-Ausgaben und Drops.
- 13 Grundklassen (12 aus PHB 2024 + Artificer aus Tasha, ältere Fassung), 101 Unterklassen im Basiskatalog und 10 bedingte Unterklassen. Unterklassen sind in Version 0.1 Namensübersichten, noch keine vollständigen Stufenbeschreibungen. Abstammungen sind in Speziesdetails gebündelt, nicht extra gezählt. Zahlen sind Datenbankzählungen, keine verifizierten Kontolizenzen.
- 22 Hintergrundnamen (noch keine vollständige Hintergrundauswahl über alle Bücher) und 15 Regelthemen mit Beispielen.
- Live-Suche, Quellen-/Kategoriefilter, Detaildialog, dreiteiliger Charaktertest, Würfel W4–W100 mit Modifikator und W20-Vorteil/Nachteil, responsive Navigation, Quellenliste.
- Keine Basic Rules (2014) oder PHB (2014). Das Regelwerk 2024 hat Vorrang. Ältere Spezies und Unterklassen müssen nach dessen Anpassungsregeln verwendet werden. Die deutsche Terminologie bei Erweiterungen ist teilweise eine Arbeitsübersetzung. Zusätzliche Optionen aus Baldur's Gate Gazetteer sowie weitere Feats und Hintergründe sind noch nicht katalogisiert. Die Tamer-Klasse ist in dieser Ausgabe nicht als D&D-Beyond-Grundklasse aufgenommen.
- Die Heliana-Ausgabe ist anhand des abgeschnittenen Titels nicht eindeutig. Beide Ausgaben werden als separate ungeprüfte Alternativen bereitgehalten; es wird kein Besitz beider behauptet. D&D Beyond Drops sind abonnementsabhängig. Geteilte Inhalte sind nicht mit Kauf gleichzusetzen. Keine Live-Verbindung zu D&D Beyond.
- Weltseite ist bewusst ohne festgelegte Weltgeschichte. Charakterbögen, Klassenstufen 1–20, Illustrationen pro Spezies, Questverwaltung, Karte, Benutzerkonten und echter SL-Bereich sind noch nicht implementiert.
- Öffentliches Hosting bedeutet: Jeder kann den Inhalt sehen. Keine geheimen SL-Notizen, persönlichen Daten, Tokens oder geschützte Buchinhalte einstellen. Ein zukünftiger privater Bereich benötigt eine echte serverseitige Authentifizierung; ein versteckter Link ist kein Zugriffsschutz.

## 6. Quellen und Rechte

Inoffizielles Fanprojekt mit eigenen Kurzbeschreibungen und eigenen SVG-Grafiken. Kein vollständiger Regelbuch-Nachdruck, keine offiziellen Bilder. Eigennamen dienen der Orientierung. Vollständige Regeln und Freischaltungen bleiben bei D&D Beyond. Dungeons & Dragons und D&D Beyond sind Marken ihrer jeweiligen Rechteinhaber.

- Regelbasis: https://www.dndbeyond.com/sources/dnd/br-2024
- Kompatibilität: https://www.dndbeyond.com/posts/1810-updates-in-the-players-handbook-2024
- Spezies: https://www.dndbeyond.com/species
- Quellenbücher: siehe `sources` in `data/catalog.js` und Bibliotheksseite.
- Heliana: https://www.dndbeyond.com/sources/dnd/hgtmh1 und https://www.dndbeyond.com/sources/dnd/hgtmh2
- Drops: https://www.dndbeyond.com/en/library/subscriber-content

## 7. Prüfung und nächste Schritte

JavaScript-Syntax geprüft (Node.js). Chromium-Funktionstests mit eingebettetem HTML, CSS, JS und SVG, da direkte Datei-/localhost-Navigation in der Testumgebung blockiert war: alle 11 Routen, Suche, Filter, Detaildialog, Charaktertest, Würfel und Smartphone-Navigation erfolgreich; keine erfassten JavaScript-Fehler. Veröffentlichung auf GitHub Pages noch nicht getestet oder durchgeführt. Relative Pfade sind im ZIP enthalten. 

Nächste Version: Speziesdetailseiten vervollständigen, Heliana-Ausgabe bestätigen, zusätzliche Herkunftsvarianten und die Buchliste erneut abgleichen; danach ausführliche Klassen- und Regelbeschreibungen.
