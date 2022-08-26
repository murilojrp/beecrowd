var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');
  
const pegarValores = (line) => line.split(" ").map(a => Number(a));

let [abas, acoes] = pegarValores(lines.shift());

for (let index = 0; index < acoes; index++) {
    let acao = lines.shift();
    if (acao == "fechou") {
        abas++;
    } else {
        abas--;
    }
}

console.log(abas);