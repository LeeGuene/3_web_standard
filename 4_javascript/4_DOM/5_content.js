// 모든 텍스트를 출력 (숨겨진 요소까지)
console.log(document.getElementById('container').textContent);

// 웹 브라우저 화면에 보이는 것만 출력
console.log(document.getElementById('container').innerText);

// 모든 콘텐츠를 출력 (줄바꿈, 공백까지 포함) 
console.log(document.getElementById('container').innerHTML);

// 직접 태그를 입력해서 요소를 추가해주는 방법
let content = `<p>새롭게 추가한 p 태그 본문</p>`;
document.getElementById('container').innerHTML = content;


