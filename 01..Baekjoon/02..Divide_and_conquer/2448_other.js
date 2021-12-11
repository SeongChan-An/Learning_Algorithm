// https://www.acmicpc.net/problem/2448
// epikem 님 코드

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '01..Baekjoon/02..Divide_and_conquer/2448.txt';
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let number = +input;
// console.log(number);
let star = [];

function solve() {
    // 3개의 값으로 나누어줌
    let baseShape = ['  *  ', ' * * ', '*****'];
    let curShape = baseShape;

    // 첫번째 순회일 때 curshape[0].length = 5
    // 두번째 순회일 때 curshape[0].length = 11
    // 세번째 순회일 때 curshape[0].length = 23
    let getNextShape = function getNextShape() {
         let pad = ' '.repeat((curShape[0].length + 1) / 2);
        //  console.log(curShape[0].length)
         let nextShape = [];
         curShape.forEach(function (e) {
            //  console.log(pad + e + pad);
            //  console.log("첫번째");
             nextShape.push(pad + e + pad);            
         });

         curShape.forEach(function (e) {
            //  console.log(e + ' ' + e);
            //  console.log("두번째");
             nextShape.push(e + ' ' + e);
         });
         curShape = nextShape;
    };

    let ii = 3;
    while (ii < number) {
      getNextShape();
    //   console.log(curShape.length);
    //   console.log(curShape)
      ii = curShape.length;
      
    }
    console.log(curShape.join('\n'));
}
solve();