// 버블정렬 

function bubble(arr) {
    // arr을 result 에 저장
    let result = arr.slice();

    for (let i = 0; i < result.length - 1; i++ ) {
        for (let j = 0; j < result.length -i; j++) {
            if (result[j] > result[j + 1]) {
                let temp = result[j];
                result[j] = result[j+1];
                result[j+1] = temp;
            }
        }
    }
    return result;
}

const items = "9 5 3 2 6 7".split(" ").map((n) => {
    return parseInt(n, 10);
})

console.log(bubble(items));