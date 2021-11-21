// 기린은 중국집에서 친구들과 만나기로 하고, 음식을 시켰습니다.
// 음식이 나오고 한참을 기다렸지만 만나기로 한 친구 2명이 오지 않았어요.

// 기린은 배가 너무 고파 혼자 음식을 먹기 시작합니다. 
// 원형 테이블에는 N 개의 음식들이 있습니다.
// 한 개의 음식을 다 먹으면 그 음식의 시계방향으로 K 번째 음식을 먹습니다.
// 하지만 아직 오지 않은 친구들을 위해 2개의 접시를 남겨야 합니다.

// 마지막으로 남는 음식은 어떤 접시인가요?

// 입력은 2개의 정수로 이루어지며 공백으로 구분되어 입력됩니다.
// 첫 번째 숫자가 음식의 개수 N, 두 번째 숫자가 K입니다.
// 첫 번째 가져가는 음식이 K 번째 음식이며 
// 나머지는 첫 번째 음식으로부터 시계방향으로 가져갑니다.

// 입력
// 6 3

// 남은 음식들의 번호를 배열의 형태로 출력합니다.

// 출력
// [3, 5]

// 리스트를 순회하고 리스트의 값을 삭제

const user_input = "6, 3".split(' ');
const n = parseInt(user_input[0], 10);
const k = parseInt(user_input[1], 10);

function solution(n, k) {
    let index = 0;
    let queue = [];
    // queue에 사람을 추가
    for (let i=0; i<n; i++){
        queue.push(i + 1);
    }

    while(queue.length > 2) {
        if (index > queue.length-1) {
            index -= queue.length;
        }        
        // 1, 2, 3, 4, 5, 6
        // 1회차 0번재 제거 1 / 2, 3, 4, 5, 6
        // 2, 3, 4, 5, 6 / index = 2 / queue.length-1 = 4
        // 2회차 2번째 index 제거 4 / 2, 3, 5, 6
        // 2, 3, 5, 6 / index = 4 / queue.length-1 = 3
        // 3회차 0번재 (4 - 4)  제거 2 / 3, 5, 6
        // 3, 5, 6 / index = 2 / ueue.length-1 = 2
        // 4회차 2번째 제거 6 / 3, 5
        // queue.length 2 도달 종료 
        queue.splice(index, 1);
        index += k;
        index -= 1;
    }

    return queue;
}

console.log(solution(n, k));