var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');
  
// const pegarValores = (line) => line.split(" ").map(a => Number(a));

let nota = lines.shift();

if (nota == 0) {
    console.log("E");
}
if (nota >= 1 && nota <= 35) {
    console.log("D");
}
if (nota >= 36 && nota <= 60) {
    console.log("C");
}
if (nota >= 61 && nota <= 85) {
    console.log("B");
}
if (nota >= 86 && nota <= 100) {
    console.log("A");
}