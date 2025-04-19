// problem No 1 //
let marks = {
    harry: 90,
    shubham: 9,
    lovish: 56,
    monika: 4,
}
for (let i =0; i<Object.keys(marks).length;i++ ){
    console.log('the marks of ' + Object.keys(marks)[i] + ' are ' + marks[Object.keys(marks)[i]]);
    
}
console.log('=====================');

// problem No 2 //

for (let key in marks){
    console.log('the marks of ' + key + ' are ' + marks[key]);
   
    // console.log('the marks of ' + Object.keys(marks)[i] + ' are ' + marks[Object.keys(marks)[i]]);
    
}
// end of problem No 2 //

// problem No 3 //
let input = require('readline-sync')
let cn = 43
let i 
while (i !== cn){
    console.log('try again');
    
    i = input.questionInt('Enter the number i: ')
}
console.log('you have entered the correct number');

// end of problem No 3 //

// problem No 4 //

// mean ka matlab hota hai average, jitne number hai usko jodana hai or utne number se divisition karna //
const mean = (a, b ,c ,d)=>{
    return (a+b+c+d)/4
}
console.log(mean(4, 5, 6, 7));

