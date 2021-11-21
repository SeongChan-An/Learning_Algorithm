// **가장 긴 공통 부분 문자열(Longest Common Subsequence)**이란 

// A, B 두 문자열이 주어졌을 때 두 열에 공통으로 들어 있는 요소로 만들 수 있는 가장 긴 부분열을 말합니다. 

// 여기서 부분열이란 다른 문자열에서 몇몇의 문자가 빠져 있어도 순서가 바뀌지 않은 열을 말합니다.
// 예를 들어 
// S1 = ['T', 'H', 'I', 'S', 'I', 'S', 'S', 'T', 'R', 'I', 'N', 'G', 'S']  
// S2 = ['T', 'H', 'I', 'S', 'I', 'S'] 
// 두 문자열이 있을 때 둘 사이의 부분 공통 문자열의 길이는 ['T', 'H', 'I', 'S', 'I', 'S']의 6개가 됩니다.
// 이처럼 **두 문자열이 주어지면 가장 긴 부분 공통 문자열의 길이를 반환하는 프로그램**을 만들어 주세요.
// 두 개의 문자열이 한 줄에 하나씩 주어집니다. 문자열은 알파벳 대문자로만 구성되며 
// 그 길이는 100글자가 넘어가지 않습니다.
// 출력은 이 두 문자열의 가장 긴 부분 공통 문자열의 길이를 반환하면 됩니다.

const strStandard   = "THISISSTRINGS"
const strInput1     = "THISIS"                  // 6
const strInput2     = "TATHISSKKQQAEW"          // 6
const strInput3     = "KIOTHIKESSISKKQQAEW"     // 3
const strInput4     = "TKHKIKSIS"               // 3

function solution(string) {
    let result = [];
    for(let i = 1; i < string.length + 1; i++) {
        for(let j=0; j < i; j++) {
            // ex) 1회차 : 문장하나  / 2회차 : 문징에서 끝자리 - 1
            result.push(string.slice(j, j + string.length + 1 - i));
        }
    }
    return result;
}

console.log(solution(strStandard));

let ArrayOne = solution(strStandard);
let ArrayTwo = solution(strInput1);

// filter를 이용하여 ArrayTwo에 있는 각 문자열이 있는지 검사하여 Inter에 추가
// filter 요소의 값을 x로 받음.
let inter = ArrayOne.filter(x => ArrayTwo.includes(x));
console.log(inter);
inter.sort((a, b) => {
    return b.length - a.length;
});

console.log(inter[0].length);