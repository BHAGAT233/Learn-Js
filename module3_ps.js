//QUESTION NO 1. Nested loops in freeCodeCamp //
// for (let i = 0; i < 5; i++){
//     console.log(`the current value of i is ${i}`);
//     for (let j = 0; j < 5; j++){
//         console.log(`j: ${j}`);

//     }
//     console.log('=====================');

// }

// END OF QUESTION NO 1. //

//------------------------------------------------------------------------------------------------------------//

// //QUESTION NO 2. Nested loops in freeCodeCamp //

// for (let i= 0; i< 11; i++){
//     for (let j= 0; j< 11; j++){
//         console.log(`${i} X ${j} = ${i*j}`);

//     }
//     console.log('=====================');
// }

// END OF QUESTION NO 2. //

//------------------------------------------------------------------------------------------------------------//

//QUESTION NO 3. Nested loops in freeCodeCamp //

// const storeInventory= [ ["Item: computer", 'Price: $1500', "Inventory: 25"], ["Item: pen", 'Price: $10', "Inventory: 5"], ["Item: speaker", 'Price: ', "Inventory: "], ["Item: ", 'Price: $50', "Inventory: 100"], ["Item: moniter", 'Price: $200', "Inventory: 27"], ["Item: Headphones", 'Price: $400', "Inventory: 7"], ["Item: printer", 'Price: $100', "Inventory: 90"], ["Item: usb cable", 'Price: $9', "Inventory: 500"], ["Item: router", 'Price: $350', "Inventory: 23"], ["Item: wireless keyboard", 'Price: $20', "Inventory: 55"], ["Item: fans", 'Price: $35', "Inventory: 6"]];

// for (let i =0; i < storeInventory.length; i++){
//     if (0 < i){
//         console.log('=====================');
//     }
//     for (let j = 0; j < storeInventory[i].length; j++){
//         console.log(storeInventory[i][j]);
//     }
// }

// END OF QUESTION NO 3. //

//-----------------------------------------------------------------------------------------------------------------------//

// MODULE 3 QUESTION SET //

// question 4. take three varibles to store birth date, birth month and birth year and print //

// const input = require('readline-sync');
// let a = input.questionInt('enter birth date: ')
// let b = input.question('enter birth month: ')
// let c = input.questionInt('enter birth year: ')

// console.log(a);
// console.log(b);
// console.log(c);

// END OF THE QUESTION NO 4. //

//-----------------------------------------------------------------------------------------------------------------------//

// QUESTION NO 5. take input from user and print it output //

// let a = input.question('enter the value of a: ')
// console.log(a);

// END OF THE QUESTION NO 5. //

//-----------------------------------------------------------------------------------------------------------------------//

//QUESTION NO 6. Take two Number form user and swap the Number//

// let input = require('readline-sync')
// let a = input.questionInt('enter the value of a: ')
// let b = input.questionInt('enter the value of b: ')
// let c = ''

// c = a
// a = b
// b = c
// console.log(a);
// console.log(b);

// END OF THE QUESTION NO 6. //

//-----------------------------------------------------------------------------------------------------------------------//

// QUESTION NO 7. six basic math operation +, -, *, /, Math.floor(a/b), %. //

// let a = input.questionInt('enter the value of a: ')
// let b = input.questionInt('enter the value of b: ')

// console.log(`basic operation ${a+b}, ${a-b}, ${a*b}, ${a/b}, ${Math.floor(a/b)}, ${a%b}`);

// END OF THE QUESTION 7.//

//---------------------------------------------------------------------------------------------------------------------------------//

// QUESTION NO 8. take two number A and B from user and calculate the quotient and remainder when number A is divided by number b. //

// let input = require('readline-sync')
// let a = input.questionInt('Enter the value A: ')
// let b = input.questionInt('Enter the value B: ')

// console.log(`quotient and remainder ${Math.floor(a / b)}, ${a % b}`);

// END OF THE QUESTION 8.//

//---------------------------------------------------------------------------------------------------------------------------------//

// QUESTION NO 9. display the last digit of that number.//

// let input = require('readline-sync')
// let a = input.questionInt('Enter the positive number: ')
// let b = Math.floor(a % 10)
// console.log(b);

// END OF THE QUESTION No 9.//

// QUESTION NO 10. convert a temperature from Celsius to Fahrenheit using formul(C/5 = (F-32)/9) or second formul (a * 9/5) + 32; .//

// let input = require('readline-sync')
// let c = input.questionInt('Enter the value: ')
// let fahrenheit = (c * 9/5) + 32;
// console.log(`Temperature in Fahrenheit: ${fahrenheit}`);

