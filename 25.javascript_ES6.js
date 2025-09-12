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

let person = {
  name: "Bantu",
  age: 19,
  address: {
    city: "Bastar",
    state: "Chhattisgarh",
    pincode: 494001
  }
};
// console.log(person["address"]["city"]); // "Bastar"
// for (let key in person) {
//   console.log(key, ":", person[key]);
// }
// console.log(person.address); // pura address object print


//---------------------------------------------------------------------------------//



