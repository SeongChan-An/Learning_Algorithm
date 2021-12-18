// https://www.acmicpc.net/problem/2805

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '01..Baekjoon/03..Binary Search/2805.txt';
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const firstLine = input[0].split(" ").map(el => +el);
const number = +firstLine[1];
// console.log(number);

const list = input[1].split(" ").map(el => +el);

let max = 0;
let min = 0;
let answer = 0;

list.forEach( el => {
    if (el > max) {
        max = el;
    }
})
// console.log(max);

while(min <= max) {
    let mid = parseInt((min + max) / 2);    
    let sum = 0;

    list.forEach(el => {
        if (el - mid > 0) {
            sum += el - mid;
        }
    })

    if (sum >= number) {
        if (mid > answer) {
            answer = mid;
        }
        min = mid + 1;
    } else {
        max = mid - 1;
    }
}

console.log(answer);
