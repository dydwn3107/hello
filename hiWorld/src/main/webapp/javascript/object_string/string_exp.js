// string_exp.js

let now = new Date();
console.log(now.toDateString()) // Tue Aug 30 2022
console.log(now.toLocaleDateString()) // 2022. 8. 30.
console.log(now.toLocaleTimeString()) // 오후 5:28:10
console.log(`${now.getFullYear()}년 ${now.getMonth()+ 1}월 ${now.getDate()}일 ${now.getHours()}시 ${now.getMinutes()}분 ${now.getSeconds()}초`)

// 10보다 작으면 0을 붙혀서 포현 아니면 그냥
console.log(`${now.getSeconds()<10?'0' + now.getSeconds():now.getSeconds()}초`)
console.log(`0${now.getSeconds()}초`.slice(-3))

console.log('abc'.toUpperCase()) //대문자 변환
console.log('ABC'.toLowerCase()) //소문자 변환

Date.prototype.hhmiss = function() {
    // 09:08:07, 12:34:07 로 표현
    
}
console.log(now.hhmiss());