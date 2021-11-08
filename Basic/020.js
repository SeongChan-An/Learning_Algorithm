// 각 자리수의 합

// case 1
let num = "1234";
let sum = 0;

while(num) {
    sum += num%10;
    num = Math.floor(num/10);
}

console.log(sum);

// case 2
// 1부터 20까지의(20을 포함) 모든 숫자를 일렬로 놓고 모든 자릿수의 총 합을 구하세요. 

// 예를 들어 10부터 15까지의 모든 숫자를 일렬로 놓으면 101112131415이고 
// 각 자리의 숫자를 더하면 21입니다. (1+0+1+1+1+2+1+3+1+4+1+5 = 21)

let arr = [];
let result = 0;

for (let i =0; i<20; i++){
    arr[i] = i+1;
}

// foreach

// forEach()는 주어진 callback을 배열에 있는 각 요소에 대해 오름차순으로 한 번씩 실행합니다. 
// 삭제했거나 초기화하지 않은 인덱스 속성에 대해서는 실행하지 않습니다. 


// n이라는 매개변수를 받는다. n은 배열 하나하나의 요소를 말함
arr.forEach((n) => {
    while(n) {
        result += n%10;
        n = Math.floor(n/10);
    }
})

console.log(result);
