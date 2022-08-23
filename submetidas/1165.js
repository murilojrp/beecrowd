var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');
  
// const pegarValores = (line) => line.split(" ").map(a => Number(a));

let n = Number(lines.shift());

for (let index = 0; index < n; index++) {
    let x = Number(lines.shift());    
    let contador = 0;
    for (let index = 1; index <= x; index++) {
        if (x % index == 0) {
            contador++
        }
    }
    if (contador > 2) {
        console.log(`${x} nao eh primo`);
    } else {
        console.log(`${x} eh primo`);
    }

}