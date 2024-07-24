const menu = document.querySelector(".hamburger-menu-container");
const content = document.querySelector(".navbar")
const close = document.querySelector(".close-item");
const nav = document.querySelector('nav')

menu.addEventListener("click", (e) => {
    e.stopPropagation();
    content.classList.add("show");
});
nav.addEventListener('click', (e) => {
    e.stopPropagation()
})

close.addEventListener("click", ()=> {
    content.classList.remove("show");
})
window.addEventListener("click",() => {
    content.classList.remove("show");
})