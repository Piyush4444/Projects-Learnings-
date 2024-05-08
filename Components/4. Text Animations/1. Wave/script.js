function textBreak() {
    const h1 = document.querySelector(".main h1");
    const h1Text = h1.textContent;

    const splittedText = h1Text.split("");
    const halfValue = (splittedText.length / 2);

    let text = "";

    splittedText.forEach((element, index) => {
        if (index < halfValue) {
            text += `<span class="a">${element}</span>`;
        } else {
            text += `<span class="b">${element}</span>`;
        }
    });

    h1.innerHTML = text;

}

textBreak();

gsap.from(".a", {
    y: 80,
    opacity: 0,
    delay: 0.6,
    duration: 0.6,
    stagger: 0.15,
    ease: "back.out(1.7)"
});

gsap.from(".b", {
    y: 80,
    opacity: 0,
    duration: 0.6,
    stagger: -0.15,
    delay: 0.5,
    ease: "back.out(1.7)"
});