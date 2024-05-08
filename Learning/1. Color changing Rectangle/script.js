// apne main rectangle ko select kiye
let rect = document.querySelector(".rectangle");

let text = document.querySelector("h3");

// courser rectangle ke uper aya vo pata lagaye aur main logic color change ka
rect.addEventListener("mousemove", function (detail) {

    // rectangle ka location nikale, ki rectangle screen pe kitne dur hai, getBoundingClientRect() function ki help se
    let rectlocat = rect.getBoundingClientRect();

    // rectangle ke ander mouse kaha pe hai vo pata lagaye , rectangle ke location ki left side ki value ko, mouse screen se kitna dur hai uski value ko minus kr diye
    let insiderect = detail.clientX - rectlocat.left;

    // logic likhe ki mouse rectangle ke left side hai ya right side hai, rectangle ke width ko devide kr ke 2 parts me fir mouse konse side hai uski value se compare kr ke 
    if (insiderect < rectlocat.width / 2) {
        let redcolor = gsap.utils.mapRange(0, rectlocat.width / 2, 0, 255, insiderect);

        // rectangle ka color chnage krne ka gsap code 
        gsap.to(rect, {
            backgroundColor: `rgb(255,${redcolor},${redcolor})`,
            ease: Power4,
        });

        gsap.to(text, {
            color: `rgb(255,${redcolor},${redcolor})`,
            ease: Power4,
        });
    }
    else {
        let bluecolor = gsap.utils.mapRange(rectlocat.width / 2, rectlocat.width, 255, 0, insiderect);
        gsap.to(rect, {
            backgroundColor: `rgb(${bluecolor},${bluecolor},255`,
            ease: Power4,
        });

        gsap.to(text, {
            color: `rgb(${bluecolor},${bluecolor},255`,
            ease: Power4,
        });
    }


});

// mouse rectangle se hat jane pe rectangle vapis white ho jaye uska code 
rect.addEventListener("mouseleave", function () {
    gsap.to(rect, {
        backgroundColor: "white",
    });

    gsap.to(text, {
        color: "black",
    });
});
