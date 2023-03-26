window.addEventListener("load", () => {
    let email_copy = document.querySelector(".email-copy>button")
    email_copy.addEventListener("click", () => {
        navigator.clipboard.writeText("mukil.saravanan.edu@gmail.com");
        window.alert("Email is copied to the clipboard")
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