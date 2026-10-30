
// PRODUCTOS DE DETODO

const productos = [
    {
        nombre: "Polo casual",
        categoria: "Ropa",
        precio: 25.00,
        imagen: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
    },
    {
        nombre: "Gorra urbana",
        categoria: "Accesorios",
        precio: 20.00,
        imagen: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500",
    },
    {
        nombre: "Audífonos inalámbricos",
        categoria: "Tecnología",
        precio: 45.00,
        imagen: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    },
    {
        nombre: "Lámpara decorativa",
        categoria: "Hogar",
        precio: 35.00,
        imagen: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500",
    }
];

// NÚMERO DE WHATSAPP DE LA TIENDA
// Reemplaza este número por el tuyo.
// Formato: 51 + número de celular, sin espacios.

const whatsapp = "51958379885";

// MOSTRAR PRODUCTOS EN LA PÁGINA

const contenedor = document.getElementById("lista-productos");

productos.forEach((producto) => {

    const tarjeta = document.createElement("div");
    tarjeta.classList.add("producto");

    tarjeta.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">

        <div class="info-producto">
            <span class="categoria-producto">
                ${producto.categoria}
            </span>

            <h3>${producto.nombre}</h3>

            <p class="precio">
                S/ ${producto.precio.toFixed(2)}
            </p>

            <button onclick="comprar('${producto.nombre}')">
                COMPRAR POR WHATSAPP
            </button>
        </div>
    `;

    contenedor.appendChild(tarjeta);
});

// FUNCIÓN PARA COMPRAR

function comprar(nombre) {

    const mensaje = `Hola, DETODO. Estoy interesado en comprar: ${nombre}`;

    const enlace = `https://wa.me/${whatsapp}?text=${encodeURIComponent(mensaje)}`;

    window.open(enlace, "_blank");
}
