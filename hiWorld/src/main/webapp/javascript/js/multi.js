// multi.js : 구구단 출력


/*let num = 3;
for(let i = 1; i <= 9; i++) {
    str += '<p>' + num + ' * ' + i + ' = ' + (num * i) + '</p>'
}
document.write(str);*/

function gugudan() {
    let str = '';
    for (let i = 1; i <= 9; i++) {
        for (let j = 1; j <= 9; j++) {
            str += '<p>' + i + ' * ' + j + ' = ' + (i * j) + '</p>'
        }
    }
    return gugudan;
}
let result = gugudan(8);
document.write(result);


let numb = 30;
console.log(`numb의 값은 ${numb} 입니다.`)