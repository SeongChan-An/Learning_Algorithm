// https://www.acmicpc.net/problem/1182

/*
백준에는 아래와 같이 기본 Template 이 필요함

//콘솔 입력 받는 변수
const input = [];

require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', function (line) {
    input.push(line.trim());
  })
  .on('close', function () {
    // input 값에 대한 처리    
  });
*/

let input = [5, 0, -7, -3, -2, -5, 8];

let standardNumber = input[1];

// 2번째부터 순회해야함
// 


function solution(params) {
    // \n 기준으로 나눔 : ex) 5, 0 
    const input = params.split("\n")
    console.log(input);
    const conditions = input[0].split(" ").map(a =>{
        return +a;  // 값을 숫자로 
    })  
    console.log(conditions);
    const n = conditions[0] // 5
    const s = conditions[1] // 0 
  
    const array = input[1].split(" ").map(a => +a)
  
    // 인덱스 i 까지 배열에서 가질 수 잇는 모든 부분 수열의 합을 배열에 저장한다.
    const dp = new Array(n).fill(null).map((a, i) => [array[i]])
    console.log(dp);
    console.log(dp[1][0]);
    console.log(dp[0][0])
    console.log(dp[0][0])
    for (let i = 1; i < n; i++) {
      for (let j = 0; j < i; j++) {
        for (let k = 0; k < dp[j].length; k++) {
          dp[i].push(dp[i][0] + dp[j][k])
        }
      }
    }

    console.log(dp);
  
    // dp를 돌면서 부분수열의 합이 s와 같은 경우 answer++를 해준다.
    let answer = 0
    dp.forEach(a =>
      a.forEach(a => {
        if (a == s) answer++
      })
    )
  
    console.log(answer)
  }
  
  solution(`5 0
  -7 -3 -2 5 8`)


//   ///////////////////////////////////////////////
const sol = (input) => {
    const [N, S] = input[0].split(" ").map(Number);
    input = input[1].split(" ").map(Number);
    let count = 0;
  
    const pick = [];
    function dfs(L) {
      if (L === N) {
        const sum = pick.reduce((sum, val) => sum + val, 0);
        if (sum === S) count++;
        return;
      }
      pick.push(input[L]);
      dfs(L + 1);
      pick.pop();
      dfs(L + 1);
    }
    dfs(0);
  
    if (S === 0) count--; // pick이 아무것도 선택하지 않았을 때 sum=0이므로 정답보다 1이 더 크므로, 감소시켜준다.
    return count;
  };
  
  // 백준에서 입력을 받는 코드
  const input = [];
  require("readline")
    .createInterface(process.stdin, process.stdout)
    .on("line", (line) => {
      input.push(line);
    })
    .on("close", () => {
      console.log(sol(input));
      process.exit();
    });


