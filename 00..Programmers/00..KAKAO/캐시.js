// https://programmers.co.kr/learn/courses/30/lessons/17680
// 페이지 교체 알고리즘
// LRU

let testCase = [
    [3, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"] ],
    [3, ["Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul"]],
    [2, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"]],
    [5, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"]],
    [2, ["Jeju", "Pangyo", "NewYork", "newyork"]],
    [0, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA"]]
]

function solution(cacheSize, cities) {
    let time = 0;
    let cache = [];
    for (let i = 0; i < cities.length; i++) {
        let city = cities[i].toLowerCase();
        let index = cache.indexOf(city);
        if (index !== -1) {
            // hit
            cache.splice(index, 1);
            cache.push(city);
            time += 1;
        } else {
            // miss
            time += 5;
            cache.push(city);
            if (cacheSize < cache.length) {
                cache.shift();
            }
        }
    }
    return time;
}

// for (let i = 0; i < testCase.length; i++ ) {
//     console.log(solution(testCase[i][0], testCase[i][1]));
// }

for (const [cache, cities] of testCase) {
    console.log(solution(cache, cities));
}
