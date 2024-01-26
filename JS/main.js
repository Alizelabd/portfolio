$(document).ready(function () {

    $(".owl-carousel").owlCarousel({

        navigation: false, // Show next and prev buttons

        slideSpeed: 300,
        paginationSpeed: 400,

        items: 1,
        itemsDesktop: true,
        itemsDesktopSmall: true,
        itemsTablet: true,
        itemsMobile: true

    });

});
const navbar = document.querySelector("nav.navbar");
const arrowUp = document.querySelector("#arrow-up");
//------------------
function navbarFunc() {
    if (window.scrollY != navbar.scrollTop) {
        navbar.classList.add("fix");
    } else {
        navbar.classList.remove("fix");
    }
}
//---------------- 
function arrowUpFunc() {
    if (window.scrollY != arrowUp.scrollTop) {
        arrowUp.style.display = "block";
    } else {
        arrowUp.style.display = "none";
    }
}
//----------------------
window.onscroll = () => {
    navbarFunc();
    arrowUpFunc();
};
arrowUp.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};
const yearsCopyRight = document.getElementById("years");
yearsCopyRight.innerHTML = new Date().getFullYear();
