var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));

let [a, b, c] = pegarValores(lines.shift());

let maiorab = (a + b + Math.abs(a - b)) / 2;

let maiorabc = (maiorab + c + Math.abs(maiorab - c)) / 2;

console.log(`${maiorabc} eh o maior`);
