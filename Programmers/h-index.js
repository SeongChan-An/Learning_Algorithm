function solution(citations) {
    var answer = 0;
    
    let arr = [];
    arr = citations.sort((a, b) => {
        return b - a;
    })    
    
    console.log("요건 배열 선언한거");
    console.log(arr);
    console.log("원본");
    console.log(citations);
    
    for (let i = 0; i<arr.length; i++) {
             if (i < arr[i]) {
                 answer++;
             }
    }
    console.log("카운트값");
    console.log(answer);
    return answer;
}

const arr = [3, 0, 6, 1, 5];

solution(arr)

console.log(arr);
console.log(arr.sort((a,b) => b - a));