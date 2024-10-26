"use strict";
(function() {
    const hamburgerEl = document.querySelector(".menu-button");
    const navBarEl = document.querySelector(".nav-bar");

    hamburgerEl.addEventListener("click", () => {
        if (!navBarEl.classList.contains('expand')) {
            navBarEl.classList.add('expand');
        } else {
            navBarEl.classList.remove('expand');
        }
    });

    // dialog

    const subscribeButtons = document.querySelectorAll('.subscribe-button');
    const modalEl = document.querySelector('dialog');
    const cancelEl = document.querySelector('.cancel-form');

    subscribeButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            modalEl.showModal();
        });
    });

    cancelEl.addEventListener('click', (e) => {
        e.preventDefault();
        modalEl.close();
    });

    // form

})();