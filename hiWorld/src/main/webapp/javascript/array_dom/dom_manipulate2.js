// dom_manipulate2.js

let addBtn = document.querySelector('button')
addBtn.onclick = function() {
    let mid = document.getElementById('mid') // input태그의 id를 가지고 옴
    let mname = document.getElementById('mname') // input태그의 id를 가지고 옴
    let mphone = document.getElementById('mphone') // input태그의 id를 가지고 옴
    console.log(mid.value, mname.value, mphone.value)

    // 저장값이 없으면 warning
    if(!mid.value || !mname.value || !mphone.value) {
        alert('필수값을 입력하세요!!!')
        return; // 함수종료
    }

    const mValues = [mid.value, mname.value, mphone.value] //반복하기위해 배열로 저장

    let tr = document.createElement('tr');
    
    mValues.forEach(val => { // value의 개수만큼 반복
        let td = document.createElement('td'); //id위치
        let txt = document.createTextNode(val); // 사용자가 입력한값
        td.appendChild(txt); // <td>user1</td>
        tr.appendChild(td); // <tr><td>user1</td></tr>
    });

    document.getElementById('list').appendChild(tr) // table의 하위요소로 들어가는 것

    // 초기화
    mid.value = '';
    mname.value = '';
    mphone.value = '';
    mid.focus();
}

