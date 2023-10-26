//INICIO DE SESIÓN

function autenticarUsuario() {
  let usuario = prompt("Ingrese el usuario");

  while (usuario !== "usuario1") {
    alert("Usuario incorrecto");
    usuario = prompt("Ingrese el usuario");
  }

  let password = prompt("Ingrese su contraseña");

  while (password !== "contraseña1") {
    alert("Contraseña incorrecta");
    password = prompt("Ingrese la contraseña");
  }

  alert("¡Bienvenido!");
}

function verificarStock() {
  let num = Number(prompt("Ingrese el numero del producto que busca (1-6)"));

  if (!isNaN(num) && num >= 1 && num <= 3) {
    console.log("Este producto está en stock");
  } else {
    alert("Este producto está agotado");
  }
}

autenticarUsuario();

verificarStock();
