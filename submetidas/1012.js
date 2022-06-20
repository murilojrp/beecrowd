var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));

let [a, b, c] = pegarValores(lines.shift());

let t = (a * c) / 2;

let ci = 3.14159 * c * c;

let tr = ((a + b) / 2) * c;

let q = b * b;

let r = a * b;

console.log(`TRIANGULO: ${t.toFixed(3)}`);
console.log(`CIRCULO: ${ci.toFixed(3)}`);
console.log(`TRAPEZIO: ${tr.toFixed(3)}`);
console.log(`QUADRADO: ${q.toFixed(3)}`);
console.log(`RETANGULO: ${r.toFixed(3)}`);
