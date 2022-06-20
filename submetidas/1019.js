var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let n = Number(lines.shift());

let h = Math.trunc(n / 3600);
n = n - (h * 3600);
let m = Math.trunc(n / 60);
n = n - (m * 60);

console.log(`${h}:${m}:${n}`);