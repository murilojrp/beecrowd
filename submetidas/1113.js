var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');
  
const pegarValores = (line) => line.split(" ").map(a => Number(a));

for (let index = 0; index < 999999; index++) {
    let entrada = pegarValores(lines.shift());
    let n1 = entrada[0];
    let n2 = entrada[1];
    if (n1 === n2) {
        break;
    }
    if (n1 > n2) {
        console.log("Decrescente")
    } else {
        console.log("Crescente")
    }
}