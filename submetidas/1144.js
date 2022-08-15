var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');
  
// const pegarValores = (line) => line.split(" ").map(a => Number(a));

let n = Number(lines.shift());

for (let index = 1; index <= n; index++) {
    console.log(`${index} ${index*index} ${index*index*index}`);
    console.log(`${index} ${(index*index)+1} ${(index*index*index)+1}`);
}