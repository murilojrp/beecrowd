var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => Number(a));

let [n1, n2, n3, n4] = pegarValores(lines.shift());
    
    media= ((n1*2) + (n2*3) + (n3*4) + (n4*1))/10;
    
    console.log(`Media: ${media.toFixed(2)}`);
 
    if (media>=7) {
    	console.log ("Aluno aprovado.");
	} else {
		if (media<5) {
			console.log("Aluno reprovado.");
		} else {
			if (media >= 5 && media <= 6.9) {
				console.log("Aluno em exame.");
				let nexame = Number(lines.shift());
				console.log(`Nota do exame: ${nexame.toFixed(1)}`);
				mediafinal = (nexame+media)/2;
				if (mediafinal>=5) {
					console.log("Aluno aprovado.");
					} else {
						if (mediafinal<=4.9) {
							console.log("Aluno reprovado.");
						} 
						}
					} console.log(`Media final: ${mediafinal.toFixed(1)}`);
				}
			}