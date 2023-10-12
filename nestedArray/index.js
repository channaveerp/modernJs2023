// nested array

let x;
const fruits = ["orange", "strabery", "banana", "mango"];

const fruits2 = ["apple", "banana2", "mango2"];
// task 1 : push one arr into another array

// fruits.push(fruits2);
const allfruites = [fruits, fruits2];
let t = allfruites[1][0];

// task 2: without adding arr i need to push elements directly
/* [
    "orange",
    "strabery",
    "banana",
    "mango",
    "apple",
    "banana2",
    "mango2"
]*/

// 1st method
x = fruits.concat(fruits2);

// 2nd method spredOperator
x = [...fruits, ...fruits2];

// task 3: let x = [1,2,3,[4,5,6] , 8,6,,[2,2,0]] i need  it in single array  x = [1,2,3,4,5,6 , 8,6,2,2,0]

let arr = [1, 2, 3, [4, 5, 6], 8, 6, , [2, 2, 0]];
x = arr.flat();

// task 4 :find is arr or  not ?
x = Array.isArray(allfruites);

// challenge1  x= [1,2,3,4,5] need

let arr1 = [1, 2, 3, 4, 5];
arr1.push(6);
arr1.unshift(0);
arr1.reverse();

// challenge2 x= [1,2,3,4,5] y = [5,6,7,8,9,10] o/p = [1,2,3,4,5,6,7,8,9,10]

let arr2 = [1, 2, 3, 4, 5];
let arr3 = [5, 6, 7, 8, 9, 10];

let arr4 = [...arr2, ...arr3]
arr4.splice(4,1)

console.log(arr4);
