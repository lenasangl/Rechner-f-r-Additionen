// Aktiviert den Strict Mode für sicheres JavaScript
"use strict";

// Klick-Event für den Button wird gesetzt, um die Rechenfunktion auszuführen
document.getElementById("rechnen").onclick = rechnen;

// Hauptfunktion zum Rechnen – holt Eingaben, prüft sie und zeigt das Ergebnis
function rechnen() {
  // Liest die Werte aus den Eingabefeldern
  const z1 = document.getElementById("zahl1").value;
  const z2 = document.querySelector("#zahl2").value;

  // Referenz auf das Ausgabefeld
  const ausgabe = document.getElementById("ausgabe");

  try {
    // Prüft, ob beide Eingaben vorhanden sind
    // TODO: Eingaben prüfen (leere Felder, NaN, Division durch 0...)
    // Division durch 0 macht in meinem Fall keinen Sinn wenn es nur um Addition geht...
    // TODO: Eigene Fehler mit `throw` erzeugen
    if(z1.trim() === "" || z2.trim() === "") {
      throw "Du musst in Beide Felder eine Zahl eingeben!";
    }


    // Prüft, ob beide Eingaben Zahlen sind
    // TODO: Strings korrekt in Zahlen umwandeln und sinnvoll weiterverarbeiten
    // TODO: Eigene Fehler mit `throw` erzeugen
    const Nummer1 = Number(z1)
    const Nummer2 = Number(z2)

    if (isNaN(Nummer1) || isNaN(Nummer2)) {
      throw "Deine Eingabe ist keine Zahl";
    }

    if (Nummer1 === 0 || Nummer2 === 0){
      throw "Additionen mit 0 sind nicht erlaubt!";
    }

    // Berechnung aufrufen – mit Callback-Funktion
    //let summe = addiere(Nummer1, Nummer2, zeigeErgebnis); // Übergabe korrekt?

    // Ergebnis verzögert anzeigen – mit async/await
    //let result = verzögertBerechnen(summe);
    addiere(Nummer1, Nummer2, async function (ergebnis) {
      await verzögertBerechnen(ergebnis);
    })



  } catch (err) {
    // Gibt die Fehlermeldung im Ausgabefeld aus
    ausgabe.innerText = "❌ Fehler: " + err;

  } finally {
    // TODO: beide Eingabefelder korrekt zurücksetzen
    document.getElementById("zahl1").value = "";
    document.getElementById("zahl2").value = "";
    document.getElementById("ausgabe").style.color = "black"; // Zurücksetzen der Farbe

  }
}

// Callback-Funktion zur Anzeige des Ergebnisses
function zeigeErgebnis(wert) {
  document.getElementById("ausgabe").innerText = "✅ Ergebnis: " + wert;
}

// Führt die Addition durch und ruft anschließend den Callback auf
function addiere(a, b, callback) {
  let ergebnis = a + b; // TODO: Zahlen vorher umwandeln (z.B. mit Number)
  callback(ergebnis);
}

