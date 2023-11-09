// Array para almacenar usuarios
let usuarios = [];

function validarInicioSesion(event) {
    event.preventDefault();

    const emailInput = document.getElementById("exampleInputEmail1");
    const passwordInput = document.getElementById("exampleInputPassword1");

    const email = emailInput.value;
    const contrasena = passwordInput.value;

    const emailEsperado = "usuario@example.com";
    const contraseñaEsperada = "contraseña123";

    if (email === emailEsperado && contrasena === contraseñaEsperada) {
        window.location.href = "inicio-sesion.html";
    } else {
        alert("Inicio de sesión fallido. Verifica tu email y contraseña.");
    }
}

const botonIniciarSesion = document.querySelector("button.btn-primary");
botonIniciarSesion.addEventListener("click", validarInicioSesion);

function mostrarFormularioRegistro() {
    const formularioInicioSesion = document.querySelector(".formulario form");
    formularioInicioSesion.style.display = "none";

    const formularioRegistro = document.createElement("form");
    formularioRegistro.innerHTML = `
        <h1>Registro</h1>
        <div class="mb-3">
            <label for="nombreRegistro" class="form-label">Nombre</label>
            <input type="text" class="form-control" id="nombreRegistro" placeholder="Ingrese su nombre">
        </div>
        <div class="mb-3">
            <label for="edadRegistro" class="form-label">Edad</label>
            <input type="number" class="form-control" id="edadRegistro" placeholder="Ingrese su edad">
        </div>
        <div class="mb-3">
            <label for="emailRegistro" class="form-label">Email</label>
            <input type="email" class="form-control" id="emailRegistro" placeholder="Ingrese su email">
        </div>
        <div class="mb-3">
            <label for="contrasenaRegistro" class="form-label">Contraseña</label>
            <input type="password" class="form-control" id="contrasenaRegistro" placeholder="Ingrese su contraseña">
        </div>
        <button type="submit" class="btn btn-primary">Registrarse</button>
    `;

    const formularioContainer = document.querySelector(".formulario");
    formularioContainer.appendChild(formularioRegistro);

    const botonRegistrarse = formularioRegistro.querySelector("button.btn-primary");
    botonRegistrarse.addEventListener("click", guardarUsuarioRegistro);
}

const enlaceRegistro = document.querySelector("a[href='#']");
enlaceRegistro.addEventListener("click", mostrarFormularioRegistro);

function guardarUsuarioRegistro(event) {
    event.preventDefault();

    const nombreInput = document.getElementById("nombreRegistro");
    const edadInput = document.getElementById("edadRegistro");
    const emailInput = document.getElementById("emailRegistro");
    const contrasenaInput = document.getElementById("contrasenaRegistro");

    const nombre = nombreInput.value;
    const edad = edadInput.value;
    const email = emailInput.value;
    const contrasena = contrasenaInput.value;

    if (!nombre || !email || !edad || !contrasena) {
        alert("Por favor, complete todos los campos.");
        return;
    }

    const nuevoUsuario = { nombre, edad, email, contrasena };

    // Agregar el nuevo usuario al array
    usuarios.push(nuevoUsuario);

    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    nombreInput.value = "";
    edadInput.value = "";
    emailInput.value = "";
    contrasenaInput.value = "";

    console.log("Usuario registrado:", nuevoUsuario);
    console.log("Usuarios actuales:", usuarios);
}
