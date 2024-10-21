"user strict";
(function() {
    const formEl = document.querySelector("form");

    const nameEl = document.querySelector(".name-input");
    const nameErrorMessage = "Name is required";

    const emailEl = document.querySelector(".email-input");
    
    formEl.addEventListener('submit', (e) => {
        console.log("Form submit was triggered");
        let hasError = false;
        
        if (nameEl.value.trim() === "") {
            setError(nameEl,nameErrorMessage);
            hasError = true;
        }
        
        if (emailEl.value.trim() === "") {
            setError(emailEl,"Email is required");
            hasError = true
        }

        if (hasError) {
            e.preventDefault();
            console.log("Form submit was being prevented");
        }
        
    });

    formEl.addEventListener('input', (e) => {
        if (e.target.matches('.name-input')) {
            if (e.target.value.trim() === '') {
                setError(nameEl,nameErrorMessage);
            } else {
                setError(nameEl)
            }
        }

        if (e.target.matches(".email-input")) {
            if (e.target.value.trim() === "") {
                setError(emailEl,"Email is required");
            } else {
                setError(emailEl);
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