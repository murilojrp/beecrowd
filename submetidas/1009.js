var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let nome = lines.shift();
let fixo = Number(lines.shift());
let vendas = Number(lines.shift());

let total = fixo + (vendas * 0.15);

console.log(`TOTAL = R$ ${total.toFixed(2)}`);