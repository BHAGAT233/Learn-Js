// Program to add first n natural numbers
/*
let input = require("readline-sync")
let n= input.questionInt("Enter the value of n: ")
let sum = 0
// let n = prompt('Enter the value of n')
for (let i = 2; i <= n; i++){
    sum = sum +i
}  
console.log("2 to 7 range sum of number = ",sum);

*/

// let obj = {   // for in loop //
//     harry: 90,
//     shubh: 45,
//     shivika: 56,
//     ritika: 57,
//     shiv: 23,
// }

// // For in loop
// for(let a in obj){
//     console.log('Marks of ' + a + 'are' + obj[a]);
    
// }

// // For of loop
// for (let b of 'Harry'){
//     console.log(b);
    
// }

let input = require('readline-sync')
let n = input.questionInt('Enter the value of n:')

let sum= 0

for (let i= 1; i<=n; i++){
    sum += 1/i
    console.log(sum);
    
}
return (sum)