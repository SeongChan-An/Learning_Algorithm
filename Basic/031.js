// 1의 개수를 세는 프로그램
/*
0부터 1000까지 1의 개수를 세는 프로그램**을 만들려고 합니다. 
예를 들어 0부터 20까지 1의 개수를 세어본다면 1, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19에 
각각 1이 들어가므로 12개의 1이 있게 됩니다. 11은 1이 2번 들어간 셈이죠.
그렇다면 0부터 1000까지의 수에서 1은 몇 번이나 들어갔을까요? 출력해 주세요.
*/

let str = '';

for (let i = 0; i < 15; i++) {
    str += i;
}

console.log(str);
let count = 0;
// CASE 1 반복!
// for of 문자열을 하나씩 순회 
for (let key of str) {
    if (key == 1) {
        count++;
    }
}
console.log(count);

let count2 = 0;
for (let key in str) {
    // console.log(key);
    if(str[key] == 1) {
        count2++
    }
}
console.log(count2);

// CASE 2
// 정규표현식
console.log(str.match(/1/g));
console.log(str.match(/1/g).length);

// CASE 3 
// 추천하지 않는 방식이지만 원리 이해

const obj ={};
for (let i=0; i < 1000; i++) {
    let tmp = i;
    while (tmp > 0) {
        let num = tmp%10;
        if (obj[num]) {
            obj[num++]++;
        } else {
            obj[num] = 1;
        }
        tmp = parseInt(tmp/10, 10);
    }
}
console.log(obj);