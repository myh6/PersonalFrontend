"user strict";
(function() {
    const formEl = document.querySelector("form");
    const nameEl = document.querySelector(".name-input");
    const nameErrorEl = nameEl.closest(".form-section").querySelector(".error__text");
    const nameErrorMessage = "Name is required";

    formEl.addEventListener('submit', (e) => {
        let hasError = false;

        if (nameEl.value.trim() === "") {
            setError(nameErrorEl,nameErrorMessage);
            hasError = true;
        }

        if (hasError) {
            e.preventDefault();
        }
        
    });

    formEl.addEventListener('input', (e) => {
        if (e.target.matches('.name-input')) {
            if (e.target.value.trim() === '') {
                setError(nameErrorEl,nameErrorMessage);
            } else {
                nameErrorEl.innerHTML = '';
            }
        }
    });

    function setError(element, message) {
        if (message) {
            element.innerHTML = `<div>${message}</div>`;
        } else {
            element.innerHTML = "";
        }
    }

})();