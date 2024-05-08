const menu = document.querySelector(".menuIcon");
const close = document.querySelector(".menu i");
const main = document.querySelector(".page1");
const body = document.querySelector("body");

body.addEventListener("mousemove", (dets) => {
    gsap.to(".cursor", {
        x: dets.x - 12,
        y: dets.y - 10,
        opacity: 1,
        duration: 0
    });

    gsap.to(".cursorOuter", {
        x: dets.x - 25,
        y: dets.y - 22,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
    });
});

menu.addEventListener("mouseover", () => {
    gsap.to(".cursorOuter", {
        scale: 1.8,
        border: 1.4,
        duration: 0.3,
        ease: "power2.out",
    });
});

menu.addEventListener("mouseleave", () => {
    gsap.to(".cursorOuter", {
        scale: 1,
        border: 1.6,
        duration: 0.3,
        ease: "power2.out",
    });
});




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