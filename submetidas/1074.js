var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

// const pegarValores = (line) => line.split(" ").map(a => Number(a));

let n = Number(lines.shift());

for (let index = 0; index < n; index++) {
    let number = Number(lines.shift());
    if (number > 0) {
        if (number % 2 == 0) {
            console.log("EVEN POSITIVE");
        } else {
            console.log("ODD POSITIVE");
        }
    } else if (number < 0) {
        if (number % 2 == 0) {
            console.log("EVEN NEGATIVE");
        } else {
            console.log("ODD NEGATIVE");
        }
    } else {
        console.log("NULL");
    }
}