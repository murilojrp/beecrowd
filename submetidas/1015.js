var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));

let [x1, y1] = pegarValores(lines.shift());
let [x2, y2] = pegarValores(lines.shift());

let distancia = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));

console.log(distancia.toFixed(4));
