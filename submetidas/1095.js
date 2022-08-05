var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

// const pegarValores = (line) => line.split(" ").map(a => Number(a));
let i = 1;
let j = 60;

    for (let index = 0; index < 99999999; index++) {
        console.log(`I=${i} J=${j}`);
        j = j - 5;
        i = i + 3;
        if (j == -5) {
            break;
        }
    }