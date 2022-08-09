var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');
  
const pegarValores = (line) => line.split(" ").map(a => a);

let x = lines.shift();
let cobaias = 0;
let coelhos = 0;
let ratos = 0;
let sapos = 0;

for (let index = 0; index < x; index++) {
    let entrada = pegarValores(lines.shift());
    let n = Number(entrada[0]);
    let tipo = entrada[1];
    cobaias += n;
    if (tipo == 'C') {
        coelhos += n;
    }
    if (tipo == 'R') {
        ratos += n;
    }
    if (tipo == 'S') {
        sapos += n;
    }
}

console.log(`Total: ${cobaias} cobaias`);
console.log(`Total de coelhos: ${coelhos}`);
console.log(`Total de ratos: ${ratos}`);
console.log(`Total de sapos: ${sapos}`);
console.log(`Percentual de coelhos: ${((coelhos/cobaias)*100).toFixed(2)} %`);
console.log(`Percentual de ratos: ${((ratos/cobaias)*100).toFixed(2)} %`);
console.log(`Percentual de sapos: ${((sapos/cobaias)*100).toFixed(2)} %`);