// 대소문자 변경 출력

const str = "AAABBBcccddd";
let arr = [];

for (let i = 0; i < str.length; i++) {
    if(str[i] === str[i].toUpperCase()) {
        arr.push(str[i].toLowerCase());
    } else {
        arr.push(str[i].toUpperCase());
    }
}

console.log(arr.join(""));