var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');
  
const pegarValores = (line) => line.split(" ").map(a => Number(a));

let entrada = pegarValores(lines.shift());
let n = entrada[1];
let x = entrada[0];
let contador = 1;

for (let index = 1; index <= n; index++) {
    let array = [];
    if (contador == n) {
        break;
    }
    for (let index = 1; index <= x; index++) {
        array.push(contador);
        if (contador == n) {
            break;
        }
        contador++;
    }
    console.log(`${array.join(' ')}`);
}