window.addEventListener("load", () => {
    let email_copy = document.querySelector(".email-copy>button")
    email_copy.addEventListener("click", () => {
        navigator.clipboard.writeText("mukil.saravanan.edu@gmail.com");
        window.alert("Email is copied to the clipboard")
    })
})