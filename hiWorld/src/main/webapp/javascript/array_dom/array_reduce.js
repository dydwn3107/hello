// array_reduce.js

const numbers = [2, 3, 8, 5, 1];
let sum = 0;

numbers.forEach(number => {
    sum += number;
})
console.log(sum)

let result = numbers.reduce(function (acc, val, idx, ary) {
    return acc + val;
}, 0); // 0은 초기값 return해주는 값을 누적시키면서 초기값으로 설정됨(acc).
console.log(result)

result = numbers.reduce((acc, val, idx, ary) => {
    console.log('acc: ', acc, ' val: ', val)
    acc.push(val + 2); // 초기값 []-> [4] -> [4, 5] -> [4, 5, 10] ....
    return acc;
}, []);

// <ul><li>2</li><li>3</li><li>8</li><li>5</li><li>1</li></ul>
result = numbers.reduce((acc, val, idx) => {
    console.log(acc)
    if(idx == 0) {
        acc = '<ul>'
    } 
    acc += '<li>' + val + '</li>'
    if(idx == numbers.length - 1) // 한줄은 중괄호 없어도 가능
        acc += '</ul>'

    return acc; // 다음순번의 누적초기값으로 사용
}, '');
document.write(result);
console.log('최종결과: ', result)

// 배열요소의 값중에서 max 값
let max = numbers[0]
for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] > max) {
        max = numbers[i]
    }
}

console.log('max: ', max);

result = numbers.reduce((acc, val, idx) => {
    if(val > acc) {
        return val
    } else {
        return acc
    }
}, Number.MIN_SAFE_INTEGER) // 초기값으로 가지고 올 수 있는 가장 작은값.
console.log('max: ', result)