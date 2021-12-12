// https://www.acmicpc.net/problem/1780
// 1992 문제와 비슷

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '01..Baekjoon/02..Divide_and_conquer/1780.txt';
let [n, ...square] = fs.readFileSync(filePath).toString().trim().split("\n");

square = square.map((el) => el.trim().split(" "));
// console.log(square);

function isCheck(x, y, size) {
  let first = square[x][y];
  for (let row = x; row < x + size; row++) {
		for (let column = y; column < y + size; column++) {
            if (first !== square[row][column]) {
                return false;
            }            
		}     
	}
  return true;
}

let answer = new Array(3).fill(0);
function solution(x, y, size) {
  if (isCheck(x, y, size)) {
    if (square[x][y] === "-1") {
      answer[0]++;
    } else if (square[x][y] === "0") {
      answer[1]++;
    } else if (square[x][y] === "1") {
      answer[2]++;
    }
  } else {
    let devideSize = size/3;
    solution(x, y, devideSize);
    solution(x, y + devideSize, devideSize);
    solution(x, y + 2 * devideSize, devideSize);

    solution(x + devideSize, y, devideSize);
    solution(x + devideSize, y + devideSize, devideSize);
    solution(x + devideSize, y + 2 * devideSize, devideSize);

    solution(x + 2 * devideSize, y, devideSize);
    solution(x + 2 * devideSize, y + devideSize, devideSize);
    solution(x + 2 * devideSize, y + 2 * devideSize, devideSize);
  }
}

solution(0, 0, +n);
console.log(answer);