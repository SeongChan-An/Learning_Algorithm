const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '01..Baekjoon/01..Greedy/11047.txt';
let input = fs.readFileSync(filePath).toString().split("\n");

let standardArr = input[0].split(" ").map((el) => +el);
// console.log(standardArr);
let CartegoryNumber = standardArr[0];
let Money = standardArr[1];
// console.log(CartegoryNumber);
// console.log(Money);

let changes = [...Array(CartegoryNumber)];
for (let i = 0; i<CartegoryNumber; i++) {
    changes[i] = +input[CartegoryNumber-i];
}
// console.log(changes);

let i = 0;
let count = 0;
while(Money !== 0) {
    // console.log(Money);
    // console.log(changes[i]);
    if (Math.floor((Money) / changes[i]) > 0) {
        count += Math.floor(Money / changes[i]);
        // console.log(Math.floor(Money / changes[i]));        
        Money -= (Math.floor(Money / changes[i]) * changes[i]);
        // console.log(Money);        
    }
    i++;
}
console.log(count);

