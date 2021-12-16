// https://tech.kakao.com/2017/09/27/kakao-blind-recruitment-round-1/

// 1S2D*3T
// 2 8 27

// 1D2S#10S
// 1 -2 10

// 1S*2T*3S
// 4 16 3

let testCase = [
    "1S2D*3T",  // 37
    "1D2S#10S", // 9
    "1D2S0T",   // 3
    "1S*2T*3S", // 23
    "1D#2S*3S", // 5
    "1T2D3D#",  // -4
    "1D2S3T* "  // 59
]

function solution(dartResult) {
    let answer = [];
    let result = 0;
    let temp = 0;

    for (let i = 0; i < dartResult.length; i++) {
        // console.log(dartResult[i]);
        if (dartResult[i] >= 0 && dartResult[i] <= 9) {
            if (dartResult[i] == 1 && dartResult[i+1] == 0) {
                temp = 10;
                i++;
            } else {
                temp = parseInt(dartResult[i]);
            }            
        } else if (dartResult[i] == "S") {
            answer.push(temp);
        } else if (dartResult[i] == "D") {
            answer.push(Math.pow(temp, 2));
        } else if (dartResult[i] == "T") {
            answer.push(Math.pow(temp, 3));
        } else if (dartResult[i] == "*") {
            answer[answer.length-1] *= 2;
            answer[answer.length-2] *= 2;
        } else if (dartResult[i] == "#") {
            answer[answer.length-1] *= -1;
        }
    }
    for (let i = 0; i < answer.length; i++) {
        result += answer[i];
    }
    return result;
}

console.log(solution(testCase[0]));
console.log(solution(testCase[1]));
console.log(solution(testCase[2]));
console.log(solution(testCase[3]));
console.log(solution(testCase[4]));
console.log(solution(testCase[5]));
console.log(solution(testCase[6]));
