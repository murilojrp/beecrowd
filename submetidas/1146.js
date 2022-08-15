var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');
  
// const pegarValores = (line) => line.split(" ").map(a => Number(a));

for (let index = 0; index < 999999; index++) {
    let x = lines.shift();
    if (x == 0) {
        break;
    }
    let array = [];
    for (let index = 1; index <= x; index++) {
        array.push(index);
    }
    console.log(array.join(' '));
}