/*
총 문자열의 길이는 50으로 제한하고 사용자가 문자열을 입력하면 
그 문자열을 가운데 정렬을 해주고, 나머지 빈 부분에는 '='을 채워 넣어주세요.
*/

const str = "hi";

const inputNumber = 25 + parseInt((str.length/2), 10);

// 좌측 채우기
// padStart 주어진 길이만큼 주어진 문자열을 채워줌
// 길이, 채울 문자열
const left = str.padStart(inputNumber, '=');
console.log(left);
console.log(left.length);

// 우측 채우기
const right = left.padEnd(50, '=');
console.log(right);
console.log(right.length);
