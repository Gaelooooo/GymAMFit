// Protección viene desde auth.js

let inventario = JSON.parse(localStorage.getItem("inventario")) || [];

// Registrar usuarios desde el panel admin
function registerUser() {
    const name = document.getElementById("newNameAdmin").value.trim();
    const email = document.getElementById("newEmailAdmin").value.trim();
    const pass = document.getElementById("newPassAdmin").value.trim();
    const role = document.getElementById("newRoleAdmin").value;

    if (!name || !email || !pass) {
        document.getElementById("adminMsg").innerText = "Completa todos los campos.";
        return;
    }

    let users = JSON.parse(localStorage.getItem("usuarios")) || [];

    users.push({ name, email, pass, role });
    localStorage.setItem("usuarios", JSON.stringify(users));

    document.getElementById("adminMsg").innerText = "Usuario registrado correctamente";
}

// Agregar inventario
function addInventory() {
    const name = document.getElementById("invName").value.trim();
    const cat = document.getElementById("invCat").value;
    const stock = document.getElementById("invStock").value;

    if (!name || !stock) {
        document.getElementById("invMsg").innerText = "Completa los campos.";
        return;
    }

    inventario.push({ name, cat, stock });
    localStorage.setItem("inventario", JSON.stringify(inventario));

    document.getElementById("invMsg").innerText = "Producto agregado.";
    renderInventoryAdmin();
}

function renderInventoryAdmin() {
    const tbody = document.getElementById("inventoryTableAdmin");
    tbody.innerHTML = "";

    inventario.forEach(item => {
        tbody.innerHTML += `
            <tr>
                <td>${item.name}</td>
                <td>${item.cat}</td>
                <td>${item.stock}</td>
            </tr>
        `;
    });
}

renderInventoryAdmin();
