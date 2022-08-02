var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

// const pegarValores = (line) => line.split(" ").map(a => Number(a));

let n = lines.shift();

for (let index = 2; index <= 10000; index++) {
    if (index % n == 2) {
        console.log(index);
    }
}