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
console.log(arr_1)


const arr_2 = Array.from({length: 100}, (_, i) => i + 1);
console.log(arr_2);