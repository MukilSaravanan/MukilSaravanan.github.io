
function tabEvents() {
    let tabElements = document.querySelectorAll('.tablinks');
    console.log(tabElements)
    tabElements.forEach((tab) => {
        tab.addEventListener("click", () => {
            let tabName = tab.innerHTML.trim().toLowerCase();
            tabElements.forEach((tab) => {
                tab.classList.remove("active")
            })
            tab.classList.add("active");
            let posts = document.querySelectorAll(".post")
            posts.forEach((post) => {
                let categoryTag = post.querySelector(".tag.category");
                let categoryTagName = categoryTag.innerHTML.trim().toLowerCase()
                if (tabName === "all") {
                    post.classList.remove("hide")
                } else {
                    post.classList.remove("hide")
                    if (tabName !== categoryTagName) {
                        post.classList.add("hide")
                    }
                }
            })
        })

    })
}









window.onload = function () {
    tabEvents()
};