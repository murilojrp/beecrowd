var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

// const pegarValores = (line) => line.split(" ").map(a => Number(a));

let testes = Number(lines.shift());
let intervalo = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let dentro = 0;
let fora = 0;


for (let i = 0; i < testes; i++) {
  let numero = Number(lines.shift());
  intervalo.includes(numero) ? dentro++ : fora++;
}

console.log(`${dentro} in`);
console.log(`${fora} out`);