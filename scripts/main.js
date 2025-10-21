

const botonMenu = document.querySelector(".menu-hamburguesa-icon")
const menuHamburguesa = document.querySelector(".menu-hamburguesa")

botonMenu.addEventListener("click", () => {
    if (menuHamburguesa.style.display === "inline-block") {
        menuHamburguesa.style.display = "none";
    } else {
        menuHamburguesa.style.display = "inline-block";
    }
})


const botonVerMas = document.querySelectorAll(".ver-mas-button")
// Seleccionar titulo de la card al dar click en "ver más"
botonVerMas.forEach(boton => {
    boton.addEventListener("click", (e) => {
        const card = e.target.closest(".card-proyecto");
        const tituloProyecto = card.querySelector("h4").textContent;
        // Guardar en localStorage
        localStorage.setItem('proyectoSeleccionado', JSON.stringify({ name: tituloProyecto }));
    });
});