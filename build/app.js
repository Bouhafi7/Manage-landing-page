let menu = document.querySelector('.menu');
let menuIcon = document.querySelector('.menu-icon');
let menuItems = document.querySelectorAll('.menu li a');
let overlay = document.querySelector('.overlay');

menuIcon.addEventListener('click', () => {
    menu.classList.toggle('active');
    overlay.classList.toggle('active');
    menu.classList.contains('active') ? menuIcon.src = 'images/icon-close.svg' : menuIcon.src = 'images/icon-hamburger.svg';
});

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.remove('active');
        overlay.classList.remove('active');
        menuIcon.src = 'images/icon-hamburger.svg';
    });
})


let bullets = document.querySelectorAll('.about .bullets > div');

const bulletsSlider = () => {
    bullets.forEach(bullet => {
        setTimeout(() => {
            bullet.classList.remove('active');
            bullets[1].classList.add('active');
        }, 0);
        setTimeout(() => {
            bullet.classList.remove('active');
            bullets[2].classList.add('active');
        }, 6000);
        setTimeout(() => {
            bullet.classList.remove('active');
            bullets[3].classList.add('active');
        }, 12000);
        setTimeout(() => {
            bullet.classList.remove('active');
            bullets[2].classList.add('active');
        }, 18000);
        setTimeout(() => {
            bullet.classList.remove('active');
            bullets[1].classList.add('active');
        }, 24000);
        setTimeout(() => {
            bullet.classList.remove('active');
            bullets[0].classList.add('active');
        }, 30000);
    });

    setTimeout(() => {
        bulletsSlider();
    }, 36000);
}

bulletsSlider();

let emailInput = document.querySelector('.email-input');
let emailErr = document.querySelector('.error-msg');
let goBtn = document.querySelector('.go-btn');

goBtn.addEventListener('click', () => {
    let regex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/ig;

    if (regex.test(emailInput.value)) {
        emailErr.innerText = 'Email sent';
        inputValid();
    } else if (emailInput.value == '') {
        emailErr.innerText = 'Input cannot be empty';
        inputNotValid();
    } else {
        emailErr.innerText = "Whoops, make shure it's an email";
        inputNotValid();
    }
});


function inputValid() {
    emailErr.classList.remove('error');
        emailInput.classList.remove('error');
        emailErr.classList.add('done');
        emailInput.classList.add('done');
        setTimeout(() => {
            emailErr.classList.remove('done');
            emailInput.classList.remove('done');
            emailInput.value = '';
        }, 2000);
};

function inputNotValid() {
    emailErr.classList.remove('done');
    emailInput.classList.remove('done');
    emailErr.classList.add('error');
    emailInput.classList.add('error');
}