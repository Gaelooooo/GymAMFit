function cargarTablaAdmin() {
    const productos = obtenerProductos();
    const tabla = document.getElementById("tablaProductos");
    tabla.innerHTML = "";

    productos.forEach(p => {
        tabla.innerHTML += `
            <tr>
                <td>${p.id}</td>
                <td>${p.nombre}</td>
                <td>${p.categoria}</td>
                <td>$${p.precio}</td>
                <td>
                    <button onclick="editar(${p.id})">Editar</button>
                    <button onclick="eliminar(${p.id})">Eliminar</button>
                </td>
            </tr>
        `;
    });
}

function agregarProducto() {
    const nombre = document.getElementById("nombre").value;
    const categoria = document.getElementById("categoria").value;
    const precio = parseFloat(document.getElementById("precio").value);

    if (!nombre || !categoria || !precio) {
        alert("Completa todos los campos");
        return;
    }

    const productos = obtenerProductos();
    const nuevo = {
        id: Date.now(),
        nombre,
        categoria,
        precio
    };

    productos.push(nuevo);
    guardarProductos(productos);
    cargarTablaAdmin();
}

function eliminar(id) {
    let productos = obtenerProductos();
    productos = productos.filter(p => p.id !== id);
    guardarProductos(productos);
    cargarTablaAdmin();
}

function editar(id) {
    const productos = obtenerProductos();
    const p = productos.find(x => x.id === id);

    document.getElementById("nombre").value = p.nombre;
    document.getElementById("categoria").value = p.categoria;
    document.getElementById("precio").value = p.precio;

    eliminar(id);
}

// Se eliminó la llave extra que cerraba un bloque innecesario
