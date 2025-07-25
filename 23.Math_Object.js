// -------------------------------- Math_Objects (Math_Objects Methods)--------------------------------------//

// Math.PI  = > π (पाई) ek mathmatic Constant hain, jiska value lagabaga 3.14159 hota hai ;

// Example : 

// console.log(Math.PI); // Output: 3.141592653589793

// Example question  

// let radius = 10;
// let area = Math.PI * radius * radius;

// console.log(`Circle ka Area hain: ${area}`);

//---------------------------------------------------------------------------------------//

// Math.round() = > Math.round() ek JavaScript method hai jo kisi number ko nearest integer (poora number) mein round kar deta hai.

//  Example = > 

// let num1 = Math.round(4.6);  // Output: 5
// let num2 = Math.round(4.3);  // Output: 4

// console.log(num1);  
// console.log(num2);

// Question NUmber 2 = >

// let marks = 89.7;
// let finalMarks = Math.round(marks);

// console.log("Final Marks: " + finalMarks);  // Output: Final Marks: 90

// Question No 3 = > 

// let a = 50/4
// console.log(a); // Output : 12.5
// console.log(Math.round(a)); // Output: 13 

// ------------------------------------------------------------------------------------//

// Math.floor() = > This method returns the value before the decimal point (Syntex: Math.floor(number) )

// question No 1 = > 

// let num1 = Math.floor(4.9);  // Output: 4
// let num2 = Math.floor(4.1);  // Output: 4
// let num3 = Math.floor(-4.1); // Output: -5
// console.log(num1);
// console.log(num2);
// console.log(num3);


// // Question 2 = > 
// let price = 99.99;
// let discountPrice = Math.floor(price);

// console.log("Discount ke baad price: ₹" + discountPrice);  // Output: ₹99

// Question No 3 

// let a = 50;
// let b = 3;
// console.log(a/b); // Output: 16.666666666666668
// console.log(Math.floor(a/b)); // Output: 16

//----------------------------------------------------------------------------------------//

//  Math.ceil() = > Math.ceil() ek JavaScript method hai jo kisi number ko upar wale sabse kareeb poore number (highest integer) mein round karta hai.
// SYntex : Math.ceil(number)

// Question No 1 = > 

// let num1 = Math.ceil(4.1);   // Output: 5
// let num2 = Math.ceil(4.9);   // Output: 5
// let num3 = Math.ceil(-4.1);  // Output: -4
// console.log(num1);
// console.log(num2);
// console.log(num3);

// Question No 2 = >

// let timeTaken = 4.2; // hours
// let billedHours = Math.ceil(timeTaken);

// console.log("Billed Hours: " + billedHours);  // Output: 5

// Question 3 = > ;

// let b = 50/3
// console.log(b); // Output: 16.666666666666668
// console.log(Math.ceil(b)); // 17

//-----------------------------------------------------------------------------------------------------------//

// Math.trunc() = > this method Remove decimal form decimal number ;
// Syntax: Math.trunc(10.5) = > 10 ;

// Question No 1 = > 

// let num1 = Math.trunc(4.9);   // Output: 4
// let num2 = Math.trunc(4.1);   // Output: 4
// let num3 = Math.trunc(-4.9);  // Output: -4

// console.log(num1);  
// console.log(num2);
// console.log(num3);

// Quetion No 2 = > ;

// let amount = 150.75;
// let onlyRupees = Math.trunc(amount);

// console.log("Rupees only: ₹" + onlyRupees);  // Output: ₹150

// Question No 3 = > ;

// let a = 50/3 ;
// console.log(a); // Output: 16.666666666666668

// console.log(Math.trunc(a)); // 16

// ------------------------------------------------------------------------------------//

// Math.random() = > Ye kabhi bhi exact 0 ya 1 nahi deta, sirf unke beech ka number deta hai — jaise: 0.234, 0.876, etc. ;
// Syntax : Math.random()   ;

// console.log(Math.random()); // Output: 0.3443426240431471 ;

// Question No 1 = >

// let randomValue = Math.random();
// console.log(randomValue);  // Output: e.g., 0.527393...

// Question No 2 = > ;

// let randomNum = Math.floor(Math.random() * 10) + 1;
// console.log("Random number (1-10): " + randomNum); // Output: It will give 1 to 10 between random number ;

// Question No 3  = > ;

// // Random dice roll (1 to 6) // It method use for make lodo game ;
// let dice = Math.floor(Math.random() * 6) +1;
// console.log(`🎲 Dice rolled: ${dice}`);  // It  will give 1 to 6 between random number ;

// -----------------------------------------------------------------------------------------------//

