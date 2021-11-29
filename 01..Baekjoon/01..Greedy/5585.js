const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '01..Baekjoon/01..Greedy/5585.txt';
let input = fs.readFileSync(filePath).toString().trim();

input = +input;
let count = 0;
let standardNumber = 1000 - input;

// 잔돈의 종류 500엔, 100엔, 50엔, 10엔, 5엔, 1엔
const Categorychange = [...Array(11)];
Categorychange[0] = 500;
Categorychange[1] = 100;
Categorychange[2] = 50;
Categorychange[3] = 10;
Categorychange[4] = 5;
Categorychange[5] = 1;

// 단순 for 문으로 구현이 되는가
// 아래의 구간이 반복되어야 함
// while(standardNumber !== 0) {
//     console.log(standardNumber);
//     if (Math.floor((standardNumber)/500) > 0) {
//         count += Math.floor(Number(standardNumber/500));
//         console.log(Math.floor(standardNumber/500));        
//         standardNumber -= (count*500);
//         console.log(standardNumber);
//     } 
// }

// 위의 코드를 수정
let i = 0
while(standardNumber !== 0) {
    // console.log(standardNumber);
    // console.log(Categorychange[i]);
    if (Math.floor((standardNumber) / Categorychange[i]) > 0) {
        count += Math.floor(standardNumber / Categorychange[i]);
        // console.log(Math.floor(standardNumber / Categorychange[i]));        
        standardNumber -= (Math.floor(standardNumber / Categorychange[i]) * Categorychange[i]);
        // console.log(standardNumber);        
    }
    i++;
}

console.log(count);


