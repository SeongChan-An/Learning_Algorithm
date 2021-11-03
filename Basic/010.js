// 특정단어를 찾아 인덱스를 반환하기

const word = "Apple iPhone 13";
const keyword = "iPhone";

console.log(word.indexOf(keyword));

let start = word.indexOf(keyword);
let end = keyword.length;
console.log(start);
console.log(end);
console.log(word.split('').splice(start, end));