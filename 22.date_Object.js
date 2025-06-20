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
