// 1. Spread & Rest Operators (…)

// const numbers = [1, 2, 3];
// const more = [...numbers, 4, 5];
// console.log(more); // [1,2,3,4,5]


// 2.  Rest Operators (…);

// function sum(...nums){
//   return nums.reduce((a,b)=>a+b);
// }
// console.log(sum(1,2,3,4)); // 10

// second exmple with Array;

// let a = [10, 20, 30]
// function sum(...a) {
//   return a.reduce((a, b) => a + b)
// }
// console.log(sum(10,20,30)); // 60

// let a = [10,20,30,40]

// a = a.reduce((x,y)=>x+y)
// console.log(a);

//--------------------------------------------------------------------//


// const autoRickshaw = {
//   color: "Yellow-Green",
//   capacity: 3,
//   farePerKm: 15,
//   driverName: "Raju Bhai",
//   start: function(){ console.log("Auto start ho gaya"); },
//   stop: function(){ console.log("Auto band ho gaya"); },
//   calculateFare: function(distance){
//     return distance * this.farePerKm;
//   }
// }
// let bill = autoRickshaw.calculateFare(10); 
// console.log(bill); // 150

// console.log(autoRickshaw);

// for (let key in autoRickshaw) {
//   console.log(key, ":", autoRickshaw[key]);
// }

//------------------------------------------------------------------------------//

// let person = {
//   name: "Bantu",
//   age: 19,
//   address: {
//     city: "Bastar",
//     state: "Chhattisgarh",
//     pincode: 494001
//   }
// };
// console.log(person["address"]["city"]); // "Bastar"
// for (let key in person) {
//   console.log(key, ":", person[key]);
// }
// console.log(person.address); // pura address object print


//---------------------------------------------------------------------------------//

let NavGrukulData = [
  { name: 'bantu', age: 19, city: 'bastar' },
  { name: 'dhurwa', age: 20, city: 'bijapur' },
  { name: 'sam', age: 18, city: 'dheli' },
];

// console.log(NavGrukulData);

// console.log(NavGrukulData[0]);
// Pehla student object: {name: "bantu", age: 19, city: "bastar"}

// console.log(NavGrukulData[1]); 
// Dusra student object: {name: "dhurwa", age: 20, city: "bijapur"}

// console.log(NavGrukulData[0].name); // "bantu"
// console.log(NavGrukulData[1].city); // "bijapur"
// console.log(NavGrukulData[2].age);  // 18

// for (let i = 0; i < NavGrukulData.length; i++) {  // normal for loop
//   console.log(NavGrukulData[i].name);
// }

// for (let student of NavGrukulData) {  // for of loop
//   console.log(student.name, student.age);
// }

// NavGrukulData.forEach(student => {  // forEach loop It's will show all Data ;
//   console.log(`Name: ${student.name}, Age: ${student.age}, City: ${student.city}`);
// });

// let bastarWale = NavGrukulData.filter(s => s.city === "bastar");  // filter with print spacpic Data
// console.log(bastarWale);

// let samData = NavGrukulData.find(s => s.name === "sam"); // with find() method print spacpic Data 
// console.log(samData); 


//--------------------------------------------------------------------------------------------//

// with function practice Object question

// tumhara data
// let NGData = [
//   { name: 'bantu', age: 19, city: 'bastar' },
//   { name: 'dhurwa', age: 20, city: 'bijapur' },
//   { name: 'sam', age: 18, city: 'dheli' },
// ];

// // function jo har student ka intro print kare
// const printIntroCards = (students) => {
//   students.forEach(student => {
//     console.log(`--------------------`);
//     console.log(`Name: ${student.name}`);
//     console.log(`Age: ${student.age}`);
//     console.log(`City: ${student.city}`);
//     console.log(`--------------------\n`);
//   });
// };

// // function call karo
// printIntroCards(NGData);

//---------------------------------------------------------------------------------------------//

// destructuring in Object

// const person = {
//   name: "Bantu",
//   age: 19,
//   city: "Bastar"
// };

// const {city} = person;

// console.log(city);
