// Lista de usuarios
var users = [
    { userId: "admin", pass: "1234", email: "admin@trashpandagarage.com"}
];

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var validUser = users.find(function(user) {
        return user.userId === username && user.pass === password;
    });

    if (validUser) {
        alert("Login successful!");
        var loginButton = document.getElementById("loginButton");
        loginButton.textContent = "Perfil";
        loginButton.href = "./perfil.html"; 
        window.location.href = "./perfil.html"; 
    } else {
        alert("Invalid username or password");
    }
});

// Función para agregar un nuevo usuario
function addNewUser() {
    var newUser = {
        userId: document.getElementById("newUsername").value,
        pass: document.getElementById("newPassword").value,
        email: document.getElementById("newEmail").value
    };
    users.push(newUser);
    alert("New user added successfully!");
}

