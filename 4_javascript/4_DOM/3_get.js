const idElement = document.getElementById('title');

console.log(idElement);

// class 속성값이 text인 요소노드 모두 선택하기
// const texts = document.querySelectorAll('.text');
const classElement = document.getElementsByClassName('text');

console.log(classElement[0]);
console.log(classElement[1]);

console.log('\n');
for(let el of classElement){
    console.log(el);
}

// p 태그에 해당하는 요소노드 모두 선택하기
const tagElement = document.getElementsByTagName('p');

for(let tag of tagElement){
    console.log(tag);
}