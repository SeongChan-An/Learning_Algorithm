// 입력되는 값을 조건에 따라 계산하여 반환하는

const list = ["20", "5", "50", "20", "20", "10", "20"]

const weightLimit = "100";
const memberCount = list.length;

let count = 0;
let totalWeight = 0;

for (let i = 0; i < memberCount; i++) {
    totalWeight += parseInt(list[i], 10); /*+ parseInt("50", 10);*/
    if (totalWeight <= weightLimit) {
        count++;
    }
}

console.log(count);