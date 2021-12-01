const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '01..Baekjoon/01..Greedy/1339.txt';
let input = fs.readFileSync(filePath).toString().split("\n");

let number = +input[0];
let tempArr = [...Array(number)];
for (let i = 0; i < number; i++) {
    tempArr[i] = input[i+1].trim();
}

const alphabetObj = {}; // 자릿수를 누적할 때 객체의 키:값 관계를 이용해보자.
tempArr.map((str) => {
  let size = 1;
  for (let i = str.length - 1; i >= 0; i--) {
    const word = str[i];
    console.log(str[i])
    console.log(alphabetObj[word])
    if (alphabetObj[word]) {
        alphabetObj[word] += size;
    } else {
        alphabetObj[word] = size;
    }
    size *= 10;
  } // 각 단어들에 대해 단어를 구성하는 알파벳들의 자릿수를 객체의 각 알파벳 키에 대응하는 값에 계속 더해준다.
});
console.log(alphabetObj);

const alphabetArr = Object.entries(alphabetObj).sort((a, b) => b[1] - a[1]); 
// [키, 값]들의 배열로 바꿔 값에 따라 내림차순 정렬

let alphaCategory = 9;
let sum = 0;
for (let i = 0; i < alphabetArr.length; i++) {
  sum += alphabetArr[i][1] * alphaCategory--;
} // 가장 큰 자릿수를 가진 알파벳부터 9부터 순차적으로 대입해주고, 합계를 구한다.
console.log(sum);

// https://gobae.tistory.com/48