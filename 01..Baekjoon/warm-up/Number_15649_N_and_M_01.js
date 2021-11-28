// 백준에서 문제를 풀기위한 기본 Template

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '01..Baekjoon/warm-up/Number_15649_N_and_M_01.txt';
let input = fs.readFileSync(filePath).toString();
// console.log(input);

input = input.split(" ").map((item) => +item);
const N = input[0];
const M = input[1];
const visited = new Array(N + 1).fill(false);
const tempArray = [];
let answer = "";

function dfs(_count) {
    // Write your code
    if (_count === M) {        
        // console.log(tempArray.join(" "));
        answer += `${tempArray.join(" ")}\n`;
        return;
    }

    for (let i = 1; i <= N; i++) {
        if (!visited[i]) {
            visited[i] = true;
            tempArray[_count] = i;
            dfs(_count + 1);
            visited[i] = false;
        }
    }
};

dfs(0);
console.log(answer.trim());

// 근데 시간초과.. 후. 
// 반복하면서 값을 출력할 경우 문제가 발생하는 것으로 보임 
// dfs 함수 내에 console.log 제거


