const str = "A string primitive";
const str1 = new String("A string object");

// String Property
const strLen = str.length;
console.log(strLen); // 18

console.log(str[0]); // A
console.log(str[strLen - 1]); //last character

// #01 String.charAt
// String.chatAt(index)

console.log(str.charAt(0)); // A

// ================================================================
const s = "The code undefined code code !";
// #02 String.indexOf()
// String.indexOf(searchString);
// String.indexOf(searchString, position);
s.indexOf("Code"); // -1
s.indexOf("code"); // 4
s.indexOf("code", 4); // 4
s.indexOf("code", 5); // 19
s.indexOf("code", -5); // 4
s.indexOf(""); // 0
s.indexOf(); // 9 because it returns undefined then we have aslo string undefined so it is 9
// if there were not undefined string we had got -1

// #03 String.lastIndexOf()
// String.lastIndexOf(searchString);
// String.lastIndexOf(searchString, position);
s.lastIndexOf("Code"); // -1
s.lastIndexOf("code"); // 24
s.lastIndexOf("code", 24); // 24
s.lastIndexOf("code", 23); // 19
s.lastIndexOf("code", 5); // -1
s.lastIndexOf(""); // 30
s.lastIndexOf(); // like above s.indexOf();

// ================================================================
const s1 = "The morning is upon us";
// #04 String.slice()
// String.slice(indexStart);
// String.slice(indexStart, indexEnd);
s1.slice(12); // 'is upon us'
s1.slice(-11); // 'is upon us'
s1.slice(23); // ''
s1.slice(13, 16); // 's u' from index 13 included, till index 16 not included
s1.slice(16, 13); // ''
s1.slice(-8, -4); // 'upon'
s1.slice(-8, 4); // ''
s1.slice(8, -4); // 'ing is upon'

// #05 String.substring()
// String.substring(indexStart);
// String.substring(indexStart, indexEnd);
s1.substring(12); // 'is upon us'
s1.substring(-11); // if index is negative, it starts at index zero
s1.substring(23); // ''
s1.substring(13, 16); // 's u'
s1.substring(16, 13); // if start index is greater than end, it swaps so result also like above 's u'
s1.substring(-8, -4); // ''
s1.substring(-8, 4); // as you know it starts at index zero is negative then till index 4 result : 'The '
s1.substring(8, -4); // -4 would be 0 then swap and from 0 to 8 = 'The morn'

// ================================================================
const string = "The morning is upon us";
// #06 String.split
// string.split();
// string.split(seperator);
// string.split(seperator, limit);
const arr0 = string.split(); // ['The morning is upon us']
const arr1 = string.split(" "); // ['The mor', 'i', 'g is upo', ' us']
const arr2 = string.split(""); // ['T', 'h', 'e', ' ', 'm', 'o', 'r', 'n', 'i', 'n', 'g', ' ', 'i', 's', ' ', 'u', 'p', 'o', 'n', ' ', 'u', 's']
const arr3 = string.split("o"); //  ['The m', 'rning is up', 'n us']
const arr4 = string.split("o", 1); // ['The m']
const arr5 = string.split("o", 0); // []

// ================================================================
// #07 String.includes()
// string.includes(searchString);
// string.includes(searchString, position);
const sentence = "The quick brown fox jumped over the lazy dog";
// INCLUDES is case sensitive
sentence.includes("fox"); // true
sentence.includes("Fox"); // false
sentence.includes("fox", 0); // true
sentence.includes("fox", 16); // true
sentence.includes("fox", 17); // false

// ================================================================
// #08 String.startsWith();
// string.startsWith(searchString);
// string.startsWith(searchString, position);
const string1 = "Cats are the best!";

const result = string1.startsWith("Cats"); // true
const result1 = string1.startsWith("are"); // false
const result2 = string1.startsWith("are", 5); // true

// #09 String.endsWith();
// string.endsWith(searchString);
// string.endsWith(searchString, length);
const result3 = string1.endsWith("best!"); // true
const result4 = string1.endsWith("best"); // false
const result5 = string1.endsWith("best", 17); // true

