// Date ko format karna

// let date = new Date();
// console.log(date.toDateString());   // "Mon Jun 16 2025"
// console.log(date.toTimeString());   // "12:30:45 GMT+0530 (IST)"
// console.log(date.toLocaleDateString()); // "6/16/2025"
// console.log(date.toLocaleTimeString()); // "12:30:45 PM"


// # new Date() banana = > new Date() JavaScript me ek built-in constructor hain jo date aur time se judi jankary ko handle karta hain ;

// let today = new Date();
// console.log(today);

//-----------------------------------------------------------------------//

//  Current Date/Time Print = >

// Only for corrent Date = > ;

// let timeNow = new Date();
// console.log("Current Time:", timeNow.toLocaleTimeString()); // Output: Current Time: 11:15:17 AM

// Only for corrent time = > : 

// let timeNow = new Date();
// console.log("Current Time:", timeNow.toLocaleTimeString()); // Output: Current Time: 11:16:31 AM ;

// -------------------------------------------------------------------------------------------------------/

// Creating a specific date/time  = > JavaScript mein new Date() ke aandar manually values dekar aap kohi bhi specific date and  time bana sakte ho;

// Example 

// let date1 = new Date("2025-08-15");  // YYYY-MM-DD
// console.log(date1); // Output: 2025-08-15T00:00:00.000Z

// ------------------------------------------------------------------------------------------------------------//
// console.log(new Date().getHours());  // e.g., 14

// console.log(new Date().getMilliseconds());  // e.g., 523


//------------------------------------------------------------------------------------------------------//

// setFullYear(), setMonth() = > setFullYear(), setMonth(), methods Se kisi Date object ki value ko badalne ke liye use hote hain;।

// setFullYear(year) = > year change karne ke liye ;

// let d = new Date();
// d.setFullYear(2030);
// console.log(d); // Output: 2030-06-17T06:32:13.119Z ;


// setMonth(month) = > month change karne ke liye ;

// let a = new Date();
// a.setMonth(11);  // December (0 = January)
// console.log(a); // Output: 2025-12-17T06:34:45.947Z 


// setDate(day) = > Date change karne ke liye ;

// let c = new Date();
// c.setDate(25);
// console.log(c); // Output: 2025-06-01T06:38:21.113Z ;

// Ek sat sabhi ko update karna ;

// let d = new Date();
// d.setFullYear(2024);
// d.setMonth(0);         // January
// d.setDate(1);          // 1st
// d.setHours(10);
// d.setMinutes(30);
// d.setSeconds(0);

// console.log("Updated Date:", d); // Output: Updated Date: 2024-01-01T05:00:00.854Z ;

//------------------------------------------------------------------------------------------------------//

/*toDateString() और toLocaleString() – For Date Formatting ; 
yeh dono methods JavaScript me Date object ko acche, readable format main badalne ke kiye use hote hain */

// toDateString() = > Date ko formstting karne ke liye Readable form me ;

// example 

// let now = new Date();
// console.log(now.toDateString()); // Output: Tue Jun 17 2025 ;

// let now = new Date();
// console.log(now.toLocaleString());


//  toLocaleString()  = > Date + Time dono ko ek readable, local (Indian) format me deta hain।




// let a = ['()', '{}', '[]']

// for(let i = 0; i<a.length; i++){
//     console.log(a[i]);

// }


//  console.log(Math.floor((z-y)/x))

// let isPalindrome = function (x) {

//     let p = 0
//     while (x != 0) {
//        let  r = x % 10;
//         p = p * 10 + r;
//         x = Math.floor(x / 10)
//     }

//    return x == p ? console.log(true) : console.log(false);


// }
// console.log(isPalindrome(121));

// let l1 = [9,9,9,9,9,9,9]
// let l2 = [9,9,9,9]
// let a = Number(l1.reverse().join(''))
// let b = Number(l2.reverse().join(''))
// let c = a+b
// let d = c.toString().split('').map(Number).reverse();
// console.log(d);





// console.log(x);


// let addTwoNumbers = function (l1, l2) {

//     let a = l1.reverse().join('')
//     let b = l2.reverse().join('')
//     let c = Number(a)
//     let d = Number(b)
//     let e = c + d
//     return e.toString().split('').map(Number).reverse();

// };
// console.log(addTwoNumbers(l1, l2));

// let arr = [10, 2, 5, 8, 3, 4];

// let a = arr.splice(0,2)

// console.log(a,arr);



// let a = {};

// let b = Object.create(a);

// console.log(b.__proto__ === a);

// let a = "hello world"

// let b = a.split('')
// console.log(b);

// function reverseWords(str) {
//     return str.split(' ').map(word => word.split('').reverse().join('')).join(' ');
// }

// console.log(reverseWords("hello world"));


// function maxDifference(arr) {
//   let max = Math.max(...arr);
//   let min = Math.min(...arr);
//   return max - min;
// }

// console.log(maxDifference( [1, 2, 3, 4, 5])); // Output: 8


// function longestCommonPrefix(strs) {
//   if (strs.length === 0) return "";

//   // Start with the first word as prefix
//   let prefix = strs[0];

//   // Compare prefix with each word
//   for (let i = 1; i < strs.length; i++) {
//     while (strs[i].indexOf(prefix) !== 0) {
//       prefix = prefix.slice(0, -1); // Remove last character
//       if (prefix === "") return "";
//     }
//   }

//   return prefix;
// }
// console.log(longestCommonPrefix(["dog", "racecar", "car"]));
// console.log(longestCommonPrefix(["flower", "flow", "flight"])); 







// let a =  "PYTHON is FUN!"

// let b = a.split(' ').join('')
// let count = 0;
// for(let i = 0; i<b.length; i++){
//     if(b[i] == b[i].toLocaleUpperCase()){
//         if(b[i]== '!'){

//         }
//         else{
//             count++
//         }
//     }
// }
// console.log(count);


// console.log( Array.isArray({}));
// console.log([1, 2] + [3, 4]);
// const x = [1, 2, 3];

// x.length = 0;

// console.log(x);

// const a =1;
// a = 1
// console.log(a);


// console.log(0.1 + 0.2 === 0.3)
// console.log([..."hello"]);
// let a = 1; if (a = 0) { console.log("yes"); } else { console.log("no"); }
// console.log([] == ![]);

// 


// function digitalRoot(num) {
//     while (num >= 10) {
//         let sum = 0;
//         while (num > 0) {
//             sum += num % 10;    // Add last digit
//             num = Math.floor(num / 10); // Remove last digit
//         }
//         num = sum;
//     }
//     return num;
// }

// console.log(digitalRoot(123)); // Output: 6

