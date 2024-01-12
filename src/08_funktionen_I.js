/***** Funktionen 01 *****/
// 1. Kapselung von Codeblöcken

// Funktionsaufruf | call
// test();

// Funktionsrumpf | callee
// Funktionsdeklaration
function test()
{ 
    console.log("Hallo, Benjamin!");
}

/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN

// Call
// ausgabeNamen();

// Funktion
function ausgabeNamen() {
    // interne Variable | What happens in VEGAS ...
    let firstName = "Maria";
    console.log("Hallo, " + firstName + "!");
}

// console.log(firstName); // Fehler : scope!

/***** Funktionen 02b *****/
// 2b. Parametrisierung + Datenübergabe von AUSSEN

// ausgabeNamen2("Maria"); // Argument --> Daten für Parameter
// ausgabeNamen2("Nadim");
// ausgabeNamen2("Melanie");

function ausgabeNamen2(firstName) {  // Parameter
    console.log("Hallo, " + firstName + "!");
}

/***** Funktionen 02c *****/
// 2c. Mehrere Parameter / Argumente

// ausgabeNamenParams("Max","Mütze");

const prompt = require('prompt-sync')({sigint: true});
ausgabeNamenParams(prompt("Vorname? :"),prompt("Name? :")); // Piping

function ausgabeNamenParams(firstName, familyName) {  // Parameter
    console.log("Hallo, " + firstName + " " + familyName + "!");
}

/***** Funktionen 03a *****/
// 03a. Vorbereitung -Trennen der Funktionalitäten
// Postulat: one function = one job (uncle Bob)
// SRP single responsibility principle

ausgabeNamenSRP("Max","Mütze");

function ausgabeNamenSRP(firstName, familyName) {  // Parameter

    // 1. Funktionalität: string composing
    const GAP = " ";
    let outputStr = "Hallo, " + firstName + GAP + familyName + "!"

    // 2. Funktionalität: string output
    console.log(outputStr);
}
