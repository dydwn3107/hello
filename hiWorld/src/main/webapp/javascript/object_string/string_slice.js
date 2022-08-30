// string_slice.js

let str = 'Good, Morning!';

console.log(str.length);
console.log(str.slice(2, 7)); // index:2(include) ~ index:7(exclude)
console.log(str.slice(2)); // index:2 ~ 끝까지
console.log(str.slice(2, -2)); // index:2 ~ index:12(14-2) -2는 뒤에서 2까지 제외 
console.log(str.slice(-2)); // 전체에서 뒤에서 2 까지

console.log(str.substring(0, 7));
// substr(3, 5); index:3 부터 5문자

console.log(str.indexOf('1431')) // 문자열을 찾아서 해당 인덱스를 반환, 값이없으면 -1
console.log('Good Morning, Good Afternoon, Good Evening'.lastIndexOf('Good'));

console.log('Good Morning, Good Afternoon, Good Evening'.indexOf('Good', 10)); // 10번째부터 시작해서

str = 'Good Morning, Good Afternoon, Good Evening';
let position = str.indexOf('Good', str.indexOf('Good') + 1); // 
console.log(position)

// 문자열에서 반복되는 구문의 횟수
let cnt = 0;
let pos = str.indexOf('Good');

while(pos != -1) {
    cnt++;
    pos = str.indexOf('Good', pos + 1)
}
console.log(cnt + ' 회');

const members = [
    {name:"황병걸", age: 25},
    {name:"김효인", age: 22},
    {name:"이상욱", age: 18},
    {name:"최근석", age: 29}
]
let searchKey = prompt('찾을 이름을 입력.'); // members 배열에서 searchKey 을 찾아서 나이 콘솔에 출력

members.forEach(function(member){
    if(member.name == searchKey){
        console.log(`${member.name}의 나이는 ${member.age}살 입니다.`)
    }
})

members.forEach(function(member){
    if(member.name.indexOf(searchKey) != -1){ //includes() => true/ false
        console.log(member.age)
    }
})