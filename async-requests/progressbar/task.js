const formUpload = document.getElementById('form');
const btnSend = document.getElementById('send');
const inputFile = formUpload.querySelector('#file');
const progress = document.getElementById( 'progress' );

const urlUpload = 'https://students.netoservices.ru/nestjs-backend/upload'

formUpload.addEventListener('submit', (e) => {
    e.preventDefault();
    btnSend.disabled = true;

    const xhr = new XMLHttpRequest();

    const file = inputFile.files[0];
    console.log(file)

    xhr.addEventListener('readystatechange', () => {
        console.log('state:', xhr.readyState)
        switch(xhr.readyState) {
            case xhr.LOADING:
                console.log('LOADING');
                console.log(xhr.response)
                break;

            case xhr.DONE:
                console.log('DONE');
                btnSend.disabled = false;
                break;
        }
    })

    xhr.upload.addEventListener('progress', (e) => {
        console.log(`progress: ${e.loaded}/${e.total} `)
        progress.value = e.loaded/e.total
        // progressBefore.content = ``
        progress.style.setProperty('--percent-loaded', 
            `'${(progress.value*100).toFixed(0)} %'`)
    })

    xhr.open('POST', urlUpload);
    xhr.setRequestHeader("Content-Type","multipart/form-data");

    var formData = new FormData();
    formData.append("file", file);

    xhr.send(formData);
})