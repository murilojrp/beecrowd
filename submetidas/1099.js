var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');
  
const pegarValores = (line) => line.split(" ").map(a => Number(a));

let N = lines.shift();

for (let index = 0; index < N; index++) {
    let entrada = pegarValores(lines.shift());
    let soma = 0;
    let maior = 0;
    let menor = 0;
    let n1 = entrada[0];
    let n2 = entrada[1];
    if (n1 > n2) {
        maior = n1;
        menor = n2
    }
    if (n2 > n1) {
        maior = n2;
        menor = n1;
    }
    for (let index = menor + 1; index < maior; index++) {
        if (index % 2 != 0) {
            soma += index;
        }
    }
    console.log(soma);
}