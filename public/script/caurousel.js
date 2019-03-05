document.addEventListener('DOMContentLoaded', () => {
    const carouselItems = [...document.querySelectorAll('.carousel-item')];
    const arrowRight = document.querySelector('.arrow-right');
    const arrowLeft = document.querySelector('.arrow-left');
    const listIndicators = [...document.querySelectorAll('.carousel-indicators li')];
    const indicator = document.querySelector('.carousel-indicators');

    arrowRight.addEventListener('click', () => {
        let curentItem = carouselItems.indexOf(document.querySelector('.carousel-item-active'));
        let nextItem = (curentItem + 1) % carouselItems.length;

        carouselItems[curentItem].classList.remove('carousel-item-active');
        carouselItems[nextItem].classList.add('carousel-item-active');

        listIndicators[curentItem].classList.remove('indicators-active');
        listIndicators[nextItem].classList.add('indicators-active');
    });
    
    arrowLeft.addEventListener('click', () => {
        let curentItem = carouselItems.indexOf(document.querySelector('.carousel-item-active'));
        let prevItem = (curentItem - 1) < 0 ? (carouselItems.length - 1) : (curentItem - 1);

        carouselItems[curentItem].classList.remove('carousel-item-active');
        carouselItems[prevItem].classList.add('carousel-item-active');

        listIndicators[curentItem].classList.remove('indicators-active');
        listIndicators[prevItem].classList.add('indicators-active');
    });

    indicator.addEventListener('click', (e) => {
        let curentItem = carouselItems.indexOf(document.querySelector('.carousel-item-active'));
        let nextItem = listIndicators.indexOf(e.target);

        carouselItems[curentItem].classList.remove('carousel-item-active');
        listIndicators[curentItem].classList.remove('indicators-active');

        carouselItems[nextItem].classList.add('carousel-item-active');
        listIndicators[nextItem].classList.add('indicators-active');
    })

    let click = new Event('click');
    setInterval(() => {
        arrowRight.dispatchEvent(click);
    }, 2000)
    
});