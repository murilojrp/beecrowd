var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');
  
// const pegarValores = (line) => line.split(" ").map(a => Number(a));

let t = lines.shift();

let n = [1000];

 n[0] = 0;

for (let index = 1; index < 1000; index++) {
    if ((n[index-1] + 1) == t) {
        n[index] = 0;
    } else {
        n[index] = n[index-1] + 1;
    }
}

for (let index = 0; index < 1000; index++) {
    if (n[index] == t) {
        console.log(`N[${index}] = 0`);
    } else {
        console.log(`N[${index}] = ${n[index]}`);
    }
    n[index]++;
}