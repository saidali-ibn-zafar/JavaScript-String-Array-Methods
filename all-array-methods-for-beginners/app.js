// =================================================================
// forEach()
const letters = ["a", "b", "c", "d", "e"];

letters.forEach(function (element, index) {
  console.log(index);
  console.log(element);
  // we cannot use break with forEach !!!
});

// forEach()
// SYNTAX: forEach(callbackFn)   |   forEach(callback, thisArg)
// forEach(element, index, array)

function log(element, index) {
  console.log(this);
}

const obj = {
  name: "value",
};

letters.forEach(log, obj);

// =================================================================
// map()

// with forLoop
const numbers = [1, 2, 3, 4];
const squared = [];

for (let i = 0; i < numbers.length; i++) {
  squared[i] = numbers[i] * numbers[i];
}

// we can do it with map() as well

// 1st way
function sq(value) {
  return value * value;
}

const squared1 = numbers.map(sq);

// 2nd way
const squared2 = numbers.map(function (num) {
  return num * num;
});

// 3rd way
const squared3 = numbers.map((num) => {
  return num * num;
});

// 4th way
const squared4 = numbers.map((num) => num * num);

// =================================================================
// filter()
const mixNums = [9, 1, 5, 7, 3];

const result = [];

for (let i = 0; i < mixNums.length; i++) {
  if (mixNums[i] > 5) {
    result.push(mixNums[i]);
  }
}

// Array.filter(callBackFn)
// function name(value, index, array){
// }

// with filter:
// 1st way
function greaterThan5(value) {
  return value > 5;
}
const result1 = mixNums.filter(greaterThan5);

// 2nd way
const result2 = mixNums.filter(function (value) {
  return value > 5;
});

// 3rd way
const result3 = mixNums.filter((value) => {
  return value > 5;
});

// 4th way
const result5 = mixNums.filter((value) => value > 5); // WOW!!!

// =================================================================
// find()
// Array.find(callBackFn)
// function name(value, index, array){
//   return condition
// }

const users = [
  { name: "Ali", age: 19 },
  { name: "Usman", age: 20 },
  { name: "Umar", age: 21 },
];

// 1st way
function ali(user) {
  return user.name === "Ali";
}

const findRes = users.find(ali);

// 2nd way
const findRes1 = users.find(function (user) {
  return user.name === "Ali";
});

// 3rd way
const findRes2 = users.find((user) => {
  return user.name === "Ali";
});

// 4th way
const findRes3 = users.find((user) => user.name === "Ali");
// console.log(findRes3);

// =================================================================
// findIndex()
function ali(user) {
  return user.name === "Ali";
}

const index = users.findIndex(ali);
// console.log(index);

// =================================================================
// some()
const fruits = [{ name: "banana" }, { name: "tomato" }, { name: "grapes" }];

let hasTomato = false;
for (let i = 0; i < fruits.length; i++) {
  const item = fruits[i];
  if (item.name === "tomato") {
    hasTomato = true;
    break;
  }
}

// Array.some(callBackFn)
// function name(value, index, array) {

// };

// 1st way
function tomato(item) {
  return item.name === "tomato";
}

const hasTomato1 = fruits.some(tomato);

// 2nd way
const hasTomato2 = fruits.some(function (item) {
  return item.name === "tomato";
});

// 3rd way
const hasTomato3 = fruits.some((item) => {
  return item.name === "tomato";
});

// 4th way
const hasTomato4 = fruits.some((item) => item.name === "tomato");

//================================================================
// every()

const nums = [5, -2, 4, 1];
let allPositive = true;

for (let i = 0; i < nums.length; i++) {
  const n = nums[i];
  if (n >= 0) {
    continue;
  } else {
    allPositive = false;
    break;
  }
}

// with every()
// 1st way
function positive(n) {
  return n >= 0;
}

const everyRes = nums.every(positive);

// 2nd way
const everyRes1 = nums.every(function (n) {
  return n >= 0;
});

// 3rd way
const everyRes2 = nums.every((n) => {
  return n >= 0;
});

// 4th way
const everyRes3 = nums.every((n) => n >= 0);

//================================================================
// reduce()

const cart = [
  { name: "Laptop", price: 1100 },
  { name: "Mouse", price: 400 },
  { name: "Keyboard", price: 900 },
];

let total = 0;

for (let i = 0; i < cart.length; i++) {
  const item = cart[i];
  total = total + item.price;
}

// with reduce()

function totalaPrice(accumulator, item) {
  return accumulator + item.price;
}

const totalResult = cart.reduce(totalaPrice, 0);