// 7. Math.min() = > Math.min() ek JavaScript method hai jo diye gaye numbers mein se sabse chhota (minimum) number return karta hai ;
// Syntax : Math.min(2, 6, 9, ...) = > Output: 2 ;

// Question No 1 = >

// let a = Math.min([10, 0, 50, 60, 8, 99, 40]) 
// console.log(a); // Output: NaN = > yeh method Array me work nahi karta hain aur value NaN me retunr karta hain

// Question 2 = > 

// let minnumber = Math.min(10, 8, 9, 8, 6, 6,670, 100, 30);
// console.log(minnumber); // Output: this method return minunber in numbers

// Question 3 = > ;

// let a = 50;
// let b = 9;
// let c = 60;
// let d = 99;
// let minnumber1 = Math.min(a, b, c, d);
// console.log(minnumber1); // Output: 9

// ----------------------------------------------------------------------------------------------//

// 8. Math.max() = > Math.max() ek JavaScript method hai jo diye gaye numbers mein se sabse bada (maximum) number return karta hai. ;
// Syntax: Math.max(2, 6, 9, ...) = > Output: 9 ;

// Question No 1 = >

// let a = [10, 20, 8, 99, 4, 88, 999]
// console.log(Math.max(a));// Output: NaN  = > this method doesn't work in array ;

// Question No. 2 = > 

// let a = 1000;
// let b = 60;
// let c = 99;
// let d = 199;
// let e = 3;
// let maxnumber = Math.max(a, b, c, d, e);
// console.log(maxnumber); // Output: 1000 ;

// Question No. 3  = > ;

// let maxnumber1 = Math.max(10, 20, 99, 70, 699,)
// console.log(maxnumber1); // Output: 699 ;

// ---------------------------------------------------------------------------------------------------//

// 9. Math.abs() = > This method converts positive values to positive and converts negative values to positive ;
// Syntax: Math.abs(-10) = > Output: 10 ;

// Question No 1 = > ;

// let num1 = Math.abs(-10);   // Output: 10
// let num2 = Math.abs(5);     // Output: 5

// console.log(num1);
// console.log(num2);

// Question No 2 = > ;

// let n = -50
// let a = Math.abs(n) // yah method nagative value ko positive me deta hain ;
// console.log(a); // Output: 50

// Question No. 3 = > ; 

// let x = 99 ;
// let y = Math.abs(x) // yeh method positive value ko positive me return karta hain ;
// console.log(y); // Output: 99

// --------------------------------------------------------------------------------------------------------//

// 10. Math.pow() = > Math.pow() ek JavaScript method hai jo kisi number ko power (exponent) mein badha deta hai — yaani "x raised to the power y" ka result deta hai.;
// Syntax: Math.pow(3^2) = > Output: 6 ;

// Question No. 1 = > ;

// let result1 = Math.pow(2, 3);  // 2^3 = 8
// let result2 = Math.pow(5, 2);  // 5^2 = 25
// console.log(result1);  // Output: 8  
// console.log(result2);  // Output: 25

// Question No 2 

// let a = Math.pow(5, 2)
// let b = Math.pow(2, 2)
// console.log(a,b);

// Question No 3 = >

// let a1 = Math.pow(2, 2)
// let a2 = Math.pow(2, 2)
// console.log(a1,a2);

//-------------------------------------------------------------------------------------------------------//

// 11. Math.sqrt() = > Math.sqrt() ek JavaScript method hai jo kisi number ka square root (वर्गमूल) return karta hai 
// Syntax: Math.sqrt(25) = > Output: 5  ;

// Question No. 1 = > ;

// let root1 = Math.sqrt(16);   // Output: 4
// let root2 = Math.sqrt(81);   // Output: 9
// let root3 = Math.sqrt(2);    // Output: 1.414...

// console.table([root1,root2,root3]);

// Question No. 2 = > ;

// let a = Math.sqrt(324)
// console.log(a); // Output: 18 ;

// let b = Math.sqrt(100)
// console.log(b);// Output: 10 

// Question No 3 = > ;

// let area = 49;
// let side = Math.sqrt(area);  // Square ka ek side

// console.log("Side of square: " + side);  // Output: 7

//------------------------------------------------------------------------------------------------------------------------//

// 12. Math.sign() => Math.sign() ek JavaScript method hai jo batata hai ki koi number positive hai, negative hai, ya zero. ;
// Syntax: Math.sign(5) // Output:1  // positive number hain to 1 return karega aur nagtive hoga to -1 return karega 

//Example Question No. 1 = > 

// console.log(Math.sign(10));     // Output: 1
// console.log(Math.sign(-5));     // Output: -1
// console.log(Math.sign(0));      // Output: 0
// console.log(Math.sign(-0));     // Output: -0
// console.log(Math.sign("hello")); // Output: NaN

