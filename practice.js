let input = require('readline-sync');

//question No 1. Ternary Operators //
// let age= 20
// let a = age>=18 ? 'yes' : 'false';
// console.log(a);

// const req = require("express/lib/request")

// Logical And
// let age= 40;
// let b= age>=18 && age<=40 ? 'yes': 'false';
// console.log(b);

//End of the question //
// ----------------------------------------------------------------------------------------------------------------------------//

//question NO 2.  Logical OR //

// let a= 5
// let b= 5
// let c= a==10 || b==5 ? 'true':'false';
// console.log(c);

// END OF THE QUESTION  No. 2//
// ----------------------------------------------------------------------------------------------------------------------------//

// question No 3 Logical not  //
// let x=5
// let y= x!==5 ? 'yes':'false';
// console.log(y);

// end of the question //
// ----------------------------------------------------------------------------------------------------------------------------//
// question No 4.  print star//

// let input = require('readline-sync')
// let n = input.questionInt('Enter the value of n:')

// let str=""
// for(let i=0; i<=n; i++){
//     str+="*"
//     console.log(str);
// }
// let sum= 2
// sum+= + 5
// console.log(sum);
// let sum= 0;
// for(let i=0; i<=5; i++){
//     sum+=i
// }
// console.log(sum);

// end of the question //

// ----------------------------------------------------------------------------------------------------------------------------//

// question NO 5. count the number of digits in a number using Math.floor(number/10) //

// function countDigits(number) {
//  let count= 0;
//  if(number == 0){
//     return 1
//  }
//  while (number!==0){
//     number = Math.floor(number/10);
//     count+= 1
//  }
//     // Only change code above this line
//     return  count;
//  }

//  console.log(countDigits(456));

// END OF THE QUESTION //
// ----------------------------------------------------------------------------------------------------------------------------//

//QUESTION No 6. Nested loops in JS //

// for (let i = 0; i < 5; i++){
//     console.log(`the current value of i is ${i}`);
//     for (let j = 0; j < 5; j++){
//         console.log(`j: ${j}`);

//     }
// }

// END OF THE QUESTION //

// ----------------------------------------------------------------------------------------------------------------------------//

// question No 7. plus the two number //
// const input = require ('readline-sync')
// let a = input.questionInt('enter the number:n ')
// let b = input.questionInt('enter the number:n ')
// console.log(a+b);a

// end of the question //
// ----------------------------------------------------------------------------------------------------------------------------//

// quistion NO 8. Array //

// let selectedColors = ['red', 'blue'];
// selectedColors[2] = 1;
// // console.log(selectedColors);
// console.log(selectedColors.length);

//END OF THE QUESTION //
// ---------------------------------------------------------------------------------------------------------------------------//

// quistion 9. Arry function  and  print last name//

// function greet(name, lastName){
//     console.log('Hello ' + name + ' '+ lastName);
// }
// greet('John', 'Ram');
// greet('bantu');

// END OF THE QUESTION //

// ----------------------------------------------------------------------------------------------------------------------------//

// Question No 10.  Array function and print the name //

// let a = 'this is a my name';
// console.log(a.split(' '));

// END OF THE QUESTION //

// ----------------------------------------------------------------------------------------------------------------------------//

// question No 11. Add the other index in the number//

// let selectedColors = ['red', 'blue'];
// selectedColors[2] = 1;
// console.log(selectedColors.length);

// END OF THE QUESTION //

// ----------------------------------------------------------------------------------------------------------------------------//

// quistion No 12. javascript function Array //

// function greet(name, lastName){
//     console.log('Hello ' + name + ' '+ lastName);
// }
// greet('John', 'ram');
// greet('bantu', 'ram');

// END OF THE QUESTION //

// ----------------------------------------------------------------------------------------------------------------------------/

// quistion No 13. Array in for loop //

// for (let i = 1; i <= 5; i++){
//     console.log(i);

// }

// END OF THE QUESTION //

// ----------------------------------------------------------------------------------------------------------------------------//

// quistion No 14. plus the Array index //

// const number = [1, -1, 2, 3];

// let sum = 0;
// for (let n of number){
//     sum+= n;
// }
// console.log(sum);

// END OF THE QUESTION //

// ----------------------------------------------------------------------------------------------------------------------------//

// question No 15. print the Array index//

// const myArray = [50, 60, 70];
// const myData = myArray[0];
// console.log(myData);

// END of quistion //
// ----------------------------------------------------------------------------------------------------------------------------

//question No 16.  logical not //

// let input = require('readline-sync')
// let x = input.questionInt('Enter the age: ')
// if (x !== 10){
//     console.log('true');
// }
// else{
//     console.log('false');
// }

// END OF THE QUESTION //
// ---------------------------------------------------------------------------------------------------------------------------------------------//

// question No 17. if, else if, else  Question//

// let int = require('readline-sync') 
// let time = int.questionInt('Enter the time: ')

// if (time > 1 && time <= 11){
//     console.log('Good Morning');

// }
// else if(time > 11 && time <= 15){
//     console.log('good after noon');

// }else if(time > 15 && time < 20){
//     console.log('good evening');

// }else if (time > 20 && time <=24){ 
//     console.log('good night');
// }
// else console.log('You can only enter numbers from 1 to 24');

// END OF THE QUESTION//

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

// question No 18. esa program me first 10 days ka 5 rupies, 5 days ka 10rupies, 3 days ka 15 rupies and bhache days ka 20 rupies  ho jayega in sab ka totale money nikalna hai. //

// let input = require('readline-sync')
// let days = input.questionInt('Enter the days: ')

// let total = 0;
// if (days <= 10){
//     total = days * 5;
// }
// else if(days <= 15){
//     total = 10 * 5 + (days - 10) * 10;
// }
// else if(days <= 18){
//     total = 10 * 5 + 5 * 10 + (days - 15) * 15;
// }
// else{
//     total = 10 * 5 + 5 * 10 + 3 * 15 + (days - 18) * 20;
// }
// console.log(total);

