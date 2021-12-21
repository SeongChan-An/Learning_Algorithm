// 3. 20년도
// 링크 : https://tech.kakao.com/2019/10/02/kakao-blind-recruitment-2020-round1/
// aabbaccc -> a, a, b, b, a, c, c, c -> 2a2ba3c
// aabbaccc -> aa, bb, ac, cc -> aabbaccc
// aabbaccc -> aab, bac, cc -> aabbaccc
// aabbaccc -> aabb, accc -> aabbaccc

// 'aabbaccc'.match(/[a-z]{1}/g);
// 'aabbaccc'.match(/[a-z]{2}/g);

// step 1
function solution(s) {
    let answer = s.length;
    let len = s.length;

    for (let i = 1; i < len/2 + 1; i++) {
        const re = new RegExp(`[a-z]{${i}}`, 'g');
        console.log(re);
        let 잘린문자열 = s.match(re);
        console.log(잘린문자열);
    }
    return answer;
}

solution('aabbaccc');


// step 2
function solution(s) {
    let answer = s.length;
    let len = s.length;

    for (let i = 1; i < len/2 + 1; i++) {
        const re = new RegExp(`[a-z]{${i}}`, 'g');
        console.log(re);
        let 잘린문자열 = s.match(re);
        console.log(잘린문자열);
        압축문자열 = '';
        let count = 1;
        for (let j = 0; j < 잘린문자열.length; j++) {
            if(잘린문자열[j] === 잘린문자열[j+1]){
                count += 1;
            } else if (count === 1) {
                압축문자열 += `${잘린문자열[j]}`;
            } else if (count > 1) {
                압축문자열 += `${count}${잘린문자열[j]}`;
                count = 1;
            }
        }
        console.log(압축문자열);
    }
    return answer;
}

solution('aabbaccc');