// https://www.acmicpc.net/problem/10972

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '01..Baekjoon/warm-up/Number_10972_permutation.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

// console.log(input);
let N = +input[0];
let M = input[1].split(" ").map((item) => +item);
// console.log(N);
// console.log(M);
console.log(solution());

// 순열에 대해 공부가 필요
// 정했던 시간안에 풀지못하여 아래 블로그의 코드를 기록함 
// 추후에 다시 풀기
// https://amunre21.github.io/boj/1-10972/
function solution() {
    // Write your code
    let tmp = [];
    let broke = -1;
    let min = -1;

    for(let i = N-1; i>=0; i--) {
        if(min > M[i]){
            broke = i;
            break;
        }
        tmp.push(M[i]);
        min = M[i];
    }
    
    if(broke == -1)return -1;
    for(let i =0;i<tmp.length;i++) {
        if(M[broke] < tmp[i]){
            let change = tmp.splice(i, 1, M[broke]);
            M[broke] = change.join('');
            break;
        }
    }  
    return (M.slice(0, broke+1).join(' ') +' '+ tmp.join(' '));

}

// 순열은 