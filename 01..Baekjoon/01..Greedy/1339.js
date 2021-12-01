const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '01..Baekjoon/01..Greedy/1339.txt';
let input = fs.readFileSync(filePath).toString().split("\n");