// func.js

let num = null;

console.log(num);

// boolean : 0 , null, undefined, '' => false
//함수선언식
function sum(num1 = 0, num2 = 0) { //초기값을 지정해서 밑에 오류나는 것을 잡아줌
    // if (!num1 && !num2)
    //     return num1 + num2; // return 구문없으면 undefined
    // else return 0;
    return num1 + num2;
}

console.log(sum(1, 3));
console.log(sum(1, 2, 3)); //매개값의 개수에 상관없이 있는 값만 계산
console.log(sum(1)); //NaN(Not a Number) => 1 + undefined
console.log(sum() + sum(2, 3));

console.log(sum)

//함수표현식
sum = function (num1, num2) {
    return num1 + num2;
}
let showInfo = function(name) {
    return `안녕하세요 ${name}님.`;
}
console.log(showInfo('홍길동'));

let welcome = showInfo;
console.log(welcome('박민수'));

let members = ['노은경', '이준의', '김민선'];
for (let member of members){
    console.log(welcome(member))
}