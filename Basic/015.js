// 특정 단어의 교체

const word = "hqllo my namq is hyqwon";

// 알아야 될 함수
// split : 값을 원소 단위(입력된 값)로 쪼개서 배열의 원소로 반환
// join : 배열의 원소들을 하나의 문장으로 압축해서 반환
// join 매개변수를 넣지 않으면 기본으로 쉼표 단위로 합침

console.log(word.split("q").join("e"));