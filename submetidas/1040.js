var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

// const pegarValores = (line) => line.split(" ").map(a => Number(a));

let vertebra = lines.shift();
let classe = lines.shift();
let grupo = lines.shift(); 

console.log(vertebra, classe, grupo)

let objeto = {
    vertebrado: {
        ave: {
            carnivoro: 'aguia',
            onivoro: 'pombo'
        },
        mamifero: {
            onivoro: 'homem',
            herbivoro: 'vaca' 
        }
    },
    invertebrado: {
        inseto: {
            hematofago: 'pulga',
            herbivoro: 'lagarta'
        },
        anelideo: {
            hematofago: 'sanguessuga',
            onivoro: 'minhoca'
        } 
    }
}

console.log(objeto[vertebra][classe][grupo])