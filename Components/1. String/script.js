let path = "M 10 100 Q 500 100 990 100";
let finalPath = "M 10 100 Q 500 100 990 100";

let string = document.querySelector(".string");



string.addEventListener("mousemove", function (dets) {
    let mapper = gsap.utils.mapRange(300, 400, 1, 200, dets.y);
    path = `M 10 100 Q 500 ${mapper} 990 100`;
    gsap.to("svg path", {
        attr: { d: path },
        duration: 0.5,
        ease: "power3.out"
    });
});

string.addEventListener("mouseleave", function () {
    gsap.to("svg path", {
        attr: { d: finalPath },
        duration: 1.5,
        ease: "elastic.out(1,0.1)"
    });
});
