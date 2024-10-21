// Navbar FIxed

window.onscroll = function () {
    const header = document.querySelector("#navbar");
    const fixedDav = header.offsetTop;

    if (window.pageYOffset > fixedDav) {
        header.classList.add("navbar-fixed", "top-0");
    } else {
        header.classList.remove("navbar-fixed");
    }
};

const hamburger = document.querySelector("#hamburger");
const navList = document.querySelector("#list");

hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("hamburger-active");

    navList.classList.toggle("hidden");
});
