// https://www.acmicpc.net/problem/12015
// 수열 A가 주어졌을 때, 가장 긴 증가하는 부분 수열을 구하는 프로그램을 작성하시오.

// 예를 들어, 수열 A = {10, 20, 10, 30, 20, 50} 인 경우에 가장 긴 증가하는 부분 수열은 A = {10, 20, 10, 30, 20, 50} 이고, 길이는 4이다.
// 첫째 줄에 수열 A의 크기 N (1 ≤ N ≤ 1,000,000)이 주어진다.

// 둘째 줄에는 수열 A를 이루고 있는 Ai가 주어진다. (1 ≤ Ai ≤ 1,000,000)


const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '01..Baekjoon/03..Binary Search/12015.txt';
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const number = +input.shift();
input = input[0].split(" ").map(el => +el);
console.log(input);

function solution(_input) {
    
}
solution(input);

// https://eine.tistory.com/entry/%EA%B0%80%EC%9E%A5-%EA%B8%B4-%EC%A6%9D%EA%B0%80%ED%95%98%EB%8A%94-%EB%B6%80%EB%B6%84-%EC%88%98%EC%97%B4LIS-Longest-Increasing-Subsequence

/*
알고리즘 설계
가장 긴 증가부분수열

*/

// https://namu.wiki/w/%EC%B5%9C%EC%9E%A5%20%EC%A6%9D%EA%B0%80%20%EB%B6%80%EB%B6%84%20%EC%88%98%EC%97%B4