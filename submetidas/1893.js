var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');
  
const pegarValores = (line) => line.split(" ").map(a => Number(a));

let [a, b] = pegarValores(lines.shift());

if (a > b && b > 3 && b < 96) {
    console.log("minguante");
} else {
    if (b >= 0 && b <= 2) {
        console.log("nova")
    } else {
        if (b >= 3 && b <= 96) {
            console.log("crescente")
        } else {
            if (b >= 97 && b <= 100) {
                console.log("cheia")
            }
        }
    }
}