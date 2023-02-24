const bookControlers = document.querySelectorAll('.book__controls');
let styles = {};
// соответствие класса элемента управления классу отображения текста
let elementToBookStyle = {
    'size': {
        'big': 'book_fs-big',
        'small': 'book_fs-small',
    },
    'color': {
        'black': 'book_color-black',
        'gray': 'book_color-gray',
        'whitesmoke': 'book_color-whitesmoke',
    },
    'bg_color': {
        'black': 'bg_color_black',
        'gray': 'bg_color_gray',
        'white': 'bg_color_white',
    },
}

bookControlers.forEach((bookControler) => {
    bookControler.addEventListener('click', (e) => {
        e.preventDefault();
        const book = e.currentTarget.parentNode;
        const target = e.target;
        const control = target.parentNode;

        if (control.className.includes('book__control_font-size')) {
            styles['size'] = elementToBookStyle.size[target.dataset.size]
            // смена активного шрифта
            fontSize = control.querySelectorAll('.font-size');
            fontSize.forEach((item) => item.classList.remove('font-size_active'));
            target.classList.add('font-size_active');

        } else if (control.className.includes('book__control_color')) {
            styles['color'] = elementToBookStyle.color[target.dataset.textColor]
            // смена активного фона шрифта
            colors = control.querySelectorAll('.color');
            colors.forEach((item) => item.classList.remove('color_active'));
            target.classList.add('color_active');

        } else if (control.className.includes('book__control_background')) {
            styles['bg_color'] = elementToBookStyle.bg_color[target.dataset.bgColor]
            // смена активного цвета фона
            colors = control.querySelectorAll('.color');
            colors.forEach((item) => item.classList.remove('color_active'));
            target.classList.add('color_active');
        }

        changeStyle(book, styles);

    });
});


function changeStyle(book) {
    book.classList = ['book'];
    book.classList.add(styles['size']);
    book.classList.add(styles['color']);
    book.classList.add(styles['bg_color']);
}