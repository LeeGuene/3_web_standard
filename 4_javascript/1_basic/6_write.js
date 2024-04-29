document.write('출력 테스트!!');
// html 태그를 그대로 해석해서 화면에 출력한다.
document.write('<h1>안녕</h1>');
document.write('<input type="text" placeholder = "아이디" />');

// 문자열 내 확장 문자열 사용가능!! (역슬래시로 시작하는 문자 : \", \', \n)
let str = "<h1 style= 'color: red;'>테스트를 해봅시다!!</h1>" +
        "<div style=\"background-color: blue; color: #fff;\">테스트 해보자!!</div>";

document.write(str);

