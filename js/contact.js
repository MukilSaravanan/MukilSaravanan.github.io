window.addEventListener("load", () => {
    let email_copy = document.querySelectorAll(".email-copy>button")
    email_copy.forEach((emailElement)=>{
        emailElement.addEventListener("click", (event) => {
            const pTag = event.currentTarget.closest(".email-copy").querySelector("p");
            navigator.clipboard.writeText(pTag.textContent.replace("(at)","@"));
            window.alert("Email is copied to the clipboard");
        })
    })
    NavMenuClick();
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
})