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




const productos = [
    { id: 1, nombre: "Producto 1", precio: 19.99 },
    { id: 2, nombre: "Producto 2", precio: 29.99 },
    { id: 3, nombre: "Producto 3", precio: 39.99 },
    // Agrega más productos según sea necesario
];

// Array para almacenar productos favoritos
const favoritos = [];

// Función para renderizar los productos en el contenedor
function renderizarProductos() {
    const productosContainer = document.getElementById("productos-container");

    productos.forEach((producto) => {
        const productoDiv = document.createElement("div");
        productoDiv.classList.add("producto");

        productoDiv.innerHTML = `
            <p>${producto.nombre}</p>
            <p>Precio: $${producto.precio.toFixed(2)}</p>
            <button class="agregar-favorito" data-id="${producto.id}">Agregar a Favoritos</button>
        `;

        productosContainer.appendChild(productoDiv);
    });
}

// Función para agregar un producto a la lista de favoritos
function agregarFavorito(id) {
    const producto = productos.find((p) => p.id === id);
    if (producto && !favoritos.includes(producto)) {
        favoritos.push(producto);
        actualizarFavoritos();
    }
}

// Función para quitar un producto de la lista de favoritos
function quitarFavorito(id) {
    const index = favoritos.findIndex((p) => p.id === id);
    if (index !== -1) {
        favoritos.splice(index, 1);
        actualizarFavoritos();
    }
}

// Función para actualizar la lista de favoritos en la interfaz de usuario
function actualizarFavoritos() {
    const favoritosLista = document.getElementById("favoritos-lista");
    favoritosLista.innerHTML = "";

    favoritos.forEach((producto) => {
        const li = document.createElement("li");
        li.textContent = `${producto.nombre} - $${producto.precio.toFixed(2)}`;

        // Agregar un botón para quitar de favoritos
        const botonQuitar = document.createElement("button");
        botonQuitar.textContent = "Quitar de Favoritos";
        botonQuitar.addEventListener("click", () => quitarFavorito(producto.id));

        li.appendChild(botonQuitar);
        favoritosLista.appendChild(li);
    });
}

// Escuchar clics en los botones "Agregar a Favoritos"
document.addEventListener("click", (event) => {
    if (event.target.classList.contains("agregar-favorito")) {
        const productId = parseInt(event.target.getAttribute("data-id"));
        agregarFavorito(productId);
    }
});

// Llama a la función para renderizar los productos cuando la página se carga
window.addEventListener("load", renderizarProductos);