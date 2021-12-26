// https://www.acmicpc.net/problem/10870

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '01..Baekjoon/04..Dynamic_Programming/10870.txt';
let input = fs.readFileSync(filePath).toString().trim().split("\n");

function fibonacci(_number) {
  if (_number <= 1) {
    return _number;
  } else {
    return fibonacci(_number - 1) + fibonacci(_number - 2);
  }
}

function solution(_number) {
  let answer = 0;
  answer = fibonacci(_number);

  console.log(answer);
}

solution(+input);