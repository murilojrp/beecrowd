var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');
  
// const pegarValores = (line) => line.split(" ").map(a => Number(a));

let soma = 0;

for (let index = 1; index <= 100; index++) {
    soma += 1/index;
}

console.log((soma).toFixed(2))