// END OF THE QUESTION NO 10.//

//---------------------------------------------------------------------------------------------------------------------------------//

// QUESTION NO 11. take two inputs from the user and swap them without using a temporary or third variable.//

// let input = require('readline-sync')
// let a = input.questionInt('Enter the value of a: ')
// let b = input.questionInt('Enter the value of b: ')
// a = a + b;
// b = a - b;
// a = a - b;
// console.log(a)
// console.log(b)

// END OF QUESTION NO 11.//

//---------------------------------------------------------------------------------------------------------------------------------//

// QUESTION NO 12. take two numbers, A and B from the user. Your task is to find the largest number that is less than A and can be divided evenly by B. Can you figure out that number? //

// let input = require('readline-sync')
// let A = input.questionInt('Enter the value of A: ')
// let B = input.questionInt('Enter the value of B: ')

// let c = Math.floor(A/B) * B;
// console.log(c);

// END OF THE QUESTION NO 12.//

//---------------------------------------------------------------------------------------------------------------------------------//

// QUESTION NO 13.ake two numbers from the user and determine the greater of those two given numbers. //

// let a = input.questionInt('Enter the value of a: ')
// let b = input.questionInt('Enter the value of b: ')

// a > b ? console.log(a) : console.log(b);

// END OF THE QUESTION NO 13.//

//---------------------------------------------------------------------------------------------------------------------------------//

// QUESTION NO 14. take a number from the user and print that number as Odd or Even.//

// let input = require('readline-sync')
// let a = input.questionInt('Enter the value of A: ')
// a%2 == 0 ?console.log('Even'): console.log('Odd');

// end of the question No 14. //

//---------------------------------------------------------------------------------------------------------------------------------//

// QUESTION NO 15. take a number from the user and output whether that number is negative, positive or zero. //

// let input = require('readline-sync');
// let a = input.questionInt('Enter the value of A: ')

// a > 0 ? console.log('Positive') : a < 0 ? console.log('Negative') : console.log('Zero');

// if (a > 0){
//     console.log('Positive');

// }else{
//     if (a < 0){
//         console.log('Negative');

//     }else{
//         console.log('Zero');
//     }
// }

// END OF THE QUESTION NO 15.//

//---------------------------------------------------------------------------------------------------------------------------------//

// QUESTION NO 16. take an integer as input and print the smallest positive integer that is a multiple of both 2 and n.//

// let input = require('readline-sync');
// let n = input.questionInt('Enter the value of A: ')

// // example 1//
// n%2 == 0 ? console.log(n) :console.log(n*2);

// if (n%2 == 0){
//     console.log(n);
// }
// else{
//     console.log(n*2);
// }

// END OF THE QUESTION NO 16.//

//---------------------------------------------------------------------------------------------------------------------------------//

// QUESTION NO 17. take three numbers from the user and print the greater number of the three numbers. //

// let a = input.questionInt('Enter the value of a: ')
// let b = input.questionInt('Enter the value of b: ')
// let c = input.questionInt('Enter the value of c: ')

// a > b && a > c ? console.log(a) : b > a && b > c ? console.log(b) : console.log(c);

// end of QUESTION NO 17.//

//---------------------------------------------------------------------------------------------------------------------------------//

// QUESTION NO 18. take four numbers from the user and print the greater number of the four numbers. //

// let a = input.questionInt('Enter the value of a: ')
// let b = input.questionInt('Enter the value of b: ')
// let c = input.questionInt('Enter the value of c: ')
// let d = input.questionInt('Enter the value of d: ')

// a > b && a > c && a > d ? console.log(a) : b > a && b > c && b > d ? console.log(b) : c > a && c > b && c > d ? console.log(c) : console.log(d);

// END OF THE QUESTION NO 18.//

//---------------------------------------------------------------------------------------------------------------------------------//

// QUESTION NO 19. take a year from the user and output whether a given year is a leap year or not.//

// let input = require('readline-sync');
// let year = input.questionInt('Enter the year: ')

// year%4 == 0 ? year%100 == 0 ? year%400 == 0 ? console.log('Leap year') : console.log('Not a leap year') : console.log('Leap year') : console.log('Not a leap year');

// if (year%4 == 0){
//     if (year%100 == 0){
//         if (year%400 == 0){
//             console.log('Leap year');
//         }else{
//             console.log('Not a leap year');
//         }
//     }else{
//         console.log('Leap year');
//     }

// }
// else{
//     console.log('Not a leap year');
// }

