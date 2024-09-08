function mostrarSeccion(idSeccion) {
    // Ocultar todas las secciones
    const secciones = document.querySelectorAll('section');
    secciones.forEach(seccion => {
        seccion.classList.remove('seccion-activa');
        seccion.classList.add('seccion-oculta');
    });

    // Mostrar la sección seleccionada
    const seccionActiva = document.getElementById(idSeccion);
    seccionActiva.classList.remove('seccion-oculta');
    seccionActiva.classList.add('seccion-activa');
}
