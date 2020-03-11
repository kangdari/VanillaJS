const SHOWING_CLASS = "showing";
const slider = document.querySelector('.slider');
const firstSlide = document.querySelector('.slider_item:first-child');

const slide = () =>{
    const currentSlide = document.querySelector(`.${SHOWING_CLASS}`);
    if(currentSlide){
        // 현재 슬라이더 showing 클래스 제거
        currentSlide.classList.remove(SHOWING_CLASS);
        // nextElementSibling 다음 요소 찾기
        let nextSlide = currentSlide.nextElementSibling;
        if(nextSlide){
            nextSlide.classList.add(SHOWING_CLASS);
        }else{
            firstSlide.classList.add(SHOWING_CLASS);
        }
    }else{ 
        firstSlide.classList.add(SHOWING_CLASS);
    }    
};

slide();

setInterval(() => {
    slide();
}, 1500);
