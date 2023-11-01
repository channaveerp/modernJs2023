const data = [
  {
    name: 'channa',
    category: 'development',
    age: '26',
    start: '2018',
    end: '2019',
  },
  {
    name: 'channa1',
    category: 'teting',
    age: '268',
    start: '2018',
    end: '2019',
  },
  {
    name: 'channa3',
    category: 'analytics',
    age: '26',
    start: '2022',
    end: '2019',
  },
  {
    name: 'channa3',
    category: 'marketing',
    age: '26',
    start: '2028',
    end: '2032',
  },
  {
    name: 'channa3',
    category: 'retails',
    age: '26',
    start: '2028',
    end: '2032',
  },
];

// only return categories is rertals

let userData = data.filter((item) => item.category === 'retails');

// console.log(userData);

// compare started after 2018
let userData1 = data.filter((item) => item.start >= '2022');
// console.log(userData1);

// rducer is used for sorting on getting value in one word or digint

const num = [5, 4, 8, 7, 8, 4, 8, 87, 74];

const sum = num.reduce((accumaltor, curreValue) => console.log(curreValue));

// console.log(sum);

let result = data.reduce((accumaltor, curreValue) => console.log(curreValue));

console.log(result);
