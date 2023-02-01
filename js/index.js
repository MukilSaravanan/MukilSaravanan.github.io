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

function NavMenuClick(){
    let mainNav = document.getElementById("mainNav")
    let navMenuButton = document.querySelector(".navbar-toggler")
    navMenuButton.addEventListener("click",()=>{
        if (mainNav.classList.contains("visible")) {
            mainNav.classList.remove("visible");
            mainNav.classList.add("hidden");
          } else {
            mainNav.classList.remove("hidden");
            mainNav.classList.add("visible");
          }
    })
}

window.onload = function () {
    NavMenuClick()
    setInterval(() => {
        backgroundChange()
    }, 5000);
};


