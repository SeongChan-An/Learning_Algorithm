// https://www.acmicpc.net/problem/2749
// https://www.acmicpc.net/blog/view/28

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '01..Baekjoon/04..Dynamic_Programming/11444.txt';
let input = fs.readFileSync(filePath).toString().trim().split("\n");

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