//conditions.js

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

// 테이블형식(표) => 
// 성별: 남자 => 파란색 글씨, 여자 => 빨간색 글씨
// makeTr(파란색, 빨간색)
function head() {
    let titles = ['아이디', '이름', '점수', '연락처', '성별']
    let tr = '<tr>'
    for (let title of titles) {
        tr += `<th>${title}</th>`
    }
    tr += '</tr>'
    return tr;
}


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

let str = '<table border=1>'
str += head();
for (let member of members) {
   str += makeTr(member)
}
str += '</table>'
document.write(str)


//==============================================================
/*const passMember = [];
for (let i = 0; i < members.length; i++) {
    if (members[i].score > 60) {
        console.log('이름: ' + members[i].name);
        passMember[passMember.length] = members[i].name;
    }
}
console.log(passMember);

const women = [];
for (let member of members) {
    if (member.gender == 'W') {
        women[women.length] = member;
    }
}
console.log(women);*/