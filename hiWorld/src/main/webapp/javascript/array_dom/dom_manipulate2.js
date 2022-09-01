// dom_manipulate2.js
const members = [{
        mid: 'admin',
        mname: '관리자',
        mphone: '010-1111-2222'
    },
    {
        mid: 'hong12',
        mname: '홍길동',
        mphone: '010-1234-3523'
    },
    {
        mid: 'parkgr',
        mname: '박규림',
        mphone: '010-1646-2343'
    }
]

document.addEventListener('DOMContentLoaded', function () {
    showMember();
    // 등록버튼 이벤트
    let addBtn = document.querySelector('button')
    addBtn.addEventListener('click', addMember);
    // 회원찾기 이벤트
    let findBtn = document.getElementById('findMember')
    findBtn.addEventListener('click', findMember);
    // 전체선택/해제 이벤트
    let allCheck = document.getElementById('allCheck')
    allCheck.addEventListener('change', allChecked)

}); // dom요소에 이벤트 등록하는 메소드

function allChecked() {
    // true/false 값은 this의 checked 값을 할당
    let chks = document.querySelectorAll('tbody input[type="checkbox"]')
    chks.forEach(check => {
        check.checked = this.checked // this.checked (true, false 값을 가지고 있음)
    })
   
}

function findMember() {
    // 찾을 아이디
    let id = document.getElementById('mid').value // 입력창에 입력한 아이디값
    console.log(id)
    let trs = document.getElementsByTagName('tbody')[0].children; //첫번째 tbody의 자식요소 TagName은 인덱스 값을 넣어줘야함 
    trs = document.querySelectorAll('tbody>tr'); // tbody밑의 tr자식요소를 다 가지고 오겠다.
    console.log(trs) // NodeList [tr, tr, tr]
    trs.forEach(tr => {
        tr.className = '';
    })
    trs.forEach(tr => {
        console.log(tr.firstElementChild.textContent);
        if(tr.firstElementChild.textContent == id) {
            tr.setAttribute('class', 'focus')
            
            let childTd = tr.children;
            childTd[1].textContent = document.getElementById('mname').value
            childTd[2].textContent = document.getElementById('mphone').value
        }
    });
} // end of findMember

function showMember() {
    // 리스트 보여주기
    let table = document.getElementById('list') // list를 아이디로가지는 테이블 가져와서
    members.forEach(member => {
        let mValues = [];
        // object -> array
        // for(let prop in member) { // 반복돌면서 값을 mValues에 배열로 담는 것
        //    mValues.push(member[prop])
        //}
        mValues = Object.values(member); // 값을 바로 담아주는 메소드 Object.key(member): [속성, 속성]
        let tr = makeTr(mValues);

        table.appendChild(tr); //tr을 붙이기
    })
}

function addMember() {
    let mid = document.getElementById('mid') // input태그의 id를 가지고 옴
    let mname = document.getElementById('mname') // input태그의 id를 가지고 옴
    let mphone = document.getElementById('mphone') // input태그의 id를 가지고 옴
    console.log(mid.value, mname.value, mphone.value)

    // 저장값이 없으면 warning
    if (!mid.value || !mname.value || !mphone.value) {
        alert('필수값을 입력하세요!!!')
        return; // 함수종료
    }

    const mValues = [mid.value, mname.value, mphone.value] //반복하기위해 배열로 저장

    let tr = makeTr(mValues); // tr만드는 기능을 tr에넣은것

    document.getElementById('list').appendChild(tr) // table의 하위요소로 들어가는 것

    // 초기화
    mid.value = '';
    mname.value = '';
    mphone.value = '';
    mid.focus();

} // end of addMember()

function makeTr(mValues) { //mValues 배열이 들어오겠다는 것
    let tr = document.createElement('tr');
    // tr에 아이디누르면 이벤트
    tr.addEventListener('click', function () {
        // click 하면 그 값이 id있는 곳으로 들어가도록
        let mid = this.firstElementChild.innerText;
        document.getElementById('mid').value = mid
        let mname = this.firstElementChild.nextElementSibling.innerText;
        document.getElementById('mname').value = mname
        let mphone = this.firstElementChild.nextElementSibling.nextElementSibling.innerText;
        document.getElementById('mphone').value = mphone

    }, false)

    mValues.forEach(val => { // value의 개수만큼 반복
        let td = document.createElement('td'); //id위치
        let txt = document.createTextNode(val); // 사용자가 입력한값
        td.appendChild(txt); // <td>user1</td>
        tr.appendChild(td); // <tr><td>user1</td></tr>
    });
    // 삭제버튼 추가
    let td = document.createElement('td')
    let btn = document.createElement('button');
    let txt = document.createTextNode('삭제')
    //삭제기능
    btn.addEventListener('click', function (e) {
        this.parentElement.parentElement.remove(); //button의 위 td 의 위 tr 삭제
        e.stopPropagation(); // 이벤트 실행하고 상위 이벤트 실행 x 
    }, false); // default값 false 하위에서 상위 true는 상위에서 하위

    btn.appendChild(txt)
    td.appendChild(btn) // td안에 button만들기
    tr.appendChild(td)
    
    // 체크박스 추가
    let check = document.createElement('input')
    check.addEventListener('click', function(e) {
        // tr의 이벤트가 발생하지 않도록 하기 위해서
        e.stopPropagation();
    })
    check.addEventListener('change', function() {
        let checkProp = document.querySelectorAll('tbody tr input[type="checkbox"]')
        // let checkAry = [];
        // check.forEach(item => {
        //     checkAry.push(item)
        // })
        // [input, input, input] 배열(foreach) : every()모두 true인지, some()false가 하나라도 있는지
        document.getElementById('allCheck').checked = [...checkProp].every(item => {
            return item.checked == true}) 
            //[...checkProp]배열로 만들어줘서 every함수로 모두 조건을 만족하면 true를 return
            // 하나라도 false이면 false를 리턴하는 함수
            
    })
    //check.checked = true; // 체크상태가 되게하는 것
    check.setAttribute('type', 'checkbox')
    td = document.createElement('td')
    td.appendChild(check)
    tr.appendChild(td)

    return tr;
}