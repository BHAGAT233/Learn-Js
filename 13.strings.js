// let name = 'bantu';
// console.log(name.length); // 5
// console.log(name[0]); // b
// console.log(name[1]); // a

// let friend = 'bantu';
// console.log(friend); // 5

// Template literals //

// let boy1 = 'bantu';
// let boy2 = 'chintu';

// frinds i

// reverse Array //

// const array = [6, 5, 4 ,1 , 7 , 8 , 9 ];
// console.log(array.sort());

// const bantu = [1, 2, 3, 4, 5];

// bantu.reverse();
// console.log(bantu);
// const newarr = [...bantu].concat().reverse();
// console.log(bantu);
// console.log(newarr);

// const number = [1, 2, 3, 4]
// number .push(5, 6, 7, 8, 9);
// console.log(number);

// end the of reverse quistion //

// let a = [23, 45, 71, 90]

// for (let i = a.length-1; i>= 0; i--){
//     console.log(a[i]);

// }

// end reverse the number //

// let array = [23, 45, 71, 90]

// // array.reverse();

// console.log(array.reverse());

// break statement //

// for (let i = 1; i <= 10; i++) {
//     if (i === 5) {
//         break; // Exit the loop when i is 5
//     }
//     console.log(i);
// }
// Output: 1, 2, 3, 4

// end break statement //

// What will be the output for the following code?//

// let n = 7;
// let arr = [0,1,2,3,4,6,9,9];
// let i = 0;
// while(i<n){
// 	if(arr[i]%3 == 0){
//   	console.log(i);
//     break;

//   }
// }

// end the output for the following code //

// ***********************JavaScript Strings Related Topics  => ****************** ;

// string with length 

// let string = 'bhagat';
// console.log(string[0]);


// String Methods  //

// 1. trime() => 

// let msg = "   Hello Bantu!   ";
// let cleanMsg = msg.trim();
// console.log(cleanMsg);

// Question 2 ;
// let username = '   Navgurukul    '
// console.log(username);
// let a = username.trim()
// console.log(a);

// Question 3 . trimStart();
// let name1 ='   Dantewda       '
// console.log(name1);
// let a1 = name1.trimStart();
// console.log(a1);

// Question 4.  trimEnd();
// let name2 = '  Apple      '
// console.log(name2);
// name2 = name2.trimEnd();
// console.log(name2);

// ------------------------------------------------------------------------//

//  slice(start, end) => slice() method kisi string se ek tukda (part) nikanale ke liye use hota hain ;

// // Question 1 
// let name = "Navgurukul";
// let part = name.slice(0, 3);
// console.log(part);// Output: Nav

// Question 2 
// let word = "JavaScript";
// let part2 = word.slice(4, 10);
// console.log(part2);// Output: Script

// // Question 3
// let arr = [10, 20, 2, 30, 4, 60];
// let arr1 = arr.slice(1,3)
// console.log(arr1); // Output:[20, 2]

//----------------------------------------------------------------------------------//

//  indexOf("char") => indexOf() method kisi string me diye gaye character (ya word) ka first index (place) btata hain;

// Question 1
// let word = "Bastar";
// let position = word.indexOf("s");
// console.log(position); // Output: 2

// Output 2 
// let numarry = [10, 20, 3, 5, 50, 6, 8, 5]
// console.log(numarry);
// let newarr = numarry.indexOf(5)
// console.log(newarr);

//-------------------------------------------------------------------------------//

// includes("text") => includes() method चेक करता है कि कोई word, letter या text string के अंदर है या नहीं; 

// //Question 1  includes() method true or false me value retunr karta hain
// let sentence = "I love coding";
// let result = sentence.includes('');
// console.log(result);

// Question 2 
// let num = [10, 1, 5, 40, 6, 3];
// console.log(num);
// let newnum = num.includes(100)
// console.log(newnum); // Output: False 

// -----------------------------------------------------------------------------------------------------//


// replace("a", "b") => replace() method kisi string में एक character ya word ko dusare se badalne (replace) ke liye use hota hain ;

//Question 1
// let name = "Bantu";
// let newName = name.replace("Bantu", "bhagat");
// console.log(newName);

// Question 2 This method replaces the character or in the word, but does not replace the Original Array.;
// let drime = 'focus lemp'
// let newdrim = drime.replace('lemp', 'ligth')
// console.log(newdrim);

// // Question 3 => ;
// let name1  = 'santu'
// let newname = name1.replace('s', 'b')
// console.log(newname);


// split(" ") = > split() method ek string ko parts (tukado) mein bat deta hain — aur yeh parts ek array me milate hain।;

// Question 1
// let sentence = "I love coding";
// let words = sentence.split(' ');
// console.log(words);

// // Question 2  = > ;
// let data = "apple,banana,mango";
// let fruits = data.split(",");
// console.log(fruits);

// // Question 3  = > ;
// let name = "Bantu";
// let letters = name.split('');
// console.log(letters);

//------------------------------------------------------------------------------------------------//

// repeat(n) = > repeat(n) method kisi string ko n bar repeat (दोहराने) ke liye use hota hain ;
// isamen N ka matalab hai: kitanee baar string ko raipaiat karana hai.;

// Question 1 ;
// let word = "Hi ";
// let repeated = word.repeat(3);
// console.log(repeated);

//question 2 ;
// let word = "*";
// let repeated = word.repeat(5);
// console.log(repeated);

// ---------------------------------------------------------------------------------------------//

// *****************************Level 3: Practice & Logic Building*************************** ;

// Question 1. String ko Reverse karna ;
// let str = "lukurugvaN";
// let reversed = str.split("").reverse().join("");
// console.log(reversed);

// Second Example = > reverse String with loop ;
// let a = 'bhagat';
// for(let i = a.length-1; i >=0; i--) {
//     console.log(a[i]);
// }


// Question 2 . Palindrome Check = > aagar koi string ulta karne par bhi vahi rahe, to use palindrome kahte hain।

// let Palindrome = 'level';
// let a = Palindrome.split('').reverse().join('')
// console.log(a);

// Palindrome == a ? console.log('yes'): console.log('no');

// second exaple of Palindrome Check number ;
// let a = 121;
// let p = 0;
// while (a!=0) {
//    let  r = a%10;
//    p = p *10+r;
//    a = Math.floor(a/10);
// }
// console.log(p);


// Question 3 







