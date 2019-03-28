window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    preloader.style.opacity = 0;
    document.body.classList.remove('no-scroll');
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 1000);
});

document.addEventListener("DOMContentLoaded", () => {
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    const titleSectionSpan = document.querySelectorAll(".section-title span");
    const titleSection = document.querySelectorAll(".section-title");
    const workBoxItems = document.querySelectorAll(".working-process .box-item");
    const imgWatch = document.querySelector('.services .services-img img');
    const imgFeatured = document.querySelectorAll('.foto .col-4');
    
    // for section title appearence
    const transformTitle = () => {
        for (let i = 0; i < titleSectionSpan.length; i++) {
            if (titleSectionSpan[i].getBoundingClientRect().bottom < windowHeight &&
            titleSectionSpan[i].getBoundingClientRect().bottom > 0) {
                titleSectionSpan[i].classList.add("translate-0");
                titleSection[i].classList.add("translate-0");
            } else {
                titleSectionSpan[i].classList.remove("translate-0");
                titleSection[i].classList.remove("translate-0");
            }
        } 
    }
    transformTitle();
    let y;

    document.addEventListener("scroll", () => {
        transformTitle();
       
        // for four box-item appearence in working-section
        if (windowWidth > 640) {
            if (workBoxItems[0].getBoundingClientRect().top < windowHeight){
                let time = 0;
                for (let i = 0; i < workBoxItems.length; i++) {
                    setTimeout(() => {workBoxItems[i].classList.add("translate-0")}, time += 200);
                } 
            } else {
                for (let i = 0; i < workBoxItems.length; i++) {
                    workBoxItems[i].classList.remove("translate-0");
                }
            }
        } else {
            for (const item of workBoxItems) {
                if (item.getBoundingClientRect().top < windowHeight){
                    item.classList.add("translate-0");
                }
            }
        }

        // featured-works 
        if (imgFeatured[0].getBoundingClientRect().top < windowHeight - 300) {
            let time = 0;
            for (const item of imgFeatured) {
                setTimeout(() => {item.classList.add("translate-0")}, time += 200);
            }
        }

        // imgWatch parallax effect
        if (windowWidth > 980){
            if (imgWatch.getBoundingClientRect().top < windowHeight && imgWatch.getBoundingClientRect().bottom > 0) {
                y = (windowHeight - imgWatch.getBoundingClientRect().top) / windowHeight;
                imgWatch.style.transform = `translate(${(y * 30) - 30}px, ${(y * 100) - 100}px)`;
            }
        }
    })
})