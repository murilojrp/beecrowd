var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

// const pegarValores = (line) => line.split(" ").map(a => Number(a));

let validas = 0;
let nota1 = 0;
let nota2 = 0;

for (let i = 0; i < 99; i++) {
    let nota = Number(lines.shift());
    if (nota >= 0 && nota <= 10) {
        if (validas == 0) {
            nota1 = nota;
            validas++;
        } else {
            nota2 = nota;
            validas++;
        }
    } else {
        console.log("nota invalida");
    }
    if (validas == 2) {
        console.log(`media = ${((nota1 + nota2)/ 2).toFixed(2)}`);
        break;
    }
}