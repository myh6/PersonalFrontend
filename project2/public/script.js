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
    const emailEl = document.querySelector('.email-input');
    const confirmEl = document.querySelector('.confirm-input');
    const formEl = document.querySelector('form');
    
    formEl.addEventListener('submit', (e) => {

        if (checkEmailElHasError()) {
            e.preventDefault()
            return
        }

        if (checkConfirmElHasError()) {
            e.preventDefault()
            return
        }

    });

    formEl.addEventListener('input', (e) => {
        console.log("Checking on input");
        if (e.target.classList.contains("hasError")) {
            e.target.classList.remove("hasError");
            resetState(e.target)
        }
    });

    emailEl.addEventListener('blur', () => {
        console.log("Checking on blur");
        checkEmailElHasError();
    });

    const emptyError = "This field is required.";
    const noSpecialCharacterError = "THis field be a valid email address including a @";
    const notMatchingError = "This field must match the provided email address";

    function checkEmailElHasError() {
        if (emailEl.value.trim() === "") {
            renderError(emailEl, emptyError);
            return true;
        } else if (!emailEl.value.includes("@")) {
            renderError(emailEl, noSpecialCharacterError);
            return true
        }
        return false
    }

    function checkConfirmElHasError() {
        if (confirmEl.value !== emailEl.value) {
            renderError(confirmEl, notMatchingError);
            return true
        }
        return false
    }

    function renderError(element, message) {
        element.classList.add("hasError")
        const errorEl = element.closest(".interaction-block").querySelector(".error-text");
        if (message) {
            errorEl.innerHTML = `${message}`;
        } else {
            errorEl.innerHTML = "";
        }
    }

    function resetState(element) {
        renderError(element)
        if (element.classList.contains("hasError")) {
            element.classList.remove("hasError");
        }
    }

})();