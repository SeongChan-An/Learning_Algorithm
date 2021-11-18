// 행렬 2개가 주어졌을 때 곱할 수 있는 행렬인지 확인하고 곱할 수 있다면 그 결과를 출력하고,
// 곱할 수 없다면 -1을 출력하는 프로그램을 만들어주세요.

// 입력
// a = [[1, 2],
// 		[2, 4]]

// b = [[1, 0],
// 		[0, 3]]

// 출력
// [[1, 6], [2, 12]]

let a = [
    [1, 2],
    [2, 4]
];

let b = [
    [1, 0],
	[0, 3]
];

let a2 = [
    [1, 2],
    [3, 4]
];

let b2 = [
    [5, 6],
	[7, 8]
];

function solution(a, b) {
    let result = [];
    const len = a.length;

    if (a[0].length === b.length) {
        let result = [];
        for (let i=0; i < len; i++) {
            let row = [];
            for (let j=0; j<len; j++) {
                let el = 0;
                for (let k=0; k < len; k++) {
                    el += a[i][k] * b[k][j];
                }
                row.push(el);
            }
            result.push(row);
        }
        return result;
    } else {
        return -1;
    }
}
console.log(solution(a, b));
console.log(solution(a2, b2));



