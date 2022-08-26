// conditions.js
const members = [{
        id: 'user1',
        name: '홍길동',
        score: 80,
        phone: '010-123-1234'
    },
    {
        id: 'user2',
        name: '김민식',
        score: 85,
        phone: '010-423-1341'
    },
    {
        id: 'user3',
        name: '황의겸',
        score: 70,
        phone: '010-213-4352'
    }
];

// 함수를 매개값으로 받는 함수
function callFunc(fnc) {
    let name = 'Hong';
    fnc(name);
}

function welcomeFnc(param) { // = let welcomFnc = function(param)
    console.log('welcome ' + param);
}
callFunc(welcomeFnc);

//화살표 함수
let helloFnc = param => console.log('Hello ' + param);
//함수를 매개값으로 받는 함수
function callFunc(fnc) {
    let name = 'Hong';
    fnc(name);
}
callFunc(helloFnc);