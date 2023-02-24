// кнопки управления
const bookControlers = document.querySelectorAll('.book__controls');
let font = {};
let bg = {};

bookControlers.forEach((bookControler) => {
    bookControler.addEventListener('click', (e) => {
        e.preventDefault();
        const book = e.currentTarget.parentNode;
        console.log(book)
        target = e.target;
        // найти book__control
        const control = target.parentNode;
        console.log(control)

        if(control.className.includes('book__control_font-size')) {
            font['size'] = e.target.dataset.size;
            changeFont(book, font);
            // смена активного шрифта
            fontSize = control.querySelectorAll('.font-size');
            fontSize.forEach((item) => item.classList.remove('font-size_active'));
            
        } else if(control.className.includes('book__control_color')) {
            font['color'] = e.target.dataset.textColor;
            changeFont(book, font);
        }  else if(control.className.includes('book__control_background')) {
            bg['color'] = e.target.dataset.bgColor;
            changeBackgroud(book, bg);
        }

        console.log(book.classList)
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

    color = font['color']
    switch(color) {
        case 'black':
            book.classList.add('book_color-black');
            break;
        case 'gray':
            book.classList.add('book_color-gray');
            break;
        case 'whitesmoke':
            book.classList.add('book_color-whitesmoke');
            break;
        default:
            break;
    }
}

function changeBackgroud(book, font) {
    book.classList = ['book'];
    color = bg['color']
    switch(color) {
        case 'black':
            book.classList.add('bg_color_black');
            break;
        case 'gray':
            book.classList.add('bg_color_gray');
            break;
        case 'white':
            book.classList.add('bg_color_white');
            break;
        default:
            break;
    }

}