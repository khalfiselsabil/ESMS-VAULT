const menuIcon = document.querySelector(".menuIcon");
const menu = document.querySelector(".menu");

function openMenu() {
    menu.classList.remove("close");
    menu.classList.add("open");
}

function closeMenu() {
    if (!menu.classList.contains("open") || menu.classList.contains("close")) return;
    menu.classList.add("close");
    menu.addEventListener("animationend", () => {
        menu.classList.remove("open", "close");
    }, { once: true });
}

menuIcon.addEventListener("click", () => {
    if (menu.classList.contains("open") && !menu.classList.contains("close")) {
        closeMenu();
    } else {
        openMenu();
    }
});

menuLinks.forEach((link) => link.addEventListener("click", closeMenu));
