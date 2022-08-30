// object_tab.js
function Table(param) {
    this.members = param;
    this.addMember = function (member) {
        this.members.push(member);
    }
    this.showList = function () {
        let str = '<table border="1">'
        this.members.forEach(function (val, idx) {
            
            str += '<tr>'
            for (let mem in val) {
                str += `<td>${val[mem]}</td>`
            }
            str += '</tr>'
        })
        str += '</table>'
        return str;
    }

}
let memberInfo = [{
        id: 'user1',
        name: '홍길동',
        age: 20
    },
    {
        id: 'user2',
        name: '박철희',
        age: 22
    },
    {
        id: 'user3',
        name: '김민규',
        age: 25
    }
]

let t1 = new Table(memberInfo);

t1.addMember({
    id: 'user5',
    name: '최규식',
    age: 27
});
let str = t1.showList();
document.write(str);