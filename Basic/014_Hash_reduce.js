// 

const scores = ["77", "88", "97", "92", "97", "86", "77", "99", "97", "85", "80", "79"];

scores.sort(function (a, b) {
    // 오름차순
    return a - b;
});

console.log(console);

let top3 = [];
let count = 0;

while (top3.length < 4) {
    // 가장 끝에 있는 원소를 빼내기
    let value = scores.pop();
    // includes 함수 
    // 배열안의 원소중에 value 값이 있다면 true 없으면 false를 반환함 
    if (!top3.includes(value)){        
            top3.push(value);
    }
    count++;    
}

console.log(top3.slice(0, 3), count-1);

//
const scores2 = ["77", "88", "97", "92", "97", "86", "77", "99", "97", "85", "80", "79"];

// 해시로 카운트 합니다. 키는 점수, 값은 학생 수
const counts = scores2.reduce((a, b) => {
    a[b] = a[b] ? ++a[b] : 1;
    return a;
}, {});

// 키 값으로 3등까지 뽑아냅니다.
const candidates = Object.keys(counts).sort((a, b) => b - a).slice(0, 3);

// 3등 까지의 키 값을 가져와서 합산합니다.
const results = candidates.reduce( (a, b) => {
    a += counts[b];
    return a;
}, 0);

console.log(counts);
console.log(candidates);
console.log(results);
