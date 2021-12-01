const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '01..Baekjoon/01..Greedy/1339.txt';
let input = fs.readFileSync(filePath).toString().split("\n");

let number = +input[0];
// 테스트
// let str = input[1].trim();
// console.log(str);
// console.log(str.length);
let tempArr = [...Array(number)];
let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

for (let i = 0; i < number; i++) {
    tempArr[i] = input[i+1].trim();
}
console.log(tempArr);

tempArr.sort((a, b) => {
    if (a.length < b.length) {
        return 1;
    } else {
        return -1;
    }
})

console.log(tempArr);
// if ()