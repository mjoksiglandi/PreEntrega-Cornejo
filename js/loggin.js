// Lista de usuarios
var users = [
    { userId: "admin", pass: "1234", email: "admin@trashpandagarage.com"}
];

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Check if username and password are valid
    var validUser = users.find(function(user) {
        return user.userId === username && user.pass === password;
    });

    if (validUser) {
        alert("Login successful!");
        // Redirect to a blank page after successful login
        window.location.href = "../index.html"; // Change "blank.html" to the URL of your blank page
    } else {
        // Show error message
        document.getElementById("errorMessage").style.display = "block";
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