// END OF THE QUESTION //
// ------------------------------------------------------------------------------------------------------//
// question No 19.  take 4 number and print second max //

// let int = require('readline-sync')
// let a = int.questionInt('Enter the first number: ')
// let b = int.questionInt('Enter the second number:')
// let c = int.questionInt('Enter the third number: ')
// let d = int.questionInt('Enter the fourth number:')

// if(a > b && a > c && a < d ||(a > b && a < c && a > d)|| (a < b && a > c && a > d)){
//     console.log(a);
// }
// else if(b > a && b > c && b < d || (b > a && b < c && b > d) || (b < a && b > c && b > d)){
//     console.log(b);
// }
// else if(c > a && c > b && c < d || (c > a && c < b && c > d) || (c < a && c > b && c > d)){
//     console.log(c);
// }
// else{
//     console.log(d);
// }

// END OF THE QUESTION  //
// ----------------------------------------------------------------------------------------------//
// question No 20.  take 8 number and print fourth max //

// let a = input.questionInt('Enter the number:')
// let b = input.questionInt('Enter the number:')
// let c = input.questionInt('Enter the number:')
// let d = input.questionInt('Enter the number:')
// let e = input.questionInt('Enter the number:')
// let f = input.questionInt('Enter the number:')
// let g = input.questionInt('Enter the number:')
// let h = input.questionInt('Enter the number:')

// END OF THE QUESTION //

// ---------------------------------------------------------------------------------------------------------------------------------------//

// Question No. 21 Perfect Number (Any positive perfection in which the sum of all positive divisors is equal to the number itself, but including the number itself):)//
// (6 is a perfect number because it contains 1, 2, and 3, and 1 + 2 + 3 = 6, which is equal to 6. Conversely, 12 is an incomplete number because 1 + 2 + 3 + 4 + 6 = 1,6 which is greater than 12.)//

// let input = require('readline-sync')
// let n = input.questionInt('Enter the number: ')
// function perfectnumber(n){
//     let sum = 0;
//     for (let i = 1; i < n; i++){
//         if (n % i == 0){
//             sum+= i;
//         }
//     }
//     if (sum == n){
//         console.log('perfect number');
//     }
//     else{
//         console.log('not perfect number');
//     }
// }
// perfectnumber(n);

// END of the question //
// ------------------------------------------------------------------------------------//
// question No 22. strong number  //

// let input = require('readline-sync')
// let n = input.questionInt('Enter the original number: ')

// function strongnumber(n){
//     let sum = 0;
//     let temp = n;
//     while (n != 0){
//         let rem = n % 10;
//         let fact = 1;
//         for (let i = 1; i <= rem; i++){
//             fact*= i;
//         }
//         sum+= fact;
//         n = parseInt(n / 10);
//     }
//     if (sum == temp){
//         console.log('strong number');
//     }
//     else{
//         console.log('not strong number');
//     }
// }
// strongnumber(n);

// end of the question //

// ------------------------------------------------------------------------------------------//

// question No 23. strong number (एक संख्या को मज़बूत संख्या कहा जाता है, अगर उसके अंकों के फ़ैक्टोरियल का योग उस संख्या के बराबर हो) उदाहरण के लिए, 145 एक मज़बूत संख्या है क्योंकि 1! + 4! + 5! = 145.//

// let input = require('readline-sync')
// let n = input.questionInt('Enter the number: ')

// let sum = 0;
// let m = n;
// let a = 1;

// while (n != 0){
//     let rem = n % 10;
//     for (let i = 1; i <= rem; i++){
//         a = a*i;
//     }
//     sum = sum +a;
//     n = parseInt(n / 10);
//     a = 1;
// }
// if (sum == m){
//     console.log('strong number');
// }
// else{
//     console.log('not strong number');
// }

// END  OF the question //

// ----------------------------------------------------------------------------------------------------------------------------------------------------//

// question No 24. absolute Number (absoluteNumber ME negative number aane par bhi positive number deta hai or zero aane par zero vapas karta hai)//

// let input = require('readline-sync')
// let number = input.questionInt('Enter the absoluteNumber: ')

// // // const number = 0;
// const absoluteNumber = Math.abs(number);
// console.log('this is absolutNumber: '+ absoluteNumber); // Output: 5

// END OF THE QUESTION //

//------------------------------------------------------------------------------------------------//

// Question No 25. absolut number (Absolute value का मतलब है कि नंबर चाहे सकारात्मक (positive) हो या नकारात्मक (negative), उसका केवल सकारात्मक रूप (positive value) लिया जाता है।)//

// let input = require('readline-sync')
// let n = input.questionInt('enter the abslut numbet: ')
// if (n > 0){

//     console.log('this is absolut number: '+ n);

// }else if(n < 0 ){

//     let a= -1*n ;

//         console.log('this is absolut number: '+ a);

// }else{
//     console.log('this is zero: '+ n);

// }

// END OF THE QUESTION NO 25.//

// ------------------------------------------------------------------------------------------------------------------------------------------------------------//

// question No 26. SUM OF THE Odd number uo to N and print odd number also.//

// let input = require('readline-sync')
// let n = input.questionInt('Enter the number: ')
// let sum = 0;
// for (let i = 1; i <= n; i++){
//     if (i % 2 != 0){
//         sum+= i;

//         console.log(i);
//     }
// }
// console.log(`sum of the odd number is: ${sum}`);

// END OF THE QUESTION NO 26.//

// ------------------------------------------------------------------------------------------------------------------------------------------------------------//

// question No 27. prime number chack yes or no .//

// let input = require('readline-sync')
// let n = input.questionInt('Enter the number: ')
// let count = 0;
// for (let i = 1; i <= n; i++){
//     if (n % i == 0){
//         count+= 1;
//     }
// }
// if (count == 2){
//     console.log('prime number');
// }
// else{
//     console.log('not prime number');
// }

