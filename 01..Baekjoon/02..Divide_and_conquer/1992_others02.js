// https://www.acmicpc.net/problem/1992
// 	cjstka3 님

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '01..Baekjoon/02..Divide_and_conquer/1992.txt';
let input = fs.readFileSync(filePath).toString().split("\n");

const SIZE = Number(input[0]);
const map= [];
let result = "";

init();
solution(SIZE, 0, 0);
console.log(result);

function init() {
  for (let i = 1; i < input.length; i++) {
    map.push(input[i].split(""));
  }
}

function solution(size, x, y) {
  if (size === 1 || determineValue(size, x, y)) {
    result += map[x][y];
    return;
  }

  const half = size / 2;

  result += "(";
  solution(half, x, y);
  solution(half, x, y + half);
  solution(half, x + half, y);
  solution(half, x + half, y + half);
  result += ")";
}

function determineValue(size, x, y) {
  for (let i = x; i < x + size; i++) {
    for (let j = y; j < y + size; j++) {
      if (map[x][y] !== map[i][j]) return false;
    }
  }
  return true;
}
