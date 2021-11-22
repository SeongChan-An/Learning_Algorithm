function solution(p) {
    var answer = "";
  
    if (p == "") {
      return "";
    } else {
      let base = 0;
      let index = 0;
      while (index < p.length) {
        if (p[index] === "(") base++;
        else if (p[index] === ")") base--;
        if (base === 0) break;
        index++;
      }
      let u = p.substring(0, index + 1); // u
      let v = p.substring(index + 1); // v
  
      let isRight = true;
      for (let i = 0; i < u.length; i++) {
        // u 검사
        if (u[i] === "(") base++;
        else if (u[i] === ")") base--;
        if (base < 0) {
          isRight = false;
          break;
        }
      }
  
      if (isRight) {
        // 올바른 괄호 문자열
        answer += u + solution(v);
      } else {
        // 올바른 괄호 문자열 X
        answer += "(" + solution(v) + ")";
        u = u.substring(1, u.length - 1);
        u = u.replace(/\(/g, "#");
        u = u.replace(/\)/g, "(");
        u = u.replace(/\#/g, ")");
  
        answer += u;
      }
    }
  
    return answer;
  }

  const n = '()))((()';   // "()(())()"
  const n1 = '(()())()';  // "(()())()"
  const n2 = ')(';        // "()"
  const n3 = '()))((()';  // "()(())()"
  console.log(solution(n));
  console.log(solution(n1));
  console.log(solution(n2));
  console.log(solution(n3));