0, 20, 30]
function sum(...a) {
  return a.reduce((a, b) => a + b)
}
console.log(sum(10,20,30)); // 60