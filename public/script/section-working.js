document.addEventListener("DOMContentLoaded", () => {
    const windowHeight = window.innerHeight;
    const titleSectionSpan = document.querySelectorAll(".section-title span");
    const titleSection = document.querySelectorAll(".section-title");
    const workBoxItems = document.querySelectorAll(".working-process .box-item");
    const imgWatch = document.querySelector('.services .services-img img');
    const imgFeatured = document.querySelectorAll('.foto .col-4');
    
    // for section title appearence
    const transformTitle = () => {
        for (let i = 0; i < titleSectionSpan.length; i++) {
            if (titleSectionSpan[i].getBoundingClientRect().bottom < windowHeight) {
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
        let time = 0;
        if (workBoxItems[0].getBoundingClientRect().top < windowHeight + 100){
            for (const item of workBoxItems) {
                setTimeout(() => {item.classList.add("translate-0")}, time += 200);
            }
        } 

        // imgWatch parallax effect
        if (window.innerWidth > 980){
            if (imgWatch.getBoundingClientRect().top < windowHeight && imgWatch.getBoundingClientRect().bottom > 0) {
                y = (windowHeight - imgWatch.getBoundingClientRect().top) / windowHeight;
                imgWatch.style.transform = `translate(${(y * 30) - 30}px, ${(y * 100) - 100}px)`;
            }
        }
    })
})