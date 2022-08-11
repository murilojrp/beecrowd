var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');
  
const pegarValores = (line) => line.split(" ").map(a => Number(a));

for (let index = 0; index < 999999; index++) {
    let entrada = pegarValores(lines.shift());
    let m = entrada[0];
    let n = entrada[1];
    if (m == 0 || n == 0 || m < 0 || n < 0) {
        break;
    }
    if (m > n) {
        maior = m;
        menor = n;
    } else {
        maior = n;
        menor = m;
    }
    let saida = [];
    let soma = 0;
    for (let index = menor; index <= maior; index++) {
        saida.push(index);
        soma += index;
    }
    console.log(`${saida.join(' ')} Sum=${soma}`);
}