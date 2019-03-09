document.addEventListener('DOMContentLoaded', () => {
    const btnMenu = document.querySelector('.toggler-menu');
    const navMunu = document.querySelector('.nav-menu');
    

    btnMenu.addEventListener('click', () => {
        btnMenu.classList.toggle('cross');
        navMunu.classList.toggle('show-menu');
        if (window.innerWidth < 982){
            document.body.classList.toggle('no-scroll');
        }
    });

    navMunu.addEventListener('click', function(e) {
        if (e.target.nodeName ==='A') {
            btnMenu.classList.remove('cross');
            this.classList.remove('show-menu');
            document.body.classList.remove('no-scroll')
        }
    })
})