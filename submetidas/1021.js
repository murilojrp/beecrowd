var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let cem;
let cinquenta;
let vinte;
let dez;
let cinco;
let dois;
let um;
let mcinquenta;
let mvintecinco;
let mdez;
let mcinco;
let mum;

let valor = Number(lines.shift());
let troco;

troco = valor;

cem = Math.trunc(troco / 100);
troco = troco - (cem * 100);

cinquenta = Math.trunc(troco / 50);
troco = troco - (cinquenta * 50);

vinte = Math.trunc(troco / 20);
troco = troco - (vinte * 20);

dez = Math.trunc(troco / 10);
troco = troco - (dez * 10);

cinco = Math.trunc(troco / 5);
troco = troco - (cinco * 5);

dois = Math.trunc(troco / 2);
troco = troco - (dois * 2);

um = Math.trunc(troco / 1);
troco = troco - (um * 1);

troco = troco * 100;

mcinquenta = Math.trunc(troco / 50);
troco = troco - (mcinquenta * 50);

mvintecinco = Math.trunc(troco / 25);
troco = troco - (mvintecinco * 25);

mdez = Math.trunc(troco / 10);
troco = troco - (mdez * 10);

mcinco = Math.trunc(troco / 5);
troco = troco - (mcinco * 5);

mum = Math.trunc(troco / 1);
troco = troco - (cinco * 1);

console.log(`NOTAS:`);
console.log(cem + ` nota(s) de R$ 100.00`);
console.log(cinquenta + ` nota(s) de R$ 50.00`);
console.log(vinte + ` nota(s) de R$ 20.00`);
console.log(dez + ` nota(s) de R$ 10.00`);
console.log(cinco + ` nota(s) de R$ 5.00`);
console.log(dois + ` nota(s) de R$ 2.00`);

console.log("MOEDAS:");
console.log(um + ` moeda(s) de R$ 1.00`);
console.log(mcinquenta + ` moeda(s) de R$ 0.50`);
console.log(mvintecinco + ` moeda(s) de R$ 0.25`);
console.log(mdez + ` moeda(s) de R$ 0.10`);
console.log(mcinco + ` moeda(s) de R$ 0.05`);
console.log(mum + ` moeda(s) de R$ 0.01`);