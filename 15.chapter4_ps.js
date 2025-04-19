// Chapter 4 - practice set

// problem 1
let str = 'Har/';
console.log(str.length);

// problem 2

const sentence = 'The quick brown fox jumps over the lazy dog.';
const word = 'fox';
console.log(sentence.includes(word));
console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not' } in the sentence`,);
// Expected output: "The word "fox" is in the sentence"

// problem 3

console.log(word.toUpperCase());

// problem 4

let str2 = 'please give Rs 1000';

console.log(str2.slice(12));

// problem 5   // 

let friend = 'bhagat'
friend [3] = 'd';

console.log(friend); // friend is not changed because strings are immutable.