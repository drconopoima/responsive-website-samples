"use strict";
const section1FirstElement = document.querySelector('.section1-icons i');
setInterval(() => {
    const section1VisibleElement = document.querySelector('.section1-icons i:not(.hidden)');
    const section1NextElement = section1VisibleElement.nextElementSibling;
    section1NextElement ? section1NextElement.classList.remove('hidden') : section1FirstElement.classList.remove('hidden');
    section1VisibleElement.classList.add('hidden');
}, 4000);
