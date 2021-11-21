// 다음의 값이 주어졌을 때
//     l = [10, 20, 25, 27, 34, 35, 39]
// n번 순회를 결정합니다. 예를 들어 2번 순회하면
//     l = [35, 39, 10, 20, 25, 27, 34]


// 여기서 변하기 전 원소와 변한 후 원소의 값의 차가 
// 가장 작은 값을 출력하는 프로그램을 작성하세요.

// 예를 들어 2번 순회했을 때 변하기 전의 리스트와 변한 후의 리스트의 값은 아래와 같습니다.

// 순회전_리스트 = [10, 20, 25, 27, 34, 35, 39]
// 순회후_리스트 = [35, 39, 10, 20, 25, 27, 34]
// 리스트의_차 = [25, 19, 15, 7, 9, 8, 5]

// 39와 변한 후의 34 값의 차가 5이므로 리스트의 차 중 최솟값입니다. 
// 따라서 39와 34의 인덱스인 6과 39와 34를 출력하는 프로그램을 만들어주세요.

// 입력
// 순회횟수는 : 2

// 출력
// index : 6
// value : 39, 34

// ---

// 입력
// 순회횟수는 : 3

// 출력
// index : 5
// value : 35, 25

const list = [10, 20, 25, 27, 34, 35, 39]; //기존 입력 값
// const n = parseInt(prompt('순회횟수는?), 10);
const number = 2;
const number2 = 3;

function rotate(inputList, innputNumber){
    // 그대로 복사 , tempArr = inL 할 경우 참조가 됨.
    let tempList = inputList.slice();
    let tempArr = [];

    for (let i = 0; i < innputNumber; i++) {
        //  제일 끝 자리를 앞에 넣고 옮겨줌
        tempList.unshift(tempList.pop());   
    }

    for (let idx in tempList) {
        tempArr.push(Math.abs(inputList[idx] - tempList[idx]));
    }
    const minNumber = Math.min.apply(null, tempArr);
    let index = tempArr.indexOf(minNumber);

    console.log(index);
    console.log(inputList[index], tempList[index]);
}

rotate(list, number);
rotate(list, number2);