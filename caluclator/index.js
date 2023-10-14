// calulator fcntion
function calulatorFcntion(num1, num2, operator) {
  if (operator === '+') {
    return num1 + num2;
  } else if (operator === '-') {
    return num1 - num2;
  } else if (operator === '*') {
    return num1 * num2;
  } else if (operator === '/') {
    return num1 / num2;
  } else {
    return 'not valid operator';
  }
}

let output = calulatorFcntion(5, 10, '5');
console.log(output);
