// 배열
// 자료형이 다르더라도 상관없다. 
// 배열 안에 어떤 자료형이든 들어갈 수 있다. (객체, 배열, 숫자, 문자열, ...)
let user = ["hogeun", "류호근", 23, '수원시'];
console.log(user[0]);
console.log(user[1]);
console.log(user[2]);

let obj = {
    id : 'hoguen',
    pw : '4556',
    name : `류호근`,
    age : 22,
    loc : '수원시'
};

console.log(obj);
console.log('나이 : ' + obj['age']);