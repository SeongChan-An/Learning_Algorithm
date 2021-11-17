// 입력 : aaabbbcdddd
// 출력 : a3b3c1d4

const input_str = "aaabbbcdddd";
let result_str = '';
let store_str = input_str[0];
let count = 0;

for (let i of input_str) {
    console.log(i);
    if (i == store_str) {
        count += 1;
    } else {
        result_str += store_str + String(count);
        store_str = i;
        count = 1;
    }
}

console.log("case 1");
console.log(result_str);
