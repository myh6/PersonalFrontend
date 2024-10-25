"use strict";
(function() {
    const docEL = document.querySelector('body');

    docEL.addEventListener('click', (e) => {
        console.log(docEL);
    });
})();