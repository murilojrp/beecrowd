var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');
  
const pegarValores = (line) => line.split(" ").map(a => Number(a));

let [voltas, placas] = pegarValores(lines.shift());

let total = voltas * placas;
let porcento = total/10;
let array =[];

for (let i = 1; i <= 9; i++) {
    conta = porcento*i;
    array.push(Math.ceil(conta));
}

console.log(array.join(' '))


