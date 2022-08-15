var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');
  
const pegarValores = (line) => line.split(" ").map(a => Number(a));

let n = lines.shift();

for (let index = 0; index < n; index++) {
    let entrada = pegarValores(lines.shift());
    let n1 = entrada[0];
    let n2 = entrada[1];
    if (n2 == 0) {
        console.log("divisao impossivel");
    } else {
        console.log((n1/n2).toFixed(1))
    }

}