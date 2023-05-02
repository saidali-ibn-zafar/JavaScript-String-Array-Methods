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
