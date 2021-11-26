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


const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString();
let input = fs.readFileSync("01..Baekjoon/Number_4344.txt").toString();
console.log(input);
input = input.split("\n");
console.log(input);
const inputC = +input[0];
const inputTestCase = [];

// const testCaseNum = Number(input[0]);
const testCaseNum = +input[0];
for(let i = 1; i <= testCaseNum; ++i) {
    const arr = input[i].split(" ").map((item) => +item);
    
    let newArr = [];
    let totalSum = 0;
    const arrLength = arr[0];
    for (let i =1; i<= arrLength; ++i) {
        newArr.push(arr[i]);
    }

    const testCase = {
        N: arr[0],
        arr : newArr,
    };

    inputTestCase.push(testCase);
}

function solution(number, testCase) {
    console.log("Case : ", number);
    console.log("testCase : ", testCase);

    
}

solution(inputC, inputTestCase)