// Asynchrone Funktion mit künstlicher Verzögerung, z.B. zur Simulation von Ladezeit
async function verzögertBerechnen(wert) {
  // TODO: async-Funktion korrekt mit await aufrufen
  let promise = new Promise((resolve) => {
    setTimeout(() => resolve(wert), 800); // Ich persönlich finde 2s Verzögerung etwas zu lange
  });

  const result = await promise;

  const ausgabe = document.getElementById("ausgabe");
  let emoji = "";

// Erweiterung: Textfarbe ändert sich je nach Ergbnis (+passende Emojis)
  //Farbe je nach Ergebnis
  if (result <= 100) {
    ausgabe.style.color = "red";
    emoji = "❤️"
  } else if (result <= 1000) {
    ausgabe.style.color = "orange";
    emoji = "🧡"
  } else if (result <= 3000) {
    ausgabe.style.color = "blue";
    emoji = "💙"
  } else {
    ausgabe.style.color = "green";
    emoji = "💚"
  }

  // zeigt mir das Ergebnis
  ausgabe.innerText = `✅  ${emoji} Ergebnis: ${result} ${emoji}  ✅`;


//Erweiterung: Botschaften bei bestimmten Zahlen

  //mögliche Botschaften
  const bedeutungen = {
    1: "Einheit, Anfang, Selbstbewusstsein",
    3: "Harmonie, Dreifaltigkeit – Glückszahl in vielen Kulturen",
    4: "Stabilität – aber in Ostasien auch Symbol für Tod",
    7: "Mystik und Spiritualität",
    8: "Unendlichkeit und Wohlstand (besonders in China)",
    9: "Weisheit, Vollendung – in Japan problematisch",
    10: "Vollständigkeit und Ordnung",
    11: "Intuition, spirituelles Erwachen (Meisterzahl)",
    12: "Vollständigkeit (Monate, Apostel, Sternzeichen)",
    13: "Unglück im Westen – Glück in Italien",
    17: "Unglückszahl in Italien („VIXI“ = Ich habe gelebt)",
    23: "Mystisch, Zahl vieler Verschwörungen",
    33: "Spirituelle Meisterzahl",
    42: "Die Antwort auf alles (Per Anhalter durch die Galaxis)",
    666: "Zahl des Tiers – Symbol des Teufels",
    777: "Heilig, göttlich – Gegensatz zu 666",
    100: "Perfektion und Bestleistung",
    108: "Heilige Zahl im Hinduismus und Buddhismus"
  };

  // Erweiterung: Sprachausgabe je nach Ergebnis
  // Standard-Sprachausgabe (falls nicht überschrieben)
  let vorlesetext = `Das Ergebnis ist ${result}`;

// Prüft auf besondere Zahl/Lest dazu passend was vor
  if (bedeutungen.hasOwnProperty(result)) {
    const botschaft = bedeutungen[result];

    //Zusatz bei desonderer Zahl
    const zusatz = document.createElement("p");
    zusatz.innerText = `🔮 WOW du hast eine "besondere Zahl" gefunden 🔮 \nBedeutung dieser Zahl: ${botschaft}`;
    zusatz.style.marginTop = "20px";
    ausgabe.appendChild(zusatz);

    vorlesetext = `Hahahah eine besondere Zahl! Was ein Zufall: ${botschaft}`;

  }

// Sprich den passenden Text
  sprich(vorlesetext);

};

function sprich(text) {
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "de-DE";
  synth.speak(utterance);
}



//gefundene Fehler:
//   const z1 = document.getElementByID("zahl1").value; -->   const z1 = document.getElementById("zahl1").value;
// document.getElementById("rechnen").onclick = rechnen(); --> document.getElementById("rechnen").onclick = rechnen;
//   const z2 = document.querieSelector("#zahl2").value; -->   const z2 = document.querySelector("#zahl2").value;
//   const ausgabe = document.getElementbyId("ausgabe"); -->   const ausgabe = document.getElementById("ausgabe");
//   document.getElementsByID("ausgabe").insertText = "✅ Ergebnis: " + wert; -->   document.getElementByID("ausgabe").insertText = "✅ Ergebnis: " + wert;
//   document.getElementsById("ausgabe").innerText = output; // TODO: Tippfehler in Methode beheben -->   document.getElementById("ausgabe").innerText = output; // TODO: Tippfehler in Methode beheben
// let summe = addiere(z1, z2, zeigeErgebnis); --> let summe = addiere(nummer1, nummer2, zeigeErgebnis);
//   document.getElementById("ausgabe").insertText = "✅ Ergebnis: " + wert;  -->   document.getElementByID("ausgabe").innertText = "✅ Ergebnis: " + wert;

// (man könnte den Code einheitlicher machen, wenn man statt der Verwendung von #zahl2 auch auf einheitlicheres
//Aufrufen dder "Zahlen" 1 und 2 gehen)






/*
Reflexion:

Was war die größte Herausforderung beim Umgang mit Fehlern oder Promises?
Bei der Fehlersuche übersehe ich oft die "Rechtschreibfehler", entweder weil ich drüberlese oder weil ich, wenn ich den
Code nicht selbst schreibe, nicht so sicher bin wie es richtig gehört.
Außerdem brauche ich immer etwas, bis ich verstehe was bestimmte Abschnitte machen/machen sollten und grade bei den neuen
Befehlen ist es natürlich zu Beginn nocheine größere Herausforderung.


Wo hat dir async/await die Arbeit erleichtert?
- haben wir z.B. bei dem "addiere"-Part und in der "verzögertBerechnen"-Funktion verwendet
- durch async/await hat man weniger Verschachtelungen und ist dementsprechen strukturierter zum Lesen
- man kann leichter Fehler behandeln
- macht die Einbindung in Callback leichter

Welche kreative Idee hat dir am meisten Spaß gemacht?
Mir macht das Gestalten mit CSS und die Wahl von Bildern, Schrift, Farbe,... immer am meisten Spaß.
Die Erweiterung mit der Sprachausgabe hat irgendwie auch Spaß gemacht.
*/
