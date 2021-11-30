// 출처 : https://webclub.tistory.com/21

// C 언어와 마찬가지로 비트로 부정하는 연산자로   -(n+1)  이런 식이 성립
// 문자열 메서드인 indexOf()  로 논리식을 짤 수 있음

var str = '강남역,잠실역,신논현역';
var val = '남';
if (~str.indexOf(val)) { 
    // 해당 문자열이 있다면 
    console.log(!~ str.indexOf(val)); // 이코드를 실행하라. 
} else { 
    console.log(222); 
}

// ~str.indexOf(val)
// 있다면 -(n+1) 의 값을 반환하고 
// 없다면 0을 반환한다

var val2 = '시'; 
if (!~str.indexOf(val2)) { // val2가 없다면 
    console.log(~ str.indexOf(val2)); // 이 코드를 실행하라. 
} else { 
    console.log(222); 
}

// (~~) 연산자
// Math.floor() 와 동등하게 쓰이는 연산자.

var num = '2234.5678'; 
console.log(~~num); // 2234

