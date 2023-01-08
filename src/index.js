let imageIndex = 2
let numberOfBackgroundImage = 4;
function backgroundChange() {
    let backgroundImage = document.querySelector(".home-page-background")
    console.log(backgroundImage)
    if (backgroundImage) {
        backgroundImage.setAttribute("src", `./assets/background-image-${imageIndex}.jpg`)
    }
    imageIndex = imageIndex >= numberOfBackgroundImage ? 1 : imageIndex + 1;
    console.log('1234')
}

window.onload = function () {
    setInterval(backgroundChange, 4000);
};