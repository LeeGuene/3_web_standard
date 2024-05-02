const el = document.querySelector('.container'); // 제일 먼저 찾은 요소 노드를 반환
console.log(el);

console.log();

const els = document.querySelectorAll('.container');
console.log(els);
console.log(els[0].children);


const p = document.querySelectorAll('.container2 .text');
console.log(p);


