// function NavMenuClick(){
//     let mainNav = document.getElementById("mainNav")
//     let navMenuButton = document.querySelector(".navbar-toggler")
//     navMenuButton.addEventListener("click",()=>{
//         if (mainNav.classList.contains("visible")) {
//             mainNav.classList.remove("visible");
//             mainNav.classList.add("hidden");
//           } else {
//             mainNav.classList.remove("hidden");
//             mainNav.classList.add("visible");
//           }
//     })
// }
// NavMenuClick()

window.onload = () => {
    let thumpnailImage = document.querySelectorAll(".thumbnail>img")
    thumpnailImage.forEach((image) => {
        image.addEventListener("click",()=>{
            let postDiv = image.parentElement.parentElement
            let popUpDiv = postDiv.querySelector(".popup-thumbnail")
            popUpDiv.classList.add("active")
            let popUpClose = postDiv.querySelector(".popup-close")
            popUpClose.addEventListener("click",()=>{
                popUpDiv.classList.remove("active")
            })
        })
    })

}
