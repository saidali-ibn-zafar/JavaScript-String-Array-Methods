const str = "A string primitive";
const str1 = new String("A string object");

// String Property 
const strLen = str.length;
console.log(strLen); // 18

console.log(str[0]) // A
console.log(str[strLen - 1]) //last character

// #01 String.charAt
// String.chatAt(index)

console.log(str.charAt(0)) // A



// ================================================================
const s = "The code undefined code code !";
// #02 String.indexOf()
// String.indexOf(searchString);
// String.indexOf(searchString, position);
s.indexOf('Code'); // -1
s.indexOf('code'); // 4
s.indexOf('code', 4); // 4
s.indexOf('code', 5); // 19
s.indexOf('code', -5); // 4
s.indexOf(''); // 0
s.indexOf() // 9 because it returns undefined then we have aslo string undefined so it is 9
// if there were not undefined string we had got -1


// #03 String.lastIndexOf()
// String.lastIndexOf(searchString);
// String.lastIndexOf(searchString, position);
s.lastIndexOf('Code'); // -1
s.lastIndexOf('code'); // 24
s.lastIndexOf('code', 24); // 24
s.lastIndexOf('code', 23); // 19
s.lastIndexOf('code', 5); // -1
s.lastIndexOf(''); // 30
s.lastIndexOf(); // like above s.indexOf(); 



// ================================================================
const s1 = 'The morning is upon us';
// #04 String.slice()
// String.slice(indexStart); 
// String.slice(indexStart, indexEnd); 
s1.slice(12); // 'is upon us'
s1.slice(-11); // 'is upon us'
s1.slice(23); // ''
s1.slice(13, 16); // 's u' from index 13 included, till index 16 not included 
s1.slice(16, 13); // ''
s1.slice(-8, -4) // 'upon'
s1.slice(-8, 4) // ''
s1.slice(8, -4) // 'ing is upon'

// #05 String.substring()
// String.substring(indexStart);
// String.substring(indexStart, indexEnd);
s1.substring(12); // 'is upon us'
s1.substring(-11); // if index is negative, it starts at index zero
s1.substring(23); // ''
s1.substring(13, 16); // 's u'
s1.substring(16, 13); // if start index is greater than end, it swaps so result also like above 's u' 
s1.substring(-8, -4) // ''
s1.substring(-8, 4) // as you know it starts at index zero is negative then till index 4 result : 'The '
s1.substring(8, -4) // -4 would be 0 then swap and from 0 to 8 = 'The morn'



// ================================================================
// #07 String.includes()
// string.includes(searchString);
// string.includes(searchString, position);
const sentence = 'The quick brown fox jumped over the lazy dog';
// INCLUDES is case sensitive
sentence.includes('fox'); // true
sentence.includes('Fox'); // false
sentence.includes('fox', 0); // true 
sentence.includes('fox', 16); // true
sentence.includes('fox', 17); // false



// ================================================================
// #08 String.startsWith();
// string.startsWith(searchString);
// string.startsWith(searchString, position);
const string1 = 'Cats are the best!';

const result = string1.startsWith('Cats'); // true 
const result1 = string1.startsWith('are'); // false
const result2 = string1.startsWith('are', 5); // true


// #09 String.endsWith();
// string.endsWith(searchString);
// string.endsWith(searchString, length);
const result3 = string1.endsWith('best!'); // true
const result4 = string1.endsWith('best'); // false
const result5 = string1.endsWith('best', 17); // true



// ================================================================
// #10 String.concat();
// str1.concat(str2);
const strN1 = "Hello"; 
const strN2 = "World";

const greeting = strN1.concat(' ', strN2);
// or just + , += 
const greeting1 = strN1 + ' ' + strN2;
