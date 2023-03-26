const loader = document.querySelector('#loader');
const items = document.querySelector('#items');

const urlCourses = 'https://students.netoservices.ru/nestjs-backend/slow-get-courses'

// считаем задачи  из localStorage
let valutes = JSON.parse(localStorage.getItem("valutes"));
if(!valutes) valutes = {};
// и отобразим
for (const [key, valute] of Object.entries(valutes)) {
	renderValute(valute);
};

function renderValute(valute) {
    let item = document.createElement('div');
    item.classList.add('item');

    let itemCode = document.createElement('div');
    itemCode.classList.add('item__code');
    itemCode.innerText = valute.CharCode;

    let itemValue = document.createElement('div');
    itemValue.classList.add('item__value');
    itemValue.innerText = valute.Value;

    let itemCurrency = document.createElement('div');
    itemCurrency.classList.add('item__currency');
    itemCurrency.innerText = 'руб.';

    item.appendChild(itemCode);
    item.appendChild(itemValue);
    item.appendChild(itemCurrency);

    items.appendChild(item);
}

// получить данные по курсам валют
const loadCourses = url => {
    return new Promise(function (resolve, reject) {
        var request = new XMLHttpRequest();
        request.open('GET', url);
        request.onload = function () {
            if (request.status === 200) {
                resolve(request.response);
            } else {
                reject(Error(
                    'Произошла ошибка. Код ошибки:' + request.statusText
                ));
            }
        };
        request.send();
    });
};

// запросить
const embeCourses = url => {
    loadCourses(url).then(function (result) {
        loader.classList.remove('loader_active')
        const valutes = JSON.parse(result).response.Valute;
        
        //запишем в хранилище
		localStorage.setItem("valutes", JSON.stringify(valutes));

        for (const [key, valute] of Object.entries(valutes)) {
            renderValute(valute);
        }
    },
    function (err) {
        console.log(err);
    });
}

embeCourses(urlCourses);