// Math.floor : 주어진 값 이하의 가장 큰 정수를 반환

const score = [70, 80, 90];
let sum = 0;

for (arr in score) {
    console.log(score[arr])
    sum += parseInt(score[arr], 10);
}

console.log(Math.floor(sum/score.length));

// 값을 받는 경우
// const score = promt().split(' ');

// Math.pow
// 제곱을 반환하는 함수
const num = ["2", "6"];
console.log(Math.pow(parseInt(num[0], 10), parseInt(num[1], 10)));