//----------------------------------------------------------------------------------------------//
// let input = require('readline-sync');
// let year = input.questionInt('Enter the year: ')
// if (year%4 == 0 && year%100 !== 0 || year%400 == 0){
//     console.log('Leap year');
// }
// else{
//     console.log('Not a leap year');
// }

// END OF THE QUESTION NO 19.//

//---------------------------------------------------------------------------------------------------------------------------------//

// QUESTION NO 20. take 3 numbers from the user and output the second max of 3 numbers. //

// let a = input.questionInt ('Enter the value of a: ')
// let b = input.questionInt ('Enter the value of a: ')
// let c = input.questionInt ('Enter the value of a: ')

// a > b && a > c ? b > c ? console.log(b) : console.log(c) : b > a && b > c ? a > c ? console.log(a) : console.log(c) : a > b ? console.log(a) : console.log(b);

// if (a > b && a > c){
//     if (b > c){
//         console.log(b);
//     }else{
//         console.log(c);
//     }
// }
// else if (b > a && b > c){

//     if (a > c){
//         console.log(a);

//     }else{
//         console.log(c);
//     }

// }else{

//     if (a > b){
//         console.log(a);
//     }
//     else{
//         console.log(b);
//     }
// }

// END OF THE QUESTION NO 20.//

// QUESTION NO 21. Write a program to take the basic salary of an employee and calculate its Gross salary according to the following: (Gross salary is the sum of basic salary, HRA, and DRA) HRA = 20% of basic salary, DA = 80% of basic salary.//

// Basic Salary <= 10000 : HRA = 20%, DA = 80% //
// Basic Salary <= 20000 : HRA = 25%, DA = 90% //
// Basic Salary > 20000 : HRA = 30%, DA = 95% //

// let bhagat = require('readline-sync')
// let basicSalary = bhagat.questionInt('Enter the basic salary: ')

// let HRA = 0;
// let DA = 0;

// if (basicSalary <= 10000){
//     HRA = basicSalary * 0.2;
//     DA = basicSalary * 0.8;
// }
// else if (basicSalary <= 20000){
//     HRA = basicSalary * 0.25;
//     DA = basicSalary * 0.9;
// }
// else{
//     HRA = basicSalary * 0.3;
//     DA = basicSalary * 0.95;
// }

// let grossSalary = basicSalary + HRA + DA;
// console.log(`Gross Salary: ${grossSalary}`);

// END OF THE QUESTION NO 21.//

// ------------------------------------------------------------------------------------------------------------//

// QUESTION NO 22. input electricity unit charges and calculate the total electricity bill .//
/* according to the given condition:
For the first 50 units Rs. 0.50/unit
For the next 100 units Rs. 0.75/unit
For the next 100 units Rs. 1.20/unit
For units above 250 Rs. 1.50/unit
An additional surcharge of 20% is added to the bill */

// let bhagat=require('readline-sync')
// let unit = bhagat.questionInt('Enter the unit: ')

// let bill = 0;

// if (unit <= 50){

//     bill = unit * 0.5;
// }
// else if (unit <= 150){
//     bill = 50 * 0.5 + (unit - 50) * 0.75;
// }
// else if (unit <= 250){
//     bill = 50 * 0.5 + 100 * 0.75 + (unit - 150) * 1.20;
// }
// else{
//     bill = 50 * 0.5 + 100 * 0.75 + 100 * 1.20 + (unit - 250) * 1.50;
// }

// let surcharge = bill * 0.2;
// let totalBill = bill + surcharge;
// console.log(`Total bill: ${totalBill}`);

// END OF THE QUESTION NO 22.//

// -------------------------------------------------------------------------------------------------------------------------//

// QUESTION NO 23.  prime number and or composit number in for loop//

// let input = require('readline-sync');
// let n = input.questionInt('Enter the value of n: ')
// let flag = 0;
// for (let i = 2; i < n; i++) {
//     if (n % i == 0) {
//         flag = 1;
//         break;
//     }
// }
// if (flag == 0) {
//     console.log('Prime number');
// }
// else {
//     console.log('Composite number');
// }

// END OF THE QUESTION NO 23.//

// -------------------------------------------------------------------------------------------------------------------------//

// QUESTION NO 24.  print prime number or not.//

// let n = input.questionInt('Enter the value of n: ')

// let flag = 0;

// for (let i = 2; i < n; i++){
//     if (n%i == 0){
//         flag = 1;
//         break;
//     }
// }

// if (flag == 0){
//     console.log('Prime number');
// }
// else{
//     console.log('Composite number');
// }

