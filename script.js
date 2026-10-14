// ██████████ FUNZIONI

// Gli esercizi svolti e con il prompt sono commentati



// ██████████ ESERCIZIO 1

function miaEta () {
    console.log("La mia età: 50 anni");
}

miaEta();



// ██████████ ESERCIZIO 2

function calcolaEta () {
    return 2026 - 1976;
}

const calcoloMiaEta = calcolaEta();

console.log(`Il calcolo della mia età è: ${calcoloMiaEta} anni`)



// ██████████ ESERCIZIO 3

function calcolaArea (base, altezza) {
    return base * altezza;
}

const areaCalcolata = calcolaArea(base = 100, altezza = 50);

console.log(`L'area calcolata è: ${areaCalcolata}`)



// ██████████ ESERCIZIO 4

function convertiInEuro (dollari, tassoDiCambio) {
    return dollari * tassoDiCambio;
}

// 1 $ uguale a 0.90 € (alla data del 14/10/2026)
const euro = convertiInEuro(dollari = 100, tassoDiCambio = 0.9);

console.log(`100 $ equivalgono a ${euro} €`);



// ██████████ ESERCIZIO 5

// Esercizio: dividere la funzione in 2
function valutaStudente(voto1, voto2, voto3) {
    const media = (voto1 + voto2 + voto3) / 3;
    if (media >= 6) {
        return 'Promosso con media ' + media;
    } else {
        return 'Bocciato con media ' + media;
    }
}

function calcolaMedia (voto1, voto2, voto3) {
    return (voto1 + voto2 + voto3) / 3;
}

function verificaPromozione (media) {
    // Avevo scritto la verifica della media nella funzione
    // if (media >= 6) {
    //     return `Promosso con media: ${media}`
    // } else {
    //     return `Bocciato con media: ${media}`
    // }
    return media >= 6;
}

const mediaStudente = calcolaMedia(voto1 = 5, voto2 = 7, voto3 = 5);
const promozioneStudente = verificaPromozione(mediaStudente);

// console.log(promozioneStudente);

if (promozioneStudente) { // Si può omettere === true come invece scritto nella soluzione?
    console.log(`Promosso con media: ${mediaStudente}`);
} else {
    console.log(`Bocciato con media: ${mediaStudente}`);
}



// ██████████ ESERCIZIO 6

function generaNumero () {
    return Math.floor((Math.random() * 6) + 1);
}

function tiraDado () {
    const numeroDado = generaNumero();
    alert(`È uscito il numero: ${numeroDado}`);
}



// ██████████ ESERCIZIO FINALE

function calcolaAreaRettangolo (base, altezza) {
    return base * altezza;
}

function riGeneraNumero () {
    return Math.floor((Math.random() * 6) + 1);
}

function calcolaPrezzoPiuIva (prezzo, iva) {
    return prezzo + (prezzo * iva / 100);
}

function mostraAreaRettangolo () {
    const areaRettangolo = calcolaAreaRettangolo(base = 12, altezza = 7);
    alert(`L'area di un rettango di base 12 e altezza 7 è: ${areaRettangolo} mq`);
}

function ritiraDado () {
    const numeroDado = riGeneraNumero();
    alert(`È uscito il numero: ${numeroDado}`);
}

function mostraCalcoloIva (prezzo, iva) {
    const prezzoPiuIva = calcolaPrezzoPiuIva(prezzo = 85, iva = 22);
    alert(`Il prezzo di 85 € più iva al 22% è ${prezzoPiuIva} €`);
}