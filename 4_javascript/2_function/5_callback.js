// 매개변수로 넘어온 콜백함수를 함수 내에서 실행
function callbackTest1(callback){
    for(let i = 1; i < 4; i++){
        callback(i);
    }
}

function print(number){
    console.log(`${number}번째 함수 호출!!`);
}

function printTest(i){
    console.log(`${i}번째 함수 호출2!!`);
}

// 함수를 변수에 저장해서 매개변수로 전달
callbackTest1(print);
callbackTest1(printTest);

// 콜백함수를 직접 선언하여 전달(일반함수)
callbackTest1(function printTest2(i){
    console.log(`${i}번째 호출중3`)
});

// 콜백함수를 직접 선언하여 전달(화살표 함수)
callbackTest1((i) => console.log(`${i}번째 호출중 4!!`));