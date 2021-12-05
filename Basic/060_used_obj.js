// 천하제일 먹기 대회가 개최되었습니다.
// 이 대회는 정해진 시간이 끝난 후 음식을 먹은 그릇 개수를 파악한 후 각 선수들의 등수를 매깁니다. 

// 1. 같은 이름의 선수는 없습니다.
// 2. 접시의 수가 같은 경우는 없습니다.

// 입력 예1)
// 손오공 야모챠 메지터 비콜로
// 70 10 55 40


// 출력 예1)**
// {'손오공': 1, '메지터': 2, '비콜로': 3, '야모챠': 4}

// ++
// ["홍길동","엄석대","연개소문","김첨지"]
// [2, 1, 10, 0]

// {'연개소문': 1, '홍길동': 2, '엄석대': 3, '김첨지': 4}

const name = "손오공 야모챠 메지터 비콜로".split(" ");
const point = "70 10 55 40".split(" ");
console.log(point);
const point_int = point.map(a => parseInt(a, 10));
console.log(point_int);

function sol(name, point) {
    let temp = [];
    for (let i of name){
      let obj = {};
      obj['name'] = i;
      obj['value'] = point[name.indexOf(i)];
      temp.push(obj);
    }
    // console.log(temp);
  
    temp.sort(function (a, b){
      return a.value < b.value ? 1: a.value > b.value ? -1: 0;
    })
  
    console.log(temp);
  
    let result = {};
    for (let i of temp){
      // console.log(i);
      result[i['name']] = temp.indexOf(i) + 1;
    };
  
    return result;
  }
  
  console.log(sol(name, point_int));
