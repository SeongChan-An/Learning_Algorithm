/**
 * 코드 자체를 이해하기 위해서
 */

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '01..Baekjoon/01..Greedy/1339.txt';
let input = fs.readFileSync(filePath).toString().split("\n");

let number = +input[0];
let tempArr = [...Array(number)];
for (let i = 0; i < number; i++) {
    tempArr[i] = input[i+1].trim();
}
console.log(input);

// 2
// AAA
// AAA    => { A: 222 }
// 위와 같은 형태로, 자릿수에 맞게 사용된 횟수를 기록한 후, 높은 자릿수부터 큰 수를 대입해본다.
const makeAlphabetObj = (input) => {
    const obj = {};
    input.map((str) => {
        str.split("")
            .reverse()
            .forEach((el, i) => {
                obj[el] = !obj[el] ? 10 ** i : obj[el] + 10 ** i;
            });
    });
    return obj;
};

const solution = (input) => {
    const obj = makeAlphabetObj(input);
    console.log(obj);
    const objToArr = Object.entries(obj).sort((a, b) => b[1] - a[1]);

    let number = 9;
    let sum = 0;
    for (const a of objToArr) {
        sum += a[1] * number--;
    }

    return sum;
};

console.log(solution(tempArr));


// https://kscodebase.tistory.com/511