
function marqueeAnimation() {
    window.addEventListener("wheel", (dets) => {
        if (dets.deltaY > 0) {
            gsap.to(".marquee", {
                transform: "translateX(-200%)",
                repeat: -1,
                duration: 4,
                ease: "none"
            });

            gsap.to(".marquee svg", {
                rotate: 180
            });
        } else {
            gsap.to(".marquee", {
                transform: "translateX(0%)",
                repeat: -1,
                duration: 4,
                ease: "none"
            });

            gsap.to(".marquee svg", {
                rotate: 0
            });

        }
    });
}


marqueeAnimation();