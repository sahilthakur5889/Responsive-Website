window.addEventListener("scroll", function() {
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
    closeAllDropdowns()
});

function myfun() {
    const content = document.getElementById("content");
    content.classList.toggle("show");
}

// CSS to handle the dropdown content display
const style = document.createElement('style');
style.innerHTML = `
    .show {
        display: block !important;
    }
`;
document.head.appendChild(style);

function closeAllDropdowns() {
    const dropdowns = document.querySelectorAll('.dropdown-content');
    dropdowns.forEach(dropdown => {
        dropdown.classList.remove('show');
    });
}
const showNav = document.querySelector(".nav-2");
const menu = document.querySelector("#menu-icon");

function toggleMenu() {
    showNav.classList.toggle('showNav');
}
