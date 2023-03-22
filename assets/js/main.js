/* 
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
    -input km
    -input eta

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
    -funzione : prezzo calcolando 0.21 euro * km da input

va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
    -if eta compresa fra 18 e 65 = prezzo normale
        else <18=-20%
        else >65=-40%
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

*/

/* variabili */


/*
let km = document.getElementById("varKm").value;
let eta = document.getElementById("varEta").value;

document.getElementById("iTuoiKm").innerHTML = `<p>devi fare ${km} km</p>`
document.getElementById("laTuaEta").innerHTML = `<p>hai ${km} anni</p>`
let biglietto = km * 0.21

let biglietto = km * 0.21;
    console.log(biglietto)
    document.getElementById("prezzo").innerHTML = `<p>il tuo biglietto costa ${biglietto}£</p>`

*/

function biglietto() {
    let km = document.getElementById("varKm").value;
    let eta = document.getElementById("varEta").value;
    console.log(km)
    console.log(eta)
    document.getElementById("iTuoiKm").innerHTML = `<p>devi fare ${km} km</p>`
    document.getElementById("laTuaEta").innerHTML = `<p>hai ${eta} anni</p>`
    let biglietto = km * 0.21;
    console.log(biglietto)
    document.getElementById("prezzo").innerHTML = `<p>il tuo biglietto costa ${biglietto} euro</p>`

}