//your JS code here. If required.
// script.js
function activateSearch() {
    const searchDiv = document.querySelector('.search');
    const inputElement = document.querySelector('.input');

    searchDiv.classList.add('active');
    inputElement.focus();
}

