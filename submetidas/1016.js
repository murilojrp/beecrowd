var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let distancia = 2 * Number(lines.shift());

console.log(`${distancia} minutos`);
