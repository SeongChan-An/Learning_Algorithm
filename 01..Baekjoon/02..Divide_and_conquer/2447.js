// https://www.acmicpc.net/problem/2447

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '01..Baekjoon/02..Divide_and_conquer/2447.txt';
let input = fs.readFileSync(filePath).toString().trim().split("\n");

/*
3x3 이 아래와 같은 형태라고 함
*  *  *
*     *
*  *  *
*/
// (i / 3) % 3 === 1 && (j / 3) % 3 === 1 

let number = +input;
// console.log(number);
let star = "";

function makeStars(i, j, num) {
    if (Math.floor(i % 3) === 1 && Math.floor(j % 3) === 1 ) {            
        star += " ";
    } else {
        if (num === 1) {
            star += "*";
        } else {
            makeStars(Math.floor(i / 3), Math.floor(j / 3), Math.floor(num / 3));
        }
    }
};

for (let i = 0; i < number; i++) {
    for (let j = 0; j < number; j++) {
        makeStars(i, j, number);
    }
    star += "\n";
}
console.log(star);


