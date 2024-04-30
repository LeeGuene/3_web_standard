// 콜백함수의 활용
/* 배열을 매개변수로 넘겨받아서, 해당 배열에서
    최대값과 최소값을 출력하는 함수.

    에러의 유무에 따라서 콜백함수가 다르게 동작되게 한다.

    결과를 출력해주는 함수가 콜백함수가 된다. 
*/ 
const numbers = [35, 45, 102, 34, 55, 94, 103];

// 배열과 콜백함수를 매개변수로 전달
function getMinMax(numbers, callback){
    // 배열요소가 존재하지 않는다면
    if(numbers.length === 0){
        // 에러메세지를 넣고, 최대, 최소값은 존재하지 않기 때문에 null을 넣는다.
        callback('배열의 개수가 존재하지 않습니다.', null , null);
        // 함수 종료
        return;
    }

    // 최대, 최소값을 구하는 로직
    let min = numbers[0];
    let max = numbers[0];

    for(let i = 1; i < numbers.length; i++){
        if(numbers[i] < min){
            min = numbers[i];
        }
        if(numbers[i] > max){
            max = numbers[i];
        }
    }

    // 최대, 최소값을 구했다는 것은 에러가 나지 않았다는 의미이므로
    // 구해진 최대, 최소값을 넘긴다. (에러메세지는 null로 변경한 후)
    callback(null, min, max);
}

function getResult(error, min, max){
    // 에러메세지가 있다면
    if(error){
        // 출력
        console.log(error);
    }else{ // 에러메세지가 없다면
        // 최소, 최대값을 출력
        console.log(`최소값 : ${min}`);
        console.log(`최대값 : ${max}`);
    }
}

// getMinMax(numbers, getResult);
getMinMax([], getResult);
// getMinMax(0, getResult); // 0.length는 값 자체가 존재하지 않는다.

let users = [
    {name: '류호근', age: 22},
    {name: '강다니엘', age: 28},
    {name: '선우용녀', age: 66},
    {name: '지드래곤', age: 32},
];

// 아래 선언된 함수를 사용해서 user에 있는 객체의 정보를 출력해보자
// 단, 30살 이하인 사람들의 정보만 출력해보자!! 자유롭게!!

// 가이드는, 한 줄만 작성하면 된다.

// 함수 정의
// 매개변수로 넘어온 객체의 이름과 나이를 출력하는 함수 정의

// 30살 이하인 객체를 전달해서 출력한다.

users.filter(user => user.age <= 30).forEach(user => printInfo(user, len));

function printInfo(user, call){
    // 여기서 콜백함수의 매개변수를 전달받아서 실행한다.
    let name_Length = call(user.name);
    
    console.log(`이름  : ${user.name}(${name_Length})
    나이 : ${user.age}살`);
}

function len(name){
    return name.length;
}