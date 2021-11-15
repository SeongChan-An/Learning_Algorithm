// `20190923`을 출력합니다.  아래 기준만 만족하면 됩니다.
// 1. 코드 내에 숫자가 없어야 합니다.
//     - 예) console.log(20190923)이라고 하시면 안됩니다.
// 2. 파일 이름이나 경로를 사용해서는 안됩니다.
// 3. 시간, 날짜 함수를 사용해서는 안됩니다.
// 4. 에러 번호 출력을 이용해서는 안됩니다.
// 5. input을 이용해서는 안됩니다.

// https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Regular_Expressions
// 정규식

/*
이 문제에서 알아야 할 기본 지식

Match: 대응되는 문자열을 찾는 String 메소드입니다. 정보를 가지고 있는 배열을 반환합니다. 대응되는 문자열을 찾지 못했다면 null을 반환합니다.
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/match
*/
const input_str = "aacdddddddddgghhh";
let result_str = '';

console.log(
    `${input_str.match(/a/g).length}
    ${Number(input_str.match(/b/g))}
    ${input_str.match(/c/g).length}
    ${input_str.match(/d/g).length}
    ${Number(input_str.match(/e/g))}
    ${Number(input_str.match(/f/g))}
    ${input_str.match(/g/g).length}
    ${input_str.match(/h/g).length}`

)

console.log("case 2");