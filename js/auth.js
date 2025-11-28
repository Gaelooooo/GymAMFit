// js/auth.js
const usuarios = [
  { email: "admin@gym.com", pass: "1234", role: "admin" },
  { email: "cliente@gym.com", pass: "abcd", role: "user" }
];

function login() {
  const email = document.getElementById("loginEmail")?.value?.trim();
  const pass = document.getElementById("loginPass")?.value?.trim();
  const msg = document.getElementById("loginMsg");

  if (!email || !pass) {
    msg.style.color = "red";
    msg.innerText = "Completa ambos campos";
    return;
  }

  const u = usuarios.find(u => u.email === email && u.pass === pass);
  if (!u) {
    msg.style.color = "red";
    msg.innerText = "Credenciales incorrectas";
    return;
  }

  // Guardar sesión
  localStorage.setItem("sessionRole", u.role);
  localStorage.setItem("sessionEmail", u.email);

  msg.style.color = "#CFFF04";
  msg.innerText = "Acceso concedido...";

  setTimeout(() => {
    if (u.role === "admin") window.location.href = "dashboard_admin.html";
    else window.location.href = "dashboard_user.html";
  }, 700);
}

function protegerPagina(tipo) {
  const role = localStorage.getItem("sessionRole");
  if (!role) {
    window.location.href = "login.html";
    return;
  }
  if (tipo === "admin" && role !== "admin") {
    window.location.href = "dashboard_user.html";
    return;
  }
  if (tipo === "user" && role !== "user") {
    window.location.href = "dashboard_admin.html";
    return;
  }
}

function cerrarSesion() {
  localStorage.removeItem("sessionRole");
  localStorage.removeItem("sessionEmail");
  window.location.href = "login.html";
}

