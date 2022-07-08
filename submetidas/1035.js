var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));
    
let [A, B, C, D] = pegarValores(lines.shift());
    
    if (B>C && D>A && C+D>A+B && C>0 && D>0 && A%2 === 0) {
        console.log("Valores aceitos");
    } else {
        console.log("Valores nao aceitos");
    }
 