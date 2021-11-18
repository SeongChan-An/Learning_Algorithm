function solution(p) {
    if (!p.length) return '';
    let u = '';
    let v = '';

    let count1 = 0;
    let count2 = 0;
    const stack = [];

    for (let i = 0; i < p.length; i++) {
        if (p[i] === '(') {
            stack.push(true);
            count1++;
        } else {
            stack.pop();;
            count2++;
        }
        if (count1 === count2) {
            u = p.slice(0, i + 1);
            v = p.slice(i + 1, p.length);
            break;
        }
    }

    if (stack.length === 0) {
        return u + solution(v);
    } else {
        let result = '';
        result += '(';
        result += solution(v);
        result += ')';
        u = u.slice(1,-1);
        let u2 = '';
        for(let i = 0; i < u.length; i++){
            if(u[i] === '('){
                u2 += ')';
            }else{
                u2 += '(';
            }
        }
        result += u2;
        return result;
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

