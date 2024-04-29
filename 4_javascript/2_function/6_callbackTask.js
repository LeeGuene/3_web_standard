// 숫자를 하나 전달하면 객체를 리턴하도록 만든다.
// 콜백 1 : 해당 숫자가 짝수인지, 홀수인지 리턴
// 콜백 2 : 1 ~ 숫자까지의 합을 받아오기
// 객체의 카값은 마음대로 해도 된다.

function test(num, call1, call2){
    let type = call1(num);
    let sum = call2(num);
    let obj = {
        여부 : type,
        합 : sum
    };
    return obj;
}

function checkType(num){
    return num % 2 === 1 ? '홀수' : '짝수';
}

function getSum(num){
    let sum = 0;
    for(let i = 1; i <= num; i++){
        sum += i; 
    }
    return sum;
}

console.log(test(10, checkType, getSum));
