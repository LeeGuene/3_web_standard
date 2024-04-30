// length 테스트!!

let test = "Hello World";

// for(let i = 0; i  < test.length; i++){
    // console.log(test[i]);
    // process.stdout.write(test[i]);
// }

// 비밀번호 몇 자리 이상 입력해라!!

// includes() 테스트 - 유효성 검사할 때 많이 사용한다. (이메일, 비밀번호 형식검사)
let sentence = "나보기가 역겨워 가실 때에는 말 없이 고이보내드리오리다!!";

const res = sentence.includes('고이');
console.log(res);

// slice 테스트!!
let fullName = "류호근";

// index 0번부터 문자 1개만 잘라내서 출력
console.log('성 : ' + fullName.slice(0, 1));

// split 테스트!!
let interest = '축구 배구 야구 농구 탁구 당구';
console.log(interest.split(',')); // 구분점을 찾지 못하면 해당 문자열을 그대로 반환

// trim 테스트!!
let temp = '     공백이 지   워질   까~?     ';
console.log(temp.trim());

// replace 문자열 교체 (처음 만나는 하나만)
// replaceAll 문자열 내 전부 교체
console.log(temp.replace(' ', '')); //     공백이 지   워질   까~?   
console.log(temp.replaceAll(' ', '')); // 공백이지워질까~?

