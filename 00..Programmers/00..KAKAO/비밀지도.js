// 
// (9 | 30).toString(2).replace(/1/g, '#').replace(/0/g, ' ')
// utility module
const zip = (a, b) => a.map((value, index) => [value, b[index]]);
const fillZero = (n, arr) => { return '0'.repeat(n - arr.length) + arr }
const fillSpace = (n, arr) => { return " ".repeat(n - arr.length) + arr } 

let n = 6;
// let arr1 = [9, 20, 28, 18, 11];
let arr1 = [46, 33, 33 ,22, 31, 50];
// let arr2 = [30, 1, 21, 17, 28];
let arr2 = [27 ,56, 19, 14, 14, 10];

function solution(n, arr1, arr2) {
    let answer = [];
    const fillSpace = (n, arr) => { return " ".repeat(n - arr.length) + arr } 
    for (let i = 0; i < n; i++) {
        answer.push(fillSpace(n, (arr1[i] | arr2[i]).
            toString(2).replace(/1/g, "#").replace(/0/g, " ")));
    }
    return answer;
}

function solution2(n, arr1, arr2) {
    let answer = [];
    const zip = (a, b) => a.map((value, index) => [value, b[index]]);
    const fillSpace = (n, arr) => { return ' '.repeat(n - arr.length) + arr }
    for (let [i, j] of zip(arr1, arr2)) {
        answer.push(fillSpace(n, (i | j).
            toString(2).replace(/1/g, "#").replace(/0/g, " ")));
    }
    return answer;
}

console.log(solution(n, arr1, arr2));
console.log(solution2(n, arr1, arr2));