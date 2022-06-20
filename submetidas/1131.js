var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));

let grenais = 0;
let vitoriasGremio = 0;
let vitoriasInter = 0;
let empates = 0;
let novoJogo = 1

while (novoJogo === 1) {
    let [golsInter, golsGremio] = pegarValores(lines.shift());
    if (golsInter > golsGremio){
        vitoriasInter++;
    } else if (golsInter < golsGremio){
        vitoriasGremio++;
    } else {
        empates++
    }
    grenais++;

    console.log(`Novo grenal (1-sim 2-nao)`);
    novoJogo = Number(lines.shift())
}

console.log(`${grenais} grenais`);
console.log(`Inter:${vitoriasInter}`);
console.log(`Gremio:${vitoriasGremio}`);
console.log(`Empates:${empates}`);

if(vitoriasInter > vitoriasGremio){
    console.log(`Inter venceu mais`);   
} else if (vitoriasInter < vitoriasGremio) {
    console.log(`Gremio venceu mais`);   
}
else {
    console.log(`Nao houve vencedor`);   
}