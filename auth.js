function login() {
    const user = document.getElementById("usuario").value;
    const pass = document.getElementById("password").value;

    // Usuarios de prueba (pueden venir de base de datos)
    const adminUser = { user: "admin", pass: "1234", role: "admin" };
    const normalUser = { user: "cliente", pass: "abcd", role: "user" };

    if (user === adminUser.user && pass === adminUser.pass) {
        localStorage.setItem("role", "admin");
        window.location.href = "dashboard_admin.html";
    } 
    else if (user === normalUser.user && pass === normalUser.pass) {
        localStorage.setItem("role", "user");
        window.location.href = "dashboard_user.html";
    }
    else {
        alert("Usuario o contraseña incorrectos");
    }
}
