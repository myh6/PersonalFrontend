"user restrict";
(function() {
    const button = document.querySelector(".menu-button");
    const menu = document.querySelector(".dropdown-menu");

    button.addEventListener("click", function() {
        console.log("Button pressed");
        menu.classList.toggle("visible")
    });
})();