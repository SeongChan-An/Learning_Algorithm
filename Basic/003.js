
const a =[55];
const b = 55 == a;
const c = '55' === a;
console.log(b,c);

// 08
let result = true;
let data = 57;

console.log(result && data );

function myFunc(bar) {
    return bar(3) + 3
}

const myData1 = myFunc (a => a + 3);
console.log(myData1);


// 10
function myFunc2(foo, bar) {
    return foo(0) || bar(2)
}

const myData2 = myFunc2(a => a > 0 ? 3 : false, b=>b);
console.log(myData2);

// 11
var foo = {x: 10};
var bar = {
    x: 20,
    test: function () {
        console.log(this === bar);
        console.log(this.x);
        console.log(this);
    }
};

bar.test();
foo.test = bar.test;
foo.test();
(foo.test = foo.test)();

console.log('Q16');
(function () {
    x = function() {};
    console.log(typeof x)
})();
console.log(typeof x)


console.log('Q17');
// foo();
// if (false) {
//     function foo() {
//         console.log(1)
//     }
// } else {
//     function foo() {
//         console(2)
//     }
// }

console.log('Q18');
let a18 = 10;
foo18(12);
function foo18(a,b) {
    var a = 13;
    a = 11;
    console.log(a)
}

console.log('Q19');
for (let i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, 0)
}

console.log('Q20');