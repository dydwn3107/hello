// array_indexof.js

// String.prototype.indexOf()
// Array.prototype.indexOf()

const members = ['진정욱', '노은경', '백나현']
const newMems = ['김민지', '노은경', '정다슬']
let pos = members.indexOf('노언경') // 있으면 index값 없으면 -1
// members 배열에 newMems 추가 (동일한 값은 추가x)
// 반복문 사용
newMems.forEach(member => {
    // members 값이 members의 배열에 존재하는 지 여부 확인 후 추가
    if(members.indexOf(member) == -1) {
        members.push(member)
    }
}) 
console.log(members);
members.push('김민')

let result = members.some(member => { //some return해주는 것이 만족하면 true 아니면 false
    return member == '노은경';
})
result = members.some(member => member == '노은경'); // 이렇게 생략가능
result = members.every(member => member.length == 3); // every 모두 만족하는지
result = members.find(member => member.startsWith('김')); // find 첫번째 값을 찾아서 return
console.log(result);

