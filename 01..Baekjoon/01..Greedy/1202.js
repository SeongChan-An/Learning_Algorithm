// https://www.acmicpc.net/problem/1202

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '01..Baekjoon/01..Greedy/1202.txt';
let input = fs.readFileSync(filePath).toString().trim().split("\n");

// 처음 라인의 값은 각각 기준점이 됨
let firstLine = input[0].split(" ").map((el) => +el);
let gemNumber = firstLine[0];
let packNumber = firstLine[1];
// console.log(firstLine);
// console.log(gemNumber);
// console.log(packNumber);

let gemInfo = [];
let packInfo = [];

// console.log(tempArr[0].trim().split(" "));
let tempArr = input.slice(1);
for (let i = 0; i < gemNumber; i++) {
    let temp = tempArr[i].trim().split(" ");
    gemInfo.push([+temp[0], +temp[1]]);
}
// console.log(gemInfo);

tempArr = tempArr.slice(gemNumber);
// console.log(tempArr[0].trim().split(" "))
for (let i = 0; i < packNumber; i++) {
    let temp = tempArr[i].trim().split(" ");
    packInfo[i] = +temp;
}
// console.log(packInfo);

let saveArr = [];
for (let i = 0; i < packNumber; i++) {
    for (let j = 0; j < gemNumber; j++) {
        if (gemInfo[j][0] <= packInfo[i]) {
            saveArr.push(+gemInfo[j][1]);
        }
    }
}
answer = saveArr.reduce(function sum(sum, currVal) {
    return sum + currVal;
}, 0)
console.log(answer);

