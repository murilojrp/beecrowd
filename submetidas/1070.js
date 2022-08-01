var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');
  
// const pegarValores = (line) => line.split(" ").map(a => Number(a));

let x = lines.shift();

let contador = 1;

while (contador <= 6) {
  if (x % 2 != 0) {
    console.log(x);
    contador++;
  }
  x++;
}