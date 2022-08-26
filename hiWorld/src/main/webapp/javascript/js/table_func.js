// table_func.js

function makeTr(mem={}) {
    let tr = '<tr>';
    for (let prop in mem) {
        tr += `<td>${mem[prop]}</td>`;
    }
    tr += '<td><button>확인</button></td>';
    tr += '</tr>';
    return tr;
}

function makeHd() {
    let titles = ['아이디', '이름', '점수', '연락처', '확인'];
    let tr = '<tr>';
    for (let title of titles) {
        tr += `<th>${title}</th>`;
    }
    tr += '</tr>';
    return tr;
}

const members = [
    {id: 'user1', name: '홍길동', score: 80, phone: '010-123-1234'},
    {id: 'user2', name: '김민식', score: 85, phone: '010-423-1341'},
    {id: 'user3', name: '황의겸', score: 70, phone: '010-213-4352'}
];

let str = '<table border=1>';
str += makeHd();
for(let member of members){
    str += makeTr(member);
}

str += '</table>';
document.write(str);

