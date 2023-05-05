// forEach();
const numbers = [1, 2, 3, 3, 4, 5, 6, 7];
numbers.forEach((item, index, arr) =>
  console.log("a[" + index + "] = " + item)
);

// function consoleItem(item, index, arr) {
//   console.log("a[" + index + "] = " + item);
// }

let sum = 0;
numbers.forEach((item, index, arr) => (sum += arr[index])); // or just write sum += item;

const letters = ["a", "d", "c", "d", "e", "a", "d", "c", "d", "e"];

let count = {};

letters.forEach((letter, index, arr) => {
  if (count[letter]) {
    count[letter]++;
  } else {
    count[letter] = 1;
  }
});

console.log(count);

// ================================================================
// map();

const numbersDouble = numbers.map(double);

function double(value, index, arr) {
  return value * 2;
}

// function multiply(value, index, arr) {
//     return value * index;
// }

console.log(numbersDouble);

const inStore = [
  {
    name: "laptop",
    price: 1000,
    count: 5,
  },
  {
    name: "desktop",
    price: 1500,
    count: 2,
  },
  {
    name: "mobile",
    price: 500,
    count: 10,
  },
];

const totalProductValue = inStore.map((item) => ({
  name: item.name,
  totalValue: item.price * item.count,
}));

console.log(totalProductValue);

const str = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

const changeToNum = str.map((item) => Number(item));

// =================================================================
// filter();

const even = numbers.filter(isEven);

function isEven(value) {
  return value % 2 === 0;
}

console.log(even);

// ==========
const people = [
  {
    name: "John",
    age: 11,
  },
  {
    name: "Jack",
    age: 18,
  },
  {
    name: "Mark",
    age: 32,
  },
];

const adults = people.filter((person) => person.age >= 18);

console.log(adults);

// ==========
const nums = numbers.filter((value, index, arr) => {
  return arr.indexOf(value) === index;
});

console.log(nums);

// =================================================================
// reduce()

const ints = [1, 2, 3, 4, 5, 6];

const total = ints.reduce(sumInts, 0);
function sumInts(accumulator, value) {
  return accumulator + value;
}

const max = ints.reduce(maxInts, -Infinity);
function maxInts(accumulator, value) {
  if (accumulator > value) {
    return accumulator;
  } else {
    return value;
  }
}

const totalFromStore = inStore.reduce(
  (acc, item) => acc + item.price * item.count,
  0
);

// =================================================================
// slice()

const myNums = [1, 2, 3, 4, 5, 6, 7, 8];

const slicedNums = myNums.slice(1, 4); // from indedx 1(included) till 4th index(not included)
const slicedNums1 = myNums.slice(-3); // [6,7,8];
const slicedNums2 = myNums.slice(1); // from 1 to end;

const participants = ["Ali", "Usman", "Umar", "Mustafa", "Zubayr"];
const winners = participants.slice(0, 3); // Ali, Usman, Umar;

// =================================================================
// splice()

const fiveNums = [1, 2, 3, 4, 5];

// const deleted = fiveNums.splice(2, 3); // [3,4,5]
// if we want to just addEventListener, not deleting, we need to write like below:
// but it is not so good, but we can add...
fiveNums.splice(3, 0, 55);

// =================================================================
// sort()

const names = ["Ali", "Usman", "Umar", "Mustafa", "Zubayr"];

names.sort(); //  ['Ali', 'Mustafa', 'Umar', 'Usman', 'Zubayr'];

// sorting nums
const numsForSorting = [3, 5, 7, 3, 1, 5, 9, 7, 5, 1];
numsForSorting.sort();

// function compareFunction(a, b) {
//   // 1. < 0 ... a
//   // 2. 0 ... nothing will be changed
//   // 3. > 0 ... b comes first
//   return a - b;
// }

const peopleForSorting = [
  {
    name: "Ali",
    age: 23,
  },
  {
    name: "Usman",
    age: 19,
  },
  {
    name: "Umar",
    age: 21,
  },
];

peopleForSorting.sort((a, b) => {
  return a.age - b.age; // sorting from less to greater
  // return b.age - a.age  // opposite one
});

// =================================================================
// concat()

const a = [1, 2];
const b = [3, 4];
const c = [5, 6];

const res = a.concat(b, c);

// =================================================================
// fill()

const elements = [1, 2, 3, 4, 5, 6, 7];
// elements.fill(0); // make all 0
elements.fill(0, 1, 6);
console.log(elements);

function fillInNumbers(n) {
  return Array(n)
    .fill(0)
    .map((_, idx) => idx + 1);
}
console.log(fillInNumbers(3));

// =================================================================
//  includes()
const myArr = ["milk", "apple", "cabbage", "juice"];

const includesRes = myArr.includes("apple");
// console.log(includesRes);
if (includesRes) {
  console.log("Yuppy");
} else {
  console.log("Nope, ... let's but it");
}

// =================================================================
// join()

const joinRes = myArr.join("-");

// ================================================================
// reverse()

const reverseRes = myArr.concat().reverse();

console.log(myArr);
console.log(reverseRes);

const string = "Coding is fun";

const resStr = string.split("").reverse().join("");

// =================================================================
// push()

myArr.push("cheese");

// =================================================================
// pop()

const lastEl = myArr.pop();

// =================================================================
// unshift()

const addFirst = myArr.unshift("kebab", "tomato");

// =================================================================
// shift();

const firstEl = myArr.shift();

// =================================================================
// indexOf();

console.log(myArr.indexOf("milk"));

// !!!
// indexOf() gives us the index of first occured item
// lastIndexOf() gives us the index of last occured item

// =================================================================
const result = numbers.every((item) => item > 0);

const arrays = [
  [1, 2, 3],
  [2, 3, 4],
  [3, 4, 5],
];

const ourRes = arrays.every((arr) => Array.isArray(arr));

//  ================================================================
const greaterRes = numbers.some(greaterThanFour);

function greaterThanFour(item) {
  return item > 4;
}

// ================================================================
const peopleNames = ["Ali", "Usman", "Habib", "Islam"];
const findingRes = peopleNames.find(findHabib);

function findHabib(item) {
  return item === "Habib";
}

// ==========
const peopleInfo = [
  {
    name: "Ali",
    age: 36,
  },
  {
    name: "Usman",
    age: 22,
  },
];

const age = peopleInfo.find(findAli).age;

function findAli(person) {
  return person.name === "Ali";
}

// ================================================================
// findIndex()

const findIndexRes = numbers.findIndex(findThree);

function findThree(value) {
  return value === 3;
}

// ================================================================
// from()

const myStr = "1234567";

const fromCharsRes = Array.from(myStr);
const fromChangeNumRes = Array.from(myStr, Number);

// ============
const friends = ["Ali", "Usman", "Umar", "Ali"];

const removeDuplicates = Array.from(new Set(friends));

// ================================================================
// isArray()

const newArray = [1, 2, 3, 4];
const newString = "Saidali";

console.log(Array.isArray(newArray)); // true

// ================================================================
// flat()

const array2 = [1, [2, [23, 342, [324, 35]]]];

const resultFlat = array2.flat(Infinity);
