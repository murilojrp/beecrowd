var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));

let n = Number(lines.shift());

for (let index = 0; index < n; index++) {
    let [a, b, c] = pegarValores(lines.shift());
    console.log((((a*2)+(b*3)+(c*5))/10).toFixed(1))       
}