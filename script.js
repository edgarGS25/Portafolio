const botonMenu = document.querySelector(".menu-hamburguesa-icon")
const menuHamburguesa = document.querySelector(".menu-hamburguesa")

botonMenu.addEventListener("click", () => {
    if (menuHamburguesa.style.display === "inline-block") {
        menuHamburguesa.style.display = "none";
    } else {
        menuHamburguesa.style.display = "inline-block";
    }
})


