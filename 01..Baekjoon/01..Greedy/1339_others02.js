//	song3349 님

const n = +input[0];
input.shift();
const alphabet = Array(26).fill(0);
for(let i=0; i<input.length; i++){
  for(let j=0; j<input[i].length; j++){
    alphabet[input[i][j].charCodeAt(0)-65]+= Math.pow(10, input[i].length-1-j);
  }
}
alphabet.sort((a,b)=>{
  return b-a;
});
let character = 9;
const result = alphabet.reduce((acc, cur)=>{
   return acc + cur*character--;
},0);
console.log(result);
