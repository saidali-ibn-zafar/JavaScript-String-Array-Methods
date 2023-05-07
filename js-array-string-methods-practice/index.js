const repeatedArr = createArray(20);

function createArray(num) {
  const newArr = new Array(num);
  Array.prototype.fill.call(newArr, "car");
  return newArr;
}
// console.log(repeatedArr);

// = = = = = =
const words = ["spray", "limit", "elite", "exuberant", "struction", "present"];

const includedS = words.filter((el) => el.startsWith("s"));
// console.log(includedS);

// = = = = = =
const moreArr = [23, [44, [45], 56, [77887, [[8889, [[[99008]]]]]]]];

const inOneArr = moreArr.flat(Infinity);
// console.log(inOneArr);

// = = = = = =
const mixedArr = [1, "a", "b", 0, 15];

const onlyNums = mixedArr.filter((x) => typeof x === "number");
// console.log(onlyNums);

// = = = = = =
const names = ["Leonardo", "Michelangelo", "Raphael", "Donatello"];
const sortedNames = names.sort((a, b) => a.length - b.length);

// = = = = = =
const nums = [5, 1, 9, 5, 5, 5, 4, 4, 6, 8];
// (234) 555-8888

// function phoneNum(arr) {
//   let code, numPart1, numPart2;
//   code = arr.splice(0, 3).join("");
//   numPart1 = arr.splice(0, 3).join("");
//   numPart2 = arr.splice(0, 4).join("");
//   const createdNum = "(" + code + ")" + " " + numPart1 + "-" + numPart2;
//   return createdNum;
// }

function formatPhoneNumber(numbers) {
  let masked = "(###) ###-####";
  numbers.forEach((v) => (masked = masked.replace("#", v)));
  return masked;
}

// console.log(formatPhoneNumber(nums));

// = = = = = =
