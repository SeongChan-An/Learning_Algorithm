// qkrwndud1994 님의 해결코드

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '01..Baekjoon/01..Greedy/1339.txt';
let input = fs.readFileSync(filePath).toString().split("\n");

let n = +input[0];
let strs = [...Array(n)];
for (let i = 0; i < n; i++) {
    strs[i] = input[i+1].trim();
}

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let obj = {};

strs.forEach((e) => {
  [...e].forEach((el, id) => {
    if (obj[el] === undefined) {
      obj[el] = Math.pow(10, e.length - 1 - id);
    } else {
      obj[el] += Math.pow(10, e.length - 1 - id);
    }
  });
});

console.log(obj);

let temp = Object.entries(obj);
temp.sort((a, b) => b[1] - a[1]);
console.log(
  temp.reduce((acc, val) => {
    return acc + val[1] * arr.pop();
  }, 0)
);