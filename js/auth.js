const usuarios = [
    { email: "admin@gym.com", pass: "1234", role: "admin" },
    { email: "cliente@gym.com", pass: "abcd", role: "user" }
];

// Función de LOGIN
function login() {
    const email = document.getElementById("loginEmail").value.trim();
    const pass = document.getElementById("loginPass").value.trim();
    const msg = document.getElementById("loginMsg");

    const userFound = usuarios.find(u => u.email === email && u.pass === pass);

    if (!userFound) {
        msg.style.color = "red";
        msg.innerText = "Credenciales incorrectas";
        return;
    }

    // Guardar sesión
    localStorage.setItem("role", userFound.role);
    localStorage.setItem("email", userFound.email);

    msg.style.color = "#CFFF04";
    msg.innerText = "Acceso correcto, redirigiendo...";

    // Redirigir a la Tienda
    setTimeout(() => {
        window.location.href = "Tienda.html";
    }, 800);
}

    // Redirigir según el rol
    setTimeout(() => {
        if (userFound.role === "admin") {
            window.location.href = "dashboard_admin.html";
        } else {
            window.location.href = "dashboard_user.html";
        }
    }, 800);
}

// PROTECCIÓN DE PÁGINAS
function protegerPagina(tipo) {
    const role = localStorage.getItem("role");

    if (!role) {
        window.location.href = "login.html";
    }

    // Si el usuario intenta entrar al panel admin y NO es admin
    if (tipo === "admin" && role !== "admin") {
        window.location.href = "dashboard_user.html";
    }

    // Si el usuario intenta entrar al panel de usuario y es admin
    if (tipo === "user" && role !== "user") {
        window.location.href = "dashboard_admin.html";
    }
}

// Cerrar sesión
function logout() {
    localStorage.clear();
    window.location.href = "login.html";
}
