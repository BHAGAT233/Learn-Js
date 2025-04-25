//1. Array, .map() method, har item par kuch बदलाव karta hain और new array बनाता hain,Example: kisi sankya ko dogana karna //

// let arr = [45, 23, 21]
// let a = arr.map((value, index, Array)=>{
//     // console.log(value, index, Array);
//     return value +index;
// })
// console.log(a);

// End Of the question No. 1// 

//2. Array, .filter() method, kuch items ko छाँटकर new array बनाता haini,Example: 10 se greater_than Number print karna// 

// let arr1 = [45, 23, 21, 0, 3, 5]
// let a1= arr1.filter((b)=>{
//     return b<10;
// })
// console.log(a1,arr1);

// End of the Question No. 2//

//3. Array, .reduce() method, सभी values ko मिलाकर एक single value में बदलता है, Example:Total total nikalna//

// let arr2 = [1, 2, 3, 5, 2, 1]

// let newarr3= arr2.reduce((h1, h2)=>{
//     return h1+h2;
// })
// console.log(newarr3);

//  second example of reduce method //

// let arr2 = [1, 2, 3, 5, 2, 1]
// const reduce_func = (h1, h2) => {
//     return h1+h2;
// }
// let newarr3 = arr2.reduce(reduce_func);
// console.log(newarr3);

// End of the Question No. 3//


//practice example //

// const a = [
//     {name:'bhagat', marks: 95},
//     {name:'dhurwa', marks: 84},
//     {name:'bantu', marks: 74},
// ];

// let c = a.map((b)=>{
// //  let c = console.log(b);
//  return {
//     nikename : b.name,
//     marks : (b.marks*2/100)
//  }    
// })  
// console.log(c);


