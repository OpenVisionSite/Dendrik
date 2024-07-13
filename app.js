document.addEventListener('DOMContentLoaded', () => {
    const catalogButton = document.querySelector('.catalog-button');
    const mobileCatalog = document.querySelector('.mobile-catalog');
    const closeButton = document.querySelector('.close-button');
    let isExpanded = false;

    catalogButton.onclick = () => {
        if (!isExpanded) {
            mobileCatalog.style.display = 'flex';
        } else {
            mobileCatalog.style.display = 'none';
        }
        isExpanded = !isExpanded;
    }
    closeButton.onclick = () => {
        if (!isExpanded) {
            mobileCatalog.style.display = 'flex';
        } else {
            mobileCatalog.style.display = 'none';
        }
        isExpanded = !isExpanded;
    }
});