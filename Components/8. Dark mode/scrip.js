let mode = document.querySelector("#mode");
mode.onclick = function () {

    if (mode.classList.contains("ri-moon-fill")) {
        mode.classList.replace("ri-moon-fill", "ri-sun-fill");
        document.body.classList.replace("lighttheme", "darktheme");
    }
    else {
        mode.classList.replace("ri-sun-fill", "ri-moon-fill");
        document.body.classList.replace("darktheme", "lighttheme");
    }
};