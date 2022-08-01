var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');
  
// const pegarValores = (line) => line.split(" ").map(a => Number(a));

let salario = lines.shift();
let total = 0;
let imposto = 0;

if (salario < 2000) {
  console.log("Isento");
} else {

  if (salario > 4500) {
    imposto = (1000 * 0.08) + (1500 * 0.18) + ((salario - 4500) * 0.28);
    total = total + imposto;
  }
 
  if (salario <= 4500 && salario >= 3000.01) {
    imposto = (1000 * 0.08) + ((salario - 3000) * 0.18);
    total = total + imposto;
  }
 
  if (salario <= 3000.00 && salario >= 2000.01) {
    imposto = ((salario-2000) * 0.08);
    total = total + imposto;
  } 
  console.log(`R$ ${total.toFixed(2)}`);
}
  