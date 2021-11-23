let user_input = "((())";

function solution(s) {
    let step=0; 
    for (let i in s) {
        if(s[i] === "(") {
            step += 1;
        } else if (s[i] === ")") {
            step -= 1;
        }
    }
    if (step !== 0){
        return false;
    }
    if (step === 0){
        return true;
    } 
}

console.log(solution(user_input));

let user_input2="{())()(";

function soluton(s) {
    const m = {
        ')':'(',
        '}':'{',
    };
    let stack = [];
    
    for (let i=0; i<e.length; i++){
        if (e[i].includes('(') || e[i].includes('{')){
            stack.push(e[i]);
        } else if (m[e[i]]){
            if (stack.length === 0){
                return false;
            } else{
                let t = m[e[i]];
                if (t != stack.pop()){
                    return false;
                }
            }   
        }
    }
    return stack.length === 0;
}

console.log(solution(user_input2));