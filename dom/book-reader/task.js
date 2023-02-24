// кнопки управления
const bookControlers = document.querySelectorAll('.book__controls');
let font = {};

bookControlers.forEach((bookControler) => {
    bookControler.addEventListener('click', (e) => {
        e.preventDefault();
        const book = e.currentTarget.parentNode;
        console.log(book)
        target = e.target;

        if(target.className.includes('font-size')) {
            font['size'] = e.target.dataset.size;
            changeFont(book, font);
        }

    });
});

function changeFont(book, font) {
    book.classList = ['book'];
    size = font['size']
    switch(size) {
        case 'big':
            book.classList.add('book_fs-big');
            break;
        case 'small':
            book.classList.add('book_fs-small');
            break;
        default:
            break;
    }
}