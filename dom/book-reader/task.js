// кнопки управления
const bookControlers = document.querySelectorAll('.book__controls');
let styles = {};

bookControlers.forEach((bookControler) => {
    bookControler.addEventListener('click', (e) => {
        e.preventDefault();
        const book = e.currentTarget.parentNode;
        target = e.target;
        const control = target.parentNode;

        if(control.className.includes('book__control_font-size')) {
            styles['size'] = target.dataset.size;
            changeStyle(book, styles);
            // смена активного шрифта
            fontSize = control.querySelectorAll('.font-size');
            fontSize.forEach((item) => item.classList.remove('font-size_active'));
            target.classList.add('font-size_active');

        } else if(control.className.includes('book__control_color')) {
            styles['color'] = target.dataset.textColor;
            changeStyle(book, styles);
            // смена активного фона шрифта
            fontSize = control.querySelectorAll('.color');
            fontSize.forEach((item) => item.classList.remove('color_active'));
            target.classList.add('color_active');

        }  else if(control.className.includes('book__control_background')) {
            styles['bg_color'] = target.dataset.bgColor;
            changeStyle(book, styles);
            // смена активного цвета фона
            fontSize = control.querySelectorAll('.color');
            fontSize.forEach((item) => item.classList.remove('color_active'));
            target.classList.add('color_active');
        }
    });
});

function changeStyle(book) {
    book.classList = ['book'];
    size = styles['size']
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

    color = styles['color']
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

    bgColor = styles['bg_color']
    switch(bgColor) {
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