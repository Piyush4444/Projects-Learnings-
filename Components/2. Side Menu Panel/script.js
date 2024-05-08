const menu = document.querySelector(".nav i");
const close = document.querySelector(".menu i");
const main = document.querySelector(".page1");


const tl = gsap.timeline({ paused: true });

tl.to(".menu", {
    right: 0,
    duration: 0.3
});

tl.from(".menu h4", {
    x: 100,
    duration: 0.2,
    stagger: 0.2,
    opacity: 0
});

tl.from(close, {
    rotate: 360,
    opacity: 0,
    scale: 0
});

// tl.paused();

menu.addEventListener("click", () => {
    tl.play();
});

close.addEventListener("click", () => {
    tl.reverse();
});

main.addEventListener("click", () => {
    tl.reverse();

});