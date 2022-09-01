// array_ex1.js
const data = `[{"id":1,"first_name":"Bendick","last_name":"Birwhistle","email":"bbirwhistle0@free.fr","gender":"Male","salary":5199},
{"id":2,"first_name":"Angelita","last_name":"Assinder","email":"aassinder1@live.com","gender":"Female","salary":1597},
{"id":3,"first_name":"Blair","last_name":"Puddefoot","email":"bpuddefoot2@zimbio.com","gender":"Polygender","salary":9604},
{"id":4,"first_name":"Marlow","last_name":"Armatage","email":"marmatage3@taobao.com","gender":"Male","salary":4261},
{"id":5,"first_name":"Sidoney","last_name":"Whetland","email":"swhetland4@trellian.com","gender":"Female","salary":4244},
{"id":6,"first_name":"Cassandry","last_name":"Beves","email":"cbeves5@state.gov","gender":"Female","salary":5193},
{"id":7,"first_name":"Edan","last_name":"Dron","email":"edron6@storify.com","gender":"Male","salary":6090},
{"id":8,"first_name":"Melany","last_name":"Thomton","email":"mthomton7@unc.edu","gender":"Female","salary":1432},
{"id":9,"first_name":"Paula","last_name":"Henner","email":"phenner8@engadget.com","gender":"Female","salary":4404},
{"id":10,"first_name":"Ariella","last_name":"Arnaudin","email":"aarnaudin9@tumblr.com","gender":"Female","salary":2080},
{"id":11,"first_name":"Frieda","last_name":"Forestel","email":"fforestela@dion.ne.jp","gender":"Female","salary":3671},
{"id":12,"first_name":"Cart","last_name":"Coper","email":"ccoperb@cbsnews.com","gender":"Male","salary":3774},
{"id":13,"first_name":"Gui","last_name":"Tacker","email":"gtackerc@telegraph.co.uk","gender":"Female","salary":3030},
{"id":14,"first_name":"Giorgi","last_name":"Tookill","email":"gtookilld@zdnet.com","gender":"Male","salary":6842},
{"id":15,"first_name":"Elias","last_name":"Recher","email":"erechere@engadget.com","gender":"Male","salary":6627}]`;

let result = JSON.parse(data); // string -> object타입으로(json타입을 parse해서)
// let entries = result.map(member => {
//     let ary = []
//     ary.push(Object.values(member));
//     return ary;
// })
// console.log(entries)


// 성별이 Female이고 salary 값이 5000이상인 사람
let str = result.reduce((acc, val, idx) => {
    if(idx == 0) {
        acc = '<ul>'
    }
    if(val.gender == 'Male' && val.salary > 5000) {
        acc += `<li>아이디: ${val.id} 이름: ${val.first_name} 성: ${val.last_name} 급여: ${val.salary}</li>`
    }
    if(idx == result.length -1) {
        acc += '</ul>'
    }
    return acc;
}, '');

document.write(str); // <ul><li>15 Carolin Vanyarkin 5500</li>.....</ul>