// END OF THE QUESTION NO 24.//

// -------------------------------------------------------------------------------------------------------------------------//

// QUESTION NO 25.  print prime number or not.//

// let input = require('readline-sync')
// let n = input.questionInt('Enter the value of n: ')
// for  (let i = 2; i <= n; i++){
//     let j = 1;
//     let count = 0;
//     while (j <= i){
//         if (i%j == 0){
//             count++;
//         }
//         j++;
//     }
//     if (count == 2){
//         console.log(`this is prime number ${i} `);
//     }else{
//         continue;
//     }
// }

// END OF THE QUESTION NO 25.//

// -------------------------------------------------------------------------------------------------------------------------//

// QUESTION NO 26. take 4 numbers from the user and output the third max of these 4 numbers.//

// let input = require('readline-sync');
// let a = input.questionInt('Enter the value of a: ')
// let b = input.questionInt('Enter the value of b: ')
// let c = input.questionInt('Enter the value of c: ')
// let d = input.questionInt('Enter the value of d: ')

// if ((a > b && a < c && a < d)||(a > c && a < b && a < d)||(a > d && a < b && a < c)){
//     console.log(a);
// }else if ((b > a && b < c && b < d)||(b > c && b < a && b < d)||(b > d && b < a && b < c)){
//     console.log(b);
// }else if ((c > a && c < b && c < d)||(c > b && c < a && c < d)||(c > d && c < a && c < b)){
//     console.log(c);
// }
// else{
//     console.log(d);
// }

// END OF THE QUESTION NO 26.//

// -------------------------------------------------------------------------------------------------------------------------//

// QUESTION NO 27. take 5 numbers from the user and print the frequency of every number.(jitane bar number aaya use count karana hai)//

// let arr = [1,2,5,2,8,3,8,1,]

// for (let i=0; i< arr.length; i++){
//     let count=1;
//     for(let j=i+1;j<arr.length; j++){
//         if (arr[i] ===arr[j])
//             count++;
//     }
//     console.log('--------------------');

//     console.log(arr[i],count);

// }

// END OF THE QUESTION NO 27.//

// -------------------------------------------------------------------------------------------------------------------------//

// QUESTION NO 28. Take the number N and the name from the user as inputs, and print the name N times.//

// let input = require('readline-sync')
// let a = input.questionInt('enter the value: ')

// for (let i= 1; i <= a; i++){
//     console.log('Bedanti');

// }

// END OF THE QUESTION NO 28.//

// -------------------------------------------------------------------------------------------------------------------------//

// QUESTION NO 29. Take a number N from the user as input, and print even numbers up to N .//

// let input = require('readline-sync')
// let a = input.questionInt('Enter the value: ')

// for (let i= 1; i< a; i++){
//     if(i%2==0){
//         console.log(i);

//     }
// }

// END OF THE QUESTION NO 29.//

//---------------------------------------------------------------------------------------------------------------------------------------//

// QUESTION NO 29.Write a program to print the sum of odd numbers up to N.(ek number N  lena hai or odd number ka sum print karna hai)//

// let bhagat = require('readline-sync')
// let N = bhagat.questionInt('Enter the value: ')

// let sum = 0;
// for (let i=1; i<=N ; i++){
//     if(i%2!==0){
//         sum+=i
//         console.log(i);


//     }
// }
// console.log("sum of all odd numbers are "+ sum);

// END OF THE Question No 29. //

//========================================================================================================================================//

// QUESTION NO 30. Write a program to take two integers M, and N and print the sum of numbers in the range M to N.(example: Output should be 27 as the sum of numbers (2+3+4+5+6+7=27))//

// let bhagat = require('readline-sync')
// let N = bhagat.questionInt('Enter the value: ')
// let sum = 0;
// for (let M = 2; M <= N; M++){
//     sum+= M
//     console.log(M);

// }
// console.log(`sum of all number:${sum}`);

// END OF THE QUESTION NO 30.//

//=================================================================================================================//

// QUESTION NO 31.Write a program to calculate the sum of the following series where N is input from the user. 1 + 1/2 + 1/3 + 1/4 + 1/5 +…………1/N. //

// let bhagat = require('readline-sync')
// let N = bhagat.questionInt('Enter the value: ')
// let sum = 0;
// for (let i=1; i<=N ; i++){
//     sum+=1/i
//     console.log(1/i);
// }
// console.log("sum of all odd numbers are "+ sum);

// END OF THE QUESTION NO 31.//

//=================================================================================================================//

