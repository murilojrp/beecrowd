var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

// const pegarValores = (line) => line.split(" ").map(a => Number(a));

let n = Number(lines.shift());

for (let index = 1; index <= n; index++) {
  index % 2 == 0 ? console.log(`${index}^2 = ${index*index}`) : null
}