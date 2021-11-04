// JS 에서 sort
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

// Syntax
// arr.sort([compareFunction]) 

const array = [1, 30, 4, 21, 100000];
array.sort();
console.log(array1);
// expected output: Array [1, 100000, 21, 30, 4]

let sortedArR = [];
sortedArR = array1.sort(function (a, b) {
    // 오름차순
    return a - b; 
    // 내림차순
    // return b - a;
})

console.log(sortedArR);

const unsorted = "176 159 155 165 166 169";
let sorted = "";

sorted = (unsorted.split(" ").sort(function (a, b) {
    return a - b;
})).join(" ");

console.log(sorted);


/*
function compare(a, b) {
  if (a is less than b by some ordering criterion) {
    return -1;
  }
  if (a is greater than b by the ordering criterion) {
    return 1;
  }
  // a must be equal to b
  return 0;
}
*/