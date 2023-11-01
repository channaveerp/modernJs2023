// challenge is need only name category in object
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
];

let data2 = {
  name: 'channa3',
  category: 'retails',
  age: '26',
  start: '2028',
  end: '2032',
};
// through mapping

// let result =data.map((item)=>{
//   return{
//     name:item.name,
//     category: item.category
//   }
// })
// console.log(result);

// through filter

// let res = data.filter((item) => {
//   return {
//     name: item.name,
//     category: item.category,
//   };
// });
// console.log(res);

// make first letter Upper case

const result = ['developer', 'name', 'category', 'name', 'category'];

const res = result.map(
  (item, index) => item[0].toUpperCase() + item.slice(1, item.length)
);

console.log(res);
