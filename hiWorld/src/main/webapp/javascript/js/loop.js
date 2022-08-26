// loop.js

let numbers = [23, 33, 14, 52, 77, 55, 16];
//1)
// 짝수합 => result
let result = 0;
for(let i=0; i < numbers.length; i++) {
    if(numbers[i] % 2 == 0){
        result += numbers[i]
    }
}
console.log('짝수합: ' + result);

//2)
let result1 = 0;
numbers.forEach(function(val){
    if(val%2 == 0) {
        result1 += val
    }
});
console.log('짝수합: ' + result1);

//홀수번째 위치 합
let result3 = 0;
numbers.forEach(function(val,ind){
    if(ind % 2 == 0) {
        result3 += val
    }
});
console.log('홀수번째 위치 합: ' + result3);

//30보다 큰 값의 합
let result4 = 0;
numbers.forEach(function(val,ind){
    if(val > 30) {
        result4 += val
    }
});
console.log('30보다 큰 값의 합: ' + result4);