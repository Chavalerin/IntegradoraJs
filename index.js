document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Validar los campos del formulario
    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (nombre === "" || email === "" || mensaje === "") {
        alert("Por favor, completa todos los campos obligatorios.");
        return;
    }

    // Validar el formato del correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Por favor, ingresa una dirección de correo electrónico válida.");
        return;
    }

    // Puedes agregar más validaciones personalizadas aquí

    // Si todas las validaciones son exitosas, puedes enviar el formulario
    alert("¡Formulario enviado con éxito!");
    this.reset(); // Limpia los campos del formulario
});

document.addEventListener("DOMContentLoaded", () => {
    const cuadricula = document.getElementById("cuadricula");
    const verMasButton = document.getElementById("ver-mas");

    // Lista de imágenes (puedes agregar más imágenes según tus necesidades)
    const imagenes = [
        "./img/ANGRA DOS REIS.jpg",
        "./img/COSTA DO SAUIPE.jpg",
        "/img/Natal.jpg",
        "/img/PORTO DE GALINHAS.jpg",
        "/img/PORTO SEGURO.jpg",
        "/img/PRAIA DO FORTE.jpg",
    ];

    // Función para agregar imágenes a la cuadrícula
    function agregarImagenesALaCuadricula() {
        imagenes.forEach((imagenSrc) => {
            const imagenDiv = document.createElement("div");
            imagenDiv.classList.add("imagen");

            const imagen = document.createElement("img");
            imagen.src = imagenSrc;
            imagen.alt = "Imagen";
            
            imagenDiv.appendChild(imagen);
            cuadricula.appendChild(imagenDiv);
        });
    }

    // Agregar imágenes al cargar la página
    agregarImagenesALaCuadricula();

    // Manejar el botón "Ver más"
    verMasButton.addEventListener("click", () => {
        // Agregar más imágenes a la cuadrícula
        agregarImagenesALaCuadricula();
    });
});




