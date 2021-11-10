// 최대값 구하기

let result = "10 9 8 7 6 5 4 3 2 1";

// map 함수
// map() 메서드는 배열 내의 모든 요소 각각에 대하여 
// 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환합니다.

result = result.split(" ").map( (n) => {
    return parseInt(n, 10);
});

result.sort( (a, b) => {
    return b - a;
});

console.log(result[0]);