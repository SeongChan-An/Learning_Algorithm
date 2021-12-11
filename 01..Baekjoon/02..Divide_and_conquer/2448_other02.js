// https://www.acmicpc.net/problem/2448
// epikem 님 코드

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '01..Baekjoon/02..Divide_and_conquer/2448.txt';
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const BASIC = ["  *  ", " * * ", "*****"];

function expand(lines) {
  const preSize = lines.length;
  const padding = " ".repeat(preSize);
  const next = Array(preSize * 2);

  for (let i = 0; i < preSize; i += 1) {
    next[i] = padding + lines[i] + padding;
  }

  for (let i = 0; i < preSize; i += 1) {
    next[preSize + i] = lines[i] + " " + lines[i];
  }

  return next;
}

function solution(n) {
    // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/log2
  const cnt = Math.log2(n / 3);
//   console.log(cnt);
  let res = BASIC;

  for (let i = 0; i < cnt; i += 1) {
    res = expand(res);
  }

  return res.join("\n");
}

const n = +input;
const ans = solution(n);

console.log(ans);