// let input = require('readline-sync');

// question No 1. Write a program to take value N from the user and print the following pattern based on the user input. //
// 1) N=5
// * 
// * * 
// * * * 
// * * * * 
// * * * * * 


// let N = 5;
// let star = '';0
// for (let i = 0; i < N; i++) {
//     star += '* ';
//     console.log(star);
// }

//End OF the question No.1 //

//--------------------------------------------------------------------------------------------------------------------//

// question No 2. first print two space and print 3 star //

//_ _***
//_ _***
//_ _***
//_ _***
//_ _***

// let N = 5;
// let star = '';
// for (let i = 0; i < N; i++) {
//     star = '';
//     for(let a=0; a<1; a++){
//         star+= '*'
//     }
//     for (let j = 0; j < 2; j++) {
//         star += '__ ';
//     }
//     for (let k = 0; k < 3; k++) {
//         star += '* ';
//     }
//     console.log(star);
// }

//End OF the question No.2 //

//--------------------------------------------------------------------------------------------------------------------//

// question No 3. pattern based question. //

// 2) N=5
//         * 
//       * * 
//     * * * 
//   * * * * 
// * * * * *

// let om = require('readline-sync')
// let N = om.questionInt('Enter the value: ')
// let star = '';

// for(let i=1; i<=N; i++){
//     star = '';

//     for(let j=1; j<=N-i; j++){
//         star+= ' ';
//     }
//     for(let k = 1; k<=i; k++){
//         star+= '*';
//     }
//     console.log(star);

// }

//End OF the question No.3 //

//--------------------------------------------------------------------------------------------------------------------//

// question No 4. pattern based question. //

// * * * *
// * * *
// * *
// *


// let N = 3;

// for (let i = N; i >= 1; i--) {  
//     let star = '';
//     for (let j = 1; j <= i; j++) {
//         star += '* ';
//     }
//     console.log(star);
// }


//End OF the question No.4 //

//--------------------------------------------------------------------------------------------------------------------//

// question No 5. pattern based question. //

// 3) N=5
// * * * * *  
// * * * *  
// * * *  
// * *  
// * 

// let N = input.questionInt('Enter the value: ')
// let star = ''
// for(let i=5; i>=1; i--){
//     star = '';

//     for(let j=1; j<=i; j++){
//         star += ' *';
//     }
//     console.log(star);

// }

//End OF the question No.5 //

// -------------------------------------------------------------------------------------------------------------------//

// question No 6. pattern based question. //

// 4) N=4
// 1
// 2 3
// 4 5 6
// 7 5 9 10

// let input = require('prompt-sync')();
// let N = Number(input('enter the Number: '))
// let a = 1;

// for(i = 1; i <= N; i++){

//     let star = ""

//     for(j = 1; j <= i; j++){

//         star += a
//         a++
//     }

//     console.log(star);

// }

//End OF the question No.6 //

// -------------------------------------------------------------------------------------------------------------------//

// question No 7. pattern based question. //

// 5) N=4
// 0 
// 2 4 
// 4 8 8 
// 8 16 16 16

// let input = require('readline-sync')
// let N = input.questionInt('Enter the value N: ')
// let a = 0;
// for (i = 1; i <= N; i++) {
//     let star = ""
//     for (j = 1; j <= i; j++) {

//         star += a * 2
//         a++
//     }
//     console.log(star);
// }

//End OF the question No.7 //

// -------------------------------------------------------------------------------------------------------------------//

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

//----------------------------------------------------------------------------------------//

// print the pattern in the loop //

// let input = require('readline-sync');
// let N = input.questionInt('Enter the number: ');
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

//-------------------------------------------------------------------------------//

// problem No. 3 //
// Hollow Square Pattern...//

// let N = input.questionInt('Entet the Number: ');
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

//--------------------------------------------------------------------------------------//

// problem No. 4 ................//

//butterfly Pattern...//a

// let N = input.questionInt('Enter the Number: ');
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

//-------------------------------------------------------------------------------------//

// problem No. 5.  //
// Diomand Pattern...//

// let input = require('readline-sync');
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

// End of the question No 5

//--------------------------------------------------------------------------------------//

// problem No. 5.  //
// Hollow Diomand Pattern...//

// let input = require('readline-sync');
// let N = input.questionInt('Enter the value: ')
// let a = 1;
// for (let i = 1; i <= N; i++) {
//     let star = ''
//     // let space = ''

//     for (let j = 1; j <= N - i; j++) {
//         star += ' '
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
//     console.log( star);
// }
// a -= 4;
// for (let i = 1; i <= N; i++) {
//     let star = ''
//     // let space = ''

//     for (let j = 1; j <= i; j++) {
//         star += ' '
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
//     console.log( star);

// }

// End of the question No. 5. //

//--------------------------------------------------------------------------------------//

// Hollow Pyramid Pattern 

// let input = require('readline-sync');
// let N = input.questionInt('Enter the value: ')
// let a = 1;
// for (let i = 1; i <= N; i++) {
//     let star = ''
//     // let space = ''

//     for (let j = 1; j <= N - i; j++) {
//         star += ' '
//     }

//     for (let k = 1; k <= a; k++) {
//         if(k == 1 || k == a || i == N){
//                     star += '*'
//         }
//           else{
//               star += ' '
//           }

//     }
//     a += 2;
//     console.log( star);
// }