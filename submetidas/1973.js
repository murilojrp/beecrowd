var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));

const quantidadeEstrelas = Number(lines.shift());
const quantidadeCarneiros = pegarValores(lines.shift());

let estrelas = [];

for (let i = 0; i < quantidadeEstrelas; i++) {
    estrelas[i] = { carneiros: quantidadeCarneiros[i], jaAtacou: false };
}

let estrelaAtual = 0;
let avanca = true;
let estrelasAtacadas = 0;

while (estrelas[estrelaAtual]) {
    estrelasAtacadas += estrelas[estrelaAtual].jaAtacou ? 0 : 1;
    estrelas[estrelaAtual].jaAtacou = true;
    avanca = estrelas[estrelaAtual].carneiros % 2 !== 0;
    if (estrelas[estrelaAtual].carneiros > 0) {
        estrelas[estrelaAtual].carneiros--;
    }
    avanca ? estrelaAtual++ : estrelaAtual--;
}

let carneirosRestantes = 0;
estrelas.forEach(estrela => carneirosRestantes += estrela.carneiros);
console.log(`${estrelasAtacadas} ${carneirosRestantes}`);