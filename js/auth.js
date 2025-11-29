// js/auth.js

// Funciones de utilidad para manejar usuarios en Local Storage
const initialUsers = [
  { name: "Admin", email: "admin@gym.com", pass: "1234", role: "admin" },
  { name: "Usuario", email: "cliente@gym.com", pass: "abcd", role: "user" }
];

function getUsuarios() {
    let usuarios = JSON.parse(localStorage.getItem("usuarios"));
    if (!usuarios || usuarios.length === 0) {
        // Inicializar si no existen
        localStorage.setItem("usuarios", JSON.stringify(initialUsers));
        return initialUsers;
    }
    return usuarios;
}

function login() {
    const email = document.getElementById("loginEmail")?.value?.trim();
    const pass = document.getElementById("loginPass")?.value?.trim();
    const msg = document.getElementById("loginMsg");
    
    // Si no se encuentra loginMsg, usamos un alert
    if (!msg) {
        if (!email || !pass) {
            alert("Completa ambos campos");
            return;
        }
    } else {
        if (!email || !pass) {
            msg.style.color = "red";
            msg.innerText = "Completa ambos campos";
            return;
        }
    }

    const usuarios = getUsuarios();
    const u = usuarios.find(user => user.email === email && user.pass === pass);
    
    if (!u) {
        if (msg) {
            msg.style.color = "red";
            msg.innerText = "Credenciales incorrectas";
        } else {
            alert("Credenciales incorrectas");
        }
        return;
    }

    // Guardar sesión
    localStorage.setItem("sessionRole", u.role);
    localStorage.setItem("sessionEmail", u.email);

    if (msg) {
        msg.style.color = "#CFFF04";
        msg.innerText = "Acceso concedido...";
    }

    setTimeout(() => {
        if (u.role === "admin") {
            // Redirige al panel de administrador
            window.location.href = "dashboard_admin.html";
        } else {
            // REDIRECCIÓN SOLICITADA: Redirige a la tienda para el usuario estándar
            window.location.href = "tienda.html"; 
        }
    }, 500);
}

function protegerPagina(tipo) {
    const role = localStorage.getItem("sessionRole");
    
    // Si no hay sesión, va al login
    if (!role) {
        window.location.href = "login.html"; // Redirigir al login
        return;
    }
    
    // Si no tiene el rol correcto
    if (tipo === "admin" && role !== "admin") {
        window.location.href = "tienda.html"; // Envía a la página del user/tienda
    }
    // No necesitamos una validación para "user" aquí, ya que el admin también debería poder ver la tienda.
}

function cerrarSesion() {
    localStorage.removeItem("sessionRole");
    localStorage.removeItem("sessionEmail");
    window.location.href = "login.html";
}

// Inicializar usuarios si es la primera vez
getUsuarios();
