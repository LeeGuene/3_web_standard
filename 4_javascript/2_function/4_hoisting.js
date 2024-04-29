test();
function test(){
    console.log('이름이 있는 함수의 호이스팅 테스트!!');
}


// 함수가 객체에 저장되기 전에 호이스팅이 발생함!!
console.log(test2); // undefined 

// test2 is not a function : 함수가 아니라는 에러 발생!!
// test2();
var test2 = function(){
    console.log('익명함수의 호이스팅 테스트');
}

