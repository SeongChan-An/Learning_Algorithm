// 369 게임을 하는데 조금 이상한 규칙이 있습니다. 3이나 6, 9 일 때만 박수를 쳐야합니다. 예를 들어 13, 16과 같이 3과 6, 9 만으로 된 숫자가 아닐 경우엔 박수를 치지 않습니다.
// 수현이는 박수를 몇 번 쳤는지 확인하고 싶습니다. 36일 때 박수를 쳤다면 박수를 친 횟수는 5번입니다.

// n을 입력하면 박수를 몇 번 쳤는지 그 숫자를 출력해주세요.


// 입력
// '93'

// 출력
// 10

// 분석
/*
    숫자    도출된 식       총합
    3       1               1
    6       1               2
    9       1               3
    33      1*3 + 1         4
    36      1*3 + 2         5
    39      1*3 + 3         6
    63      2*3 + 1         7
    ...
    93      3*3 + 1         10
   333      1*9 + 1*3 + 1   13  
*/

function solution(n) {
    let answer = 0;
    let count = 1;

    const obj = {
        3 : 1,
        6 : 2,
        9 : 3,
    };

    while(n.length !== 0) {
        answer += obj[parseInt(n.pop(), 10)] * count;
        console.log(answer);
        count *= 3;
    }
    
    return answer;
}

const user_input = '93'.split('');
console.log(user_input);
console.log(solution(user_input));