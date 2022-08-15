var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');
  
// const pegarValores = (line) => line.split(" ").map(a => Number(a));

let n = lines.shift();
let anterior = 0;
let atual = 1;
let proximo = 0;
let array = [];

for (let index = 0; index < n; index++) {
    proximo = atual + anterior;
    anterior = atual;
    atual = proximo;
    array.push(proximo)
}

console.log(`0 1 ${array.join(' ')}`);
