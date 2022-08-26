var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');
  
// const pegarValores = (line) => line.split(" ").map(a => Number(a));
let anterior = Number(lines.shift());
let atual = 0;
let troca = 0;

console.log(`N[0] = ${anterior.toLocaleString('en-US', { minimumFractionDigits: 4 })}`)

for (let index = 1; index < 100; index++) {
    atual = anterior/2;
    troca = atual;
    anterior = troca;
    console.log(`N[${index}] = ${atual.toLocaleString('en-US', { minimumFractionDigits: 4 })}`);
}
