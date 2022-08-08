var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');
// const pegarValores = (line) => line.split(" ").map(a => Number(a));
let numeros = [];
let maior = -1;
let posicao = 0;

for (let i = 1; i <= 100; i++) {
    numeros[i] = Number(lines.shift());
    if (numeros[i] > maior) {
        maior = numeros[i];
        posicao = i;
    }
}

console.log(maior);
console.log(posicao);