var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let raio = Number(lines.shift());

let volume = (4 / 3) * 3.14159 * (raio * raio * raio);

console.log(`VOLUME = ${volume.toFixed(3)}`);
