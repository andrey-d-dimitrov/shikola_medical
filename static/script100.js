function Spec1() {
    var doctorCards = document.querySelector('.doctor-card1');

    var doctors = [
        {
            name: 'Д-р Мария Илиева',
            specialization: 'Акушер-гинеколог',
            href: 'doctor1.html',
            image: '/static/doctor1.jpg'
        },

        {
            name: 'Д-р Констанца Нейкова',
            specialization: 'Акушер-гинеколог',
            href: 'doctor6.html',
            image: '/static/doctor6.jpg'
        },

        {
            name: 'Д-р Ирена Шикова',
            specialization: 'Акушер-гинеколог',
            href: 'doctor8.html',
            image: '/static/doctor8.jpg'
        }
    ];

    var doctorCardsHTML = '';


    doctors.forEach(function(doctor) {
        doctorCardsHTML += '<div class="doctor-card1" onclick="window.location.href=\'' + doctor.href + '\'">';
        doctorCardsHTML += '    <img class="doctor-image" src="' + doctor.image + '" alt="' + doctor.name + '">';
        doctorCardsHTML += '    <h2>' + doctor.name + '</h2>';
        doctorCardsHTML += '</div>';
    });
    doctorCards.innerHTML = doctorCardsHTML;
};






function Spec2() {
    var doctorCards = document.querySelector('.doctor-card2');

    var doctors = [

        {
            name: 'Д-р Стефан Шайлеков',
            specialization: 'Ортопед',
            href: 'doctor2.html',
            image: '/static/doctor2.jpg'
        },
        {
            name: 'Д-р Гергана Георгиева',
            specialization: 'Образна диагностика, Мамолог',
            href: 'doctor3.html',
            image: '/static/doctor3.jpg'
        },
        

        {
            name: 'Д-р Мария Петришка',
            specialization: 'Невролог',
            href: 'doctor7.html',
            image: '/static/doctor7.jpg'
        },

    ];

    var doctorCardsHTML = '';

    doctors.forEach(function(doctor) {
        doctorCardsHTML += '<div class="doctor-card2" onclick="window.location.href=\'' + doctor.href + '\'">';
        doctorCardsHTML += '    <img class="doctor-image" src="' + doctor.image + '" alt="' + doctor.name + '">';
        doctorCardsHTML += '    <h2>' + doctor.name + '</h2>';
        doctorCardsHTML += '</div>';
    });

    doctorCards.innerHTML = doctorCardsHTML;
};







function Spec3() {
    var doctorCards = document.querySelector('.doctor-card3');

    var doctors = [

        {
            name: 'Д-р Мая Костадинова',
            specialization: 'Ендокринолог',
            href: 'doctor4.html',
            image: '/static/doctor4.jpg'
        },


    ];

    var doctorCardsHTML = '';

    doctors.forEach(function(doctor) {
        doctorCardsHTML += '<div class="doctor-card3" onclick="window.location.href=\'' + doctor.href + '\'">';
        doctorCardsHTML += '    <img class="doctor-image" src="' + doctor.image + '" alt="' + doctor.name + '">';
        doctorCardsHTML += '    <h2>' + doctor.name + '</h2>';
        doctorCardsHTML += '</div>';
    });

    doctorCards.innerHTML = doctorCardsHTML;
};







function Spec4() {
    var doctorCards = document.querySelector('.doctor-card4');

    var doctors = [

        {
            name: 'Д-р Оля Ефтимова',
            specialization: 'Кардиолог',
            href: 'doctor5.html',
            image: '/static/doctor5.jpg'
        },

    ];

    var doctorCardsHTML = '';

    doctors.forEach(function(doctor) {
        doctorCardsHTML += '<div class="doctor-card4" onclick="window.location.href=\'' + doctor.href + '\'">';
        doctorCardsHTML += '    <img class="doctor-image" src="' + doctor.image + '" alt="' + doctor.name + '">';
        doctorCardsHTML += '    <h2>' + doctor.name + '</h2>';
        doctorCardsHTML += '</div>';
    });

    doctorCards.innerHTML = doctorCardsHTML;
};
