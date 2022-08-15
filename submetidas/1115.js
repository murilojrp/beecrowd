var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');
  
const pegarValores = (line) => line.split(" ").map(a => Number(a));

for (let index = 0; index < 999999; index++) {
    let entrada = pegarValores(lines.shift());
    let x = entrada[0];
    let y = entrada[1];
    if (x == 0 || y == 0) {
        break;
    }
    if (x > 0) {
        if (y > 0){
            console.log("primeiro")
        } else {
        console.log("quarto")
        }
    } else {
        if (y > 0){
            console.log("segundo")
        }  else {
        console.log("terceiro")
        }
    } 
}