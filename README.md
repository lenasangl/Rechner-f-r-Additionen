[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/lRDGc7nY)
# 🧩 Hausaufgabe: „Chaos-Kalkulator – Mit Fehlern rechnen“

## 🧙‍♀️ Idee:

Du programmierst einen magischen Mini-Kalkulator. 
Du erhältst ein unfertiges und fehlerhaftes Projekt. Deine Aufgabe ist es, den vorhandenen Code zu verstehen, Fehler zu beheben, fehlende Teile zu ergänzen und die Anwendung kreativ zu erweitern.

## 🎯 Ziel der Aufgabe:

Erstelle eine interaktive Webanwendung, bei der zwei Zahlen eingegeben werden und eine Berechnung durchgeführt wird.
Dabei musst du:

- Fehler kontrolliert abfangen
- ein Ergebnis verzögert anzeigen
- eine Callback-Funktion verwenden
- und die Anwendung optisch mit Flexbox strukturieren.

## 🧠 Das brauchst du dafür:

| Thema                                           | Inhalt                                   | Präsentation                                                  |
|-------------------------------------------------|------------------------------------------|---------------------------------------------------------------|
| Datentypen & Operatoren                         | Zahlen, Strings, Vergleich mit ==/===    | 📄 E1 – JS-Grundlagen                                         |
| Variablen & Scope                               | let, const, Block-Scope vs. Global-Scope | 📄 E3 – Scope                                                 |
| Funktionen mit Parametern                       | Funktionsdefinition, Parameter, Rückgabe | 📄 E2 – Funktionen                                            |
| Eventhandling                                   | addEventListener, click, keydown         | 📄 E3 – Ereignisse                                            |
| DOM-Zugriffe & Manipulation                     | getElementById, .innerText, .value       | 📄 E2 – DOM-Manipulation                                      |
| Math-Objekt                                     | Math.random(), Math.floor() usw.         | 📄 E3 – Math                                                  |
| CSS Flexbox                                     | Flexbox-Container, Zentrierung, Spalten  | 📄 E3 – Flexbox (Wiederholung)                                |
| Fehlerbehandlung mit try, catch, throw, finally |                                          | 📄 E4 Folie: „Fehler in JavaScript – Was tun, wenn’s kracht?“ | 
| Callback-Funktionen                             | Übergabe von Funktionen als Parameter    | 📄 E4 Folie: „Callbacks – Der klassische Weg“                 | 
| Promises                                        | new Promise(), .then()                   | 📄 E4 Folie: „Promises – moderner und klarer“                 | 
| Async / Await                                   | async function, await                    | 📄 E4 Folie: „async & await – der moderne Stil“               | 

## 💡 Pflichtfunktionen:

Die mitgelieferte JavaScript-Datei enthält:

- bereits vorbereiteten, aber fehlerhaften Code
- mehrere // TODO:-Kommentare mit Hinweisen, wo du selbst etwas ergänzen oder reparieren musst

Du musst Folgendes vollständig umsetzen und funktional machen:

- Eingabe von zwei Zahlen
- Ergebnis erscheint zeitverzögert (z.B. nach 2 Sekunden)
- Bei fehlerhaften Eingaben (leeres Feld, Buchstaben, Division durch 0 etc.):
    - eigene Fehlermeldung erzeugen (throw)
    - mit catch abfangen und anzeigen
    - mit finally Eingabefelder zurücksetzen
- Eine Rechenfunktion soll mit einem Callback arbeiten
- Eine Rechenfunktion soll asynchron sein (async/await, Promise, setTimeout)
- Das Layout wird mit CSS Flexbox umgesetzt (auch responsive!)

## 🎨 Kreative Erweiterung (2 davon verpflichtend):

- Mehrere Rechenarten (× ÷ ±)
- Farbänderung je nach Ergebnis
- Emoji- oder Textreaktion abhängig vom Resultat
- Automatischer Zufallsrechner
- „Denkspruch“: z.B. bei Ergebnis = 13 → „Unglückszahl! 😱“
- Soundeffekt oder kleine Animation bei erfolgreichem Ergebnis

## ✍️ Reflexion (entweder am Ende als Kommentar oder in einem eigenen File):

- Was war die größte Herausforderung beim Umgang mit Fehlern oder Promises?
- Wo hat dir async/await die Arbeit erleichtert?
- Welche kreative Idee hat dir am meisten Spaß gemacht?

## 📐 Gestaltung:

- Nutze Flexbox, um alle UI-Elemente sinnvoll anzuordnen
- Dein Layout muss responsive sein (z.B. mobilfreundlich)
- Farben, Icons, Animationen sind erlaubt – solange sie den Code nicht überlagern

## 📊 Bewertung (100 Punkte):

| Kriterium                                   | Punkte |
|---------------------------------------------|--------|
| 🔧 Fehlerbehandlung (throw, catch, finally) | 30     |
| 💡 Kreative Erweiterung (mind. 2)           | 30     |
| ✍️ Codequalität & Kommentare                | 20     |
| 🤔 Reflexion                                | 10     |
| 🌟 Bonus für originelle Ideen               | +10    |

🧠 Tipp: Alles, was du für diese Hausaufgabe brauchst, hast du in den Foliensätzen E1–E4 gelernt.
