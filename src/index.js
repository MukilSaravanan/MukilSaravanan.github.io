let imageIndex = 0

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

