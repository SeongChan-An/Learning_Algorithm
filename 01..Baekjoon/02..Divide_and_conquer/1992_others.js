// https://www.acmicpc.net/problem/1992

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '01..Baekjoon/02..Divide_and_conquer/1992.txt';
let input = fs.readFileSync(filePath).toString().split("\n");

let length = input.shift();
let result = "";

function conquer(data, left, top, length) {
	let sum = 0;
	for (let row = 0; row < length; row++) {
		for (let column = 0; column < length; column++) {
			sum += parseInt(data[top+row][left+column]);
		}		
	}

	if (sum === 0) {
		result += "0";
		return;
	} else if (sum === length*length) {
		result += "1";
		return;
	}

	let halfLen = length/2;
	result += "(";
	conquer(data, left, top, halfLen);
	conquer(data, left+halfLen, top, halfLen);
	conquer(data, left, top+halfLen, halfLen);
	conquer(data, left+halfLen, top+halfLen, halfLen);
	result += ")";
}

console.log(input);
conquer(input, 0, 0, length);
console.log(result);