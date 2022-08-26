var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');
  
// const pegarValores = (line) => line.split(" ").map(a => Number(a));

let anterior = lines.shift();
let atual = lines.shift();

console.log(anterior-atual);