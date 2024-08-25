document.getElementById("mi").addEventListener("click", function() {
    // Guardar el estado en localStorage
    localStorage.setItem("botonPresionado", "true");
    // Redirigir a la página 2
    window.location.href = "/Recursos/Para ti bb.html";
});