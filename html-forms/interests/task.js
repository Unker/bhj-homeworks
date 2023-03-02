const checkboxes = document.querySelectorAll('input[type="checkbox"]')

checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', (event) => checkboxDetermination(event.target));
});

function checkboxDetermination(initiator) {
    let children = initiator.closest('.interest').querySelectorAll('input[type="checkbox"]');

    children.forEach((child) => {
        child.checked = initiator.checked;
        child.indeterminate = false;
    });
    indeterminateWalk();
}

function indeterminateWalk() {
    [...checkboxes]
        .forEach(checkbox => {
            let checkboxChildren = checkbox.closest('.interest').querySelectorAll('input[type="checkbox"]');

            // remove self node
            checkboxChildren = [].slice.call(checkboxChildren, 1);

            if (checkboxChildren.length == 0) return;

            let unCheckedChildren = [...checkboxChildren].filter(child => !child.checked);
            checkbox.indeterminate = (unCheckedChildren.length > 0 && unCheckedChildren.length < checkboxChildren.length);

            checkbox.checked = (unCheckedChildren.length === 0);
        });
}
