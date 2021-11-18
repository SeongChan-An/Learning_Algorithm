// numbers	             return
// [6, 10, 2]	        "6210"
// [3, 30, 34, 5, 9]	"9534330"

const numbers = ["6", "10", "2", "11", "23"];
const numbers2 = ["3", "30", "34", "5" ,"9"];
const numbers3 = [6, 10, 2];
const numbers4= ["3", "30", "34", "5" ,"9", "33"];
const numbers5= ["3", "30", "34", "5" ,"9", "33", "31", "33", "34", "39"];
const numbers6= [0, 0, 0, 0, 0, 0, 0, 0, 0];

function solution(numbers) {   
    // 인접한 인덱스 값끼리 순서를 변경하여 더한 값을 비교하기 위해
    // 문자열로 변경 필요함
    
    let numberString = numbers.map((num) => num.toString());

    numberString.sort((a, b) => {
        return parseInt(b + a) - parseInt(a + b);
    })

    // console.log(numberString);
    // 만들어진 배열 문자열화
    answer = numberString.join('');
    // console.log(answer);
    return answer[0] === '0' ? '0' : answer;
}
// 블로그를 계속 찾아보다 발견한 깔끔한 코드
// https://greedysiru.tistory.com/565
// function solution(numbers) {
//     // number의 요소를 string화
//     const numbersString = numbers.map((num) => String(num));
//     // 정렬하기
//     numbersString.sort((a, b) => {
//       // b + a숫자와 a + b 숫자를 비교해서 내림차순으로 정렬
//       return parseInt(b + a) - parseInt(a + b);
//     })
//     console.log(numbersString);
//     // 만들어진 배열 문자열화
//     const answer = numbersString.join('');
//     return answer[0] === '0' ? '0' : answer;
//   }

// https://webigotr.tistory.com/248
// function solution(numbers) { 
//     var answer = numbers.map(v=>v.toString()).sort((a,b) => 
//     Number(b+a) - Number(a+b)
//     )
//     answer = answer[0] =='0' ? '0' : answer.join(''); 
//     return answer; 
// }

// https://miiingo.tistory.com/343
// function solution(numbers) {
//     var answer = numbers.map((number) => number.toString()).sort((a, b) => (b+a) - (a+b)).join("");
//     return answer.replace(/^0+/, "0");
// }

console.log(solution(numbers));
console.log(solution(numbers2));
console.log(solution(numbers3));
console.log(solution(numbers4));
console.log(solution(numbers5));
console.log(solution(numbers6));
