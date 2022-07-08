var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));
    
    let [a, b, c] = pegarValores(lines.shift()); 
    let delta;
    let raiz1;
    let raiz2;
    
    delta = (b*b) - (4*a*c);

    if (a === 0  || delta < 0) {
        console.log("Impossivel calcular");
    } else {
    raiz1 = (-b + Math.sqrt(delta))/(2*a); 
    raiz2 = (-b - Math.sqrt(delta))/(2*a);
        console.log(`R1 = ` + raiz1.toFixed(5));
        console.log(`R2 = ` + raiz2.toFixed(5));
    }
    