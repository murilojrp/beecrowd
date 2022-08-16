var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');
  
// const pegarValores = (line) => line.split(" ").map(a => Number(a));

let curupira = lines.shift();
curupira = curupira*300;
let boitata = lines.shift();
boitata = boitata*1500;
let boto = lines.shift();
boto = boto*600
let mapinguari = lines.shift();
mapinguari = mapinguari*1000
let iara = lines.shift();
iara= iara*150


console.log((curupira+boitata+boto+mapinguari+iara+225))