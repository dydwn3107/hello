// array_dimen.js

const members = [
    ['홍길동', 20],
    ['김익수', 25],
    ['손봉호', 23],
]

members.push(['황용주', 29])
members[0][1] = 22; 

const objMembers = [];

members.forEach(member => {
    console.log(`이름: ${member[0]} 나이: ${member[1]}`);
    let obj = {name: member[0], age: member[1]} //배열을 오브젝트 타입으로
    objMembers.push(obj);
})
console.log(objMembers);

const aryMembers = [];

objMembers.forEach(member => {
    let ary = [member.name, member.age] // 오브젝트를 배열타입으로
    aryMembers.push(ary);
})
console.log(aryMembers);

//console.table(members);