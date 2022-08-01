var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

// const pegarValores = (line) => line.split(" ").map(a => Number(a));

let x = Number(lines.shift());
let y = Number(lines.shift());
let soma = 0;
let i = 0;

  if (x > y) {
    i = y + 1;
    for (i; i < x; i++){
      if (i % 2 != 0) {
        soma = soma + i;
        }
    }
  }
  
  if (x < y) {
    i = x + 1;
    for (i; i < y; i++) {
      if (i % 2 != 0) {
        soma = soma + i;
      }
    }
  }

  if (x == y) {
    soma = 0;  
  }

console.log(soma);