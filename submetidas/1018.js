var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let valor = parseInt(lines.shift());
console.log(valor);

let cedulas = [100, 50, 20, 10, 5, 2, 1];

function calcularNotas(money) {
    notas = Math.trunc(valor / money);
    valor = valor - notas * money;
    console.log(notas + ` nota(s) de R$ ${money},00`);
}

cedulas.forEach(cedula => {
    calcularNotas(cedula);
});