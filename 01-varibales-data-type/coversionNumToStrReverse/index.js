const number = '100.99';

// convert str to number
// const output = +number;
// const output = parseInt(number);

// convert deciSTr to number
// const output = parseFloat(number);

// challenge mySring = developer make first chr capilaizeword

const myString = ['developer', 'hello', 'world'];

// first chr capilaizeword
// const str1 = myString.map((item) => item.charAt(0).toUpperCase());
// // from main string we will remove first chr and add same as its
// const str2 = myString.map((item) => str1+item.slice(1));
for (let i = 0; i < myString.length; i++) {
  myString[i] = myString[i].charAt(0).toUpperCase() + myString[i].slice(1);
}
const str2 = myString;
console.log(str2);
