var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');
  
// const pegarValores = (line) => line.split(" ").map(a => Number(a));
let n = 0;
let contador = 0;
let soma = 0;

for (let index = 0; index < 999999; index++) {
    n = Number(lines.shift());
    if (n >= 0) {
        contador++;
        soma += n; 
    } else {
        break;
    }
}

console.log((soma/contador).toFixed(2));