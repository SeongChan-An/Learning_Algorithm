function solution(citations) {
    var answer = 0;
    
    let arr = [];
    arr = citations.sort((a, b) => {
        return b - a;
    })    
    
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
const arr2 = [3, 2, 4, 1, 5];

solution(arr)
solution(arr2)

 console.log(arr);
 console.log(arr.sort((a,b) => b - a));