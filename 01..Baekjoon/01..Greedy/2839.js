const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "01..Baekjoon/01..Greedy/2839.txt";
let input = fs.readFileSync(filePath).toString().trim();

input = +input;
let input2 = +input;

// 3, 5 
let count = 0;

// 조건이 충족하면 빠져나오기
while(true) {
    if (input % 5 === 0 ) {
        count += input/5;
        break;
    }

    if (input < 0) {
        count = -1;
        break;
    }

    count++;
    input -= 3;
}

console.log(count);

// 다른 풀이
// DP 개념
console.log("Case 2");
let listArr = new Array(input2 + 1).fill(-1);
console.log(listArr);

listArr[3] = 1;
listArr[5] = 1;

for (let i = 6; i < input2 + 1; i++) {
    if (listArr[i -3] != -1 && listArr[i - 5] != -1) {
        listArr[i] = Math.min(listArr[i-3], listArr[i-5]) + 1;
    } else if (listArr[i -3] != -1) {
        listArr[i] = listArr[i-3] + 1;
    } else if (listArr[i - 5] != -1) {
        listArr[i] = listArr[i-5] + 1;
    }
}

console.log(listArr[input2]);

