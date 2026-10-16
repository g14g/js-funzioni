// ██████████ FUNZIONI ARROW



// ██████████ ESERCIZIO 1

function calcolaPrezzoFinale (prezzo, iva) {
    return prezzo + (prezzo * (iva / 100));
}

const prezzoFinale = calcolaPrezzoFinale(prezzo = 100, iva = 22);
console.log(`Prezzo finale (con funzione classica): ${prezzoFinale}`);

const calcolaPrezzoFinaleArrow = (prezzo, iva) => {
    return prezzo + (prezzo * (iva / 100));
}

const prezzoFinaleArrow = calcolaPrezzoFinaleArrow(prezzo = 100, iva = 22);
console.log(`Prezzo finale (con funzione Arrow): ${prezzoFinaleArrow}`);



// ██████████ ESERCIZIO 2

const articoli = ["latte" , "pane", "uova"];

articoli.forEach(articolo => {
    console.log(`Articolo presente: ${articolo}`);
});



// ██████████ ESERCIZIO 3

const prezzi = [10, 20, 30];

const prezziScontati = prezzi.map(prezzo => prezzo * 0.9);

console.log(prezziScontati);



// ██████████ ESERCIZIO 4

const articoliFind = ["latte" , "pane", "uova"];

const trovatoArticolo = articoliFind.find(articolo => articolo.includes("e"));

console.log(`Il primo articolo che contiene il carattere "e" è: ${trovatoArticolo}`);


// ██████████ ESERCIZIO 5

const numeri = [4, 9, 12, 3];

const numeriFilter = numeri.filter(numero => numero >= 5);

console.log(numeriFilter);



// ██████████ ESERCIZIO 6

// const numeriArray = [2, 4, 7];
const numeriArray = [10, 8, 3, 5, 2, 4, 7];

// Prima versione diretta:
// const esisteNumeroDispari = numeriArray.some(numero => numero % 2 !== 0);
// console.log(`C'è almeno un numero dispari nell'array? Risposta: ${esisteNumeroDispari}`);

// Seconda versione, con più istruzioni in some... in questo caso serve inserire il return esplicito alla fine
let numeroTrovato;

const esisteNumeroDispari = numeriArray.some(numero => {
    numeroTrovato = numero;
    return numero % 2 !== 0;
});

console.log(`C'è almeno un numero dispari nell'array? Risposta: ${esisteNumeroDispari}, ed è il numero: ${numeroTrovato}`);



// ██████████ ESERCIZIO 7

// const importi = [20, 15, 18];
const importi = [9, 20, 15, 18];

const verificaImporti = importi.every(importo => importo >= 10);

console.log(`Tutti gli importi sono almeno 10€? Risposta: ${verificaImporti}`);



// ██████████ ESERCIZIO FINALE

// Da non svolgere
