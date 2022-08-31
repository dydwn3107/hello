// reduce_mpa.js

// Array.prototype.map(); => 매핑(A -> A' 새로운 타입으로)
// Array.prototype.filter(); => 필터링(A -> a 조건에 만족하는 것만)

const names = ['이현성', '이주훈', '황용주', '최승현'];

let mapfnc = (name, idx) =>{ // map 매개값 3개 마지막은 배열자체
    let obj = {}
    obj.name = name;
    obj.sno = idx + 1; // 순번 {name:'이현성', sno: 1}
    return obj;
}
let filfnc =(member) => {
    // return 값이 true이면 반환, false이면 반환안함
    return member.name.startsWith('이') //startsWith 시작하는 값
}

// map 메소드
 let members = names.map(mapfnc);
console.log(members);

// filter 메소드
let lees = members.filter(filfnc);
console.log(lees);

// map, filter 합친 것(method chain)
let result = names.map(mapfnc).filter(filfnc);
console.log(result)

// reduce로 map과 같은 기능 구현
members = names.reduce((acc, val, idx) =>{
    let obj = {}
    obj.name = val;
    obj.sno = idx;
    acc.push(obj);
    return acc;
}, [])

console.log(members)

// reduce로 filter와 같은 기능 구현
let lees1 = members.reduce((acc, val, idx) =>{
    if(val.name.startsWith('이')){
        acc.push(val);
    } 
    return acc;
}, [])

console.log(lees1)


