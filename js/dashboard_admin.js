<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Panel Administrador - GymAMFIT</title>
    <link rel="stylesheet" href="styles.css"> 
</head>

<body onload="protegerPagina('admin')">

    <header class="main-header">
        <h1>Panel de Administración</h1>
        <button class="btn-logout" onclick="cerrarSesion()">Cerrar Sesión</button>
    </header>

    <div class="container">

        <section class="card">
            <div class="card-header">
                <h2>Registrar Nuevo Usuario</h2>
            </div>

            <label>Nombre:</label>
            <input id="newNameAdmin" type="text">

            <label>Correo:</label>
            <input id="newEmailAdmin" type="email">

            <label>Contraseña:</label>
            <input id="newPassAdmin" type="password">

            <label>Rol:</label>
            <select id="newRoleAdmin">
                <option value="user">Usuario</option>
                <option value="admin">Administrador</option>
            </select>

            <button onclick="registerUser()" class="btn-action">Registrar Usuario</button>
            <p id="adminMsg"></p>
        </section>

        <section class="card">
            <div class="card-header">
                <h2>Gestión de Inventario</h2>
            </div>

            <label>Producto:</label>
            <input id="invName" type="text">

            <label>Categoría:</label>
            <select id="invCat">
                <option value="Ropa">Ropa</option>
                <option value="Suplementos">Suplementos</option>
                <option value="Accesorios">Accesorios</option>
                <option value="Preentrenos">Preentrenos</option>
                <option value="Planes de Comida">Planes de comida</option>
                <option value="Planes de Rutinas">Planes de rutinas</option>
            </select>

            <label>Stock:</label>
            <input id="invStock" type="number">

            <button onclick="addInventory()" class="btn-action">Agregar al Inventario</button>

            <p id="invMsg"></p>

            <h3>Inventario Actual</h3>
            <table>
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Categoría</th>
                        <th>Stock</th>
                    </tr>
                </thead>
                <tbody id="inventoryTableAdmin"></tbody>
            </table>
        </section>

    </div>

    <script src="auth.js"></script>
    <script src="dashboard_admin.js"></script>
</body>
</html>
