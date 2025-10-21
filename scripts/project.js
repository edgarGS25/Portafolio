
let datosProyectos

function obtenerDatosProyectos() {
    return fetch('./data/projects.json')
        .then(response => response.json())
        .then(data => {
            datosProyectos = data.projects;
        });
}

function cargarProyecto() {
    const proyectoLocalStorage = JSON.parse(localStorage.getItem('proyectoSeleccionado') || '{}'); 
    datosProyectos.forEach(proyecto => {
        if (proyecto.name === proyectoLocalStorage.name) {
            document.querySelector('.project-title').innerText = proyecto.name;
            document.querySelector('.img-container img')
            proyecto.image.forEach((imagen, index) => {
                const img = document.createElement('img');
                img.src = imagen;
                img.alt = `Imagen del Proyecto ${index + 1}`;
                document.querySelector('.img-container').appendChild(img);
            });
            proyecto.imageMobile.forEach((imagen, index) => {
                const img = document.createElement('img');
                img.src = imagen;
                img.alt = `Imagen del Proyecto ${index + 1}`;
                document.querySelector('.img-mobile-container').appendChild(img);
            });
            proyecto.description.forEach((parrafo, index) => {
                const p = document.createElement('p');
                p.classList.add(`parrafo-${index + 1}`);
                p.innerText = parrafo;
                document.querySelector('.project-description').appendChild(p);
            });

            document.querySelector('.gitHub-link').href = proyecto.repository;
            document.querySelector('.live-demo-link').href = proyecto.live_demo;
            const tecnologiasUl = document.querySelector('.tecnologías-ul');
            proyecto.technologies.forEach(tecnologia => {
                const li = document.createElement('li');
                li.classList.add('tecnologia');
                li.innerText = tecnologia;
                tecnologiasUl.appendChild(li);
            });
        }
    });
}

const botonMenu = document.querySelector(".menu-hamburguesa-icon")
const menuHamburguesa = document.querySelector(".menu-hamburguesa")

botonMenu.addEventListener("click", () => {
    if (menuHamburguesa.style.display === "inline-block") {
        menuHamburguesa.style.display = "none";
    } else {
        menuHamburguesa.style.display = "inline-block";
    }
})

obtenerDatosProyectos().then(() => {
    cargarProyecto();
});