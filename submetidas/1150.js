var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');
  
// const pegarValores = (line) => line.split(" ").map(a => Number(a));

let x = lines.shift();

for (let index = 0; index < 9999; index++) {
    let z = lines.shift();
    if (z >= x) {
        let soma = 0;
        let contador = 0;
        for (x; x < z; x++) {
            soma = x + x + 1;
            if (soma >= z) {
                break;
            } else {
                contador++;
            }
        }
        console.log(contador);
    }
}