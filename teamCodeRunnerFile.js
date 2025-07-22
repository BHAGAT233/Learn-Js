// let input = require('readline-sync')
// function countVowels(str) {
//     let count = 0;
//     const vowels = "aeiouAEIOU";
//     for (let i = 0; i < str.length; i++) {
//         if (vowels.includes(str[i])) {
//             count++;
//         }
//     }
//     return count;els(str) {
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
// }

// let text = input.question('Enter a string: ');
// console.log(`Number of vowels: ${countVowels(text)}`);

//----------------------------------------------------------------------------//


// let arr = [[1,2,3,[[2,[20, [50, [45, [74, [54]]]]]],2]]];
// console.log(arr.flat(Infinity));


//---------------------------------------------------------------------------------------//

// let student = {
//     name: "Bantu",
//     age: 19,
//     course: "MERN Stack"
// };
// student.city = "Bastar";
// student.age = 20;
// student.name = 'bhagat'

// for (let i in student) {
//     console.log(`${i}: ${student[i]}`);
// }


//------------------------------------------------------------------------------//

// let N = input.question('Enter the string: ')
// let b = []
// for(let i = N.length - 1; i >= 0; i--){
//      b.push(N[i])
// }
// console.log(b);

//------------------------------------------------------------//

// let a = 10, b = 20, c = 11;
// if (a++ > 0 || b-- > 0 && --c == 10) {
//   console.log("Condition is true.");
// } else {
//   console.log("Condition is false.");
// }
// console.log(a, b, c);

//--------------------------------------------------------------------//

// let a = [1,2,3,4,5];
// let b = [3,6,8,9,5]

// function dublicat(a, b){
//     let c = a.concat(b)
// let d = [];
// for (let i = 0; i < c.length; i++) {
//     for (let j = i + 1; j < c.length; j++) {
//         if (c[i] === c[j]) {
//             if(!d.includes(c[j])){
//                 d.push(c[j])
//             }
//         }
//     }

// }
//     return d
// }
// console.log(dublicat(a, b));

//--------------------------------------------------------------------------------//

// let a = [1, 2, 3,];
// let b = [3, 2, 1]

// let c = a.concat(b)
// let d = [];
// for (let i = 0; i < c.length; i++) {
//     for (let j = i + 1; j < c.length; j++) {
//         if (c[i] === c[j]) {
//             if(!d.includes(c[j])){
//                 d.push(c[j])
//             }
//         }
//     }

// }
// console.log(d);

//-------------------------------------------------------------------//

// let a = 153;
//   let c = a;
//    let b = a.toString().length;
//    let r = 0;
//    let s = 0 ;
//    while(a!= 0){
//     r = a%10
//     s += r**b
//     a = Math.floor(a/10);
//    }
//    if(s == c){
//     console.log('yes');

//    }
//    else{
//     console.log('no');

//    }

//---------------------------------------------------------------------------------//

// let arr = [1, 2, 3, 4, 5]
// let newarr3 = arr.reduce((h1, h2) => {
//     return h1 + h2;
// })
// let b = []
// for (let i = 0; i < arr.length; i++) {
//     b.push(newarr3 - arr[i])
// }
// console.log(b);

//----------------------------------------------------------------------------------//

// let a = 12321;
// let b = a;
// let palindrome = 0
// while(a!=0){
//     r = a%10;
//     palindrome =  palindrome*10+r;
//     a = Math.floor(a/10)
// }
// b == palindrome ? console.log('Yes'): console.log('No');

//-----------------------------------------------------------------------//

// chack array sorted or Not if array soted so print yes else print No :

// let arr = [10, 20, 30, 40, 50];
// // convert in string
// let a = arr.toString();

// let b = arr.sort((x, y)=> x-y);
// // sorted array to convert in string
// b = b.toString()
// // console.log(b);
// // compair a and b, array sorted or not 
// a === b ? console.log('Yes'): console.log('No');

// second example of sorted Array, if array soted so print yes else print No //

// let arr = [1, 2, 3, 4, 5, 6, 7];
// let a = true;
// for (let i = 0; i < arr.length - 1; i++) {

//     console.log((arr[i] > arr[i + 1]), arr[i], arr[i+1]);

//     if (arr[i] > arr[i + 1]) {
//         a = false;
//         break
//     }
// }
// a ? console.log('yes') : console.log('no');

//------------------------------------------------------------------------------------//

// without Method remove index of Array  = > 

// let arr = [10, 20, 30, 40, 50, 6];

// let g = 3;

// for(let i = 0; i < arr.length; i++){
//     if(arr[i] == arr[g]){
//         for(let j = g; j < arr.length; j++){
//             arr[j] = arr[j+1];
//         }        
//     }
// }

// arr.length = arr.length - 1;
// console.log(arr);

// -------------------------------------------------------------------------------------------------------//

// yeh count kartha hain ki Even divisors and Odd divisors //

// let n = 7
// let odd = 0;
// let even = 0;
// for(let i = 1; i <= n; i++) {
//     if(n % i === 0) { 
//         if(i % 2 === 0) {
//             even++;
//         } else {
//             odd++;
//         }
//     }
// }

// console.log("Odd divisors:", odd);
// console.log("Even divisors:", even);

//-------------------------------------------------------------------------------------------------------------//


// let a = [1,1, 2, 3,3, 4, 5];
// function dublicat(a) {
//     let d = [];
//     for (let i = 0; i < a.length; i++) {
//         for (let j = i + 1; j < a.length; j++) {
//             if (a[i] === a[j]) {
//                 if (!d.includes(a[j])) {
//                     d.push(a[j])
//                 }
//             }
//         }

//     }
//     return d
// }
// console.log(dublicat(a));



// let arr = [1, 2, 3, 4, 5, 6]

// let newarr = arr.filter((n)=>{
//     return n/2;
// })
// console.log(arr);
// console.log(newarr);

// let arr1 = arr.filter((n)=>{
//     return n/2
// })
// console.log(arr);
// console.log(arr1);

//----------------------------------------------------------------------------------------------------------// 

// Har number ko setTimeout ke andar alag delay deke chalana hoga. Agar total 3 second (3000ms) ka time hai, aur 5 numbers print karne hain, to:

// let total = 10;
// let totalTime = 5000;
// let delay = totalTime / total;

// for (let i = 1; i <= total; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, i * delay); // i*delay se har number time ke sath chalega
// }

//--------------------------------------------------------------------------------------------------------//

// yeh code 2 secound ke bad code run hoge;

// setTimeout(() => {
//   for(let i = 0; i< 5 ; i++){
//     console.log(i);
    
//   }
// }, 2000);



