const slider = document.querySelector('.slider');
const sliderItems = document.querySelectorAll('.slider__item');
const sliderDots = document.querySelectorAll('.slider__dot');
const prevArrow = document.querySelector('.slider__arrow_prev');
const nextArrow = document.querySelector('.slider__arrow_next');
let currentSlide = 0;

sliderDots[currentSlide].classList.add('slider__dot_active');

// Функция для смены слайда с проверкой на крайние слайды
function changeSlide(n) {
    currentSlide = (n + sliderItems.length) % sliderItems.length;

    sliderItems.forEach((item) => item.classList.remove('slider__item_active'));
    sliderItems[currentSlide].classList.add('slider__item_active');
    
    sliderDots.forEach((item) => item.classList.remove('slider__dot_active'));
    sliderDots[currentSlide].classList.add('slider__dot_active');
}

// Регистрация обработчиков события click на элементах «Влево» и «Вправо»
prevArrow.addEventListener('click', () => changeSlide(currentSlide - 1));
nextArrow.addEventListener('click', () => changeSlide(currentSlide + 1));

// Регистрация обработчиков события click на элементах dots
sliderDots.forEach(dot => {
    dot.onclick = (e) => {
        let indexDot = Array.from(sliderDots).indexOf(e.srcElement); 
        changeSlide(indexDot)
    }
});