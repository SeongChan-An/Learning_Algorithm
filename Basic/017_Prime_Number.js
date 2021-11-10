// 소수 판별

const prime = 111;

function primeFunc(n) {
    for (let i = 2; i < n/2; i++) {
        if ( n % i === 0 ) {
            console.log("no");
            return false;
        }
    }
    if (n === 1) {
        console.log("no");
        return false;
    }
    console.log("yes");
};

primeFunc(prime);

function isPrime(num) {
  
    if(num === 2) {
        console.log("yes");
      return true;
    }
    
    for(let i = 2; i <= Math.floor(Math.sqrt(num)); i++){
      if(num % i === 0){
        // 한 번이라도 나누어 졌으니 소수가 아니므로 return false
        console.log("no");
        return false; 
      }
    }
    // 나눠진 수가 없다면 해당 수는 소수이므로 return true
    console.log("yes");
    return true; 
  }

  isPrime(prime);