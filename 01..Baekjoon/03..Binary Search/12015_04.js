// https://www.acmicpc.net/problem/12015
// 수열 A가 주어졌을 때, 가장 긴 증가하는 부분 수열을 구하는 프로그램을 작성하시오.

// 예를 들어, 수열 A = {10, 20, 10, 30, 20, 50} 인 경우에 가장 긴 증가하는 부분 수열은 A = {10, 20, 10, 30, 20, 50} 이고, 길이는 4이다.
// 첫째 줄에 수열 A의 크기 N (1 ≤ N ≤ 1,000,000)이 주어진다.

// 둘째 줄에는 수열 A를 이루고 있는 Ai가 주어진다. (1 ≤ Ai ≤ 1,000,000)
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '01..Baekjoon/03..Binary Search/12015.txt';
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const num = +input.shift();
const arr = input[0].split(" ").map(el => +el);
// console.log(input);
// const arr = input[1].split(" ").map(Number);
// console.log(arr);
const lis = [0];

function updateLis(lis, num) {
    let left = 0;
    let right = lis.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (lis[mid] < num) left = mid + 1;
      else right = mid - 1;
    }
  
    lis[left] = num;
  }
  
  function solution() {  
    arr.forEach((num) => {
      if (lis[lis.length - 1] < num) lis.push(num);
      else updateLis(lis, num);
    });
  
    return lis.length - 1;
  }
  
  console.log(solution());