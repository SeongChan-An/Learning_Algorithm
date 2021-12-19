// https://www.acmicpc.net/problem/12015
// 수열 A가 주어졌을 때, 가장 긴 증가하는 부분 수열을 구하는 프로그램을 작성하시오.

// 예를 들어, 수열 A = {10, 20, 10, 30, 20, 50} 인 경우에 가장 긴 증가하는 부분 수열은 A = {10, 20, 10, 30, 20, 50} 이고, 길이는 4이다.
// 첫째 줄에 수열 A의 크기 N (1 ≤ N ≤ 1,000,000)이 주어진다.

// 둘째 줄에는 수열 A를 이루고 있는 Ai가 주어진다. (1 ≤ Ai ≤ 1,000,000)
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '01..Baekjoon/03..Binary Search/12015.txt';
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input.shift();
// input = input[0].split(" ").map(el => +el);
// console.log(input);
const nums = input.shift().split(" ").map(e => Number(e))
const list = [nums[0]]
// console.log(nums);
// console.log(list);

function solution(input) {
    const lowerBound = (target) => {
        let low = 0
        let high = list.length

        while (low < high) {
            let mid = Math.floor((low + high) / 2)

            if(list[mid] < target){
                low = mid+1
            } else {
                high = mid
            }
        }
        if(list[high] >= target) return high
    }

    for (let i = 1; i < nums.length; i++) {
        const num = nums[i]
        if(list[list.length-1] < num){
            list.push(num)
        } else {
            const idx = lowerBound(num)
            list[idx] = num
        }
        
    }
    console.log(list.length);
}

solution(input);