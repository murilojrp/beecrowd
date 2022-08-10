var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

// const pegarValores = (line) => line.split(" ").map(a => Number(a));

let numeros = [];
let maior = 0;
let posicao = 0;

for (let i = 0; i < 100; i++) {
    numeros[i] = Number(lines.shift());
    let anterior = numeros[i-1];
    let atual = numeros[i];
    if (atual > anterior) {
        maior = atual;
        posicao = i;
    }
}

console.log(maior);
console.log(posicao);