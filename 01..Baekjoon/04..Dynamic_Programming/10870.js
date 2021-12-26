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



///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
// https://miiingo.tistory.com/272
// let memoization = new Array(+input).fill(0);
// 2747 번 같은 경우
// 입력받는 값의 범위가 늘어남
let memo = [];
memo.length = +input;
memo.fill(0);

function fibonacci_memo(_number) {
  if (_number <= 1) {
    return _number;
  } else if (memo[_number-1] !== 0) {
    return memo[_number]
  } else {
    return memo[_number] = fibonacci_memo(_number - 1) + fibonacci_memo(_number - 2);
  }
}

console.log(fibonacci_memo(+input));
