var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

// const pegarValores = (line) => line.split(" ").map(a => Number(a));

let alcool = 0;
let gasolina = 0;
let diesel = 0;

for (let i = 0; i < 99999; i++) {
    let tipo = lines.shift();
    if (tipo == 1) {
        alcool++;
    }
    if (tipo == 2) {
        gasolina++;
    }
    if (tipo == 3) {
        diesel++;
    } 
    if (tipo == 4) {
        fim();
    }
}
    function fim () { 
        console.log("MUITO OBRIGADO");
        console.log(`Alcool: ${alcool}`);
        console.log(`Gasolina: ${gasolina}`);
        console.log(`Diesel: ${diesel}`);
    }