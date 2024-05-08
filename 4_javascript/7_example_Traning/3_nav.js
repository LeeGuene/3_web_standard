// 사용할 노드 선택
let nav = document.getElementById('nav');
let dropdownContainer = document.getElementById('dropDownContainer');

// nav 위로 마우스를 올릴 때 드롭다운 메뉴 보이기.
nav.addEventListener('mouseover', () => {
    dropdownContainer.style.display = 'block';
});

// // 드롭다운 컨테이너로 마우스가 올라가면 계속 block 상태 유지
// dropdownContainer.addEventListenoer('museover', () => {
//     dropdownContainer.style.display = 'block';
// });

// 마우스가 드롭다운 컨테이너 밖으로 나가면 메뉴 감추기
dropdownContainer.addEventListener('mouseleave', () => {
    dropdownContainer.style.display = 'none';
})

// 마우스가 nav 밖으로 나가면 메뉴 감추기
nav.addEventListener('mouseleave', () => {
    setTimeout(function(){
        // 마우스가 메뉴에 올려진 상태가 아니라면
        // 마우스가 nav에서 메뉴를 거치지 않고 벗어나게 된다면
        if(!dropdownContainer.matches(':hover')){
            dropdownContainer.style.display = 'none';
        }
    }, 1000);
})