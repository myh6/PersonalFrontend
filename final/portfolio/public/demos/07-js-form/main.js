"user strict";
(function() {
    const formEl = document.querySelector("form");

    const nameEl = document.querySelector(".name-input");
    const nameErrorMessage = "Name is required";

    const requiredEmailMessage = "Email is required";
    const emailEl = document.querySelector(".email-input");

    const confirmEmailEl = document.querySelector(".confirm-email-input");
    
    formEl.addEventListener('submit', (e) => {
        let hasError = false;
        
        if (nameEl.value.trim() === "") {
            setError(nameEl,nameErrorMessage);
            hasError = true;
        }
        
        if (emailEl.value.trim() === "") {
            setError(emailEl,requiredEmailMessage);
            hasError = true;
        }

        if (confirmEmailEl.value.trim() === "") {
            setError(confirmEmailEl,requiredEmailMessage);
            hasError = true;
        }

        if (emailEl.value !== confirmEmailEl.value) {
            setError(confirmEmailEl,"Email addresses do not match. Please ensure both entries are the same.");
            hasError = true;
        }

        if (hasError) {
            e.preventDefault();
        }        
    });

    formEl.addEventListener('input', (e) => {
        if (e.target.matches('.name-input')) {
            if (e.target.value.trim() === '') {
                setError(nameEl,nameErrorMessage);
            } else {
                setError(nameEl);
            }
        }

        if (e.target.matches(".email-input")) {
            if (e.target.value.trim() === "") {
                setError(emailEl,"Email is required");
            } else {
                setError(emailEl);
            }
        }

        if (e.target.matches(".confirm-email-input")) {
            if (e.target.value.trim() === "") {
                setError(confirmEmailEl,"Email is required");
            } else {
                setError(confirmEmailEl);
            }
        }
    });

    function setError(element, message) {
        const errorEl = element.closest(".form-section").querySelector(".error__text");
        if (message) {
            errorEl.innerHTML = `<div>${message}</div>`;
        } else {
            errorEl.innerHTML = "";
        }
    }

})();