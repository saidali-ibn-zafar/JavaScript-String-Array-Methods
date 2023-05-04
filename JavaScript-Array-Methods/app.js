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
