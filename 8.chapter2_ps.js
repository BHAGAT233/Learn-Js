// Chapter2 PS
// Problem
let input = require('readline-sync')
let age= input.questionInt('Whats is your age?');
if(age>10 && age<20){
    console.log('Youe age lies between 10 and 20'); 
}
else{
    console.log('Youe age doesdnt lies between 10 and 20');
}