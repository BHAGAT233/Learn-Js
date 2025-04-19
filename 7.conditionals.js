let input = require('readline-sync')
let a = input.questionInt('Enter your age: ')
if(a>0){
    console.log('This is a valid age')
}
else if(a<9){
    console.log('You are kid and you cannot even think of driving');
}
else if (a<18 && a>=9){
console.log('You are a kid and you can think of afer 18')
}
else{
    console.log('You can now drive as you are above 18');
}
console.log('Done');
