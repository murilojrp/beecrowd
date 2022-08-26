var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');
  
const pegarValores = (line) => line.split(" ").map(a => Number(a));

let [competidores, folhasCompradas, folhasCompetidor] = pegarValores(lines.shift());

if ((folhasCompradas/folhasCompetidor) >= competidores) {
    console.log("S")
} else {
    console.log("N")
}