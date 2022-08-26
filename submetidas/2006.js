var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');
  
const pegarValores = (line) => line.split(" ").map(a => Number(a));

let cha = Number(lines.shift());

let [a, b, c, d, e] = pegarValores(lines.shift());

let contador = 0;

if (a == cha) {
    contador++;
}
if (b == cha) {
    contador++;
}
if (c == cha) {
    contador++;
}
if (d == cha) {
    contador++;
}
if (e == cha) {
    contador++;
}

console.log(contador);