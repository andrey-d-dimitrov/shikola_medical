window.onload = function() {
    var doctorCards = document.querySelector('.doctor-cards');

    var doctors = [
        {
            name: 'Д-р Мария Илиева',
            specialization: 'Акушер-гинеколог',
            href: '/doctor1', // Ensure the URL matches Flask route
            image: '/static/doctor1.jpg'
        },
        {
            name: 'Д-р Стефан Шайлеков',
            specialization: 'Ортопед',
            href: '/doctor2', // Ensure the URL matches Flask route
            image: '/static/doctor2.jpg'
        },
        {
            name: 'Д-р Гергана Георгиева',
            specialization: 'Образна диагностика, Мамолог',
            href: '/doctor3', // Ensure the URL matches Flask route
            image: '/static/doctor3.jpg'
        },
        {
            name: 'Д-р Мая Костадинова',
            specialization: 'Ендокринолог',
            href: '/doctor4', // Ensure the URL matches Flask route
            image: '/static/doctor4.jpg'
        },
        {
            name: 'Д-р Оля Ефтимова',
            specialization: 'Кардиолог',
            href: '/doctor5', // Ensure the URL matches Flask route
            image: 'static/92zYv6BmtiZuHIJwOQV6tqWgiRdHX6xJjKjE1hVJ.jpg'
        },
        {
            name: 'Д-р Констанца Нейкова',
            specialization: 'Акушер-гинеколог',
            href: '/doctor6', // Ensure the URL matches Flask route
            image: 'static/KODGyg5HlshF1Bbqq7XagAcv7wD5ynDtxG4niwXX.jpg'
        },
        {
            name: 'Д-р Мария Петришка',
            specialization: 'Невролог',
            href: '/doctor7', // Ensure the URL matches Flask route
            image: 'static/dXWLpnPczCrgxuAKZuclTe9YD3gvGI71tn1oURRZ.jpg'
        },
        {
            name: 'Д-р Ирена Шикова',
            specialization: 'Акушер-гинеколог',
            href: '/doctor8', // Ensure the URL matches Flask route
            image: 'static/czGUJgGop8zPNOBOGXWG3u0hafVgxFFPDedaVKb4.jpg'
        }
    ];

    var doctorCardsHTML = '';

    doctors.forEach(function(doctor) {
        doctorCardsHTML += '<div class="doctor-card" onclick="window.location.href=\'' + doctor.href + '\'">';
        doctorCardsHTML += '    <img class="doctor-image" src="' + doctor.image + '" alt="' + doctor.name + '">';
        doctorCardsHTML += '    <h2>' + doctor.name + '</h2>';
        doctorCardsHTML += '    <p>Специализация: ' + doctor.specialization + '</p>';
        doctorCardsHTML += '</div>';
    });

    doctorCards.innerHTML = doctorCardsHTML;
};
