// Simulando la obtención de datos del usuario
var userData = {
    username: users.userId,
    profileImage: "../media/example-profile-picture.jpg"
};

document.getElementById("username").textContent = userData.username;

document.getElementById("profileImage").src = userData.profileImage;


document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        events: [
        ]
    });
    calendar.render();
});


// document.addEventListener('DOMContentLoaded', function() {
//     var calendarEl = document.getElementById('calendar');
//     var calendar = new FullCalendar.Calendar(calendarEl, {
//         initialView: 'dayGridMonth',
//         events: [
//             // Eventos existentes del calendario
//             {
//                 title: 'Evento existente',
//                 start: '2024-02-01'
//             }
//         ],
//         dateClick: function(info) {
//             var note = prompt("Ingrese la nota para este día:");
//             if (note) {
//                 calendar.addEvent({
//                     title: note,
//                     start: info.date
//                 });
//             }
//         }
//     });
//     calendar.render();
// });