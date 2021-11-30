const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '01..Baekjoon/01..Greedy/13399.txt';
let input = fs.readFileSync(filePath).toString().split("\n");

console.log(input);

let number = +input[0];
// 문제에 보면 최소값으로 정렬하는 부분이 있다.
let element = input[1].split(" ").map((item) => +item).sort((a, b) => a - b);
// let tempArr = [...Array(number)];
// tempArr[0] = element[0];

console.log(number);
console.log(element);
// console.log(element[0]);
// console.log(tempArr);

let answer = 0;
let prev = 0;
for (let i = 0; i < number; i++) {
    answer += element[i] + prev;
    prev += element[i];
}

console.log(answer);

// 다른 방식으로 풀어보고 싶었지만.. 
// 누적합
// let i = 1;
// while(number > 0) {
//     tempArr[i] = (tempArr[i-1] + element[i]);
//     i++;
//     number--;
// }

