/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']

console.log("**********ESERCIZIO 1*************");
for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
console.log("**********ESERCIZIO 2*************");
pets.sort();
console.log(pets);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
console.log("**********ESERCIZIO 3*************");
pets.reverse();
console.log(pets);

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
console.log("**********ESERCIZIO 4*************");
pets.push(pets.shift());
console.log(pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

console.log("**********ESERCIZIO 5*************");
for (let i = 0; i < cars.length; i++) {
  if (i % 2 == 0) {
    cars[i].licensePlate = true;
  } else {
    cars[i].licensePlate = false;
  }
}
console.log(cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
console.log("**********ESERCIZIO 6*************");
cars.push({
  brand: 'Volkswagen',
  model: 'Polo',
  color: 'black',
  trims: ['life', 'style', 'r-line'],
  licensePlate: true
});

for (let i = 0; i < cars.length; i++) {
  cars[i].trims.pop();
}
console.log(cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
console.log("**********ESERCIZIO 7*************");
const justTrims = [];
for (let i = 0; i < cars.length; i++) {
  justTrims.push(cars[i].trims);
}
console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
console.log("**********ESERCIZIO 8*************");
for (let i = 0; i < cars.length; i++) {
  let stamp = (cars[i].color[0] === "b") ? "Fizz" : "Buzz";
  console.log(stamp);
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
console.log("**********ESERCIZIO 9*************");
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]
let i = 0;
while (i !== numericArray.indexOf(32) + 1) {
  console.log(numericArray[i]);
  i++;
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
console.log("**********ESERCIZIO 10*************");
const charactersArray = ['g', 'n', 'u', 'z', 'd'];

const lettere = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "z"
];

const posizioni = [];

for (let i = 0; i < charactersArray.length; i++) {
  for (let j = 0; j < lettere.length; j++) {
    if (charactersArray[i] === lettere[j]) {
      posizioni.push(j + 1);
      break;
    }
  }
}

console.log(posizioni);

// console.log("**********ESERCIZIO 10*************");

// const charactersArray = ['g', 'n', 'u', 'z', 'd'];
// const lettere = [
//   "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
// ];
// const posizioni = [];

// for (const character of charactersArray) {
//   switch (character) {
//     case "a":
//       posizioni.push(1);
//       break;
//     case "b":
//       posizioni.push(2);
//       break;
//     case "c":
//       posizioni.push(3);
//       break;
//     case "d":
//       posizioni.push(4);
//       break;
//     case "e":
//       posizioni.push(5);
//       break;
//     case "f":
//       posizioni.push(6);
//       break;
//     case "g":
//       posizioni.push(7);
//       break;
//     case "h":
//       posizioni.push(8);
//       break;
//     case "i":
//       posizioni.push(9);
//       break;
//     case "j":
//       posizioni.push(10);
//       break;
//     case "k":
//       posizioni.push(11);
//       break;
//     case "l":
//       posizioni.push(12);
//       break;
//     case "m":
//       posizioni.push(13);
//       break;
//     case "n":
//       posizioni.push(14);
//       break;
//     case "o":
//       posizioni.push(15);
//       break;
//     case "p":
//       posizioni.push(16);
//       break;
//     case "q":
//       posizioni.push(17);
//       break;
//     case "r":
//       posizioni.push(18);
//       break;
//     case "s":
//       posizioni.push(19);
//       break;
//     case "t":
//       posizioni.push(20);
//       break;
//     case "u":
//       posizioni.push(21);
//       break;
//     case "v":
//       posizioni.push(22);
//       break;
//     case "w":
//       posizioni.push(23);
//       break;
//     case "x":
//       posizioni.push(24);
//       break;
//     case "y":
//       posizioni.push(25);
//       break;
//     case "z":
//       posizioni.push(26);
//       break;
//     default:
//       console.error(`Errore: carattere "${character}" non trovato nell'alfabeto italiano.`);
//   }
// }

// console.log(posizioni);




