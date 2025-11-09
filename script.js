'use strict';

const buttons = document.querySelectorAll('.accordion-label');
const root = document.documentElement;

buttons.forEach(btn => btn.addEventListener('click', buttonClick));

function buttonClick(e) {
    const btn = e.target;
    const content = btn.nextElementSibling;

    btn.classList.toggle('open');
    content.classList.toggle('open');

    root.style.setProperty('--content-height', content.scrollHeight + 'px');

    buttons.forEach(otherBtn => {
        if (otherBtn !== btn && otherBtn.classList.contains('open')) {
            otherBtn.classList.remove('open');
            otherBtn.nextElementSibling.classList.remove('open');
        }
    });
}
