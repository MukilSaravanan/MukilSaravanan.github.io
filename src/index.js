let imageIndex = 0

// console.log(12)
function backgroundChange() {
    let backgroundImage = document.querySelectorAll(".home-page-background")
    backgroundImage[imageIndex].classList.remove("visible-image")
    backgroundImage[imageIndex].classList.add("hide-image")
    imageIndex = imageIndex >= backgroundImage.length - 1 ? 0 : imageIndex + 1;
    console.log(imageIndex)
    backgroundImage[imageIndex].classList.remove("hide-image")
    backgroundImage[imageIndex].classList.add("visible-image")
}

window.onload = function () {
    setInterval(() => {
        backgroundChange()
    }, 5000);
};

let navToggle = document.querySelector(".nav__toggle");
let navWrapper = document.querySelector(".nav__wrapper");

navToggle.addEventListener("click", function () {
    if (navWrapper.classList.contains("active")) {
        this.setAttribute("aria-expanded", "false");
        this.setAttribute("aria-label", "menu");
        navWrapper.classList.remove("active");
    } else {
        navWrapper.classList.add("active");
        this.setAttribute("aria-label", "close menu");
        this.setAttribute("aria-expanded", "true");
    }
});