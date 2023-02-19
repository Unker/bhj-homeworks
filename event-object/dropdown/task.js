const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach((dropdown) => {
    dropdown.addEventListener('click', (e) => {
        const dropdownList = e.currentTarget.querySelector('.dropdown__list');
        dropdownList.classList.toggle('dropdown__list_active')
    });
});

const links = document.querySelectorAll('.dropdown__link');

links.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const currentLink = e.currentTarget;
        const dropdown = currentLink.closest('.dropdown');
        const dropdownValue = dropdown.querySelector('.dropdown__value');
        dropdownValue.textContent = currentLink.textContent;
    });
});

