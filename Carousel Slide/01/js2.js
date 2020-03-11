const firstSlide = document.querySelector('.slider_item:first-child');

const SHOWING_CLASS = 'showing';

const slide = () => {
    const currentSlide = document.querySelector(`.${SHOWING_CLASS}`);
    if(currentSlide){
        currentSlide.classList.remove(SHOWING_CLASS);
        // 다음 요소 값
        let nextSlide = currentSlide.nextElementSibling;
        if(nextSlide){
            nextSlide.classList.add(SHOWING_CLASS);
        }else{
            firstSlide.classList.add(SHOWING_CLASS);
        }
    }else{
        firstSlide.classList.add(SHOWING_CLASS);
    }
}

setInterval(() => {
    slide();
}, 2000);

slide();