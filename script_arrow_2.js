// ██████████ FUNZIONI ARROW



// ██████████ ESERCIZIO LUCA

// const stringhe = ["Pippo", "Pluto", "Paperino"];
// const stringhe = ["Pippo", "Pluto", "Paperino", "Topolino"];
// const stringhe = ["Topolino", "Pippo", "Pluto", "Paperino"];
const stringhe = ["Pippo", 8, "Topolino", "Pluto", "Paperino"];
// const stringhe = ["Pippo", 8, "Pluto", "Paperino"];
// const stringhe = [];


console.log(stringhe);

// let elementiArrayStringhe = stringhe.length;
console.log(`Elementi nell'array stringhe: ${stringhe.length}`);

const findStringa = "Topolino";
console.log(`Stringa da cercare: ${findStringa}`);

// █████ Esercizio con for...

// function verificaArrayStringhe(array, cerca) {
//     const elementiArrayStringhe = stringhe.length;
//     if (elementiArrayStringhe > 0) {
//         for (let i = 0; i < elementiArrayStringhe; i++) {
//             // console.log(array[i]);
//             if (typeof array[i] !== "string") {
//                 console.log(`L'elemento dell'array "${array[i]}" non è una stringa!`);
//                 return false;
//                 break;
//             } else {
//                 if (array[i] === cerca) {
//                     return true;
//                     break;
//                 } else {
//                     return false;
//                 }
//             }
//         }
//         if (!risultato) {
//             console.log(`La stringa cercata "${cerca}" non è stata trovata!`);
//         } else {
//             console.log(`La stringa cercata "${cerca}" è stata trovata!`);
//         }
//     } else {
//         console.log("Array stringhe vuoto");
//         return false;
//     }
//     return false;
// }

// risultato = verificaArrayStringhe(array = stringhe, cerca = findStringa);
// console.log(`Risultato della ricerca di "${findStringa}": ${risultato}`);

// █████ Esercizio con forEach e arrow...

const verificaArrayStringheArrow = (array, cerca) => {
    // debugger;
    if (array.length > 0) {
        
        // array.forEach(stringa => {
        //     console.log(`typeof ${stringa}: ${typeof stringa}`);
        //     // if (typeof stringa !== "string") {
        //     //     return false;
        //     // }
        // });

        const trovaNonStringa = array.find(stringa => typeof stringa !== "string");
        if (trovaNonStringa) {
            console.log(`L'elemento dell'array: "${trovaNonStringa}" non è una stringa!`);
            return false;
        }

        const trovaStringa = array.find(stringa => stringa === cerca);
        if (trovaStringa) {
            return true;
        } else {
            return false;
        }

    } else {
        console.log("Array stringhe vuoto");
        return false;
    }
}

const risultato = verificaArrayStringheArrow(array = stringhe, cerca = findStringa);

console.log(`Risultato della ricerca di "${findStringa}": ${risultato}`);
