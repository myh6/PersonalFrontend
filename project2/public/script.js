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

    const subscribeEl = document.querySelector('.subscribe-button');

    subscribeEl.addEventListener('click', (e) => {
        e.preventDefault()
        console.log(subscribeEl);
    });
})();