// Question No. 2 = > Real-life Example;

// let temperature = -9;

// if (Math.sign(temperature) === -1) {
//   console.log("Bahut thand hai ❄️");
// } else {
//   console.log("Thik thak mausam hai 🌤️");
// }

// Question No. 3 = > ;

// let int = require('readline-sync');
// let n = int.questionInt('enter the value: ')
// let a = Math.sign(n)
// // console.log(a);
// let c = ''
// if (a === 1) {
//     c = 'aaj mosam thik hain'
// }
// else {
//     c = 'bhahut cold hain aaj'
// }
// console.log(c);

// practice Question = > ;

// console.log(Math.sign(-5)); // Output: -1;
// console.log(Math.sign('sam')); // Output: NaN

// ---------------------------------------------------------------------------------------------------------------------//

// 13. Math.cbrt(x) = > Math.cbrt() ek JavaScript method hai jo kisi number ka cube root (घनमूल) return karta hai.;
// Yaani: x ka aisa number jise 3 times multiply karne par original number mile.;
//  Cube root: Math.cbrt(27) ka matlab hota hai: konsa number × konsa number × konsa number = 27;
// Jawab: 3, kyunki 3 × 3 × 3 = 27 ;
// Syntax: Math.cbrt(8) // Output: ∛8 = 2 ;

//Exaple Question No. 1 => ;

// console.log(Math.cbrt(27));     // Output: 3
// console.log(Math.cbrt(64));     // Output: 4
// console.log(Math.cbrt(-8));     // Output: -2
// console.log(Math.cbrt(2));      // Output: 1.2599210498948732 

// Question No 2 = > Math.cbrt() method number ka cube root return kartha hain;

// console.log(Math.cbrt(27)); // (3 x 3 x 3 = 27) Output: 3
// console.log(Math.cbrt(64)); // (4 x 4 x 4 = 64) Output: 4
// console.log(Math.cbrt(125)); // ( 5x 5 x 5 = 27) Output: 5

// Question No. 3 = > print cube root number in for....loop ; 

// for (let i = 1; i <= 125; i++) {

//     if (Number.isInteger(Math.cbrt(i))) { // Number.isInteger() method chack kartha hain ki number Integer hain yeh nahi;
//         console.log(`${i}:is a perfect cube`);

//     }
//     i++
// }

//---------------------------------------------------------------------------------------------------------------------//

// 14. Math.log(x) => Math.log(x) ek JavaScript method hai jo kisi number x ka natural logarithm return karta hai.;
//  Syntax: Math.log(x)

// Example Question No. 1 => ;

// console.log(Math.log(1));     // Output: 0    (kyunki loge(1) = 0)
// console.log(Math.log(Math.E)); // Output: 1  (kyunki loge(e) = 1)
// console.log(Math.log(10));    // Output: ~2.302
// console.log(Math.log(0));     // Output: -Infinity
// console.log(Math.log(-5));    // Output: NaN

// Question No. 2 =>  	Natural logarithm ;

// let x = 1000;
// let logVal = Math.log(x);

// console.log(`loge(${x}) = ${logVal}`);

// Question No. 3 => universal input question;

// let int = require('readline-sync');
// let N = int.questionInt('Enter the value: ')

// let logarithm = Math.log(N)

// console.log(`loge(${N}) = ${logarithm}`);

//------------------------------------------------------------------------------------------------------------------//

// 15. Math.log10(x) => Math.log10(x) ek JavaScript method hai jo kisi number x ka log base 10 return karta hai.;
// Syntax: Math.log10(1) // Output: 0 ;

// Example Question No.1 = >  Agar x ≤ 0 hua toh result NaN ya -Infinity milta hai.;

// console.log(Math.log10(1));     // Output: 0       (kyunki log10(1) = 0)
// console.log(Math.log10(10));    // Output: 1       (kyunki log10(10) = 1)
// console.log(Math.log10(100));   // Output: 2       (kyunki log10(100) = 2)
// console.log(Math.log10(1000));  // Output: 3       (kyunki log10(1000) = 3)
// console.log(Math.log10(0));     // Output: -Infinity /
// console.log(Math.log10(-5));    // Output: NaN

// Question No. 2 => ;

// Kisi number me kitne digits hain (shortcut):
// let number = 1000;
// let digits = Math.floor(Math.log10(number)) + 1;

// console.log("Digits: " + digits);  // Output: 4

//--------------------------------------------------------------------------------------------------------------------//

// 16. Math.log2(x) => Math.log2(x) ek JavaScript method hai jo kisi number x ka log base 2 return karta hai. ;










