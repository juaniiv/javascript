//INICIO DE SESIÓN                                                      PREENTREGA 1

// function autenticarUsuario() {
//   let usuario = prompt("Ingrese el usuario");

//   while (usuario !== "usuario1") {
//     alert("Usuario incorrecto");
//     usuario = prompt("Ingrese el usuario");
//   }

//   let password = prompt("Ingrese su contraseña");

//   while (password !== "contraseña1") {
//     alert("Contraseña incorrecta");
//     password = prompt("Ingrese la contraseña");
//   }

//   alert("¡Bienvenido!");
// }

// function verificarStock() {
//   let num = Number(prompt("Ingrese el numero del producto que busca (1-6)"));

//   if (!isNaN(num) && num >= 1 && num <= 3) {
//     consle.log("Este producto está en stock");
//   } else {
//     alert("Este producto está agotado");
//   }
// }

// autenticarUsuario();

// verificarStock();

// 
                                                                                //PREENTREGA 2
function Usuario(nombre, edad, email) {
    this.nombre = nombre;
    this.edad = edad;
    this.email = email;
}

function crearUsuario() {
    let nombre = prompt("Ingrese el nombre del usuario:");
    let edad = prompt("Ingrese la edad del usuario:");
    let email = prompt("Ingrese el correo electrónico del usuario:");

    
    return new Usuario(nombre, edad, email);
}

let usuarios = []; 

while (true) {
    let nuevoUsuario = crearUsuario();
    usuarios.push(nuevoUsuario);

    let continuar = confirm("¿Desea agregar otro usuario?");

    if (!continuar) {
        break;
    }
}


for (let i = 0; i < usuarios.length; i++) {
    consle.log("Usuario " + (i + 1));
    consle.log("Nombre del usuario: " + usuarios[i].nombre);
    consle.log("Edad del usuario: " + usuarios[i].edad);
    consle.log("Correo electrónico del usuario: " + usuarios[i].email);
}

