// string_object.js

// 메소드: trim() > trimStart() > trimEnd()
// 메소드: replace(a, b): a문자를 b문자로 변환
// 정규표현식: replace(/\s+/, '표현값')
// 메소드: split('구분자') => 문자열을 배열생성
// 메소드: join('구분자') => 배열 -> 문자열

let str1 = 'Hello';
let str2 = new String('Hello');

console.log(str1, str2, str1==str2,str1===str2);

// String => string
console.log(typeof str2.valueOf()); // 객체 -> 기본타입
console.log(str1.substring(0, 3));
// eval 계산함수
let result = eval(new String('1 + 2 * 3').valueOf); // String으로 바꿔서 계산이 안되는데 valueOf로 기본타입바꾼 것
console.log(result)

let trimStr = ' 모든 공백을 제거하는 메 소  드s   ';
console.log(trimStr.trim()) // trim 앞뒤 공백제거
console.log(trimStr.trimStart().trimEnd()) // 앞 뒤

// String 객체의 메소드 추가 정의
let obj = {}; // = new Object() 같은 것
let ary = []; // = new Array()
let regExp = /\s+$/; new RegExp();

String.prototype.ltrim = function() {// ltrim 메소드를 String에 추가 만드는 것
    return this.replace(/^\s/, '') // 왼쪽의 공백 제거
}
String.prototype.rtrim = function() {
    return this.replace(regExp, '')
}
console.log(trimStr.ltrim().rtrim())

trimStr = '     how are you     to      day     everyone.       ';
console.log(trimStr.trim().replace(/\s+/g, ' ')); // \s+공백 하나이상 g전체문장에서

// forEach, map, filter
const trimAry = trimStr. split(' ');
const filAry = trimAry.filter(function(str){ //filter 새로운 기능을 넣는것
    return str != ''; // 공백이 아닌 것을 reutrn
}); 
console.log(filAry.join(' '))

const str = 'The quick brown fox jumps over the lazy dog.';
const strAry = str.split(' '); // split 공백을 기준으로 배열에 담는 것
console.log(strAry[2])
console.log(strAry.join('-')); // join 배열을 - 넣어서 문자열타입으로 바꾸는 것 
