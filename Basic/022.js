// 객체 중복 제거

const obj = {
    A: "01050442903",
    B: "01051442904",
    B: "01050342904",
    A: "01050442903",
    C: "01050412904",
    C: "01050443904",
    A: "01050442903"
  };

  let result = new Set();

  for(let key in obj) {
      // set 객체는 add를 사용함
      result.add(obj[key]);
  }

  console.log(result);
  console.log(result.size);
