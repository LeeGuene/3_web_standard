let user = {name: '류호근', age: 22};

// 함수 정의
// 매개변수로 넘어온 객체의 이름과 나이를 출력하는 함수 정의
// 출력 예시
// 이름 : 류호근(3)
// 나이 : 22살

// 콜백 함수 정의

function printInfo(user, call){
    // 여기서 콜백함수의 매개변수를 전달받아서 실행한다.
    let name_Length = call(user.name);
    
    console.log(`이름  : ${user.name}(${name_Length})
    나이 : ${user.age}살`);
}

// 이름을 전달받아 3글자면 3, 4글자면 4를 리턴
// 객체가 아닌 이름을 전달받도록 수정!!
// function length(user){
//     let name = user.name;
//     return name.length;
// }

// 이름만 전달받아서 이름의 길이를 리턴
function len(name){
    return name.length;
}

// 콜백함수의 이름만 전달한다!!
printInfo(user, length);