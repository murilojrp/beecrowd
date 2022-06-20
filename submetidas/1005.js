var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let a = Number(lines.shift());
let b = Number(lines.shift());
let media = ((3.5 * a) + (7.5 * b)) / 11;

console.log(`MEDIA = ${media.toFixed(5)}`);
