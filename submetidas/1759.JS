var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');
  
// const pegarValores = (line) => line.split(" ").map(a => Number(a));
let n = Number(lines.shift());
let array = [];

for (let index = 0; index < n; index++) {
    array.push("Ho");
}

console.log(`${array.join(' ')}!`)