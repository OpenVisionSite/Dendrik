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

    const selectLinguageButtom = document.querySelector('.select-language-buttom');
    const selectLanguage = document.querySelector('.select-language');
    const selectLanguageMobile = document.querySelector('.select-language-mobile');
    const linguage = document.getElementById('cmb-lng');

    selectLinguageButtom.onclick = () => {
        if (!isExpanded) {
            selectLanguage.style.display = 'flex';
        } else {
            selectLanguage.style.display = 'none';
        }
        isExpanded = !isExpanded;
    };

    const hideLanguageSelector = () => {
        if (selectLanguage) {
            selectLanguage.style.display = 'none';
        }
        if (selectLanguageMobile) {
            mobileCatalog.style.display = 'none';
        }
        isExpanded = false;
    };
    
    if (selectLanguage) {
        selectLanguage.onclick = hideLanguageSelector;
    }
    
    if (selectLanguageMobile) {
        selectLanguageMobile.onclick = hideLanguageSelector;
    }

    
});