var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let a = Number(lines.shift());
let b = Number(lines.shift());
let c = Number(lines.shift());
let media = ((2 * a) + (3 * b) + (5 * c)) / 10;

console.log(`MEDIA = ${media.toFixed(1)}`);
