let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function mostrarProductos() {
    const productos = obtenerProductos();
    const contenedor = document.getElementById("listaProductos");

    contenedor.innerHTML = "";
    productos.forEach(p => {
        contenedor.innerHTML += `
            <div class="producto-card">
                <h3>${p.nombre}</h3>
                <p>Categoría: ${p.categoria}</p>
                <p class="precio">$${p.precio}</p>
                <button onclick="agregarCarrito(${p.id})">Agregar al carrito</button>
            </div>
        `;
    });
}

function agregarCarrito(id) {
    carrito.push(id);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    alert("Producto agregado al carrito");
}

function verCarrito() {
    const productos = obtenerProductos();
    const contenedor = document.getElementById("carrito");

    contenedor.innerHTML = "";

    carrito.forEach(id => {
        const p = productos.find(x => x.id === id);
        contenedor.innerHTML += `<p>${p.nombre} - $${p.precio}</p>`;
    });
}
