// string_charat.js

// charAt(index) => 해당 위치 문자 반환

console.log('World'.charAt(3))

function checkGender(no) {
    if(no.charAt(7) == 1){
        console.log('남자입니다.')
    } else if (no.charAt(7) == 2){
        console.log('여자입니다.')
    } else {
        console.log('잘못 입력 했습니다.')
    }
}


checkGender('970301-2345678')
checkGender('950301-1367234')
checkGender('9603011367234')