document.addEventListener("DOMContentLoaded", () => {
    const divBlocks = document.querySelectorAll('.parent, .child');

    divBlocks.forEach(element => {
        element.addEventListener('click', event => {
            const parentDivIds = [];

            let currentElement = event.target;
            while (currentElement && currentElement !== document.body) {
                if (currentElement.classList.contains('parent')) {
                    parentDivIds.push(currentElement.id);
                }
                currentElement = currentElement.parentNode;
            }

            console.log(parentDivIds);
        });
    });
});
