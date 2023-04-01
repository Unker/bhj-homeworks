const signin = document.getElementById('signin');
const welcome = document.getElementById('.welcome');
const signinForm = document.getElementById('signin__form');

const authURL = 'https://students.netoservices.ru/nestjs-backend/auth'

signinForm.addEventListener('submit', (e) => {
    e.preventDefault();

    var xhr = new XMLHttpRequest();
    xhr.open('POST', authURL, true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === xhr.DONE) {
            if (xhr.status === 201) {
                console.log(xhr.response);
            } else {
                console.log(Error(
                    `Произошла ошибка. Код ошибки: ${xhr.status} ${xhr.statusText}`
                ));
            }
        }
    };
    const formData = new FormData(signinForm);
    for (var p of formData) {
        console.log(p);
      }
    xhr.send(formData);
});
