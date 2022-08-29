// for_test.js

// 1~100 사이의 임의의 수를 생성 => 배열에 저장[5]
// 배열값중 최대값을 구하는 반복문을 작성

const randomVals = [];
for(let i = 0; i < 5; i++) {
    let val = Math.floor(Math.random() * 100) - 1;
    randomVals[i] = val;
}
randomVals.forEach(val => document.write(`<p>${val}</p>`));

let max = randomVals[0];
randomVals.forEach(val => {
    if(val > max) {
        max= val;
    }
})
console.log('Max: ' + max );

var a = Math.max(...randomVals)
console.log('Max: ' + a )
document.write(`<p>Max: ${a}</p>`)

// 함수의 스코프 체인
var a = 1;
var b = 5;

function outerFunc() {
    function innerFunc() {
        a = b;
    }
    console.log(a); // 1
    a = 2;
    b = 4;
    innerFunc();
    console.log(a); // 4
    var b = 2;
    console.log(b); // 2
}
outerFunc();
console.log(b); // 5
console.log(a); // 4