// const e = require("express");
//  question No 1. N = 5, star question. //
// let N =5;
// for(let i=1; i<=N; i++){
//     star = '';

//     for(let j=1; j<=i; j++){
//         star+= '*'
//     }
//     console.log(star);
// }

// End of the question No. 1 //

// -----------------------------------------------------------------------------------------------------------//

// question No 2. count how many times a number appears in an array. //
// b = 6

// let a = [1,6,3,4,5,6,7,6];
// let b = 6;
// let count =0;

// for (let i=0; i<a.length; i++){
//     if (a[i]==b) {
//         count++
//     }
// }
// console.log(count);

// End of the question No 2.  //

//------------------------------------------------------------------------------------------------------------//

//Question No. 3 swap two numbers withou using third variable. //

// let a = 5;
// let b = 4;

// a = a + b;
// b = a - b;
// a = a - b;

// console.log(a);
// console.log(b);

// End of the Question No. 3 //

//---------------------------------------------------------------------------------------------------------------\\

// Question No 4. Find the reminder of given number like - 3%2 = 1 //

//  const input=require('readline-sync')
//  let n = input.questionInt('Enter the value of n: ');
//  let m = input.questionInt('Enter the value of m: ');

//  let modulus=(n%m);
//  console.log(modulus);

 // End of the Question No 4. //

 // --------------------------------------------------------------------------------------------------------------------//

// Question No 5. Find the person is elisible to vote(Yes or No) //

// const input=require('readline-sync')
// let n = input.questionInt('Enter the value of n: ');

//  n>=18 ? console.log('yes, you can give vote') : console.log('you can not give vote');

// End of the Questioon No 5. //

// ----------------------------------------------------------------------------------------------------------------------//

// Question No 6. marge two array and cover to string and print Ascending order.//

// let a =[1,2,3,4,5,6,7,8,9,10];
// let b = [11,54,5,56,7,8,9,10];

//  let c = a.concat(b);
// c.sort((a,b)=>a-b);
// let d = c.toString();
// console.log(d);

// End of the Question No 6. //

// -------------------------------------------------------------------------------------------------------------------------/

// question No 7. esa code me 0 se bada number ko pahale prin karana hai or 0 ko last me prin karana hai. //

// let a = [0,1,2,0,49,5,0,8,0,56,0]

// for (let i=0; i<a.length; i++){
//     if (a[i]===0) {
//         a.splice(i,1);
//         a.push(0);
//     }

// }
// console.log(a);


// End of the Question No 7. //

// -------------------------------------------------------------------------------------------------------------------------//

//question number No. 8, splice method in Array //

// const numbers = [1, 2, 3, 4, 5];
// let a= numbers.splice()
// console.log(a);

// -------------------------------------------------------------------------------------------------------------------------//

// question number No. 8, perpact number //

// let input = require('readline-sync')
// let n = input.questionInt('Enter the number: ')

    // let sum = 0;
    // for (let i = 1; i < n; i++){
    //     if (n % i == 0){
    //         sum+= i;
    //     }
    // }
    // sum == n ? console.log('parpact number') : console.log('Not a parpact number');

    // second Example //
    // let sum = 0;
    // for (let i = 1; i <= n / 2; i++) {
    //     n%i == 0 ? sum += i : null;
    // }
    // sum == n ? console.log('parpact number') : console.log('Not a parpact number');
    
// End of the question No. 8 ///

//-----------------------------------------------------------------------------------------------------------------------//

// question No. 9 fibonaki serice //

// let om = require('readline-sync')
// let N = om.questionInt('Enter the value N: ')

// let i = 0;
// let j = 1;
// let k = 0;

// while (k<N) {
//     console.log(i)
//     let c = i+j
//     i = j;
//     j = c ;
//     k++
// }

// ----------------------------------------------------------------------------------------------------------------//

// prin  M pattern  symbole //  

// *--* //
// *--* //
// *--* //
// *--* //
// *--* //


// let N = 5;
// let star = '';
// for(let i= 1; i<=N; i++){
//     star = '';
//     for(let j = 1; j<=N;j++){
//         if(j==1 || j == N){
//             star+='*'
//         }
//         else{
//             star+=' '
//         }
//     }
//     console.log(star);
    
// }

// End of the question No. 10 //

// -----------------------------------------------------------------------------------------------------------------//

// question No. 11. number 9 ko target karna hai aur kis- kis number ko plus karne se 9 aatha hai or use aalga array me likana hai //

// let arr = [1,2,3,4,5,6,7,8,9,10,0];

// for(let i=0; i<arr.length; i++){

//     for(let j=i+1; j<arr.length; j++){

//         if (arr[i]+arr[j]=== 9) {
//              b = [arr[i], arr[j]];
//              console.log(b);
//         }
//     }
// }

// End of the question No. 11 //

// -----------------------------------------------------------------------------------------------------------------//

//question No.12, Array me se number 9 chack karana hai es array me hai ki nahi//

// let arr = [1,2,3,4,5,6,7,8,9,10,0];
// let input = require('readline-sync');
// let n = input.questionInt('Enter the number to check: ');
// let found = false;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === n) {
//         found = true;
//         break;
//     }
// }
//  !found ? console.log('Number not found') : console.log('Number found');


// End of the question No. 12 // 

