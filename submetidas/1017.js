var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let tempoViagem = Number(lines.shift());
let velocidadeMedia = Number(lines.shift());
let gastoCombustivel = (tempoViagem * velocidadeMedia) / 12;

console.log(gastoCombustivel.toFixed(3));
