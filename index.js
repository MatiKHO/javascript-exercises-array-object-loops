// PARA ESTE EJERCICIO SE PUEDE UTILIZAR BUCLES FOR O WHILE

// Crea un array vacío llamado `stack`
let stack = [];
// Crea un array `numbers` con los números del 1 al 5 in orden ascendente
let numbers = [1, 2, 3, 4, 5];
// La función multiplyByTwo tiene que devolver un array con los números multiplicados por 2 de cada elemento del array `numbers`

function multiplyByTwo(numbers) {
  let numbersByTwo = [];
  for (i = 0; i < numbers.length; i++) {
    numbersByTwo[i] = numbers[i] * 2;
  }

  return numbersByTwo;
}

// La función evenNumbers tiene que devolver los números pares del array `numbers`
function evenNumbers(numbers) {
  let evenArray = [];
  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenArray[evenArray.length] = numbers[i];
    }
  }

  return evenArray;
}

// La función numbersBackwards tiene que devolver los números del array `numbers` en orden inverso
function numbersBackwards(numbers) {
  let numbersOnReversed = [];
  for (i = numbers.length - 1; i >= 0; i--) {
    numbersOnReversed[numbersOnReversed.length] = numbers[i];
  }
  return numbersOnReversed;
}

// La función `sum` tiene que devolver la suma de todos los números del array `numbers`
function sum(numbers) {
  let result = 0;

  for (i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
  return result;
}

// La función `average` tiene que devolver el promedio de todos los números del array `numbers`
function average(numbers) {
  let averageResult = 0;
  let result = sum(numbers);

  for (i = 0; i < numbers.length; i++) {
    averageResult = result / numbers.length;
  }

  return averageResult;
}

// La función `biggestPrime` tiene que devolver el número primo más grande de los primeros 100 números
// El parámetro numbers es el número 100

function isPrime(num) {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

function biggestPrime(numbers) {
  let largestPrime = 0;

  for (let i = 2; i <= numbers; i++) {
    if (isPrime(i)) {
      largestPrime = i;
    }
  }

  return largestPrime;
}

// Crea una variable person y asígnale un objeto vacío
let person = {
  name: "Jorge",
  lastName: "Gonzalez",
  birthYear: 1995,
  getFullName: () => {
    return `${person.name} ${person.lastName}`;
  },
  getBirthYear: () => {
    return 2023 - person.birthYear;
  }
};

// Agrega una propiedad `name` al objeto y asígnale "Jorge" como valor



// Agrega una propiedad `lastName` al objeto y asígnale "Gonzalez" como valor

// Agrega una propiedad `birthYear` al objeto y asígnale 1995 como valor

// Agrega una función `getFullName` al objeto que devuelva el nombre completo

// Agrega una función `getBirthYear` al objeto que devuelva la edad (asumiendo que es el año 2023)
