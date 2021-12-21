// https://tech.kakao.com/2018/09/21/kakao-blind-recruitment-for2019-round-1/
// 오픈채팅방

let test = [
    "A 10 !",
    "B 20 !",
    "A 22 @",
    "B 20 @",
    "A 21 @",
]

result = [];

test.forEach( (el) => {
    const [one, two, three] = el.split(" ");
    if (one === "A") {
        if (two >= 20) {
            result.push([two, three]);
        }
    }
});

console.log(result);

// Step 1
let record = [
    "Enter uid1234 Muzi",
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan"
]

function solution() {
    let result = [];
    let answer = [];
    let userInfo = {};

    for (const iterator of record) {
        const [status, uid, nickname] = iterator.split(" ");
        // console.log([status, uid, nickname]);
        if (status === "Enter") {
            userInfo[uid] = nickname;
            result.push([uid, "님이 들어왔습니다."]);
        } else if (status === "Leave") {
            result.push([uid, "님이 나갔습니다."]);
        } else if (status === "Change") {
            userInfo[uid] = nickname;
        }
    }

    // console.log(result);
    for (const [uid, message] of result) {
        answer.push(userInfo[uid] + message);
    }

    return answer;
}

solution(record);

console.log(solution(record));