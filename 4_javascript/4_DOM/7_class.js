const title = document.querySelector('#title');
const text = document.querySelector('#text2');

// 클래스 추가
title.classList.add('add', 'remove');
text.classList.add('add', 'remove');

// 클래스 삭제
title.nextElementSibling.classList.remove('add');
text.previousElementSibling.classList.remove('add');

// 클래스 토글
const toggle = setInterval(()=>{
    text.classList.toggle('add');
}, 1000); // 2000ms 마다 콜백함수를 실행

clearInterval(toggle);