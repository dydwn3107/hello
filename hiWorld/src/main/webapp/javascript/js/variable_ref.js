// variable_ref.js

// 원시형(실제값을 담고 있는 것) vs 참조형(주소 값을 담고 있는 것)
let str1 = 'Hello' // string타입
let str2 = new String('Hello') // object타입

console.log(str1 == str2); // 실제값을 비교
console.log(str1 === str2); // 값과 타입 비교

let num1 = 20 // number타입
let num2 = new Number(20) // object타입
console.log(num1 == num2);

let obj; // undefined
obj = null; // null타입

let sym1 = Symbol('symbol'); // unnique 키 값을 생성
let sym2 = Symbol('symbol');
console.log(sym1 == sym2);

//객체(object)
obj = {
    sname: 'Hong', //속성: 속성값
    age: 20,
    showAge: function () { // 메소드
        console.log('나이는 ' + this.age + ' 입니다.');
    }
}
console.log(obj.sname)
console.log(obj['age'])
obj.showAge()
obj.sname = 'Hwang' // 값 할당

// 배열
const numbers = []; // new Array();
numbers[numbers.length] = 10; //추가
numbers[numbers.length] = 20; //추가
numbers[numbers.length] = 30; //추가

numbers.forEach(function (val) {
    console.log(val)
}); //메소드(함수)

const randomVals = [];
for (let i = 0; i < 5; i++) {
    let val = Math.ceil(Math.random() * 10) // 0~1 임의값을 생성
    randomVals[i] = val;
}

randomVals.forEach(function (val) {
    if (val > 5) {
        console.log(val);
    }
})

// Math.random() : 0 ~ 1 임의값 생성
randomVals.splice(0, randomVals.length); // 0부터 길이까지 초기화로 대체하겠다.
console.log(randomVals);
console.log(Math.ceil(.8)) // 0~ 1 의 값을 올림을 하겠다.

// 21 ~ 50 까지의 임의 값을 생성
for (let i = 0; i < 5; i++) {
    randomVals[i] = Math.ceil(Math.random() * 30) + 20
}
console.log(randomVals);

console.clear(); // 콘솔메세지 초기화
//짝수만 출력
randomVals.forEach(showEven);

function showEven(val) {
    if (val % 2 == 0) {
        console.log(val)
    }
}

console.log('3' + 4) // '34'
console.log( +'3' + 4) // '7' // 숫자형 변환
console.log('3' * 4) // '12'

console.log((3).toString()); // 숫자타입을 문자타입으로

console.log(Math.abs(-20)) //절대값
console.log(Math.sign(30)) // 양인지
console.log(Math.sign(-30)) // 음인지

console.clear();

const arr2 = [-3, 2, -45, 0, 4, 7];
const arr3 = arr2.map(function(val){
    return Math.sign(val);
}); //배열의 개수만큼 콜백함수 실행 => 새로운 배열 반환
console.log(arr3);

// NaN, Infinity
console.log(3 / 'five'); //not a number
console.log(1 / 0); //무한