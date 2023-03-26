
function tabEvents() {
    let tabElements = document.querySelectorAll('.tablinks');
    // console.log(tabElements)
    tabElements.forEach((tab) => {
        tab.addEventListener("click", (e) => {
            e.preventDefault()
            e.stopPropagation()
            let tabName = tab.getAttribute("data-filter");
            let tabs = document.querySelectorAll(".tablinks.tabs")
            tabElements.forEach((tab) => {
                tab.classList.remove("active")
            })
            tabs.forEach((tab) => {
                console.log(tab, tabName , tab.getAttribute("data-filter"))
                if (tab.getAttribute("data-filter") === tabName) {
                    tab.classList.add("active")
                }
            })
        })

    })
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

const showHeaderBackground = () => document.querySelector(".site-header.project").classList.remove("transparent");
const hideHeaderBackground = () => document.querySelector(".site-header.project").classList.add("transparent");
document.addEventListener("scroll", (e) => window.scrollY < 100 ? hideHeaderBackground() : showHeaderBackground());



window.onload = function () {
    // NavMenuClick()
    // tabEvents()
    mixitup('#posts', {
        animation: {
            effects: 'fade scale(0.01) translate(0px, -500px);',
            duration: 400
        },
        classNames: {
            block: '#posts',
            elementFilter: 'tablinks'
        },
        selectors: {
            target: '.post'
        }
    });
    tagSpaceRemoval();
};
window.addEventListener("load", () => {
    scrollToTop();
    tabEvents();
    NavMenuClick();
})

function scrollToTop() {
    const showButton = () => document.querySelector(".scroll-to-top").classList.add("visible");
    const hideButton = () => document.querySelector(".scroll-to-top").classList.remove("visible");
    document.addEventListener("scroll", (e) =>{
        window.scrollY < 1000 ? hideButton() : showButton()
    });
    const scrollToTopButton = document.querySelector(".scroll-to-top")
    scrollToTopButton.addEventListener("click",()=>{
        window.scrollTo(0, 0);
    })
}

function tagSpaceRemoval(){
    const tags = document.querySelectorAll(".tags .tag:not(.category)");
    console.log(tags)
    tags.forEach((tag)=>{
       const innerHTML = tag.textContent.trim()
       let formattedString = innerHTML.split(" ").join("_")
       tag.innerHTML  = formattedString
    })
}