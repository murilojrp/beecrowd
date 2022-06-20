var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let number = Number(lines.shift());
let horas = Number(lines.shift());
let hora = Number(lines.shift());

salario = horas * hora;

console.log(`NUMBER = ${number}`);
console.log(`SALARY = U$ ${salario.toFixed(2)}`);
