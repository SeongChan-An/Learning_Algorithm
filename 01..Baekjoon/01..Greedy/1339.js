const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '01..Baekjoon/01..Greedy/1339.txt';
let input = fs.readFileSync(filePath).toString().split("\n");

let number = +input[0];
// 테스트
// let str = input[1].trim();
// console.log(str);
// console.log(str.length);
let tempArr = [...Array(number)];
let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < number; i++) {
    tempArr[i] = input[i+1].trim();
}
console.log(tempArr);

// tempArr.sort((a, b) => {
//     if (a.length < b.length) {
//         return 1;
//     } else {
//         return -1;
//     }
// })

// 비교해서 저장할 객체 
let obj = {};
tempArr.forEach((e) => {
    [...e].forEach((el, id) => {
      if (obj[el] === undefined) {
          console.log(e.length, id);
        obj[el] = Math.pow(10, e.length - 1 - id);
      } else {
        console.log(e.length, id);
        obj[el] += Math.pow(10, e.length - 1 - id);
      }
    });
  });

  
console.log(obj);

let temp = Object.entries(obj);
temp.sort((a, b) => b[1] - a[1]);
console.log(temp);
console.log(
    temp.reduce((acc, val) => {
      return acc + val[1] * arr.pop();
    }, 0)
  );