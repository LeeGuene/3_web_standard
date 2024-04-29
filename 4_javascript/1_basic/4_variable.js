var data = 10;

// console.log(data);

var data = 49; // 값의 수정, 재선언 가능
// console.log(data);

// 호이스팅 
// 변수 선언을 스코프 최상단에서 하는 것을 말함. (초기값을 할당하지 않아도 된다.)

// 변수를 선언만 하면 자동으로 undefined가 할당된다. (쓰레기값)
// console.log(name); // undefined
// 문자열은 홑, 쌍 따옴표 어느 것으로 표현해도 상관없다.
var name = '류호근';

// console.log(name); // 류호근

var test = undefined;
// console.log(undefined);

var nullTest = null;
// console.log(nullTest);

// // undefined와 null의 일치 테스트
// console.log(undefined === null);    // 타입은 불일치 
// console.log(undefined == null);     // 값은 일치 

// let 키워드 확인

// let 호이스팅 테스트 (호이스팅 안 됨) 
// Cannot access 'age' before initialization - 변수 선언도 하지 않아 에러 발생
console.log(age); // undefined

let age = 22;
console.log(age);
// Identifier 'age' has already been declared
// let으로 중복 선언 불가능
// let age = 49;
console.log('나이 : ' + age);

