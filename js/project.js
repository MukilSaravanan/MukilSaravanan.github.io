
function tabEvents() {
    let tabElements = document.querySelectorAll('.tablinks');
    // console.log(tabElements)
    tabElements.forEach((tab) => {
        tab.addEventListener("click", (e) => {
            e.preventDefault()
            e.stopPropagation()
            let tabName = tab.innerHTML.trim().toLowerCase();
            let tabs = document.querySelectorAll(".tablinks.tabs")
            console.log(tabs)
            tabElements.forEach((tab) => {
                tab.classList.remove("active")
            })
            tabs.forEach((tab) => {
                if (tab.innerHTML.trim().toLowerCase() === tabName) {
                    tab.classList.add("active")
                }
            })
        })

    })
}

const showHeaderBackground = () => document.querySelector(".site-header.project").classList.remove("transparent");
const hideHeaderBackground = () => document.querySelector(".site-header.project").classList.add("transparent");
document.addEventListener("scroll", (e) => window.scrollY < 100 ? hideHeaderBackground() : showHeaderBackground());









window.onload = function () {
    tabEvents()
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
};