// https://www.acmicpc.net/problem/2448

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '01..Baekjoon/02..Divide_and_conquer/2448.txt';
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let number = +input;
// console.log(number);
let star = "";

function makeStars(i, j, number) {
    
}

for (let i = 0; i < number; i++) {
    for (let j = 0; j < number; j++) {
        makeStars(i, j, number);
    }
    star += "\n";
}

console.log(star);