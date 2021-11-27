// 백준에서 문제를 풀기위한 기본 Template

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');


input = input[0];
input = input.split(' ').map((item) => +item);
solution(input[0], input[1]);
function solution(A, B) {
    // Write your code
    console.log(A + B);
}

// Case 2
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let inputReadLine = [];
rl.on("line", function (line) {
    inputReadLine.push(line);
}).on("close", function () {
    inputReadLine = inputReadLine.map((item) => +item);
    solution(inputReadLine[0], inputReadLine[1]);
    process.exit();
});
solution(+inputReadLine[0]);

function solution(N) {
    for (let i = 1; i<= 5; ++i) {
        console.log(i);
    }
}