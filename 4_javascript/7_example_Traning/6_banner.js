const buttons = document.querySelectorAll('.btn');
const imgs = document.querySelectorAll('.slide');
const slideContainer = document.querySelector('.slides');
let inter;

console.log(buttons);

let current = 0;
let total = imgs.length;

buttons.forEach(button =>{
    if(button.classList.contains('prev-btn')){
        button.addEventListener('click', showPrevSlide);
    }else{
        button.addEventListener('click', showNextSlide);
    }
});

function showPrevSlide(){
    current = (current === 0) ? total - 1 : current - 1;
    moveSlide();
}

function showNextSlide(){
    current = (current === total - 1) ? 0 : current + 1;
    moveSlide();
}

function moveSlide(){
    slideContainer.style.transform = 'translateX(' + (-current * 100) + '%)';
    // clearInterval(inter); // 인터벌 초기화
    // startInterval();
}

function startInterval(){
    inter = setInterval(showNextSlide, 2000);
}

// 페이지 로드 시 자동 실행
startInterval();

// slideContainer.addEventListener('mouseover', clearInterval);
// slideContainer.addEventListener('mouseout', startInterval);

// const showNextTime = setInterval(showNextSlide, 2000);
// const showPrevTime = setInterval(showPrevSlide, 2000);
// clearInterval(showNextTime);
// clearInterval(showPrevTime);

