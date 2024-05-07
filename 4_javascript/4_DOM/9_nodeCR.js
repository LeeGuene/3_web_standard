// 노드 생성
const element = document.createElement('div');
element.setAttribute('class', 'err');
element.innerText = '이근!!';

// 노드 추가
document.body.append(element);

// 노드 삭제

let childNodes = document.body.childNodes;
childNodes.forEach(node =>{
    // nodeName속성 : 노드 이름을 대문자로 반환

    console.log(node.parentNode); // body태그
    
    if(node.nodeName === 'A'){
        console.log(node); // a태그

        // 자기 자신은 삭제가 불가능하므로
        // 부모 노드로 가서 자식 노드를 삭제한다.
        node.parentNode.removeChild(node); // a태그 삭제
    }
});