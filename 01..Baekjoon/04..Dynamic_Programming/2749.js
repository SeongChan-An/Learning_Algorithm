// https://www.acmicpc.net/problem/2749
// https://www.acmicpc.net/blog/view/28

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '01..Baekjoon/04..Dynamic_Programming/2749.txt';
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = BigInt(input);
// 피사노 주기
let mod = 1000000;
// 주기의 길이
let p = BigInt(mod/10*15);

let fibo = [];
fibo.push(0);
fibo.push(1);

for (let i = 2; i < p; i++) {
  fibo.push((fibo[i - 1] + fibo[i - 2]) % mod);
}
console.log(fibo[n % BigInt(1500000)]);
