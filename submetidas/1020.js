var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let dias = Number(lines.shift());

let anos = Math.trunc(dias / 365);
dias = dias - (anos * 365);

let meses = Math.trunc(dias / 30);
dias = dias - (meses * 30);

console.log(anos + ` ano(s)`);
console.log(meses + ` mes(es)`);
console.log(dias + ` dia(s)`);