// END OF THE QUESTION NO 27.//

// ------------------------------------------------------------------------------------------------------------------------------------------------------------//

// question No 28. यहाँ पर पाँच कठिन प्रश्न दिए गए हैं, जो क्रमशः ऑब्जेक्ट्स, एरे, कंडीशन्स, लूप्स, और फंक्शन्स के बारे में हैं। इनमें हिंदी उदाहरण भी शामिल हैं, लेकिन कोड नहीं दिया गया है: .//

// question No 29.  //

// // problem No 1 //
let marks = {
    harry: 90,
    shubham: 9,
    lovish: 56,
    monika: 4,
}
// for (let i = 0 ; i <Object.keys(marks).length; i++){
//     console.log('this marks of '+ Object.keys(marks)[i] + 'are ' + marks[Object.keys(marks)[i]]);

// }
// console.log('=====================');
// // problem No 2 //
// for (let key in marks){
//     // console.log(i);
//     console.log('this marks of '+ key + 'are ' + marks[key]);

// }
// console.log('=====================');
// // problem No 3 //
// let input = require('readline-sync')
// let cn = 43
// let i
// while (i !== cn){
//     console.log('try again');
//     i = input.questionInt('Enter the number i: ')
// }
// console.log('you have entered the correct number');

// //problem No 4 //

// // mean ka matlab hota hai average, jitne number hai usko jodana hai or utne number se divisition karna //
// // arrow function //

// const mean = (a, b, c, d)=>{
//     return (a+b+c+d)/4
// }
// console.log(mean(4, 5, 6, 7));

// END OF THE QUESTION NO 29.//

// ------------------------------------------------------------------------------------------------------------------------------------------------------------//

// question No 30.  Objects in javascript //

// let person = {
//     firstName : 'bantu',
//     lastName : 'singh',
//     age : 24,
// }
// person.firstName = 'bhagat' // change the value in Objects (firstName) //
// console.log(person);
// person.email = 'bantu24@gmail.com' // add the email in the object //
// console.log(person);
// delete person.lastName // delete the age in the object //
// console.log(person);

// END OF THE QUESTION NO 30.//

// ------------------------------------------------------------------------------------------------------------------------------------------------------------//

// question No 31. Object in javascript //

// let student = {
//     name : 'banti',
//     age  : 20,
//     subject : ['math', 'science', 'english'],
// }

// student.subject[0] = 'hindi' // change the value in object //
// student.grad = 'b'
// console.log(student);

// END OF THE QUESTION NO 31.//

// ------------------------------------------------------------------------------------------------------------------------------------------------------------//

// question No 32.  आपके पास एक एरे है जिसमें 1 से 100 तक की संख्याएँ हैं। आपको केवल उन संख्याओं को प्रिंट करना है जो 5 से विभाज्य हैं, और उन्हें घटते क्रम में व्यवस्थित करना है //

// let arr = []
// for (let i = 1; i <= 100; i++){
//     if (i % 5 == 0){
//         arr.push(i)
//     }
// }
// arr.reverse()
// console.log(arr);

// END OF THE QUESTION NO 32.//

// ------------------------------------------------------------------------------------------------------------------------------------------------------------//

// question No 33. //

// let input = require('readline-sync')
// let N = input.questionInt('What is the your Age: ')

// if (N>=18){
//     console.log('you can vote');

// }else{
//     console.log('your eligible after 18 year');

// }

// END OF THE QUESTION NO 33.//

// ------------------------------------------------------------------------------------------------------------------------------------------------------------//

// question No 34. एक प्रोग्राम बनाइए जो 1 से 50 तक की सभी विषम संख्याओं को प्रिंट करे। साथ ही, हर तीसरी विषम संख्या पर "यह तीसरी संख्या है" लिखे।//

// let input = require('readline-sync')
// let a = input.questionInt('Enter the value: ')
// let count= 0;
// for (let i = 1; i <= a; i++){
//     if (i % 2 !== 0){
//         console.log(i);
//         count+= 1;
//         if (count % 3 == 0){
//             console.log('this is third number' );
//         }
//     }
// }

// END OF THE QUESTION NO 34.//

// ------------------------------------------------------------------------------------------------------------------------------------------------------------//

// question No 35. Design a function that takes two numbers and returns which one is greater. If they are equal, return "both are equal". //

// let input = require('readline-sync')
// let a = input.questionInt('Enter the first number: ')
// let b = input.questionInt('Enter the second number: ')

// let compare = (a, b)=>{
//     if (a>b){
//         console.log(`this is the greater number ${a}`);

//     }else if (a==b){
//         console.log(`${a} a and b is equal number ${b}`);

//     }else{
//         console.log(`this is greater number ${b}`);

//     }
// }
// compare(a,b);

// END OF THE QUESTION NO 35.//

// ------------------------------------------------------------------------------------------------------------------------------------------------------------//

// QUESTION No 35. print the s-tage in nested loop.//

// let bhagat = require('readline-sync')
// let N = bhagat.questionInt('Enter the value: ')

// for (let i=1; i<= N; i++){

//     let str = "";
//     for(let j=1; j <= N; j++){
//         str += "#";
//     }
//     console.log(str);

// }

// END OF THE QUESTION NO 35. //

//=====================================================================================================================================================================//

// Question NO 36. bill units loop//

// let bhagat = require('readline-sync')
// let units= bhagat.questionInt('Enter the units: ')
// let bill;

// if (units<=50){
//     bill= units*0.50
//     bill=(bill*20/100)+bill

// }else if(units<=150){
//     bill = units*0.75
//     bill=(units*20/100)+bill
// }
// else if(units<=250){
//     bill= units*1.20
//     bill=(bill*20/100)+100
// }
// else{
//     bill=units*1.50
//     bill =(bill*20/100)+bill
// }
// console.log(bill);

