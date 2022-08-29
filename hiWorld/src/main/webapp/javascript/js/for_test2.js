// for_test2.js
const arr = [];

arr.push(10); // 배열에 값을 넣는 것
arr.push(20);

let obj =  {
    sname: 'Hong',
    age: 20,
    friends: ['Park'],
    addFriend: function(friend) {
        this.friends.push(friend);
    },
    friendList: function(sname) {
        //친구의 이름을 콘솔 출력
        for(let i = 0; i < this.friends.length; i++){
            console.log(this.sname)
        }
    }
}
console.log(obj.friendList)

obj.addFriend('kim');
obj.addFriend({name: 'Hwang', phone: '010-1111-2222'});

console.log(obj.friends[2].phone);