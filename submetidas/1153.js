var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let numero = Number(lines.shift())
// let fatorial = numero
// do {
//     numero--;
//     fatorial *= numero 
    
// } while (numero > 0);

fatorial = 1
for (let i = numero; i > 0; i--) {
    fatorial *= i
}

console.log(fatorial);
