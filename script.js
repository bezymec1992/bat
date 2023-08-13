AOS.init();
AOS.init({once:true, offset: 0});

const cards = document.querySelectorAll(".tv__img"),
    see = document.querySelector(".see"),
    accardions = document.querySelectorAll(".accardion");

see.addEventListener('click', () => {
    see.classList.toggle('open');
    for(card of cards) {
        card.classList.contains('hiden') ? card.classList.toggle("d-none") : '' 
    }
})

for(item of accardions) {
    item.addEventListener("click", function () {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        panel.style.maxHeight ? panel.style.maxHeight = null : panel.style.maxHeight = panel.scrollHeight + "px";
    })
}
