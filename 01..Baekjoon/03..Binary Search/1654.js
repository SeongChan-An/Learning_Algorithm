// https://www.acmicpc.net/problem/1654

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '01..Baekjoon/03..Binary Search/1654.txt';
let input = fs.readFileSync(filePath).toString().trim().split("\n");