const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '01..Baekjoon/01..Greedy/1339.txt';
let input = fs.readFileSync(filePath).toString().split("\n");
// 비교해보자
// console.log("각 배열의 값 비교")
// const [...testArr] = fs.readFileSync(filePath).toString();
// const [n, ...testArr2] = fs.readFileSync(filePath).toString();
// const [n2, ...testArr3] = fs.readFileSync(filePath).toString().trim();
// const [n3, ...testArr4] = fs.readFileSync(filePath).toString().trim().split(/\s+/);
// console.log("1번 배열")
// console.log(testArr);
// console.log("2번 배열")
// console.log(testArr2);
// console.log("3번 배열")
// console.log(testArr3);
// console.log("4번 배열")
// console.log(testArr4);

let number = +input[0];
let tempArr = [...Array(number)];
for (let i = 0; i < number; i++) {
    tempArr[i] = input[i+1].trim();
}
console.log(input);
console.log(tempArr);

const [n, ...arr] = fs.readFileSync(filePath).toString().trim().split(/\s+/);

// /\s+/ 공백제거 정규식
let hash_map = new Map();
let cnt = (ans = 0);
// console.log(cnt, ans);
let cur = 9;

//자릿수 계산
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    cnt = Math.pow(10, arr[i].length - (j + 1));
    hash_map.set(arr[i][j], (hash_map.get(arr[i][j]) || 0) + cnt);
  }
}
// 알파벳의 계수순으로 내림차순 정렬
const sort_map = new Map([...hash_map.entries()].sort((a, b) => b[1] - a[1]));
// v를 9부터 차례대로 곱해서 ans에저장
for (let [k, v] of sort_map) {
  ans += v * cur;
  cur--;
}
console.log(ans);



// https://velog.io/@ywc8851/%EB%B0%B1%EC%A4%80-%EB%8B%A8%EC%96%B4-%EC%88%98%ED%95%99-javascript