// ================================================================
// #10 String.concat();
// str1.concat(str2);
const strN1 = "Hello";
const strN2 = "World";

const greeting = strN1.concat(" ", strN2);
// or just + , +=
const greeting1 = strN1 + " " + strN2;

// ================================================================
// #11 String.repeat();
// string.repeat(count)
"abc".repeat(0); // ""
"abc".repeat(1); // "abc"
"abc".repeat(2); // "abcabc"
"abc".repeat(3); // "abcabcabc"
// 'abc'.repeat(-1); // RangeError
// 'abc'.repeat(1/0); // RangeError

// ================================================================
// #12/13/14 String.trimStart(); String.trim(); String.trimEnd();
// string.trimStart(); string.trim(); String.trimEnd();

const greeting2 = "   Hello World!   ";
const newStr = greeting2.trim(); //"Hello World!"
const newStr2 = greeting2.trimStart(); // "Hello World!   "
const newStr3 = greeting2.trimEnd(); // "   Hello World"

// ================================================================
// #15/16 String.padStart() String.padEnd()
// string.padStart(targetLength)
// string.padStart(targetLength, padString)
"abc".padStart(10); // "       abc"
"abc".padStart(10, "foo"); // "foofoofabc"
"abc".padStart(10, "12345678"); // "1234567abc"
"abc".padStart(2); // "abc"

// string.padEnd(targetLength)
// string.padEnd(targetLength, padString)
"abc".padEnd(10); // "abc       "
"abc".padEnd(10, "foo"); // "abcfoofoof"
"abc".padEnd(10, "12345678"); // "abc1234567"
"abc".padEnd(2); // "abc"

// ================================================================
// #17 String.localeCompare()
// referenceString.localeCompare(compareString)

"a".localeCompare("b"); // negative number, in most cases -1
"b".localeCompare("a"); // positive number, in most cases +1
"a".localeCompare("a"); // zero 0

// referenceString.localeCompare(compareString, locale, option)

// ================================================================
// #18 String.search()
// string.search(regexp)
let text = "The rain in SPAIN stays mainly in the plain";

let position = text.search("ain"); // returns the first occurrence, so 5
let position1 = text.search(/ain/); // 5
let position2 = text.search(/AIN/); // 14
let position3 = text.search(/AIN/i); // 5
let position4 = text.search(/w/); // -1 becuse there is not letter 'w'in text

// ================================================================
// #19/20 String.match() String.matchAll()
// string.match(regexp) string.matchAll(regexp)

let res = text.match("ain"); // ['ain',
// index: 5,
// input: "The rain in SPAIN ....",
// group: undefined]

let res1 = text.match(/ain/g); // ['ain', 'ain', 'ain']
let res2 = text.match(/ain/gi); // ['ain', 'AIN', 'ain', 'ain']
// g means GLOBAL REGULAR EXPRESSION

let res3 = text.matchAll("ain");
// console.log(res3);

// ================================================================
// #21 String.replace()
// string.replace(searchString, replaceString);

let text1 = "Mr Blue has a blue house and a blue car";

let resultt = text1.replace("blue", "red"); // Mr Blue has a red house and a blue car

let resultt1 = text1.replace("blue", (match) => {
  return match.toUpperCase();
}); // Mr Blue has a BLUE house and a blue car

let resultt2 = text1.replace(/blue/g, "red"); // Mr Blue has a red house and a red car

let resultt3 = text1.replace(/blue/gi, "red"); // Mr red has a red houre and a red car

let resultt4 = text1.replace(/blue/gi, (match) => {
  return match.toUpperCase();
}); // Mr BLUE has a BLUE house and a BLUE car

// ================================================================
// #22 String.replaceAll()
// string.replaceAll(searchString, replaceSting);
// string.replaceAll(searchString, replaceFunction);

