document.addEventListener("DOMContentLoaded", function () {

    // ================= FORM =================
    const loginForm = document.getElementById("login");
    const registerForm = document.getElementById("register");
    const forgotForm = document.getElementById("forgot");

    // ================= NAVIGASI =================
    let toRegister = document.getElementById("toRegister");
    if (toRegister) {
        toRegister.onclick = () => {
            loginForm.classList.remove("active");
            registerForm.classList.add("active");
        };
    }

    let toLogin = document.getElementById("toLogin");
    if (toLogin) {
        toLogin.onclick = () => {
            registerForm.classList.remove("active");
            loginForm.classList.add("active");
        };
    }

    let toForgot = document.getElementById("toForgot");
    if (toForgot) {
        toForgot.onclick = () => {
            loginForm.classList.remove("active");
            forgotForm.classList.add("active");
        };
    }

    let backLogin = document.getElementById("backLogin");
    if (backLogin) {
        backLogin.onclick = () => {
            forgotForm.classList.remove("active");
            loginForm.classList.add("active");
        };
    }

    // ================= TOGGLE PASSWORD =================
   // LOGIN
let showLogin = document.getElementById("showLogin");
if (showLogin) {
    showLogin.onchange = () => {
        let pass = document.getElementById("loginPass");
        pass.type = showLogin.checked ? "text" : "password";
    };
}

// REGISTER
let showRegister = document.getElementById("showRegister");
if (showRegister) {
    showRegister.onchange = () => {
        let pass = document.getElementById("regPass");
        pass.type = showRegister.checked ? "text" : "password";
    };
}

    // ================= REGISTER =================
    let btnRegister = document.getElementById("btnRegister");
    if (btnRegister) {
        btnRegister.onclick = () => {
            let user = document.getElementById("regUser").value;
            let pass = document.getElementById("regPass").value;

            if (user === "" || pass === "") {
                alert("Isi semua data!");
                return;
            }

            localStorage.setItem("username", user);
            localStorage.setItem("password", pass);

            alert("Register berhasil!");
            registerForm.classList.remove("active");
            loginForm.classList.add("active");
        };
    }

    // ================= LOGIN =================
    let btnLogin = document.getElementById("btnLogin");
    if (btnLogin) {
        btnLogin.onclick = () => {
            let user = document.getElementById("loginUser").value;
            let pass = document.getElementById("loginPass").value;

            let u = localStorage.getItem("username");
            let p = localStorage.getItem("password");

            if (user === u && pass === p) {
                alert("Login berhasil!");
                window.location.href = "home.html";
            } else {
                alert("Username atau password salah!");
            }
        };
    }

    // ================= RESET PASSWORD =================
    let btnReset = document.getElementById("btnReset");
    if (btnReset) {
        btnReset.onclick = () => {
            let user = document.getElementById("fpUser").value;
            let newPass = document.getElementById("newPass").value;

            let storedUser = localStorage.getItem("username");

            if (user === storedUser) {
                localStorage.setItem("password", newPass);
                alert("Password berhasil diubah!");
                forgotForm.classList.remove("active");
                loginForm.classList.add("active");
            } else {
                alert("Username tidak ditemukan!");
            }
        };
    }

    // ================= SIDEBAR =================
    let menuToggle = document.getElementById("menuToggle");
    let sidebar = document.getElementById("sidebar");

    if (menuToggle && sidebar) {
        menuToggle.onclick = () => {
            sidebar.classList.toggle("active");
        };
    }

    // klik menu → tutup sidebar
    let menuItems = document.querySelectorAll(".menu-item");
    if (menuItems.length > 0 && sidebar) {
        menuItems.forEach(item => {
            item.onclick = () => {
                sidebar.classList.remove("active");
            };
        });
    }

    // ================= LOGOUT =================
    let btnLogout = document.getElementById("btnLogout");
    if (btnLogout) {
        btnLogout.onclick = () => {
            alert("Logout berhasil!");
            window.location.href = "index.html";
        };
    }

    // ================= WELCOME =================
    let welcome = document.getElementById("welcome");
    let user = localStorage.getItem("username");

    if (welcome && user) {
        welcome.innerText = "Selamat Datang " + user;
    }

});

let showForgot = document.getElementById("showForgot");
if (showForgot) {
    showForgot.onchange = () => {
        let pass = document.getElementById("newPass");
        pass.type = showForgot.checked ? "text" : "password";
    };
}