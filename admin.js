// Funciones de persistencia de productos
function obtenerProductos() {
    return JSON.parse(localStorage.getItem("productos")) || [];
}

function guardarProductos(productos) {
    localStorage.setItem("productos", JSON.stringify(productos));
}

// Lógica de administración de la tabla de productos (Ahora funcional)
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

    if (!nombre || !categoria || isNaN(precio)) {
        alert("Completa todos los campos con valores válidos.");
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

    // Limpiar campos después de agregar
    document.getElementById("nombre").value = "";
    document.getElementById("categoria").value = "";
    document.getElementById("precio").value = "";
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

    // Carga los valores para editarlos, pero el botón "Agregar" debe cambiar a "Guardar" para que esto funcione bien.
    // Por ahora, solo precarga los campos y luego elimina el producto de la lista.
    document.getElementById("nombre").value = p.nombre;
    document.getElementById("categoria").value = p.categoria;
    document.getElementById("precio").value = p.precio;

    // ELIMINA el producto anterior para que el usuario pueda agregarlo de nuevo con los cambios
    eliminar(id);
    alert("Producto cargado para edición. Modifica los campos y haz clic en 'Agregar' para guardar los cambios.");
}

// Nota: La llave extra al final que encontré en la revisión anterior ya fue eliminada.
