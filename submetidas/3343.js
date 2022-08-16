var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');
  
const pegarValores = (line) => line.split(" ").map(a => Number(a));

let [qtdTitas, muralhaTamanho] = pegarValores(lines.shift());

let tipoTita = lines.shift().split('')

let tamanhoTita = pegarValores(lines.shift())

let tita = {
    tipo: '',
    tamanho: []
}

let atacada = false

let muralhaAtual = muralhaTamanho;

let muralhasAtacadas = 0;

for (let i = 0; i < qtdTitas; i++) {
    tita.tipo = tipoTita[i]
    if (tita.tipo === 'P') {
        tita.tamanho = tamanhoTita[0]
    }
    if (tita.tipo === 'M') {
        tita.tamanho = tamanhoTita[1]
    }
    if (tita.tipo === 'G') {
        tita.tamanho = tamanhoTita[2]
    }

    if (muralhaTamanho == 0) {
        muralhaTamanho = muralhaInicial;
    }
    if (atacada === false) {
        if (tita.tamanho <= muralhaAtual ) {
            muralhaAtual = muralhaAtual - tita.tamanho;
            muralhasAtacadas++;
            atacada = true;
        }
    }
    if (atacada === true) {
        if (tita.tamanho > muralhaAtual) {
            atacada = false;
            muralhaAtual = muralhaTamanho;
            muralhaAtual = muralhaAtual - tita.tamanho;
            muralhasAtacadas++;
            atacada = true;
        }
        }
}

console.log(muralhasAtacadas);


