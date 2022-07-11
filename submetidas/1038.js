var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');
    
const pegarValores = (line) => line.split(" ").map(a => Number(a));

let [codigo, quantidade] = pegarValores(lines.shift());

let total;

    if (codigo==1) 
        total=quantidade*4.00;
     else if (codigo==2) 
            total=quantidade*4.50;
         else if (codigo==3) 
                total=quantidade*5.00;
             else if (codigo==4) 
                    total=quantidade*2.00;
                 else 
                    total=quantidade*1.50;
    
    console.log(`Total: R$ ${total.toFixed(2)}`);
    