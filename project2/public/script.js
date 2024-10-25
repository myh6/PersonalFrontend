"use strict";
(function() {
    document.querySelector(".menu-button").addEventListener("click", function () {
        console.log("Menu button being pressed");
        const navLinks = document.querySelector(".nav-menu");
        navLinks.classList.toggle("active");
    });
})();