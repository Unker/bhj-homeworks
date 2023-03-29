const formUpload = document.getElementById('form');
const inputFile = formUpload.querySelector('#file');
const progress = document.getElementById( 'progress' );

const urlUpload = 'https://students.netoservices.ru/nestjs-backend/upload'

formUpload.addEventListener('submit', (e) => {
    e.preventDefault();

    const xhr = new XMLHttpRequest();

    const file = inputFile.files[0];
    console.log(file)
    // formUpload.action = urlUpload
    formUpload.file = file;

    xhr.addEventListener('readystatechange', () => {
        console.log('state:', xhr.readyState)
        switch(xhr.readyState) {
            case xhr.LOADING:
                console.log('LOADING');
                console.log(xhr.response)
                break;

            case xhr.DONE:
                console.log('DONE');
                break;
        }
    })

    xhr.addEventListener('progress', (e) => {
        console.log(`progress: ${e.loaded}/${e.total} `)
        progress.value = e.loaded/e.total
    })

    xhr.open('POST', urlUpload);
    xhr.setRequestHeader("Content-Type","multipart/form-data");

    const uploadFormDate = new FormData()
    console.log(formUpload)
    console.log(uploadFormDate)
    xhr.send(uploadFormDate);
})