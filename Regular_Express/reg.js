// console 테스트
let s = 'Monday Tuesday Wednesday Thursday Friday'
s.match(/(on|ues)|(rida)/g);

let 문자열 = '6746-29301-28391 신한은행'
//match(패턴)
문자열.match(/[0-9]{4}/g);
문자열.match(/[0-9]{4,5}/g);
//'신한은행 !!! 6746 29301 28391'
문자열.match(/[0-9]{4,5}/g).join('!!');
문자열.match(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]+/g)+'!!!'+문자열.match(/[0-9]{4,5}/g).join(' ');
문자열.match(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]+/g)+' !!! '+문자열.match(/[0-9]{4,5}/g).join(' ');

문자열 = '[(name, leehojun), (age, 10), (height, 180), (email, paul-lab@naver.com)]'

문자열.match(/\[\]/g);
문자열.match(/\([a-zA-Z0-9, ]\)/g);
문자열.match(/\([a-zA-Z0-9, ]+\)/g);
문자열.match(/\([a-zA-Z0-9 ]+,[a-zA-Z0-9 ]+\)/g);
문자열.match(/[a-zA-Z0-9 ]/g);
문자열.match(/[a-zA-Z0-9 ]+/g);
문자열.match(/[a-zA-Z0-9]+/g);
문자열.match(/\([a-zA-Z0-9, -@]+\)/g);
문자열.match(/\([a-zA-Z0-9, -@]+\)/g).map((e)=>e.split(', '));
문자열.match(/\([a-zA-Z0-9, -@]+\)/g).map((e)=>e.split(', ').remove(')').remove('('));

문자열.match(/\([a-zA-Z0-9, -@]+\)/g).map((e)=>e.replace(')', '').replace('(', '').split(', '));

문자열.match(/\([a-zA-Z0-9, -@]+\)/g).map((e)=>e.replace(/)/g, '').replace(/)/g, '').split(', '));

문자열.match(/\([a-zA-Z0-9, -@]+\)/g).map((e)=>e.replace(/\)/g, '').replace(/\)/g, '').split(', '));

문자열.match(/\([a-zA-Z0-9, -@]+\)/g).map((e)=>e.replace(/\)/g, '').replace(/\(/g, '').split(', '));