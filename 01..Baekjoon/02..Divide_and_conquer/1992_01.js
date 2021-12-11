// https://www.acmicpc.net/problem/1992

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '01..Baekjoon/02..Divide_and_conquer/1992.txt';
let input = fs.readFileSync(filePath).toString().trim().split("\n");

console.log(input);
let standardNumber = +input[0];
console.log(standardNumber);