// https://www.acmicpc.net/problem/2447
// 준홍님의 코드

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '01..Baekjoon/02..Divide_and_conquer/2447.txt';
let input = fs.readFileSync(filePath).toString().trim().split("\n");

N = +input;

const getTop = shape => {
    const arr = shape.split('\n');
    return arr.map(v => v.repeat(3)).join('\n');
  };
  
  const getMiddle = shape => {
    const arr = shape.split('\n');
    const length = arr[0].length;
    return arr.map(v => v + ' '.repeat(length) + v).join('\n');
  };
  
  const solve = N => {
    let shape = '*';
    while (N !== 1) {
      const [ top, middle ] = [ getTop(shape), getMiddle(shape) ];
      shape = [ top, middle, top ].join('\n');
      N /= 3;
    }
    console.log(shape);
  };
  
  solve(N);

