var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');
  
// const pegarValores = (line) => line.split(" ").map(a => Number(a));

let n1 = Number(lines.shift());
let n2 = Number(lines.shift());
let maior = 0;
let menor = 0;
if (n1 > n2) {
    maior = n1;
    menor = n2;
} else {
    maior = n2;
    menor = n1;
}
for (let index = menor+1; index < maior; index++) {
    if (index % 5 == 2 || index % 5 == 3) {
        console.log(index);
    }
}