let a = 10;
const b = 20;

function test(){
    // let a = 50;
    a = 50; // 선언하지 않고, 값만 변경할 시, 외부에서도 같은 값이 출력된다.
    console.log(`함수 내부 a : ${a}`);
    console.log(`함수 내부 b : ${b}`);
    console.error(a);
}

test();
console.log(`함수 외부 a : ${a}`);
console.log(`함수 외부 b : ${b}`);