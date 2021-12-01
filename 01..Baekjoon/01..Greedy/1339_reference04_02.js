/**
 * 코드 자체를 이해하기 위해서
 */

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '01..Baekjoon/01..Greedy/1339.txt';
let input = fs.readFileSync(filePath).toString().split("\n");

let number = +input[0];
let tempArr = [...Array(number)];
for (let i = 0; i < number; i++) {
    tempArr[i] = input[i+1].trim();
}
console.log(input);

const getPermutations = function* (elements) {
  if (elements.length === 1) {
      yield elements;
  } else {
      const [first, ...rest] = elements;
      for (const a of getPermutations(rest)) {
          for (let i = 0; i < elements.length; i++) {
              const start = a.slice(0, i);
              const ended = a.slice(i);

              yield [...start, first, ...ended];
          }
      }
  }
};

const isMax = function* (iterable) {
  for (const a of iterable) {
      const numberChanged = tempArr
          .map((el) => {
              const arr = el.split("");
              return arr
                  .map((el) => {
                      return a.findIndex((target) => target === el);
                  })
                  .join("");
          })
          .map(Number);

      const sum = numberChanged.reduce((acc, cur) => (acc += cur), 0);
      console.log(sum);

      if (sum > maxValue) {
          console.log(sum);
          maxValue = sum;
          yield sum;
      }
  }
};

let count;
let maxValue = -987654321;
const alphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

// 흠..
[...isMax(getPermutations(alphabets))];
console.log(maxValue);

// https://kscodebase.tistory.com/511