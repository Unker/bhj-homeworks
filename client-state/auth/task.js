const signin = document.getElementById('signin');
const signinForm = document.getElementById('signin__form');
const welcome = document.getElementById('welcome');
const userId = document.getElementById('user_id');
const btnLogout = document.getElementById('logout__btn');

const authURL = 'https://students.netoservices.ru/nestjs-backend/auth'

let user = localStorage.getItem("user_id");
if(user) {
    welcomeUser(user);
}

// приветствие залгиненного пользователя
function welcomeUser(user) {
    signin.classList.remove('signin_active');
    userId.innerHTML = user;
    welcome.classList.add('welcome_active');
    btnLogout.classList.remove('btn_hide');
}

signinForm.addEventListener('submit', (e) => {
    e.preventDefault();

    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open('POST', authURL, true);

    xhr.onload = function () {
        console.log(xhr.response);
        const resp = xhr.response;
        if (resp.success === true) {
            welcomeUser(resp.user_id);
            localStorage.setItem("user_id", resp.user_id);
        } else {
            alert('Неверный логин или пароль');
        }
    };

    const formData = new FormData(signinForm);
    xhr.send(formData);

    signinForm.reset();
});


btnLogout.addEventListener('click', e => {
    btnLogout.classList.add('btn_hide');
    signin.classList.add('signin_active');
    userId.innerHTML = '';
    welcome.classList.remove('welcome_active');
    localStorage.removeItem("user_id");
});