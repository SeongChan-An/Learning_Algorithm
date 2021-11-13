/*
**숫자를 입력받고 천 단위로 콤마(,)를 찍어주세요.**
예를 들어, **123456789**를 입력받았으면 **123,456,789**를 출력해야 합니다.
*/

function comma(str) {
    if (str.length < 4) {
        return str;
    } else {
        // 주의 앞에 3자리를 자른 값을 재귀함수로 넘기지 않으면 Maximum Call Stack 이 뜬다.
        // 무한재귀호출.. 당연한건데 생각없이 쓰면 안된다.. 
        return comma(str.slice(0, str.length - 3)) + "," + str.slice(str.length - 3);
    }
}
// console.log("12345678", slice(3,7))
console.log(comma("123456789"));
