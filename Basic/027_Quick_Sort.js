/*
    concat
    concat() 메서드는 인자로 주어진 배열이나 값들을 기존 배열에 합쳐서 
    새 배열을 반환합니다. 
*/
 
 
 // 분할
 function quickSort(arr){
    if (arr.length <= 1){
      return arr;
    }

    const pivot = arr[0];  
    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++ ) {
        if (parseInt(arr[i]) < parseInt(pivot)) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    // return quickSort(left) + pivot + quickSort(right);
    return quickSort(left).concat(pivot, quickSort(right));
  }
  
  // const array = prompt('배열을 입력하세요').split(' ').map(n => parseInt(n, 10));
  const array = ["1", "5", "3", "6", "8", "9", "7", "4", "2", "10", "11", "12"];
  console.log(quickSort(array));