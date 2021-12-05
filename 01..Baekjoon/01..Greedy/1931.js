const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '01..Baekjoon/01..Greedy/1931.txt';
let input = fs.readFileSync(filePath).toString().split("\n");

// 입력받는 값에 대한 처리가 필요

let Category = +input[0];
console.log(Category);
let timeLog = [...Array(Category)];
console.log(timeLog);

for (let i = 1; i <= Category; i++) {
    timeLog[i-1] = input[i].split(" ").map((el) => +el);
}
console.log(timeLog);

// 원활한 계산을 위해 정렬이 필요함
// 회의가 끝난 시점 기준으로 정렬이 필요
timeLog.sort((a, b) => {
    if (a[1] === b[1]) {
        return a[0] - b[0];
    }
    return a[1] - b[1];
})
console.log(timeLog);

// 비교 
let start = timeLog[0][1];
let count = 1;
for (let i = 1; i < Category; i++) {
    if(start <= timeLog[i][0]) {
        start = timeLog[i][1];
        count += 1;
    }
}
console.log(count);

// ++
// https://github.com/deli-ght/algorithm/blob/main/week2/ag-1931.md
