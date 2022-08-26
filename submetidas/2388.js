var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');
  
const pegarValores = (line) => line.split(" ").map(a => Number(a));

let testes = Number(lines.shift());
let t = 0;
let v = 0;
let distancia = 0;

for (let index = 0; index < testes; index++) {
    [t, v] = pegarValores(lines.shift());
    distancia += (t*v);
}

console.log(distancia);