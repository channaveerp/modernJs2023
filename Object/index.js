const person = {
  name: "channaveer",
  age: 25,
  gender: "male",
  hobbies: ["football", "basketball", "cricket"],
  occupation: "programmer",
  address: {
    city: "Bangalore",
    state: "Karnataka",
    country: "India",
  },

  name1: "channaveer",
  age1: 25,
  gender1: "male",
  hobbies1: ["football", "basketball", "cricket"],
  occupation1: "programmer",
  address1: {
    city1: "Bangalore",
    state1: "Karnataka",
    country1: "India",
  },
};

console.log(person);
for (const value in person) {
  console.log(value);
}
// obj conbstructor
let obj4 = new Object();

// obj literal
let objltr = {};

// spread operator in obj
let x;
let obj1 = { a: 1, b: 2, c: 3, d: 4, e: 5 };
let obj2 = { d: 8, e: 5 };

// another method in obj to join two object
x = Object.assign({}, obj1, obj2);
x = { ...obj1, ...obj2 };

const person2 = {
  name1: "channaveer",
  age1: 25,
  gender1: "male",
  hobbies1: ["football", "basketball", "cricket"],
  occupation1: "programmer",
  address1: {
    city1: "Bangalore",
    state1: "Karnataka",
    country1: "India",
  },
};

x = person2.address1.city1;

console.log(x);
