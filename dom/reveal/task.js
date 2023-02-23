const revealElenents = document.querySelectorAll('.reveal')



window.addEventListener("resize", (event) => revealElenent());
document.addEventListener("scroll", (e) => revealElenent());

function revealElenent () {
    revealElenents.forEach((el) => {
        const { top, bottom } = el.getBoundingClientRect();
        const winHeight = window.innerHeight;
        if(bottom < 0 || top > winHeight) {
            el.classList.remove("reveal_active");
        } else {
            el.classList.add("reveal_active");
        }
    });
}