// End Of the Quetion No 36.//

//====================================================================================================//

// Question No 37. salary basec question//

// let bhagat = require('readline-sync')
// let A = bhagat.questionInt('Enter the value: ')
// let HRA= 0;
// let DA= 0;

// if (A<=10000){
//     HRA = A*20/100
//     DA = A*80/100
// }
// else if(A<=20000){
//     HRA=A*25/100
//     DA= A*90/100
// }
// else{
//     HRA =A*30/100
//     DA= A*95/100
// }
// let grossSalary = A+HRA+DA
// console.log(grossSalary);

// End Of the Question No 37.//

//==========================================================================================================//

// Question No 38. Fibonacci Series in looop //

// let bhagat = require('readline-sync')
// let N = bhagat.questionInt('Eter the Value: ')
// let a = 0;
// let b = 1;
// let c;

// while (b <= N) {
// console.log(a,b);
//     c = a+b;
//     console.log(c);
//     a = b;
//     b = c;

// }

// SECOND EXAMPLE IN Fibonacci Series //

// let bhagat = require('prompt-sync')();
// let N = bhagat.question('Enter the Value: ');
// let a = 0;
// let b = 1;

// // console.log("Fibonacci Series:");

// while (a <= N) { // 'a' तक सीरीज़ को प्रिंट करना
//     console.log(a); // 'a' को प्रिंट करना
//     let c = a + b; // अगली संख्या की गणना
//     a = b; // 'a' को 'b' की वैल्यू देना
//     b = c; // 'b' को 'c' की वैल्यू देना
// }

// END OF THE Question No 38. //

// -------------------------------------------------------------------------------------------------------------------------------//

// Question No 39.  print the star in the loop //

// let bhagat = require('readline-sync')
// let a= bhagat.questionInt('Enter the value: ')
// let b= bhagat.questionInt('Enter the value: ')
// let c= bhagat.questionInt('Enter the value: ')
// let d= bhagat.questionInt('Enter the value: ')
// let e= bhagat.questionInt('Enter the value: ')
// let arr = [a, b, c, d, e];

// for (let i = 0; i < arr.length; i++){
//     let str = "";
//     for (let j = 0; j < arr[i]; j++){
//         str += ">";
//     }
//     console.log(str);
// }

// END OF THE Question No 39. //

// -------------------------------------------------------------------------------------------------------------------------------//

// Question No 40.print odd and even number in array //

// let arr= [23,45,32,25,46,33,71,90]
// let odd=0;
// let even=0;
// for (let i=0; i<arr[i]; i++){
//     if(arr[i]%2==0){
//         even+=arr[i]
//     }else{
//         odd+=arr[i]
//     }
// }
// console.log('sum of even: '+even);
// console.log('sum of odd: '+odd);

// END OF THE QUESTION NO 40.//

// ----------------------------------------------------------------------------------------------------------------------------------------------//

// question No 41. take 5 numbers from the user and print the frequency of every number.(jitane bar number aaya use count karana hai) //

// let arr = [1, 2, 5, 2, 8, 3, 8, 1];

// // डुप्लिकेट की गिनती और आउटपुट के लिए Map का उपयोग करें
// let countMap = new Map();

// for (let i = 0; i < arr.length; i++) {
//     if (countMap.has(arr[i])) {
//         countMap.set(arr[i], countMap.get(arr[i]) + 1); // गिनती बढ़ाएं
//     } else {
//         countMap.set(arr[i], 1); // पहली बार गिनती सेट करें
//     }
// }

// // Map से साफ-सुथरा आउटपुट प्रिंट करें
// for (let [key, value] of countMap.entries()) {
//     console.log(`${key}: ${value}`);
// }

// END OF THE Question No 41. //

// -----------------------------------------------------------------------------------------------------------------------------------------------------------//

// Question No 42. OTP function //

// function OTP (){
//     let otp = ''
//     otp = Math.floor(Math.random() * 9000 + 1000)
//     return otp
// }
// console.log('Your OTP ', OTP());

// END OF THE QUESTION NO 42. //

// ----------------------------------------------------------------------------------------------------------------------------------------------------------//

// Question NO 43. happy new year question. //

// let input = require('readline-sync')
// let a = input.questionInt('enter the question: ')
// // // let b = input.questionInt('enter the value: ')

// if (a<=24){
//     a = 24-a

//     console.log(a + ' hour left for happy new year');
// }else{
//     console.log("enter the number 0 to 24 number");

// }

// End of the Question No 43. //

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------//

// Question No 44. USE prompt-sync //

// const ps = require('prompt-sync');
// const prompt = ps ();

// let name = prompt ('Enter the Name: ');
// console.log(`Hello ${name}`);

// End of the question No 44. //

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------//

// question 45. max between two numbers //

// const input = require('readline-sync');
// let a = input.questionInt("Enter a number: ");
// let b = input.questionInt("Enter a number: ");

// if (a>b){
//     console.log(a);
// }else{
//     console.log(b);
// }

// End of the question No 45. //

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------/

// Question No 46. practice question  //

// let a = 'bhagat'
// let b = 'bantu'

// console.log(a.concat(' and  ',b  , ' name is same'));

// let c = '       devotee   '
// console.log(c.trim());

// let input = require('readline-sync')
// let a = input.questionInt('enter the value: ')
// let b = a.toString().length
// console.log(b);

// End of the question No 46. //

// let om = require('readline-sync')
// let N = om.questionInt('Enter the value: ')

// for(let i= 0; i<N; i++){

//     for(let j=0; j<N; j++){
//         console.log(j);

//     }
//     console.log(i);

// }

// End of the Question Number No. 47 print number grad in marks //

// let om = require('readline-sync')
// let n = om.questionInt('Enter the value N: ')

// n >= 90 ? console.log('A') : n >= 80 ? console.log('B') : n >= 70 ? console.log('C') : console.log('fail');

