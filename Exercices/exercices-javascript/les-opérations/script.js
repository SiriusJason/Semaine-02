//Insérez ici les exercices 2.1 à 2.4
function addition(a, b, c, d) {
  return a + b + c + d;
}
console.log(addition(2, 4, 8, 16));

function modulo(a, b, c, d, f) {
  return (((a % b) % c) % d) % f;
}
console.log(modulo(3, 178, 65, 98, 123));

function calculeremise(prix, remise) {
  return prix, remise;
}
var prix = 79.99;
var remise = 19;
var nouveauxprix = Math.round(prix * (1 - remise / 100));

console.log(nouveauxprix);

// Insérez ici les exercices 2.4 à 2.8 en utilisant les variables déjà créées à votre disposition

let firstNumber = 9;
let secondNumber = 8;
let thirdNumber = 4;
let fourthNumber = 12;

console.log((firstNumber /= 3));

console.log((firstNumber += secondNumber));

function assignationaddition(firstNumber, secondNumber) {
  return firstNumber, secondNumber;
}

function assignationmultiplication(firstNumber, thirdNumber) {
  return firstNumber, thirdNumber;
}

console.log((firstNumber *= thirdNumber));

function assignationsoustraction(firstNumber, fourthNumber) {
  return firstNumber, fourthNumber;
}

console.log((firstNumber -= fourthNumber));
// Exercice incrémentation
function incrementOnClick() {
  document
    .getElementById('increment')
    .addEventListener('click', function decrement() {
      // Insérez ici le bout de code nécessaire à la réalisation de l'exercice sur la décrémentation, nous verrons plus tard à quoi ces lignes pré-existantes correspondent
      let incrementCounter = 0;
      function inc() {
        incrementCounter++;
        return incrementCounter;
      }
      incrementCounter++;

      console.log(incrementCounter);
    });
}
// Exercice incrémentation
function decrementOnClick() {
  document
    .getElementById('decrement')
    .addEventListener('click', function increment() {
      // Insérez ici le bout de code nécessaire à la réalisation de l'exercice sur la décrémentation, nous verrons plus tard à quoi ces lignes pré-existantes correspondent
      let decrementCounter = 100;
      function dec() {
        decrementCounter--;
        return decrementCounter;
      }
      decrementCounter--;

      console.log(decrementCounter);
    });
}
