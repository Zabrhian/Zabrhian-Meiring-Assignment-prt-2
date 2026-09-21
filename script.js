// Tkayys Photography - Website JavaScript

document.addEventListener("DOMContentLoaded", function () {

    const forms = document.querySelectorAll("form");

    forms.forEach(function (form) {

        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.getElementById("name");
            const email = document.getElementById("email");
            const message = document.getElementById("message");

            if (!name || !email || !message) {
                return;
            }

            if (
                name.value.trim() === "" ||
                email.value.trim() === "" ||
                message.value.trim() === ""
            ) {
                alert("Please complete all fields before sending your enquiry.");
                return;
            }

            alert("Thank you, " + name.value.trim() + "! Your enquiry has been received.");

            form.reset();
        });

    });

});