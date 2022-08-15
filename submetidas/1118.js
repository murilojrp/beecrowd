var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');
  
const pegarValores = (line) => line.split(" ").map(a => Number(a));

function verificarResposta() {
    let resposta;
    while (resposta != 1 && resposta != 2) {
        console.log("novo calculo (1-sim 2-nao)");
        resposta = lines.shift();
    }
    return resposta;
}

let notas = 0

for (let index = 0; index < 9999; index++) {
    let nota = Number(lines.shift());
    if (nota >= 0 && nota <= 10) {
        if (notas == 0) {
            n1 = nota;
            notas++
        } else {
            n2 = nota;
            notas++
        }
    } else {
        console.log("nota invalida");
    }
    if (notas == 2) {
        console.log(`media = ${((n1+n2)/2).toFixed(2)}`);
        notas = 0;
        let resposta = verificarResposta();
        if (resposta == 2) {
            break;
        }
    }
}