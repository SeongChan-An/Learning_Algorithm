// https://www.acmicpc.net/problem/1780
// eotkd4791 님 참고

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '01..Baekjoon/02..Divide_and_conquer/1780.txt';
let [n, ...square] = fs.readFileSync(filePath).toString().trim().split("\n");

// value = value.replace(/\s+/, "");//왼쪽 공백제거
// value = value.replace(/\s+$/g, "");//오른쪽 공백제거
// value = value.replace(/\n/g, "");//행바꿈제거
// value = value.replace(/\r/g, "");//엔터제거

square = square.map((el) => el.trim().split(" "));
// console.log(square);
// console.log("------------------")
let answer = new Array(3).fill(0);

function solution(x, y, length) {
	let isAllSame = true;
    let initNumber = square[x][y];

	for (let row = x; row < x + length; row++) {
		for (let column = y; column < y + length; column++) {
            if (initNumber !== square[row][column]) {
                isAllSame = false;
                break;
            }            
		}
        if (isAllSame === false) break;
	}

    if(isAllSame === true) {
        if (initNumber === '-1') {
            answer[0]++
        } else if (initNumber === '0') {
            answer[1]++
        } else {
            answer[2]++;
        }
        return;
      }

	let divisionSize = Math.floor(length / 3);
    for(let i = x; i < x + length; i += divisionSize) {
        for(let j = y;  j < y + length; j += divisionSize) {
          solution(i, j, divisionSize);
        }
      }
}

// console.log(input);
solution(0, 0, +n);
console.log(answer.join('\n'));