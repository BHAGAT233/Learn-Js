let N = input.questionInt('Enter the value: ')
let a = 1;
for (let i = 1; i <= N; i++) {
    let star = ''
    let space = ''
    for (let j = 1; j <= N - i; j++) {
        space += ' '
    }
    for (let k = 1; k <= a; k++) {
        star += '*'
    }
    a += 2;
    console.log(space + star);
}
a -= 4;
for (let i = 1; i <= N; i++) {
    let star = ''
    let space = ''

    for (let j = 1; j <= i; j++) {
        space += ' '
    }
    for (let k = 1; k <= a; k++) {
        star += '*'
    }
    a -= 2;
    console.log(space + star);

}