// End of the Question Number No. 47 //

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------//

// Question No 48.  print the star in the loop //

//question No. 1 //

// let arr = [2, 5, 9, 4, 3, 25, 10];

// for (let i of arr){
//     console.log(i);

// }

//quetion No. 2 //

// let arr = [2, 5, 9, 4, 3, 25, 10];

// for(let i = arr.length-1; i>=0; i--){
//     console.log(arr[i]);
// }

//quetion No. 3 //

// target the number

// let arr = [2, 5, 9, 4, 3, 25, 10, 5];

// let target = 5;

// for(let i= 0; i<arr.length; i++){
//     if(arr[i] == target){
//         console.log(arr[i], i);
//     }

// }

// second example //

// let arr = [2, 5, 9, 4, 3, 25, 10, 5];
// let input = require('readline-sync')
// let target = input.questionInt('Enter the target: ')
// let found = false; // Flag to check if the target is found

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === target) {
//         console.log(`Found ${arr[i]} at index ${i}`);
//         found = true;
//     }
// }

// if (!found) {
//     console.log("Not found");
// }

// question No. 4 find the duplicate number in the array //

// let arr = [2, 4, 5, 3, 2, 1, 9, 4, 3];

// for (let i = 0; i < arr.length; i++) {

//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] == arr[j]) {
//             console.log(arr[i], j);

//         }
//     }
// }

// End of the question No 48. //

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------//

// let input = require('readline-sync');
// let N = input.questionInt('Enter the number: ');

// for (let i=2; i<=N; i++){

//     let count = 0;
//     let j = 1;
//     while (j<=i){
//        i%j == 0 ? count++ :0;
//         j++;
//     }
//     count==2 ? console.log(i) : null;
// }

// Armstrong numbers in a given range of M to N. //

// End of the question No 49. //

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------//

// question No 50. write a program to take a empty array and the number when will be 0 then End the loop and print the array. //

// let arr = [];
// let a;
// while (a != 0) {
//     let input = require('readline-sync');
//     a = input.questionInt('Enter the Number: ');
//     arr.push(a);
// }
// arr.sort((a,b)=>a-b);
// console.log(arr);

// End of the question No 50. //

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------//

//51. this is OTP janraater question  //

// // let otp = ''
// otp = Math.floor( Math.random() * 9000+1000);
// console.log('Your OTP',otp);

// End of the question No 51. //

// -------------------------------------------------------------------------------------------------------------------------------//

//52. Count the number length. Whatever you put the number //

// let input = require('prompt-sync')();
// let N = Number(input('Enter the Number: '))

// console.log(N.toString().length)

// End of the question No 52 //

// --------------------------------------------------------------------------------------//

//Question No.53 problem soleving question ..........//

// problem No.1 //

// let input = require('prompt-sync')();
// let N = input('Enter the Number: ')
// let a =1;
// for(let i = 1; i<= N; i++){
//     let b = ''
//     for(let j=1; j<=i; j++){
//         b += a++
//         // a++;
//     }
//     console.log(b);

// }

// End of the question No. 53. //

// ------------------------------------------------------------------------------------------//

// problem No.2 //
// print the pattern in the loop //

// let input = require('prompt-sync')();
// let N = Number(input('Enter the number: '))

// for(let i = 1; i<=N; i++){
//     let star =''
//     for(let j= 1; j<=i;j++){
//         star+= '*'
//     }
//     console.log(star);

// }
// for(let i = 1; i<=N; i++){

//     let star =''
//     for(let j= 1; j<=i;j++){
//         star+= '*'
//     }
//     console.log(star);

// }

// End of the question No. 53. //

// ------------------------------------------------------------------------------------------//

// problem No. 3 //
// Hollow Square Pattern...//

// let input = require('prompt-sync')();
// let N = Number(input('Entet the Number: '))

// for(let i = 1; i<=N; i++){
//    let star=''
//    for (let j = 1; j<=N; j++){
//       if (i==1|| i==N || j ==1 || j==N){
//          star+=' *'
//       }else{
//          star+='  '
//       }
//    }
//    console.log(star);

// }

// End of the problem No. 3. //

// -----------------------------------------------------------------------------------------------//

// problem No. 4 ................//

//butterfly Pattern...//

// let input = require('prompt-sync')();
// let N = Number(input('Enter the Number: '))
// let a = N;
// for (let i = 1; i <= N; i++) {
//     let star = ''
//     let space = ''
//     let star1 = ''

//     for (let j = 1; j <= i; j++) {
//         star += '*'
//     }
//     for (let k = 1; k <= ((a - i) * 2); k++) {
//         space += ' '
//     }
//     for (let l = 1; l <= i; l++) {
//         star1 += '*'
//     }
//     console.log(star + space + star1);

// }

// for (let i = N-1; i >= 1; i--) {
//     let star = '';
//     let space = '';
//     let star1 = '';

//     for (let j = 1; j <= i; j++) {
//         star += '*';
//     }
//     for (let k = 1; k <= ((N - i) * 2); k++) {
//         space += ' ';
//     }
//     for (let l = 1; l <= i; l++) {
//         star1 += '*';
//     }
//     console.log(star + space + star1);
// }

// End of the problem No. 4. //

// ------------------------------------------------------------------------------------//

// problem No. 5.  //
// Diomand Pattern...//

// let input = require('readline-sync')
// let N = input.questionInt('Enter the value: ')
// let a = 1;
// for (let i = 1; i <= N; i++) {
//     let star = ''
//     let space = ''
//     for (let j = 1; j <= N - i; j++) {
//         space += ' '
//     }
//     for (let k = 1; k <= a; k++) {
//         star += '*'
//     }
//     a += 2;
//     console.log(space + star);
// }
// a -= 4;
// for (let i = 1; i <= N; i++) {
//     let star = ''
//     let space = ''

//     for (let j = 1; j <= i; j++) {
//         space += ' '
//     }
//     for (let k = 1; k <= a; k++) {
//         star += '*'
//     }
//     a -= 2;
//     console.log(space + star);

// }

// End of the question No

// -----------------------------------------------------------------------------------------//

// problem No. 5.  //
// Hollow Diomand Pattern...//

// let input = require('readline-sync')
// let N = input.questionInt('Enter the value: ')
// let a = 1;
// for (let i = 1; i <= N; i++) {
//     let star = ''
//     let space = ''

//     for (let j = 1; j <= N - i; j++) {
//         space += ' '
//     }

//     for (let k = 1; k <= a; k++) {
//         if(k == 1 || k == a){
//                     star += '*'
//         }
//           else{
//               star += ' '
//           }

//     }
//     a += 2;
//     console.log(space + star);
// }
// a -= 4;
// for (let i = 1; i <= N; i++) {
//     let star = ''
//     let space = ''

//     for (let j = 1; j <= i; j++) {
//         space += ' '
//     }

//     for (let k = 1; k <= a; k++) {
//         if(k == 1 || k == a){
//             star += '*'
//         }
//         else{
//             star += ' '
//         }
//     }
//     a -= 2;
//     console.log(space + star);

// }

// End of the question No. 5. //

//--------------------------------------------------------------------------------------------------//

// question No 6. Array question print 2 gap in the array index and ripit the array and didn't print the agine same number. //

// let input = require('prompt-sync')();
// let N = Number(input('Enter the Value: '))

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let k = 2;
// let arrlen = arr.length;
// let i = 0;
// let indexb = 0;
// let count = 1;
// let b = []
// let len = arr.length;
// while (arr.length > i) {

//     if(count === k){
//         b[indexb] = arr[i]
//         arr.splice(i, 1)
//         indexb++;
//         count = 1;
//     }
//     count++;
//     i++;
// }
// console.log(arr);

// Endt of the question No 6 //

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

// second example //

// let arr = [2, 5, 3, 8, 9, 4, 1, 10];
// let k = 2;
// for(let i = 0; i<arr.length; i++){
//     if(arr[i]== k){
//         console.log(arr[i]);
//         continue

//     }
// }

// let arr = [2, 5, 3, 8, 9, 4, 1, 10];
// let k = 2;

// for (let i = k; i < arr.length; i += 2) {
//     console.log(arr[i]);
// }

//-----------------------------------------------------------------------------------------//
//Ques No. 7 esa question me positive number ko positive print karna hain aur nagetive number ko positive me print karna hain withoud any condition //

// let input = require('prompt-sync')();
// let N = Number(input('Enter the value: '));
// // // // console.log(N);

// // // 0>N ? console.log(N= N*-1): console.log(N);
// // console.log(Math.abs(N)); // ➤ 7

// console.log((N * N)**0.5);

// let input = require('readline-sync');
// let N = input.questionInt('Enter the value: ')

// N = (N*N)**0.5
// console.log(N);

//---------------------------------------------------------------------------------------------//

//question No. 8 find the max number in array //

// let a = [1,1,'50',9,40,'bhagat'];
// let max = a[0];

// for (let i = 1; i < a.length; i++) {
//   if (a[i] > max) {
//     max = a[i];
//   }
// }

// console.log(max);

// -------------------------------------------------------------------------------------------//

//question No. 9 yah question me user input lega kitane bhi digit number ka aur kitne number hain use print karega //

// let int = require('readline-sync')
// let N = int.questionInt('Enter the number: ')
// let count = 0;
// while (N>0) {
//     N = N-(N%10);
//     N = N/10
//     count+=1;
// }
// console.log(count);

// secomd exaple //
// console.log(`This number Digit is: ${N.toString().length}`);

// ----------------------------------------------------------------------------//

//question No 10. Accept any city from the user and display the monument of that city. city, Monument//

// let input = require('readline-sync');
// let N = input.question('Enter the city name: ')
// if('delhi' == N){
//     console.log('Red Fort');

// }
// else if('agra' == N){
//     console.log('Taj Mahal');

// }
// else if ('jaipur' == N){
//     console.log('jal Mahal')
// }
// else console.log('Enter the Valid City '+N);

// -------------------------------------------------------------------//

//question No 11. print Duplicates in array  //
// let arr = [4, 5, 9, 1, 5, 9,9];

// let b =[];
// for(let i = 0; i<arr.length; i++){
//     for(let j = i+1; j<arr.length; j++){
//         if(arr[i] == arr[j]){
//             if(!b.includes(arr[i])){
//                 b.push(arr[i])
//             }
//         }
//     }

// }
// console.log(b);

//----------------------------------------------------------------------------------------------//

// let int = require('readline-sync');
// let a = int.questionInt('Enter the value: ')
// function checkDataType(a) {
//     //  Only change code below this line
//     return typeof a;
// }
// console.log(checkDataType(a));

// ------------------------------------------------------------------------------//

// function in Javascript // 

//Q1. normal function in js //

// function myname() {
//     console.log('b');
//     console.log('h');
//     console.log('a');
//     console.log('g');
//     console.log('a');
//     console.log('t');
// }
// myname()

//++++++++++++++++++++++++++++++++++++++++++++++//

//Q2. function addtwoNumbers(num1, num2) {
//     console.log(num1+num2);

// }

// function addtwoNumbers(num1, num2) {
//     // let result = num1+num2;
//     // return result;
//     return num1+num2

// }
// let result = addtwoNumbers(3, 5)
// console.log('result: '+result);

//------------------------------------------------------//

// Question No. 
// function loginUserMessage(username = 'sam') {
//     if(!username){
//         console.log('place enter a username');
//         return
//     }
//     return `${username} just logged in`
// }
// console.log(loginUserMessage('Bantu'))
// console.log(loginUserMessage('bantu'));

//---------------------------------------------------------//

// function calculateCartPrice(...num1) {
//     return num1

// }
// console.log(calculateCartPrice(200, 400, 500, 200))

//++++++++++++++++++++++++++++++++++++++++++++++++++++//

//Questiono No. 4 Object function in Javascript //

// const user = {
//     username: 'Bantu',
//     prices: 199,

// }

// function handleObject(anyobject) {
//     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);

// }
// handleObject(user)
// handleObject({
//     username: 'sam',
//     price: 399
// })

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
//Question NO.6 function in Array //

// const myNewArray = [200, 400, 100, 600];

// function returnSecondValue(getArray) {
//     return getArray[1]

// }
// console.log(returnSecondValue(myNewArray))
// console.log(returnSecondValue([200, 400, 500, 1000]))



// let int = require('readline-sync');
// let N = int.questionInt('ENter the value: ')
// let a = [1, 2, 3, 4, 5, 6];


// let int = require('readline-sync');
// let N = int.questionInt('Enter the index to remove: ');

// let a = [1, 2, 3, 4, 5, 6];

// // Check if N is a valid index
// if (N >= 0 && N < a.length) {
//     // Remove element at index N
//     a.splice(N, 1);
//     console.log('Updated array:', a);
// } else {
//     console.log('Invalid index entered');
// }



// let a = [1, 2, 3, 4, 5, 6]
// let b = a.length;

// if(N<a.length){
//     a.splice(N,1)
//         console.log(a);
// }
// else console.log('invalide index: ');

// ---------------------------------------------------------------//


// let int = require('readline-sync');
// let c = int.questionInt('enter the value: ')

// let hasDL = true
// function drivingEligibility(age,hasDL) {
//   let isAdult = true;
// 	//  Only change code below this line
// 	isAdult = age>=18 && hasDL
// 	return age && isAdult
// }
// console.log(drivingEligibility(age,hasDL))


// let a = 10, b = 20, c = 11;
// if (a++ > 0 || b-- > 0 && --c == 10) {
//   console.log("Condition is true.");
// } else {
//   console.log("Condition is false.");
// }
// console.log(a, b, c);



// let day = 3;

// switch(day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   default:
//     console.log("Invalid day");
// }


// Vowel or Consonant
// Take a character input and check whether it's a vowel or a consonant using switch.

//  let day = 3;
// switch(day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   default:
//     console.log("Invalid day");
// }

// let i = 0;
//  while(i<5){
//         console.log(i);
//         i++
//      }

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

// let num1 = 10;
// let num2 = 5;
// let operator = "*";
// let result;

// switch (operator) {
//   case "+":
//     result = num1 + num2;
//     break;
//   case "-":
//     result = num1 - num2;
//     break;
//   case "*":
//     result = num1 * num2;
//     break;
//   case "/":
//     result = num1 / num2;
//     break;
//   default:
//     console.log("Invalid operator");
//     break;
// }

// if (result !== undefined) {
//   console.log("Result:", result);
// }

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

// swap even odd number in array //

// let arr = [1,1,2,2,3,3,4,4,5,5,6,6]
// function oddEvenSwap(arr) {
//     for (let i = 0; i < arr.length - 1; i += 2) {
//       // Only swap if the two elements are different
//       if (arr[i] !== arr[i + 1]) {
//         [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
//       }
//     }
//     return arr;
//   }
//   console.log(oddEvenSwap(arr))

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

// ek kiladi 100 run par kitane six marsakta hain vaha hame nikalana haun. 
// let int = require('prompt-sync')();
// let X = Number(int('Enter the vaue:'))
// let a = X%6
// let b = (X-a)/6
// console.log(b);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

// hamare pas 10 floor hain aur har floor par 10 room hain aur hame room No 2 se room No. 55 par jana hain to hame kitne floor jana padega yaha count karna padega.

// let int = require('readline-sync');
// let room1 = int.questionInt('enter the present room: ')
// let room2 = int.questionInt('enter room where you want go: ')
// let b = ((room2-room1)/10)
// let c = (b-(b%1))
// console.log(`You should go to floor no ${c}`);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

// print prime number in function  //

// function printPrimes(N) {
//     const primes = [];
//     for (let i = 2; i <= N; i++) {
//         let j = 1;
//         let count = 0;
//         while (j <= i) {
//             if (i % j === 0) {
//                 count++;
//             }
//             j++;
//         }
//         if (count === 2) {
//             primes.push(i); 
//         }
//     }
//     return primes;
// }
// console.log(printPrimes(25))

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

// remove Decimal without method //
// let a = 54.6;
// let b = a - (a % 1); // This removes the decimal part
// console.log(b); // Output: 54

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

// let a = 843;
// let count = 0;
// a= a%10
// count++
// a = a/10

// console.log(count);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
// Collatz Sequence Generator in function 

// let int = require('prompt-sync')();
// let N = Number(int('Enter the number: '));

// function collatz (N){
//     let arr = []
//     while (N>1) {
//         arr.push(N)
//         if(N%2==0){
//             N = N/2
//         }
//         else{
//             N = 3*N+1;
//         }
//     }
//     arr.push(1)
//     return arr
// }
// console.log(collatz (N))

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
// Circular Array Rotation in function 

// let arr = [1, 2, 3, 4, 5]
// let num = 4;
// function CircularArrayRotation (arr, num){
//     // let num = 3;
//     let a = arr.slice(-num)
//      let b = arr.slice(0, -num)
//      let c = a.concat(b)

//      return c ; 
// }
// console.log(CircularArrayRotation (arr, num))

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
//  skip PerfectSquares number in function 

// function skipPerfectSquares(N) {
//     let arr = [];
//     let b = 20;
//     for (let i = 2; i<= b && i<= N; i++) {
//         let a = false;


//         for (let j = 1; j <= i; j++) {
//             if (j * j === i) {
//                 a = true
//             }
//         }
//         if (!a) {
//             arr.push(i)
//         }

//     }
//     return  arr;
// }
// console.log(skipPerfectSquares(100))

// second example..............................//

// function skipPerfectSquares(N) {
//     let arr = [];
//     for (let i = 2; i < N; i++) {
//         let a = false;
//         for (let j = 1; j <= i; j++) {
//             if (j * j === i) {
//                 a = true
//             }
//         }
//         if (!a) {
//             arr.push(i)
//         }

//     }
//     return  arr;
// }
// console.log(skipPerfectSquares(10))

// third example......................//

// function skipPerfectSquares(N) {
//     let arr = [];
//     let arr1 = []
//     for (let i = 2; i < N; i++) {
//         let a = false;
//         for (let j = 1; j <= i; j++) {
//             if (j * j === i) {
//                 arr1.push(i)
//                 a = true
//             }
//         }
//         if (!a) {
//             arr.push(i)
//         }

//     }
//     // console.log(arr1)
//     return [arr1, arr];
// }
// console.log(skipPerfectSquares(20))

// ---------------------------------------------------------------------------------------------//

//Question No. 9 this code only run till 20 

// let int = require('readline-sync');
// let N = int.questionInt('valeu: ')
// let a = 20;
// for(let i = 2; i<= a && i< N; i++){
//     console.log(i);

// }

//---------------------------------------------------------------------------------------------------//

//Question No. 10 count vowels in function //

// function countVowels(str) {
//     let count = 0;
//     const vowels = "bhagat";
//     for (let i = 0; i < str.length; i++) {
//         for (let j = 0; j < vowels.length; j++) {
//             if (str[i] === vowels[j]) {
//                 count++;
//             }
//         }
//     }
//     return count;
// }

// console.log(countVowels("a_e_i_o_u")); 

//--------------------------------------------------------------------------------------------------//

//Question No. 11 codechef Question //

// let int = require('readline-sync');
// let N = int.questionInt('enter the value: ')
// if(N%3==0){
//     console.log(N);

// }
// else if(N%3==0){
//     console.log( N = N-1)
// }
// else if((N+1)%3==0){
//     console.log(N= N+1)
// }
// else{
//     console.log(N-1)
// }

//----------------------------------------------------------------------------------------------------//

//Question No. 12 Codechef question //

// 5
// [1,2,3,-3,-3] = 0;

// 4
// [1,1,-1,-1] = 0;

// 6
// [1,1,1,-1,-1,-1] = 0;
// [1,-1,1,-1,1,-1] = 0;

// 7
// [1,1,1,1,-1,-1,-2] = 0;

// 8
// [1,1,1,1,-1,-1,-1,-1] = 0;

// 9
// [1,1,1,1,1,-1,-1,-2,-1] = 0;

// let n = 9;

// if(n % 2 == 0){
//     let k=1;
//     let arr = [];
//     for(let i=0; i<n; i++){
//         arr.push(k);
//         if(k==1){
//             k = -1;
//         } else {
//             k = 1;
//         }
//     }
// }else{
//     let m = (n % 2) + 1;
//     let n = n-m;
//     for(let i=0; i<m; i++){

//     }
// }

//---------------------------------------------------------------------------------------//



// const person = {
//     name: "Bantu",
//     age : 16,
//     greet: function() {
//         console.log(this.name);
//         console.log(this.age);

//     }
// };

// person.greet();  // 👉 this = person → "Bantu"

// const person = {
//     name: "Bantu",
//     greet: function() {
//         let message = "Hi";
//         console.log(message + ", " + this.name);
//     }
// };

// person.greet();



// function trafficSignal(num,trafficLightColor) {
//     //  Only change code below this line
//     let a = stop;
//     if(num,trafficLightColor == 10, 'red'){

//     }
//       return 
//   }
//   console.log(trafficSignal(10,'red'))




// let num = 10
// let trafficLightColor = 'Red'

//   function trafficSignal(num, trafficLightColor) {
//     // Only change code below this line
//     if (trafficLightColor === "Red" && num >= 1 && num <= 20) {
//       return "Stop";
//     } else if (trafficLightColor === "Yellow" && num >= 1 && num <= 20) {
//       return "Get ready to go";
//     } else if (trafficLightColor === "Green" && num >= 21 && num <= 25) {
//       return "Go";
//     } else {
//       return "invalid input";
//     }
//   }
//   console.log(trafficSignal(num, trafficLightColor));
  
  
// let num = 2;
// let trafficLightColor = 'Yellow'

// function trafficSignal(num, trafficLightColor) {
//     if (trafficLightColor === "Red" && num >= 1 && num <= 20) {
//         return "Stop";
//     } else if (trafficLightColor === "Yellow" && num >= 1 && num <= 20) {
//         return "Get ready to go";
//     } else if (trafficLightColor === "Green" && num >= 21 && num <= 25) {
//         return "Go";
//     } else {
//         return "invalid input";
//     }
// }
// console.log(trafficSignal(num, trafficLightColor))


// function countVowels(str) {
//     let count = 0;
//     const vowels = "aeiouAEIOU";
//     for (let i = 0; i < str.length; i++) {
//         if (vowels.includes(str[i])) {
//             count++;
//         }
//     }
//     return count;
// }

// let text = input.question('Enter a string: ');
// console.log(`Number of vowels: ${countVowels(text)}`);




//-------------------------------------------------------------------------------------//

// let price = input.questionInt('Enter the number: ');
// let bhagat = (price)=>{
//     let discount ;
// if(500>=price){
//     discount = price*0/100;
//     price = price- discount
// }
// else if(500<=price && 1000>=price){
//     discount = price*5/100;
//     price = price-discount;
// }
// else if(1000<=price){
//     discount = price*10/100;
//     price = price-discount;
// }

// return price;

// }
// console.log(bhagat(price))



function greet(name = "Friend") {
    console.log("Hello, " + name);
  }
  
  greet("Bantu"); // Output: Hello, Bantu
  greet();        // Output: Hello, Friend
  