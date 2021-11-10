const nationWidth = {
    'korea': 220877,
    'Rusia': 17098242,
    'China': 9596961,
    'France': 543965,
    'Japan': 377915,
    'England' : 242900,
}

const standardWidth = nationWidth['korea'];
delete nationWidth['korea'];
// console.log(nationWidth);
// entries
// Returns an array of key/values of the enumerable properties of an object
const entry = Object.entries(nationWidth);
console.log(entry);
const values = Object.values(nationWidth);
console.log(values);

// 비교할 값 저장
// 배열의 값에서 최소 최대값을 구하기 위해 apply 사용
let gap = Math.max.apply(null, values);
console.log(gap);
let item = [];

// abs 절대값 구하는 메서드
for (let i in entry) {
    if (gap > Math.abs(entry[i][1]-standardWidth)) {
        gap = Math.abs(entry[i][1]-standardWidth);
        item = entry[i];
    }
}

console.log(item[0], item[1]-standardWidth)