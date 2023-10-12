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

const {
  name1: name,
  address1: { city1 },
} = person2;

const dest = [11, 22, 55, 44, 88, 55, 44];
const [f, s, ...rest] = dest;

console.log(f, s, ...rest);
