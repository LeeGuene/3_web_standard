function printTest(){
    console.log('hello world');
}

printTest();

const temp1 = function (){
    console.log('익명 함수!!');
}

temp1();

const temp2 = function name(){
    console.log('네이밍 함수!!');
}

// name(); // 사용 불가
temp2();

const temp3 = (num1, num2) =>{
    console.log('화살표 함수 테스트!!');
    // 매개변수에 값을 할당하지 않으면 시스템상에서 자동으로 할당
    console.log('매개변수 1 : ' + num1); // undefined 
    console.log('매개변수 2 : ' + num2); // undefined
}

temp3();