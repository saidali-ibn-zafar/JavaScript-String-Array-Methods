let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const myName = "Saidali";
numbers.forEach((value) => {
  console.log(value + " " + myName);
});
const half = numbers.length / 2;
let sum = numbers
  .map((num) => num * 2)
  .filter((element) => element % 5 !== 0 && element % 6 !== 0)
  .reduce((prValue, crValue) => prValue + crValue);

console.log(sum);

const part1 = numbers.slice(0, half);
const part2 = numbers.slice(half, numbers.length);

const part3 = part1.concat(part2);

const mixedArr = mixedElementsJoin();

function mixedElementsJoin() {
  let arrResult = [];
  for (let i = 0; i < half; i++) {
    arrResult.push(part1[i]);
    arrResult.push(part2[i]);
  }
  return arrResult;
}

function alternateElements(arr1, arr2) {
  return arr1.reduce((acc, curr, index) => {
    // console.log({ acc, curr, index });
    acc.push(curr);
    if (arr2[index] !== undefined) {
      acc.push(arr2[index]);
    }
    return acc;
  }, []);
}

let newArray = alternateElements(part1, part2);
const sortedArr = [...newArray].sort((a, b) => a - b);
const evenRight = [...newArray].sort((a, b) => (b % 2 === 0) - (a % 2 !== 0));

// console.log(sortedArr);
console.log(evenRight);

// console.log(newArray); // Output: [1, 2, 3, 4, 5, 6]

function sortEvenOdd(arr) {
  return arr.sort((a, b) => {
    if (a % 2 === 0 && b % 2 !== 0) {
      return -1;
    }
    if (a % 2 !== 0 && b % 2 === 0) {
      return 1;
    }
    return 0;
  });
}

// Example usage:
let array = [1, 2, 3, 4, 5, 6];
let sortedArray = sortEvenOdd(newArray);

console.log(sortedArray); // Output: [2, 4, 6, 1, 3, 5]

// const zeroArr = [];

const arr_1 = new Array(100).fill(0);
console.log(arr_1);

const arr_2 = Array.from({ length: 100 }, (_, i) => i + 1);
console.log(arr_2);

// = = = = = = = = = = = = = = = = = = = = = = =
// The Array() constructor creates Array objects.

// new Array()
// new Array(element0)
// new Array(element0, element1)
// new Array(element0, element1, /* … ,*/ elementN)
// new Array(arrayLength)

// Array()
// Array(element0)
// Array(element0, element1)
// Array(element0, element1, /* … ,*/ elementN)
// Array(arrayLength)

const filledWithZeroArr = new Array(100).fill(0);

// = = = = = = = = = = = = = = = = = = = = = = =
// at()
const numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// console.log(numsArr.at(0));
// console.log(numsArr.at(numsArr.length - 1));
// console.log(numsArr.at(numsArr.length / 2));

// = = = = = = = = = = = = = = = = = = = = = = =

console.log(numsArr.copyWithin(0, numsArr.length / 2, numsArr.length / 2 + 1));
console.log(numsArr.copyWithin(1, 2, 3));

// = = = = = = = = = = = = = = = = = = = = = = =
// entries()

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const f = fruits.entries();

for (const x of f) {
  console.log(x);
}

for (const element of [, "a"].entries()) {
  console.log(element);
}
// [0, undefined]
// [1, 'a']

// = = = = = = = = = = = = = = = = = = = = = = =
// call()
const person = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
const person1 = {
  firstName: "Ali",
  lastName: "Batirov",
};
const person2 = {
  firstName: "Jasur",
  lastName: "Sabitov",
};

// This will return "Ali Batirov";
const fullName = person.fullName.call(person1);
console.log(fullName);

// = = = = = = = = = = = = = = = = = = = = = = =
// every()

const evenNums = [2, 4, 6, 8];
const res = evenNums.every((num) => num % 2 === 0);

const isSubset = (arr1, arr2) =>
  arr2.every((element) => arr1.includes(element));

console.log(isSubset([1, 2, 3, 4], [4, 3, 6]));

// = = = = = = = = = = = = = = = = = = = = = = =
// filter()
const arrayLike = {
  length: 3,
  0: "a",
  1: "b",
  2: "c",
};

console.log(Array.prototype.filter.call(arrayLike, (x) => x <= "b"));

// Appending new words
words = ["spray", "limit", "exuberant", "destruction", "elite", "present"];
const appendedWords = words.filter((word, index, arr) => {
  arr.push("new");
  return word.length < 6;
});

// = = = = = = = = = = = = = = = = = = = = = = = =
// find()
const array1 = [5, 12, 8, 130, 44];

const found = array1.find((element) => element === 44);

console.log(array1.indexOf(found));
// Expected output: 4

function isPrime(element) {
  if (element % 2 === 0 || element < 2) {
    return false;
  }
  for (let factor = 3; factor <= Math.sqrt(element); factor += 2) {
    if (element % factor === 0) {
      return false;
    }
  }
  return true;
}

console.log([4, 5].findIndex(isPrime));

// = = =
const newArr = [12, 22, 32, 42, 52];

const result = Array.prototype.filter.call(newArr, (x) => x <= 3);
// = = =

const res1 = Array.prototype.findLast.call(newArr, (x) => x > 45);

