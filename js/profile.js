document.addEventListener('DOMContentLoaded', function() {

    let userData = JSON.parse(localStorage.getItem('userData'));
    if (userData) {

        document.getElementById("username").textContent = userData.userId;
        document.getElementById("profileImage").src = "../media/me.jpg";
     
    } else {
        window.location.href = "./loggin.html";
    }
});
