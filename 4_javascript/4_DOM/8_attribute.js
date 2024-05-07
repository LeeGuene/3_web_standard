const naver = document.querySelector('a');

let attr = naver.getAttribute('href');

console.log(attr);

// 네이버 -> 네이버 지도 (텍스트 변경)
// https://map.naver.com/p?c=15.00,0,0,0,dh (href속성 변경)
// target -> _blank로 바꾸기 (taget속성 변경)

naver.innerText = '네이버 지도';
naver.setAttribute('href', 'https://map.naver.com/p?c=15.00,0,0,0,dh');
naver.setAttribute('target', '_blank');

// 클래스 속성 조작을 할 수 있으나, classList로 조작하자!!
// 이유 : class 속성 자체를 조작하는 것이어서, class 속성 하나 하나 조작이 불가능!!