/*
점화식 
일반항의 값을 이전 항 값을 이용하여 푸는 방법
 */

// 규칙을 찾아야하고
/*
1 = 1 (1)
2 = 2 (1+1, 2)
3 = 3 (1 + 1 + 1, 1 + 2, 2 + 1, 3)
4 = 7 (1 + 1 + 1 + 1,
     1 + 1 + 2, 
     1 + 2 + 1,
     2 + 1 + 1,
     2 + 2,
     1 + 3
     3 + 1 )
*/

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


// 처음에 아래와 같이 풀었지만
// 이후 서핑중에 이해하기 더 쉽고 간략하게 짜여있는 코드를 기록함 

var fs = require("fs");
var inputs = fs.readFileSync("/dev/stdin").toString.split("\n").map(v=>Number(v));
var cases = [3, ];
var defaultArr = [0, 1, 2, 4];

for(var i = 1; i<cases; i++) {
    var el = inputs[i];
    for(var j = 4; j<el; j++) {        
        defaultArr[j] = defaultArr[j-1] + defaultArr[j-2] + defaultArr[j-3]
    }
    console.log(defaultArr[el]);
}

//콘솔 입력 받는 변수
const input = [];

//memo[n] : 정수 n을 1, 2, 3의 합으로 나타내는 방법의 수
const memo = [...Array(11)];

const write = (num) => {
  memo[num] = memo[num - 1] + memo[num - 2] + memo[num - 3];
};

require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', function (line) {
    input.push(line.trim());
  })
  .on('close', function () {
    //초기값 설정
    memo[1] = 1;
    memo[2] = 2;
    memo[3] = 4;

    for (let i = 4; i <= 10; i++) {
      //n이 11 미만이므로 10까지 방법의 수 저장
      write(i);
    }

    //테스트 케이스 총 수 입력 변수에서 제거
    input.splice(0, 1);
    //입력에 맞는 방법의 수 메모에서 출력
    input.forEach((numString) => {
      console.log(memo[Number(numString)]);
    });
  });

// 출처 : https://gywlsp.github.io/boj/9095/