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

// let N = om.questionInt('Enter the value: ')
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

// question No 55. Write a program to reverse the array and print the reversed array.//


