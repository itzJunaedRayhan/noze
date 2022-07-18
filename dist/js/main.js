//  hide Paregraph and Show Paragraph on About Section:
const paragraphTop = document.querySelector(".about-paragraph-top");
const paragraphBottom = document.querySelector(".about-paragraph-bottom");
const aboutTop    = document.querySelector(".about-top");
const aboutBottom = document.querySelector(".about-bottom");
setInterval(() => {
    aboutTop.classList.toggle("before:animate-show-hide-about-one");
    aboutBottom.classList.toggle("before:animate-show-hide-about-one");
    paragraphTop.classList.toggle("display");
    paragraphBottom.classList.toggle("display");
}, 7000);