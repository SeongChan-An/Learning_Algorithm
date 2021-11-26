// 숫자 1723에서 두 개의 수를 뽑으면 [17, 12, 13, 72, 73, 23]을 만들 수 있습니다.
// 이 중 가장 큰 수는 73입니다

// 어떤 수 n에서 k개의 수를 선택하여 만들 수 있는 수 중에서 가장 큰 수

function solution(chars, length) {
    let result = [];

    const f = (pre, chars) => {
        for (let i = 0; i < chars.length; i++) {
            result.push(pre + chars[i]);

            f(pre + chars[i], chars.slice(i + 1));
        }
    }

    f("", chars);
    console.log(result);

    result = result.filter(x => x.length === length);
    console.log(result);

    result.sort((a, b) => b - a);

    return result[0];
}

const num = "1723";
const len = 2;
console.log(solution(num, len));