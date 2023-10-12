function hello() {
  console.log("hello");
}
hello();

function addnumber(num1, num2) {
  return num1 + num2;
}

// const result = addnumber(10, 20);
// console.log(result);

function subtract(...num1) {
  return num1 + num1;
}
// const result1 = subtract(30, 40);

// make dyanamic sumfunction
function sum(...nummbers) {
  let total = 0;
  for (const num of nummbers) {
    total += num;
  }
  return total;
}
let x = sum(1, 5, 25);

// how can pass obj into function as parameter

function userData(users) {
  return `user name ${users.name} is login with ${users.id}`;
}

const users = {
  id: 1,
  name: "John",
  age: 25,
  gender: "male",
  hobbies: ["football", "basketball", "cricket"],
};

//  random number generator function

function generateRandomnum(days) {
  const item = Math.floor(Math.random() * days.length);
  console.log("item", item);
  return days[item];
}

const days = ["Sun", "Mon", "Tue", "Wed", "thur"];

console.log(generateRandomnum(days));
