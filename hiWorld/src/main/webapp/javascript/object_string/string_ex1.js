// string_ex1.js
let items = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem, saepe sint cupiditate modi voluptatum veritatis eligendi dolore ducimus, fugit cum, beatae natus aspernatur odit dignissimos quibusdam? Asperiores deserunt blanditiis nulla!'

let bdy = document.querySelector('body') // body태그 찾아서 bdy에 변수할당
let div = document.createElement('div') // div element 생성
bdy.append(div) // body 자식요소로 붙임

let words = items.split(' ');
words.forEach(word => {
    let span = document.createElement('span') //element 태그를 만드는 것
    span.innerText = word;

    div.append(span);
});

let inp = document.createElement('input');
let btn = document.createElement('button');
btn.innerText = '찾기';
inp.onchange = function(){ //enter누르면
    // 버튼을 클릭하면...remove
    let findWord = inp.value; // 입력한 단어
    let spans = document.querySelectorAll('span') // span에 있는것 다 가지고 오기
    console.log(findWord)
    console.log(spans)
    
    spans.forEach(function(span){
        if(span.innerText == findWord) {
            span.remove();
        } 
    });
    inp.value = '';
    inp.focus();

}

document.querySelector('div').after(inp, btn); //after 뒤에