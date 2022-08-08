var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

// const pegarValores = (line) => line.split(" ").map(a => Number(a));

let i = 1;
let j = 7;

for (let m = 0; m < 5; m++) {
    for (let index = 0; index < 3; index++) {
        console.log(`I=${i} J=${j}`);
        j--;
    }
    j = j + 5;
    i = i + 2;
}