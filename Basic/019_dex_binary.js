// 10진수 > 2진수
let dec = "32";
let arrBinary = [];

while(dec) {
    arrBinary.push(dec%2);
    dec = Math.floor(dec /2);
}

console.log(arrBinary.reverse().join(""));

let dec2 = 160;
console.log(dec2.toString(2));