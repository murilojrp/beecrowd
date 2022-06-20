var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));





let [c1, q1, v1] = pegarValores(lines.shift());
let [c2, q2, v2] = pegarValores(lines.shift());

let total = (q1 * v1) + (q2 * v2);

console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`);