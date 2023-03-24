window.onload = () => {
    let thumpnailImage = document.querySelectorAll(".thumbnail>img")
    thumpnailImage.forEach((image) => {
        image.addEventListener("click", (event) => {
            event.stopPropagation()
            let postDiv = image.parentElement.parentElement
            console.log()
            let popUpDiv = postDiv.querySelector(".popup-thumbnail")
            popUpDiv.classList.add("active")
            document.body.classList.add("popup")
            let popUpClose = postDiv.querySelector(".popup-close")
            popUpClose.addEventListener("click", () => {
                document.body.classList.remove("popup")
                popUpDiv.classList.remove("active")
            })
        })
    })
    document.addEventListener("click", (event) => {
        if (event.target.closest(".popup-thumbnail.active>div")) {
            return;
        }
        if (document.body.classList.contains("popup")){
            thumpnailImage.forEach((image) => {
                let postDiv = image.parentElement.parentElement
                let popUpDiv = postDiv.querySelector(".popup-thumbnail")
                if (document.body.classList.contains("popup")){
                    document.body.classList.remove("popup")
                }
                popUpDiv.classList.remove("active")
            })
        }
    })

}
