const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split('\n');

const N = Number(input[0]);
const K = Number(input[1]);

if (K > N) {
  console.log(0);
  return;
}

const senser = input[2]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

const diff = [];
for (let i = 0; i < senser.length - 1; i++) {
  diff.push(senser[i + 1] - senser[i]);
}
diff.sort((a, b) => b - a);
console.log(diff.splice(K - 1).reduce((a, c) => a + c, 0));
