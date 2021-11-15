// a = [1, 2, 3, 4]
// b = [a, b, c, d]
// 이런 리스트가 있을 때 **[[1, a], [b, 2], [3, c], [d, 4]]** 
// 이런 식으로 a, b 리스트가 번갈아가면서 출력되게 해주세요.

// python 에서는 zip이라는 함수로 묶어줄 수 있다고 한다. 

a = [1, 2, 3, 4];
b = ['a', 'b', 'c', 'd'];
// let c = a.map((e, i) => [e, i]);
// console.log(c);

// e 는 값, i는 index
// map은 계산에 따른 값을 리턴
let c = a.map(function(e, i ) {
    if (i%2 == 0) {
        return [e, b[i]];
    } else {
        return [b[i], e];
    }
})
console.log('map 사용');
console.log(c);

let arr = [];
// foreach 는 리턴 값이 undefined
a.forEach(function(e, i ) {
    if (i%2 == 0) {
        arr.push([e, b[i]]);
    } else {
        arr.push([b[i], e]);
    }
})

console.log('foreach 사용');
console.log(arr);