alert("Bienvenido a TrashPanda Garage");
const userName1 = "admin";
const password1 = '1234'
var password2
var userName2
var loginType = parseInt(prompt( "\n1 Ingresar \n2 Registrar \n3 seguir como invitado "))
var newpassword;

// loggin 
const login = () => {  
  console.log(userName1 + " " + password1 + " " + userName2 + " " + password2 + " ")
  var newUserName = prompt("Introdusca su nombre de usuario")
    if (newUserName === userName1 || newUserName === userName2) {
      newpassword = parseInt(prompt("Introdusca su contraseña"))
      if  (newpassword == password1 || newpassword == password2){
        alert("bienvenido un gusto que vuelvas");
      }
      else{
        alert("contraseña incorrecta")
      }
    }else{
      alert("usuario incorrecto")
    }
}  
  
// registro de nuevo usuario
const registrar = () => {
   userName2 = prompt("ingresa tu nombre de usuario" )
   password2 = prompt("ingresa tu contraseña") 
  let verificaPass = prompt("reingresa contraseña")
 if (verificaPass == password2) {
   alert("gracias por registrarte " + userName2)
   return userName2 , password2
 }else {
   alert("contraseña incorrecta")
 }
}
let continuar = true;

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
    loginType = parseInt(prompt("\n1 Ingresar \n2 Registrar \n3 seguir como invitado "), 10);
  }
}
