// dom_manipulate.js
// element 생성: createElement()
// textNode 생성: createTextNode()
// 부모-자식 형성: appendChild()

let frm = document.createElement('form');
frm.setAttribute('action', 'addMember.jsp') // 속성추가
frm.setAttribute('method', 'post')

//자식요소
let labelId = document.createElement('label')
labelId.setAttribute('for', 'user_id')
labelId.innerText = '사용자아이디'
frm.appendChild(labelId) // 하위에 붙여넣기

let inputId = document.createElement('input')
inputId.setAttribute('type', 'text')
inputId.setAttribute('name', 'user_id')
inputId.setAttribute('id', 'user_id')
frm.appendChild(inputId)

let labelPw = document.createElement('label')
labelPw.setAttribute('for', 'user_pass')
labelPw.innerText = '사용자비번'
frm.appendChild(labelPw) // 하위에 붙여넣기

let inputPw = document.createElement('input')
inputPw.setAttribute('type', 'text')
inputPw.setAttribute('name', 'user_pass')
inputPw.setAttribute('id', 'user_pass')
frm.appendChild(inputPw)

let button = document.createElement('button')
button.innerText = '로그인'
frm.appendChild(button)

console.log(frm)
//div의 자식요소로
document.getElementById('show').appendChild(frm)