// QUESTION NO 32. Write a program to take a number from the user and print the number of digits in the given number. (can you do it without loop O(1) )//

// let bhagat = require('readline-sync')
// let N = bhagat.questionInt('Enter the value: ')
// let count = N.toString().length;  // Counting the length of the input. //
// console.log(count);

// END OF THE QUESTION NO 32.//

//=================================================================================================================//

// QUESTION NO 33. Write a program to take a number from the user and print the sum of digits in the given number.//

// let bhagat = require('readline-sync')
// let N = bhagat.questionInt('Enter the value: ')
// let sum = 0;
// while(N>0){
//     sum+=N%10;
//     N = Math.floor(N/10);
// }
// console.log(sum); // output will be the sum of the digits.//

// END OF THE QUESTION NO 33.//

//=================================================================================================================//

// QUESTION NO 34. Write a program that takes a number from the user and prints the number that is formed by reversing the digits of the number.(loop question) //

// let om = require('readline-sync')
// let N = om.questionInt('Enter the value: ')
// let a;
// while (N>0) {
//     a = N%10
//     N = Math.floor(N/10)
//     console.log(a);

// }

// END OF THE QUESTION NO 35. //

// ==========================================================================================================================//

// QUESTION NO 36. Write a program to check if a number is a special type of number called a 'prime number'. A prime number is a number that is only divisible by 1 and itself, and it doesn't have any other factors. //

// let bhagat = require('readline-sync')
// let N = bhagat.questionInt('Enter the value: ')
// let count = 0;
// for (let i=1; i<=N; i++){
//     if (N%i == 0){
//         count++;
//     }
// }
// if (count == 2){
//     console.log('yes this is Prime number');
// }
// else{
//     console.log('Not a prime number');
// }

// END OF THE QUESTION NO 36. //

// ==========================================================================================================================//

// QUESTION NO 37.  takes the number 6 as input. It then calculates the factors of 6, which are 1, 2, and 3. The sum of these factors (1 + 2 + 3) is equal to 6, so 6 is a perfect number.//

// let bhagat = require('readline-sync')
// let  N = bhagat.questionInt('Enter the value: ')
// let sum=0;

// for (let i=1; i< N; i++){
//     if (N%i==0){
//         sum+=i
//     }
// }
// if (sum == N){
//     console.log('yes');

// }else{
//     console.log('No');

// }

// END OF THE QUESTION NO 37. //

// ==========================================================================================================================//

// QUESTION NO 38. Write a program to print all the numbers from the given array using a loop. L = {23, 45, 32, 25, 46,33, 71, 90}//

// let  arr = [23, 45, 32, 25, 46,33, 71, 90]

// for (let i= 0; i<arr.length; i++){

//     console.log(arr[i]);
// }

// END OF THE QUESTION NO 38.//

//=============================================================================================================================//

// QUESTION NO 39. Write a program to create an array of natural numbers till 20 and print it.

// let arr = []
// for (let i=1; i<=20; i++){
//     arr.push(i)
// }
// console.log(arr);

// END OF THE QUESTION NO 39.//

//=============================================================================================================================//

// QUESTION NO 40. Write a program to reverse the array and print the reversed array. (arr= [23, 45, 32, 25, 46, 33, 71, 90])//

// let arr= [23, 45, 32, 25, 46, 33, 71, 90]
// console.log(arr.reverse());

// // second example.
// arr.reverse()
// console.log(arr);

// END OF THE QUESTION NO 40.//

//=============================================================================================================================//

// QUESTION NO 41.Write a program to take size of array, array and target as input from the user and check whether the target exists in this array or not.//
/*Input:
7
1 2 3 4 5 6 7
3
Output:
Yes
*/

// let bhagat =require('readline-sync')
// let P = bhagat.questionInt('Enter the value: ')

// let arr = [1, 2, 3, 4, 5, 6, 7]
// let found = false;
// for (let i=0; i<arr.length; i++){
//     if (arr[i]==P) {
//         console.log('yes');
//         found = true;
//         break
//     }

// }
// if (!found) {
//     console.log('No');

// }

// SECOND EXAMPLE //

// let bhagat = require('readline-sync');
// let P = bhagat.questionInt('Enter the value: ');

// let arr = [1, 2, 3, 4, 5, 6, 7];

// let found = false;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == P) {
//         console.log('Yes');
//         found = true;
//         break;
//     }
// }

// // if number not maching so print,
// if (!found) {
//     console.log('No');
// }

// END OF THE QUESTION NO 41. OTP function //



// END OF THE QUESTION NO 42.//
