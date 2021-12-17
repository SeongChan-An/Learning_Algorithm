// https://www.acmicpc.net/problem/12015
// 수열 A가 주어졌을 때, 가장 긴 증가하는 부분 수열을 구하는 프로그램을 작성하시오.

// 예를 들어, 수열 A = {10, 20, 10, 30, 20, 50} 인 경우에 가장 긴 증가하는 부분 수열은 A = {10, 20, 10, 30, 20, 50} 이고, 길이는 4이다.
// 첫째 줄에 수열 A의 크기 N (1 ≤ N ≤ 1,000,000)이 주어진다.

// 둘째 줄에는 수열 A를 이루고 있는 Ai가 주어진다. (1 ≤ Ai ≤ 1,000,000)
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '01..Baekjoon/03..Binary Search/12015.txt';
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input.shift();
input = input[0].split(' ').map(Number);

//LIS 
// 최장 증가 부분 수열 Longest Increasing Subsequence
// https://chanhuiseok.github.io/posts/algo-49/
function solution(input) {
  let LIS = [input[0]];

  for (let i = 1; i < N; i++) {
    const target = input[i];
    if (LIS[LIS.length - 1] < target) {
      LIS.push(target);
    }
    else {
      let min = 0;
      let max = LIS.length - 1;
      let mid = Math.floor((min + max) / 2);

      while (min < max) {
        mid = Math.floor((min + max) / 2);

        if (LIS[mid] >= target) {
          max = mid;
        } else if (LIS[mid] < target) {
          min = mid + 1;
        }
      }
      LIS[min] = target;
    }
  };
  console.log(LIS.length);
}

solution(input);