let resultt5 = text1.replaceAll("blue", "red"); // Mr Blue has a red house and a red car

let resultt6 = text1.replaceAll("blue", (match) => {
  return match.toUpperCase();
}); // Mr Blue has a BLUE house and a BLUE car

let resultt7 = text1.replaceAll(/blue/g, "red"); // Mr Blue has a red house and a red car

let resultt8 = text1.replaceAll(/blue/gi, "red"); // Mr red has a red house and a red car

let resultt9 = text1.replaceAll(/blue/gi, (match) => {
  return match.toUpperCase();
}); // Mr BLUE has a BLUE house and a BLUE car

// let result10 = text1.replaceAll(/blue/, 'red'); TypeError: replaceAll must be called with a global RegExp

// ================================================================
// #23/24 String.charCodeAt() String.codePointAt()
// string.charCodeAt(position)
// UTF-16
// 0 and 65535

// string.codePointAt(position)
// Unicode
// 0 and 65535 & > 65535

const message = "ok 👍";
// message.length // 5 because 👍 is 2 16bit unit

message.charCodeAt(0); // 79
message.codePointAt(0); // 79

message.charCodeAt(1); // 107
message.codePointAt(1); // 107

message.charCodeAt(2); // 32
message.codePointAt(2); // 32

message.charCodeAt(3); // 55357 ?
message.codePointAt(3); // 128077

message.charCodeAt(4); // 56397
message.codePointAt(4); // 56397

message.charCodeAt(5); // NaN
message.codePointAt(1); // undefined

message.charCodeAt(); // 79
message.codePointAt(); // 79

//================================================================
// #25/26 String.fromCharCode() String.fromCodePoint()
// string.fromCharCode(num)
// string.fromCharCode(num1,num2,numN)

// string.fromCodePoint(num)
// string.fromCodePoint(num1,num2,numN)

message.fromCharCode(79); // o
message.fromCodePoint(79); // o

message.fromCharCode(107); // k
message.fromCodePoint(107); // k

message.fromCharCode(32); // " "
message.fromCodePoint(32); // " "

message.fromCharCode(55357); // ?
message.fromCodePoint(55357); // ?

message.fromCharCode(56397); // ?
message.fromCodePoint(56397); // ?

message.fromCharCode(128077); // ?
message.fromCodePoint(128077); // 👍

message.fromCharCode(79, 107, 32, 55357, 56397); // "ok 👍"
message.fromCodePoint(79, 107, 32, 55357, 56397); // "ok 👍"
message.fromCodePoint(79, 107, 32, 128077); // "ok 👍"

//================================================================
// #28/29 String.toLowerCase() String.toUpperCase()
// string.toLowerCase() string.toUpperCase()

const changeText = "Hello World!";

const toLowerText = changeText.toLocaleLowerCase(); // "hello world!"
const toUpperText = changeText.toLocaleUpperCase(); // "HELLO WORLD!"

//================================================================
// #30/31 String.toLocaleLowerCase() String.toLocaleLowerCase()
// string.toLocaleLowerCase();
// string.toLocaleLowerCase(locale);

// string.toLocaleUpperCase();
// string.toLocaleUpperCase(locale);

const lower = "istanbul";

const upperRes = lower.toLocaleUpperCase("en-US"); // ISTANBUL
const upperRes1 = lower.toLocaleUpperCase("tr"); // it is different from the previous one.

//================================================================
// #32/33 String.toString() String.valueOf()
// string.toString()
// String.prototype.toString() // Yes
// Object.prototype.toString() // No

// string.valueOf()
// String.prototype.valueOf() // Yes
// Object.prototype.valueOf() // No

const stringObject = new String("Hello, world!");

stringObject.toString() // 'Hello, world!'
stringObject.valueOf() // 'Hello, world!'



//================================================================
// String.raw();
// String.raw(strings, ....substitutions)
// String.raw`templateString`

const path = `C:\windows\desktop\...\file.js`
const solution = path.raw(); // 'C:\windows\desktop\...\file.js