// ------------------------------------------------------------------------------------------------------------------------//

// Question No 13 assending order after print 0 number.

// let a = [1,0,2,0,3,0,8,9,0]

// for (let i=0; i<a.length; i++){
//     if (a[i]===0) {
//         a.splice(i,1);
//         a.push(0);
//     }

// }
// console.log(a);

// End of the Question number No. 13 //

// -----------------------------------------------------------------------------------------------------------------------------//

// question No. 14 star pattern question //

// let n = 4;
// let star = ''
// for (let i= 1; i<=n; i++){
//     star = ''

//     for(let j= 1; j<=n; j++){
//         star+= '*'
//     }
//     console.log(star);
    
// }

// for(let i=1; i<=n; i++){
//     star = ''
//         let j = 1;
//     while (j<=i) {
//         star += '*'
//         j++; 
//     }
//     console.log(star); 
// }

// End of the Question No. 14//

// --------------------------------------------------------------------------------------------------------------//

// question No 15 print prime number. prime number yani kud se or 1 se divide hota hai use prime nuber kahate hai. //

// let om = require('readline-sync')
// let n = om.questionInt('Enter the value N: ')
// // let c = 0;

// for(let i=1; i<=n; i++){
//     let count =0;

//     for(let j=1; j<=i; j++){
//         if(i%j==0){
//             count++
//         }
//     }
//     if(count==2){
//         console.log(i);
        
//     }
// }

// End of the question No 15 //

// ---------------------------------------------------------------------------------------------------//

// question No. 16 febhonaki serice //

// let input = require('prompt-sync')();
// let n = input('Enter the value of N: ');
// let j = 1;
// let i = 0;
// let c = 0;
// k = 0;

// while (k<n) {
//     console.log(i);  
//     c = j+i  
//     i = j; 
//     j = c; 
//     k++;   
// }

// End of the Question No. 16 //

// ------------------------------------------------------------------------------------------------------------------//

// Question No.17 star pattern question //

// let n = om.questionInt('Enter the value N: ')

// let N = 3;

// for (let i = N; i >= 1; i--) {  
//     let star = '';
//     for (let j = 1; j <= i; j++) {
//         star += '* ';
//     }
//     console.log(star);
// }

// End of the Question No. 17 //

// --------------------------------------------------------------------------------------------------------------------//

// Question No. 18 find duplicates in an Array  //

// let arr = [2,1,3,4,7,5,6,10,1,2,10];

// let duplicates = [];
// for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
//             duplicates.push(arr[i]);
//         }
//     }
// }
// console.log(duplicates);

// End the Question No. 18 //

// -----------------------------------------------------------------------------------------------------------------------------//

// Question No. 19 print even aur odd number in the an array //

// let arr = [2,1,3,4,7,5,6,10,1,2,10];

// let evenNumbers = [];
// let oddNumbers = [];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         evenNumbers.push(arr[i]);
//     } else {
//         oddNumbers.push(arr[i]);
//     }
// }

// console.log('Even numbers:', evenNumbers);
// console.log('Odd numbers:', oddNumbers);

// End Of the Question No. 19 //

// --------------------------------------------------------------------------------------------------------------------------//

// Question number No. 20 .sort() the array without methods in the an array //

// let arr = [2,1,3,4,7,5,6,10,1,2,10];

// for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] > arr[j]) {
//             let temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//         }
//     }
// }
// console.log(arr);

// End Of the Question No. 20 //

// Question No. 21 print butterfly star pattern //

// let n = 5;

// // Upper part of the butterfly
// for (let i = 1; i <= n; i++) {
//     let row = '';
//     for (let j = 1; j <= i; j++) {
//         row += '*';
//     }
//     for (let j = 1; j <= 2 * (n - i); j++) {
//         row += ' ';
//     }
//     for (let j = 1; j <= i; j++) {
//         row += '*';
//     }
//     console.log(row);
// }

// Lower part of the butterfly
// for (let i = n; i >= 1; i--) {
//     let row = '';
//     for (let j = 1; j <= i; j++) {
//         row += '*';
//     }
//     for (let j = 1; j <= 2 * (n - i); j++) {
//         row += ' ';
//     }
//     for (let j = 1; j <= i; j++) {
//         row += '*';
//     }
//     console.log(row);
// }

// End of the Question No. 21 //

// -------------------------------------------------------------------------------------------------------------------//

// Question No. 22  print 2 gap and //

// let arr = [2, 5, 3, 8, 9, 4, 1, 10];
// let k = 2;
// let printedIndexes = [];

// // Step 1: Print with 2 gap starting from k
// for (let i = k; i < arr.length; i += 2) {
//     console.log(arr[i]);
//     printedIndexes.push(i);
// }

// // Step 2: Print remaining elements
// for (let i = 0; i < arr.length; i++) {
//     if (!printedIndexes.includes(i)) {
//         console.log(arr[i]);
//     }
// }

// -------------------------------------------------------------------//

// duolicate number print karna //

// let arr = [1, 2, 1, 3, 4, 5, 9, 5, 1, 4, 3, 6, 6];
// let d = [];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] === arr[j]) {

//       if (!d.includes(arr[i])) {
//         d.push(arr[i]);
//       }
//     }
//   }
// }

// console.log("Duplicate numbers:", d);







