/*
    .map((item) => +item)
    위 맵 함수가 의미하는걸 풀어쓰면 아래와 같음
    let newArr = [];
    for(let i = 0; i < arr.length; ++i) {
        newArr.push(+arr[i]);
    }

    console.log("arr :" , arr);
    console.log("newArr : ", newArr);

 */


// 입력
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '01..Baekjoon/Number_4344.txt';
const input = fs.readFileSync(filePath).toString().split('\n');
// 

// 가공

const inputC = +input[0];
const inputTestCase = [];
for (let i = 1; i <= inputC; ++i) {
    const arr = input[i].split(" ").map((item) => +item);
    const newArr = [];
    for (let i = 1; i <= arr[0]; ++i) {
        newArr.push(arr[i]);
    }
    const testCase = {
        N: arr[0],
        arr: newArr,
    };
    inputTestCase.push(testCase);
}

function solution(C, testCase) {
    // console.log("Case : ", number);
    // console.log("testCase : ", testCase);
    
    for (let testCaseIdx = 0; testCaseIdx < C; ++testCaseIdx) {
        const n = testCase[testCaseIdx].N;
        const arr = testCase[testCaseIdx].arr;
        let scoreSum = 0;
        for (let i = 0; i < n; ++i) {
            scoreSum += arr[i];
        }
        const average = scoreSum / n;
        let cnt = 0;
        for (let i = 0; i < n; ++i) {
            if (average < arr[i]) {
                cnt++;
            }
        }
        const ratio = ((cnt / n) * 100).toFixed(3);
        console.log(ratio + '%');
    }
}

solution(inputC, inputTestCase)