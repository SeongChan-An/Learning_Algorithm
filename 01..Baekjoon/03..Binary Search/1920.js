// https://www.acmicpc.net/problem/1920

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '01..Baekjoon/03..Binary Search/1920.txt';
let input = fs.readFileSync(filePath).toString().trim().split("\n");


const array1 = input[1].split(" ").map(el => +el);
const array2 = input[3].split(" ").map(el => +el);

console.log(array1);
console.log(array2);

function solution(arr1, arr2) {
    let answer = [];
    arr2.forEach( (el) => {
        answer.push(arr1.includes(el) ? 1 : 0 );
    })
    console.log(answer.join("\n"));
}

solution(array1, array2);

// 백준시간초과
// 다른방법필요

console.log("Binary Search")
function solution2(arr1, arr2) {
    arr1.sort();
    
    arr2.forEach( el => {
        let i = 0;
        let range = arr1.length;
        let answer = 0;
        while(i<=range) {
            let middle = parseInt((i + range) / 2);

            if (el === arr1[middle]) {
                answer = 1;
                break;
            } else if (el < arr1[middle]) {
                // 탐색 범위를 작은 쪽으로
                range = middle - 1;
            } else {
                // 탐색 범위를 높은 쪽으로
                i = middle + 1;
            }
        }
        console.log(answer);
    })
}

solution2(array1, array2);

// Set, Has  사용
console.log("use Set, Has")

function solution3(arr1, arr2) {
    arr1 = new Set(arr1);
    // console.log(arr1);
    arr2.forEach( el => {
        arr1.has(el) ? console.log(1) : console.log(0)
    });
}
solution3(array1, array2);