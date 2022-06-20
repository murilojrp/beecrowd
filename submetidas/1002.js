var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let pi = 3.14159;
let raio = parseFloat(lines.shift());

let area = pi * (raio * raio);

console.log(`A=${area.toFixed(4)}`);
    