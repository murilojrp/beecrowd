var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

// const pegarValores = (line) => line.split(" ").map(a => Number(a));


for (let index = 0; index < 99999999999; index++) {
    let n = Number(lines.shift());
    if (n === 2002) {
        console.log("Acesso Permitido");
        return;
    } else {
        console.log("Senha Invalida")
    }
}