// 1. 입력이 빈 문자열인 경우, 빈 문자열을 반환합니다. 
// 2. 문자열 w를 두 "균형잡힌 괄호 문자열" u, v로 분리합니다. 단, u는 "균형잡힌 괄호 문자열"로 더 이상 분리할 수 없어야 하며, v는 빈 문자열이 될 수 있습니다. 
// 3. 문자열 u가 "올바른 괄호 문자열" 이라면 문자열 v에 대해 1단계부터 다시 수행합니다. 
//   3-1. 수행한 결과 문자열을 u에 이어 붙인 후 반환합니다. 
// 4. 문자열 u가 "올바른 괄호 문자열"이 아니라면 아래 과정을 수행합니다. 
//   4-1. 빈 문자열에 첫 번째 문자로 '('를 붙입니다. 
//   4-2. 문자열 v에 대해 1단계부터 재귀적으로 수행한 결과 문자열을 이어 붙입니다. 
//   4-3. ')'를 다시 붙입니다. 
//   4-4. u의 첫 번째와 마지막 문자를 제거하고, 나머지 문자열의 괄호 방향을 뒤집어서 뒤에 붙입니다. 
//   4-5. 생성된 문자열을 반환합니다.
function solution(p) {
    var answer = '';
    // u, v 값 선언
    let u = "";
    let v = "";    

    // 1번
    // 입력이 빈 문자열인 경우 빈 문자열을 반환.
    if (p.length === 0) {
        return p;
    }

    // 2번
    let left = 0;
    let right = 0;
    const stack = [];
     for (let i = 0; i < p.length; i++) {
        if (p[i] === '(') {
            stack.push(true);
            left++;
        } else {
            stack.pop();;
            right++;
        }
        if (left === right) {
            u = p.slice(0, i + 1);
            v = p.slice(i + 1, p.length);
            break;
        }
    }

    // 3번
    if (stack.length === 0) {
        return u + solution(v);
    }  else {
        // 4번
        // 4-1 ~ 4-3
        let answer = "(" + solution(v) + ")";
        let tempArr = "";
        
        // 4-4
        // u = u.slice(1,-1);
        for (let i=1; i < u.length -1; i++) {
            if (u[i] === "(") {
                tempArr += ")"
            } else {
                tempArr += "("
            }
        }
        // console.log(u);
        // console.log(answer);
        answer += tempArr;
        return answer;
    }
}


const n = '()))((()';   // "()(())()"
const n1 = '(()())()';  // "(()())()"
const n2 = ')(';        // "()"
const n3 = '()))((()';  // "()(())()"
console.log(solution(n));
console.log(solution(n1));
console.log(solution(n2));
console.log(solution(n3));

