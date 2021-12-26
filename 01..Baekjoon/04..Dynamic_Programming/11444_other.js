// 	jun93920 님
/*
    문제 : 피보나치 수 6 (https://www.acmicpc.net/problem/11444)
    난이도 : 골드 3
*/
const fs = require('fs');

const stdin = (
  process.platform === 'linux' ? fs.readFileSync('/dev/stdin').toString() : `1000`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = BigInt(input());
const MOD = 1000000007n;
const origin = [
  [1n, 1n],
  [1n, 0n],
];

let A = [
  [1n, 1n],
  [1n, 0n],
];

console.log(Number(pow(A, N - 1n)[0][0]));

function pow(a, exp) {
  if (exp === 1n || exp === 0n) {
    return a;
  }

  let ret = pow(a, exp / 2n);

  ret = multiply(ret, ret);

  if (exp % 2n === 1n) {
    ret = multiply(ret, origin);
  }

  return ret;
}

function multiply(o1, o2) {
  // https://blog.naver.com/yebinp1102/222561620123
  let ret = Array.from({ length: 2 }, () => new Array(2).fill(0n));
  for (let k = 0; k < 2; k++) {
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 2; j++) {
        ret[i][j] += o1[i][k] * o2[k][j];
        ret[i][j] %= MOD;
      }
    }
  }
  return ret;
}
