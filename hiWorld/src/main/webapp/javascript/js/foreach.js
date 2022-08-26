// foreach.js
const members = [{
    id: 'user1',
    name: '홍길동',
    score: 80,
    phone: '010-123-1234',
    gender: 'M'
},
{
    id: 'user2',
    name: '김민식',
    score: 85,
    phone: '010-423-1341',
    gender: 'W'
},
{
    id: 'user3',
    name: '최우신',
    score: 55,
    phone: '010-213-4352',
    gender: 'M'
},
{
    id: 'user4',
    name: '황의겸',
    score: 70,
    phone: '010-456-7848',
    gender: 'W'
}
];
// for반복문. 배열메소드(foreach)
// members.forEach(function(val, ind, ary) {
//     console.log(val.phone);
// }); 밑에랑 같은것.
function head() {
    let titles = ['아이디', '이름', '점수', '연락처', '성별']
    let tr = '<tr>'
    for (let title of titles) {
        tr += `<th>${title}</th>`
    }
    tr += '</tr>'
    return tr;
}

let str = '<table border=1>';
str += head();
members.forEach(callBackFnc);
function callBackFnc(val, ind, ary) {
  if (val.gender == 'M') {
    str += makeTr(val, 'blue')
  } else if (val.gender == 'W'){
    str += makeTr(val, 'red')
  }
}
document.write(str);

function makeTr(mem = {}) {
    let tr = '<tr>';
    for (let prop in mem) {
        if (mem.gender == 'M') {
            tr += `<td style="color: blue;">${mem[prop]}</td>`
        } else if (mem.gender == 'W'){
            tr += `<td style="color: red;">${mem[prop]}</td>`
        }
    }
    tr += '</tr>'
    return tr;
}
// 실패