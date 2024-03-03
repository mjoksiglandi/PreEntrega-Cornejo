

var users = [];
//     { userId: "admin", pass: "1234", email: "admin@trashpandagarage.com"}  hardcode de usuario
// ];


document.addEventListener('DOMContentLoaded', function() {
    let usersData = JSON.parse(localStorage.getItem('users'));
    if (usersData) {
        users = usersData;
    }
});

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let validUser = users.find(function(user) {
        return user.userId === username && user.pass === password;
    });   
    }
});

function addNewUser() {
    let newUser = {
        userId: document.getElementById("newUsername").value,
        pass: document.getElementById("newPassword").value,
        email: document.getElementById("newEmail").value
    };
    users.push(newUser);
    window.location.href = "./logging.html";

    // Guardar usuarios en el localStorage
    localStorage.setItem('users', JSON.stringify(users));
    alert("New user added successfully!");
}

