// calulator fcntion using f else
// function calulatorFcntion(num1, num2, operator) {
//   if (operator === '+') {
//     return num1 + num2;
//   } else if (operator === '-') {
//     return num1 - num2;
//   } else if (operator === '*') {
//     return num1 * num2;
//   } else if (operator === '/') {
//     return num1 / num2;
//   } else {
//     return 'not valid operator';
//   }
// }

// let output = calulatorFcntion(5, 10, '5');
// console.log(output);

// calulator fcntion using switch operator syntax

function calFucntion(num1, num2, operator) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '/':
      return num1 / num2;
    case '%':
      return num1 % num2;
    case '*':
      return num1 * num2;

    default:
      return 'not valid operator';
  }
}
let x = calFucntion(10, 5, '-');
console.log(x);
