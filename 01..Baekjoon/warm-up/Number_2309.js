// https://www.acmicpc.net/problem/2309

const fs = require("fs");
let input = fs.readFileSync("01..Baekjoon/Number_2309.txt").toString();

input = input.split("\n").map(a => +a);

function solution (_input) {

    console.log(_input);
    console.log(_input.length);

    // reduce 함수를 이용하여 총 합계를 구해줌
    const sum = _input.reduce(function add(sum, currValue) {
        return sum + currValue;
    }, 0);
    console.log(sum);
    
    let sorted = _input.sort((a, b) => a - b);
    console.log(sorted);

    let first = 0;
    let second = 0;
    for (let i = 0; i < _input.length-1; i++) {
        for (let j = i + 1; j < _input.length; j++) {
            if (sum - _input[i] - _input[j] == 100) {
                first = i;
                second = j;
                break;
            }
        }
    }

    for (let idx in sorted) {
        if (idx != first && idx != second) {
            console.log(sorted[idx] + "\n");
        }
    }
}

console.log(solution(input));

/*
다른사람의 풀이
let nums = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(i => parseInt(i));
let arr;
for (let i=0; i<8; i++) {
    for (let j=i+1; j<9; j++) {
        if (nums.reduce((sum, item) => sum + item, 0) === nums[i] + nums[j] + 100) {
            arr = nums.filter(item => item !== nums[i] && item !== nums[j]);
            break;
        }
    }
    if (!!arr) break;
}
arr.sort((a, b) => a - b);
for(let i=0; i<7; i++) console.log(arr[i]);


case 2 
  const heights = people.map(Number).sort((a, b) => a - b);
    const sum = heights.reduce((acc, cur) => acc + cur);
    const minus = sum - 100;

    let check1, check2;
    for (let i = 0; i < 8; i++) {
        for (let j = i + 1; j < 9; j++) {
            if (heights[i] + heights[j] === minus) {
                [check1, check2] = [i, j];
            }
        }
    }

    for (let i = 0; i < 9; i++) {
        if (i !== check1 && i !== check2) {
            console.log(heights[i]);
        }
    }


*/
