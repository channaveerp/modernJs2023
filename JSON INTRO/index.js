const person = {
  id: 1,
  name: "John",
  age: 25,
  gender: "male",
  hobbies: ["football", "basketball", "cricket"],
  occupation: "programmer",
};

// convert str to json
const jsonConvert = JSON.stringify(person);

// json to string

const obj = JSON.parse(jsonConvert);

const str2 = [
  {
    id: 1,
    name: "John",
    age: 25,
    gender: "male",
    hobbies: ["football", "basketball", "cricket"],
    occupation: "programmer",
  },
  {
    id: 2,
    name: "hello",
    age: 25,
    gender: "male",
    hobbies: ["football", "basketball", "cricket"],
    occupation: "programmer",
  },
  {
    id: 3,
    name: "hello",
    age: 25,
    gender: "male",
    hobbies: ["football", "basketball", "cricket"],
    occupation: "programmer",
  },
];

const library = [
  {
    id: 1,
    title: "Welcome",
    author: "channus",
    status: {
      onw: true,
      reading: false,
      read: false,
    },
  },
  {
    id: 2,
    title: "hello world",
    author: "channu",
    status: {
      onw: true,
      reading: false,
      read: false,
    },
  },
  {
    id: 3,
    title: "Welcome",
    author: "channus",
    status: {
      onw: true,
      reading: false,
      read: false,
    },
  },
];

// change all reading status true
library[0].status.reading = true;
library[1].status.reading = true;
library[2].status.reading = true;

// to rename title of respective obj
const { title: hello } = library[0];
const { title: helloworld } = library[1];

// conver obj into json format
const str5 = JSON.stringify(library);

console.log(str5);
