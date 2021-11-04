// 중복확인

const array = ["A", "B", "A", "C", "C", "A", "A", "B", "B", "A"];
let result = {};
let most = "";

for (let index in array) {
    let val = array[index];
    result[val] = result[val] === undefined ? 1 : result[val] = result[val] + 1;
}

console.log(result);

// Reduce 함수
// 매개변수로 함수를 받아서 배열의 원소를 
most = Object.keys(result).reduce(function(a, b){
    console.log(a, b);
    return result[a] > result[b] ? a : b;
});

console.log(most);
console.log(`${most} 가 총 ${result[most]} 개 포함되어 있습니다}`);