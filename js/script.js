alert("Bienvenido a TrashPanda Garage");
const users = [
  { userId: "admin", 
    pass: "1234", 
    email: "admin@trashpandagarage.com"}
];
let newpassword;
let newUserName;
let newEmail;
let continuar = true;
let loginType = parseInt(
  prompt("\n1 Ingresar \n2 Registrar \n3 seguir como invitado ")
);


// loggin
function login() {
  newUserName = prompt("Introdusca su nombre de usuario");
  const log = users.some((users) => users.userId === newUserName);
  console.log(log);
  if (log === true) {
    newpassword = prompt("Introdusca su contraseña");
    const logPass = users.some((users) => users.pass === newpassword);
    console.log(logPass);
    if (logPass === true) {
      alert("bienvenido un gusto que vuelvas");
      console.log(users);
      continuar = false;
      return continuar;
    } else {
      alert("contraseña incorrecta");
    }
  } else {
    alert("usuario incorrecto");
  }
};

// registro de nuevo usuario
function registrar() {
  newUserName = prompt("ingresa tu nombre de usuario");
  newpassword = prompt("ingresa tu contraseña");
  newEmail = prompt("ingresa tu email");
  let newUsers = { userId: newUserName, 
                    pass: newpassword,
                    email: newEmail };
  users.push(newUsers);
  console.log(users);
}

while (loginType != 0 && continuar) {
  switch (loginType) {
    case 1:
      login();
      break;
    case 2:
      registrar();
      break;
    case 3:
      alert("bienvenido");
      continuar = false;
      break;
    default:
      alert("elige una opcion");
      break;
  }
  if (continuar) {
    loginType = parseInt(
      prompt("\n1 Ingresar \n2 Registrar \n3 seguir como invitado "),
      10
    );
  }
}
