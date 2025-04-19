let marks = [92, 82, 63, 84, false, 'Not present']
console.log(marks[0]);
console.log(marks[1]);
console.log(marks[2]);
console.log(marks[3]);
console.log(marks[4]);
console.log(marks[5]);
console.log(marks[6]); // will be undefined because index 6 does not exist.
console.log(`the length of marks is ${marks.length}`);
marks [6] = 89  // adding a new value to the array
marks [0] = 96  // changing the value of an array
console.log(marks);
console.log(typeof marks);
