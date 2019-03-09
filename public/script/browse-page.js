document.addEventListener('DOMContentLoaded', () => {
    const windowHeight = window.innerHeight;
    const next = document.querySelector('.next-page');
    const prev = document.querySelector('.prev-page');
    const up = document.querySelector('.go-up');
    const anchors = [...document.querySelectorAll('.anchor')];
    let curentAnchor = -1;
    let nextAnchor = 0;

    const setCurrentAnchor = () => {
        for (const anchor of anchors) {
            let anchorTop = anchor.getBoundingClientRect().top;
            if (anchorTop >= 0 && anchorTop < (windowHeight / 2)) {
                curentAnchor = anchors.indexOf(anchor);
            }
        }
    }
    setCurrentAnchor();

    next.addEventListener('click', () => {
        nextAnchor = curentAnchor + 1 == anchors.length ? curentAnchor : curentAnchor + 1;
        anchors[nextAnchor].scrollIntoView({ behavior: 'smooth', block: "start" });
        curentAnchor = nextAnchor;
    });

    prev.addEventListener('click', () => {
        nextAnchor = curentAnchor - 1 == -1 ? curentAnchor : curentAnchor - 1;
        anchors[nextAnchor].scrollIntoView({ behavior: 'smooth', block: "start" });
        curentAnchor = nextAnchor;
    })

    up.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        curentAnchor = -1;
        nextAnchor = 0;
        setCurrentAnchor()
    })

    document.addEventListener('scroll', () => {
        setCurrentAnchor();
    })
});